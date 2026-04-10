FROM node:lts-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:lts-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=8788
COPY --from=build /app/dist ./dist
EXPOSE 8788
CMD ["node", "./dist/server/entry.mjs"]