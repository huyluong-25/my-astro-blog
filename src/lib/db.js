import postgres from 'postgres';

// Lấy chuỗi kết nối từ file .env
// Nếu chưa có file .env ở thư mục gốc, hãy tạo một cái và dán dòng này vào:
// DATABASE_URL="postgres://huyhandsome:mysecretpassword@localhost:5432/astro_blog_db"

const connectionString = import.meta.env.DATABASE_URL?.toString().trim();

// Khởi tạo kết nối khi đã có chuỗi kết nối
const sql = connectionString ? postgres(connectionString) : null;

export function hasDatabaseUrl() {
  return Boolean(connectionString);
}

export default sql;