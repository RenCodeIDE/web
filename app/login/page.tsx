"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { api } from "@/lib/api";
import { getErrorMessage } from "@/lib/helpers";
import { Button } from "@/components/ui/button";
import { AuthCard } from "@/components/auth-card";
import { AuthFormField } from "@/components/auth-form-field";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login, updateUser } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchParams.get("verified") === "true") {
      toast.success("Email verified! Please log in to continue.");
    }
  }, [searchParams]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    try {
      await login(data.email, data.password);
      toast.success("Logged in successfully!");
      
      // Check if user came from waitlist flow
      const joinWaitlist = searchParams.get("joinWaitlist");
      if (joinWaitlist === "true") {
        try {
          const response = await api.joinWaitlist();
          toast.success(response.message);
          // Update user state with waitlist status
          updateUser(response.user);
        } catch (error) {
          // If joining waitlist fails, still redirect to dashboard
          console.error("Failed to join waitlist:", error);
        }
      }
      
      router.push("/dashboard");
    } catch (error) {
      const errorMessage = getErrorMessage(error, "Failed to login");

      // Check if it's a verification error
      if (
        errorMessage.includes("not verified") ||
        errorMessage.includes("verify")
      ) {
        toast.error(errorMessage);
        const joinWaitlist = searchParams.get("joinWaitlist");
        const verifyUrl = `/verify?email=${encodeURIComponent(data.email)}${joinWaitlist ? "&joinWaitlist=true" : ""}`;
        router.push(verifyUrl);
      } else {
        toast.error(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Log in"
      description="Enter your credentials to access your account"
      footer={
        <>
          <Button
            type="submit"
            className="w-full"
            disabled={loading}
            form="login-form"
          >
            {loading ? "Logging in..." : "Log in"}
          </Button>
          <p className="text-sm text-center text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </>
      }
    >
      <form
        id="login-form"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <AuthFormField
          id="email"
          label="Email"
          type="email"
          placeholder="john@example.com"
          register={register}
          error={errors.email}
          autoComplete="email"
        />
        <AuthFormField
          id="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          register={register}
          error={errors.password}
          autoComplete="current-password"
        />
      </form>
    </AuthCard>
  );
}
