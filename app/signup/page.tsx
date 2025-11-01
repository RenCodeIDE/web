"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import Link from "next/link";
import { api } from "@/lib/api";
import { getErrorMessage } from "@/lib/helpers";
import { Button } from "@/components/ui/button";
import { AuthCard } from "@/components/auth-card";
import { AuthFormField } from "@/components/auth-form-field";

const signupSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    setLoading(true);
    try {
      await api.signup(data);
      toast.success(
        "Account created! Check your email for the verification code."
      );
      const joinWaitlist = searchParams.get("joinWaitlist");
      const verifyUrl = `/verify?email=${encodeURIComponent(data.email)}${joinWaitlist ? "&joinWaitlist=true" : ""}`;
      router.push(verifyUrl);
    } catch (error) {
      toast.error(getErrorMessage(error, "Failed to create account"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Create an account"
      description="Enter your information to get started with Ren IDE"
      footer={
        <>
          <Button
            type="submit"
            className="w-full"
            disabled={loading}
            form="signup-form"
          >
            {loading ? "Creating account..." : "Create account"}
          </Button>
          <p className="text-sm text-center text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </p>
        </>
      }
    >
      <form
        id="signup-form"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <AuthFormField
          id="name"
          label="Name"
          placeholder="John Doe"
          register={register}
          error={errors.name}
        />
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
          autoComplete="new-password"
        />
      </form>
    </AuthCard>
  );
}
