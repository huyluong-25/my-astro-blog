import postgres from 'postgres';

// Đọc biến môi trường (Ưu tiên Docker process.env, sau đó mới tới local import.meta.env)
const connectionString = process.env.DATABASE_URL || import.meta.env.DATABASE_URL;

// TẠO BIẾN hasDatabaseUrl ĐỂ FIX LỖI BUILD
// Biến này sẽ mang giá trị true nếu có chuỗi kết nối, và false nếu bị trống
export const hasDatabaseUrl = Boolean(connectionString);

// Chỉ khởi tạo kết nối SQL nếu thực sự có connectionString để tránh sập server
const sql = hasDatabaseUrl ? postgres(connectionString) : null;

export default sql;