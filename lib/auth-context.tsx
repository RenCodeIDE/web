"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "./api";
import type { User } from "./types";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
  updateUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      // Try to get current user - if endpoint doesn't exist, user stays null
      const currentUser = await api.getCurrentUser();
      setUser(currentUser);
    } catch (error: any) {
      // User is not authenticated - this is expected when not logged in
      // Silently set user to null
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    const response = await api.login({ email, password });
    setUser(response.user);
  };

  const logout = async () => {
    try {
      await api.logout();
    } catch (error) {
      // Even if logout fails (e.g., endpoint doesn't exist), clear local state
      console.error("Logout error:", error);
    } finally {
      // Always clear user state regardless of API call success
      setUser(null);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const updateUser = (updatedUser: User) => {
    setUser(updatedUser);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, logout, checkAuth, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
