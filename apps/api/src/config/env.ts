export const ENV = {
 PORT: Number(process.env.API_PORT || 3001),
 NODE_ENV: process.env.NODE_ENV || "development",
 CORS_ORIGIN: process.env.CORS_ORIGIN || "http://localhost:5173"
};
