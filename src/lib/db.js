import postgres from 'postgres';

// QUAN TRỌNG: Ưu tiên đọc từ process.env (môi trường Docker lúc chạy thật)
// Nếu không có thì mới tìm trong import.meta.env (lúc code trên máy tính)
const connectionString = process.env.DATABASE_URL || import.meta.env.DATABASE_URL;

// Kiểm tra chặn lỗi nếu lỡ quên truyền biến
if (!connectionString) {
  throw new Error("DATABASE_URL is missing. Vui lòng kiểm tra lại biến môi trường!");
}

// Khởi tạo kết nối
const sql = postgres(connectionString);

export default sql;