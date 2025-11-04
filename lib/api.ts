import { API_URL, getApiUrl } from "./config";
import type {
  SignupRequest,
  LoginRequest,
  VerifyRequest,
  SignupResponse,
  LoginResponse,
  VerifyResponse,
  User,
  ApiError,
} from "./types";

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private getRequestUrl(endpoint: string): string {
    // Resolve API URL at request time to handle SSR/client differences
    // If baseUrl is provided, use it; otherwise resolve dynamically
    let apiBase = this.baseUrl || getApiUrl();

    // Normalize the base URL: remove trailing /api if present
    // (since endpoints already include /api prefix)
    if (apiBase && apiBase.endsWith("/api")) {
      apiBase = apiBase.slice(0, -4); // Remove "/api"
    }
    // Also handle trailing slash
    if (apiBase && apiBase.endsWith("/")) {
      apiBase = apiBase.slice(0, -1);
    }

    // Build URL: if apiBase is empty, use relative path; otherwise use full URL
    // Endpoints already include /api prefix (e.g., "/api/users")
    return apiBase ? `${apiBase}${endpoint}` : endpoint;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = this.getRequestUrl(endpoint);

    // Debug logging in development
    if (
      typeof window !== "undefined" &&
      process.env.NODE_ENV === "development"
    ) {
      console.log(`[API] ${options.method || "GET"} ${url}`);
    }

    // Only set Content-Type if there's a body
    const hasBody = options.body !== undefined;
    const headers = new Headers(options.headers);

    if (hasBody) {
      headers.set("Content-Type", "application/json");
    }

    const config: RequestInit = {
      ...options,
      headers,
      credentials: "include", // Include cookies for auth - required for CORS with credentials
      mode: "cors", // Explicitly set CORS mode
    };

    try {
      const response = await fetch(url, config);

      // Handle empty responses (like 204 No Content)
      const contentType = response.headers.get("content-type");
      let data: any;
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = {};
      }

      if (!response.ok) {
        const error: ApiError = data;
        const errorMessage =
          error.error ||
          error.message ||
          `Request failed with status ${response.status}`;
        const customError: Error & { status?: number } = Object.assign(
          new Error(errorMessage),
          { status: response.status }
        );
        throw customError;
      }

      return data as T;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("Network error. Please try again.");
    }
  }

  async signup(data: SignupRequest): Promise<SignupResponse> {
    return this.request<SignupResponse>("/api/users", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async verify(data: VerifyRequest): Promise<VerifyResponse> {
    return this.request<VerifyResponse>("/api/users/verify", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async login(data: LoginRequest): Promise<LoginResponse> {
    return this.request<LoginResponse>("/api/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async getCurrentUser(): Promise<User> {
    // Note: 401 is expected when not logged in - will be handled by caller
    return this.request<User>("/api/users/me", {
      method: "GET",
    });
  }

  async logout(): Promise<void> {
    // Call backend to clear the JWT cookie
    return this.request<void>("/api/logout", {
      method: "POST",
    });
  }

  async joinWaitlist(): Promise<{ message: string; user: User }> {
    return this.request<{ message: string; user: User }>(
      "/api/users/me/waitlist",
      {
        method: "POST",
      }
    );
  }
}

export const api = new ApiClient(API_URL);
