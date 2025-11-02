export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

// Debug: Log API URL in development (not in production)
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  console.log("[API] Using API URL:", API_URL);
}
