# Build stage
FROM node:lts-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Runtime stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Dòng mới được thêm vào để nạp cấu hình Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80