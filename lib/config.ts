// In production, use relative paths since frontend and server are on same domain
// In development, use the full dev server URL
// This function is called at request time to avoid SSR/client mismatches
export const getApiUrl = (): string => {
  // If explicitly set via environment variable, use it (highest priority)
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }

  // In production, use relative paths (same origin)
  // Check if we're on the production domain (client-side only)
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    if (hostname === "ren-ide.com" || hostname === "www.ren-ide.com") {
      return ""; // Empty string means relative paths (same origin)
    }
  }

  // Check build-time environment variables for production detection
  // This works for both SSR and client-side
  if (
    process.env.NODE_ENV === "production" &&
    !process.env.NEXT_PUBLIC_API_URL
  ) {
    // In production builds, assume same origin unless explicitly configured otherwise
    return "";
  }

  // In development, use the dev server (default Wrangler port)
  return "http://localhost:8787";
};

// For backward compatibility, export a constant that uses the function
// But ApiClient should call getApiUrl() at request time instead
export const API_URL = getApiUrl();

// Debug: Log API URL in development (not in production)
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  console.log("[API] Using API URL:", API_URL || "(relative paths)");
}
