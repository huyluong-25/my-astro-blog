# Build stage
FROM node:lts-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Runtime stage (Dùng Nginx cho nhẹ)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80