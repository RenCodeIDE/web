import { API_URL } from "./config";
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

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    // Only set Content-Type if there's a body
    const hasBody = options.body !== undefined;
    const headers = new Headers(options.headers);

    if (hasBody) {
      headers.set("Content-Type", "application/json");
    }

    const config: RequestInit = {
      ...options,
      headers,
      credentials: "include", // Include cookies for auth
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
    return this.request<SignupResponse>("/users", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async verify(data: VerifyRequest): Promise<VerifyResponse> {
    return this.request<VerifyResponse>("/users/verify", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async login(data: LoginRequest): Promise<LoginResponse> {
    return this.request<LoginResponse>("/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async getCurrentUser(): Promise<User> {
    // Note: 401 is expected when not logged in - will be handled by caller
    return this.request<User>("/users/me", {
      method: "GET",
    });
  }

  async logout(): Promise<void> {
    // Call backend to clear the JWT cookie
    return this.request<void>("/logout", {
      method: "POST",
    });
  }

  async joinWaitlist(): Promise<{ message: string; user: User }> {
    return this.request<{ message: string; user: User }>("/users/me/waitlist", {
      method: "POST",
    });
  }
}

export const api = new ApiClient(API_URL);
