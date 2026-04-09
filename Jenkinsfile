pipeline {
    agent any

    environment {
        IMAGE_NAME = 'astro-blog-image'
        CONTAINER_NAME = 'astro-blog-container'
        HOST_PORT = '9000'
    }

    stages {
        stage('1. Kéo Code từ GitHub') {
            steps {
                git branch: 'main', url: 'https://github.com/huyluong-25/my-astro-blog.git'
            }
        }

        stage('2. Build Docker Image') {
            steps {
                sh '''
                    set -e

                    APP_DIR="."
                    if [ -f "package.json" ]; then
                      APP_DIR="."
                    elif [ -f "mechanical-main/package.json" ]; then
                      APP_DIR="mechanical-main"
                    else
                      echo "Khong tim thay package.json"
                      ls -la
                      exit 1
                    fi

                    docker build \
                      --pull \
                      -t "$IMAGE_NAME:$BUILD_NUMBER" \
                      -t "$IMAGE_NAME:latest" \
                      "$APP_DIR"
                '''
            }
        }

        stage('3. Deploy tren Port 9000') {
            steps {
                sh '''
                    set -e
                    docker stop "$CONTAINER_NAME" || true
                    docker rm "$CONTAINER_NAME" || true

                    docker run -d \
                      --name "$CONTAINER_NAME" \
                      -p "$HOST_PORT:80" \
                      --restart unless-stopped \
                      "$IMAGE_NAME:$BUILD_NUMBER"
                '''
            }
        }

        stage('4. Smoke Test') {
            steps {
                sh '''
                    set -e
                    sleep 3
                    docker inspect -f '{{.State.Running}}' "$CONTAINER_NAME" | grep -q true
                    docker exec "$CONTAINER_NAME" wget -q -O /dev/null http://127.0.0.1/
                    curl -fsS "http://127.0.0.1:$HOST_PORT/" > /dev/null || true
                '''
            }
        }
    }

    post {
        success {
            echo 'Deploy thanh cong (static VPS mode).'
        }
        failure {
            echo 'Deploy that bai. Kiem tra log build/deploy/smoke test.'
            sh 'docker ps -a --filter name="$CONTAINER_NAME" || true'
            sh 'docker logs --tail 200 "$CONTAINER_NAME" || true'
        }
    }
}
