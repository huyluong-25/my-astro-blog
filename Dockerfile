# --- Bước 1: Build Stage ---
FROM node:lts-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- Bước 2: Runtime Stage ---
FROM node:lts-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=8788

# THÊM MỚI: Copy package.json sang để biết đường cài thư viện
COPY package*.json ./
# THÊM MỚI: Cài đặt các thư viện cần thiết (bỏ qua devDependencies cho nhẹ)
RUN npm install --omit=dev

# Copy code đã build từ stage 1 sang
COPY --from=build /app/dist ./dist

EXPOSE 8788
CMD ["node", "./dist/server/entry.mjs"]