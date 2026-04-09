# Build stage
FROM node:lts-alpine as build
WORKDIR /app
ARG PUBLIC_COMMENTS_API_ORIGIN=https://mechanical-main.pages.dev
ENV PUBLIC_COMMENTS_API_ORIGIN=${PUBLIC_COMMENTS_API_ORIGIN}
COPY . .
RUN npm install
RUN npm run build

# Runtime stage
FROM nginx:alpine
ENV CF_API_ORIGIN=https://mechanical-main.pages.dev
COPY --from=build /app/dist /usr/share/nginx/html
# Render nginx.conf as template at container startup with CF_API_ORIGIN
COPY nginx.conf /etc/nginx/templates/default.conf.template
EXPOSE 80