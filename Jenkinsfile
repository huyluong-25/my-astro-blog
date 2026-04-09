pipeline {
    agent any

    environment {
        IMAGE_NAME = 'astro-blog-image'
        CONTAINER_NAME = 'astro-blog-container'
        HOST_PORT = '9000'

        // Domain Cloudflare đang chạy Functions (/api/comments)
        CF_API_ORIGIN = 'https://mechanical-main.pages.dev'

        // Build-time fallback để frontend gọi thẳng Cloudflare API nếu VPS proxy lỗi
        PUBLIC_COMMENTS_API_ORIGIN = 'https://mechanical-main.pages.dev'
    }

    stages {
        stage('0. Validate Cloudflare API Origin') {
            steps {
                sh """
                    set -e
                    STATUS_CODE=$(curl -sS -o /tmp/cf_api_probe.txt -w '%{http_code}' '${CF_API_ORIGIN}/api/comments?slug=it' || true)

                    if [ -z "$STATUS_CODE" ] || [ "$STATUS_CODE" = "000" ]; then
                        echo 'Khong ket noi duoc CF_API_ORIGIN. Kiem tra DNS/firewall/network.'
                        exit 1
                    fi

                    if [ "$STATUS_CODE" = "404" ] || [ "$STATUS_CODE" = "405" ]; then
                        echo 'CF_API_ORIGIN dang tro toi host khong co Functions /api/comments (404/405).'
                        echo 'Can deploy API Cloudflare truoc hoac doi CF_API_ORIGIN dung domain API.'
                        echo 'Response body:'
                        cat /tmp/cf_api_probe.txt || true
                        exit 1
                    fi

                    if [ "$STATUS_CODE" -ge 500 ]; then
                        echo "CF_API_ORIGIN dang loi server (HTTP $STATUS_CODE)."
                        cat /tmp/cf_api_probe.txt || true
                        exit 1
                    fi

                    echo "Cloudflare API preflight OK (HTTP $STATUS_CODE)."
                """
            }
        }

        stage('1. Kéo Code từ GitHub') {
            steps {
                git branch: 'main', url: 'https://github.com/huyluong-25/my-astro-blog.git'
            }
        }

        stage('2. Build Docker Image') {
            steps {
                sh """
                    docker build \
                      --pull \
                      --build-arg PUBLIC_COMMENTS_API_ORIGIN=${PUBLIC_COMMENTS_API_ORIGIN} \
                      -t ${IMAGE_NAME}:${BUILD_NUMBER} \
                      -t ${IMAGE_NAME}:latest \
                      .
                """
            }
        }

        stage('3. Triển khai (Deploy) trên Port 9000') {
            steps {
                script {
                    sh "docker stop ${CONTAINER_NAME} || true"
                    sh "docker rm ${CONTAINER_NAME} || true"

                    sh """
                        docker run -d \
                          --name ${CONTAINER_NAME} \
                          -p ${HOST_PORT}:80 \
                          -e CF_API_ORIGIN=${CF_API_ORIGIN} \
                          --restart unless-stopped \
                          ${IMAGE_NAME}:${BUILD_NUMBER}
                    """
                }
            }
        }

        stage('4. Smoke Test') {
            steps {
                sh "sleep 3"

                // Jenkins agent có thể không truy cập được localhost:${HOST_PORT} của Docker host.
                // Vì vậy smoke test chính được chạy trực tiếp bên trong container.
                sh "docker inspect -f '{{.State.Running}}' ${CONTAINER_NAME} | grep -q true"
                sh "docker exec ${CONTAINER_NAME} wget -q -O /dev/null http://127.0.0.1/"
                sh """
                    set -e
                    STATUS_CODE=$(docker exec ${CONTAINER_NAME} sh -c \"wget -S -O /dev/null 'http://127.0.0.1/api/comments?slug=it' 2>&1 | awk '/HTTP\\//{code=\\$2} END{print code}'\")

                    if [ \"$STATUS_CODE\" = \"404\" ] || [ \"$STATUS_CODE\" = \"405\" ]; then
                        echo 'API proxy dang tra 404/405. Kha nang cao CF_API_ORIGIN khong co /api/comments.'
                        exit 1
                    fi

                    if [ -z \"$STATUS_CODE\" ] || [ \"$STATUS_CODE\" -ge 500 ]; then
                        echo \"API proxy dang loi (HTTP $STATUS_CODE).\"
                        exit 1
                    fi

                    echo \"Container API smoke test OK (HTTP $STATUS_CODE).\"
                """

                // Kiểm tra cổng publish từ agent (best-effort, không fail pipeline nếu agent network tách biệt).
                sh "curl -fsS http://127.0.0.1:${HOST_PORT}/ > /dev/null || true"
            }
        }
    }

    post {
        success {
            echo 'Deploy thành công: app đã chạy và API comments phản hồi.'
        }
        failure {
            echo 'Deploy thất bại. Kiểm tra log build/deploy/smoke test.'
            sh "docker ps -a --filter name=${CONTAINER_NAME} || true"
            sh "docker logs --tail 200 ${CONTAINER_NAME} || true"
        }
    }
}
