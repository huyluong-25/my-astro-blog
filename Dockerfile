# --- BƯỚC 1: BUILD STAGE ---
FROM node:lts-alpine AS build
WORKDIR /app

# Cài đặt toàn bộ thư viện để build
COPY package*.json ./
RUN npm install

# Copy source code và build
COPY . .
RUN npm run build


# --- BƯỚC 2: RUNTIME STAGE (Môi trường chạy thật) ---
FROM node:lts-alpine AS runtime
WORKDIR /app

# Thiết lập biến môi trường chuẩn của Node.js
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=8788

# Bắt buộc: Copy package.json và cài đặt thư viện lõi (bỏ qua dev tool)
COPY package*.json ./
RUN npm install --omit=dev

# Copy code đã build thành công từ Bước 1 sang
COPY --from=build /app/dist ./dist

# Mở cửa số 8788
EXPOSE 8788

# Lệnh khởi động Web Server
CMD ["node", "./dist/server/entry.mjs"]