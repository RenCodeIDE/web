// User types matching backend (dates come as strings from JSON API)
export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string | null;
  updatedAt: string;
  waitlist: boolean;
}

// Request types
export interface SignupRequest {
  name: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface VerifyRequest {
  email: string;
  otp: string;
}

// Response types
export interface SignupResponse extends User {
  message?: string;
}

export interface VerifyResponse {
  message: string;
  user: User;
}

export interface LoginResponse {
  message: string;
  user: User;
}

// Error types
export interface ApiError {
  error: string;
  message?: string;
  details?: Array<{
    field: string;
    message: string;
  }>;
}
