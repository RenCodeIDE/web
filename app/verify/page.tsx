"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { api } from "@/lib/api";
import { getErrorMessage, formatTime } from "@/lib/helpers";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AuthCard } from "@/components/auth-card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/otp-input";

function VerifyForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    if (!email) {
      toast.error("Email is required");
      router.push("/signup");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [email, router]);

  const handleVerify = async () => {
    if (otp.length !== 6) {
      toast.error("Please enter the complete 6-digit code");
      return;
    }

    setLoading(true);
    try {
      await api.verify({ email, otp });
      toast.success("Email verified successfully! You can now log in.");
      const joinWaitlist = searchParams.get("joinWaitlist");
      const loginUrl = `/login?verified=true${joinWaitlist ? "&joinWaitlist=true" : ""}`;
      router.push(loginUrl);
    } catch (error) {
      toast.error(getErrorMessage(error, "Failed to verify code"));
    } finally {
      setLoading(false);
    }
  };

  const handleResend = () => {
    toast.info("Sending new verification code...");
    const joinWaitlist = searchParams.get("joinWaitlist");
    const signupUrl = `/signup?email=${encodeURIComponent(email)}${joinWaitlist ? "&joinWaitlist=true" : ""}`;
    router.push(signupUrl);
  };

  if (!email) {
    return null;
  }

  return (
    <AuthCard
      title="Verify your email"
      description={
        <>
          We sent a verification code to <strong>{email}</strong>
        </>
      }
      footer={
        <>
          <Button
            onClick={handleVerify}
            className="w-full"
            disabled={loading || otp.length !== 6 || timeLeft === 0}
          >
            {loading ? "Verifying..." : "Verify"}
          </Button>

          <div className="flex flex-col gap-2 text-center text-sm">
            <Button
              variant="ghost"
              onClick={handleResend}
              className="text-primary hover:underline"
              disabled={timeLeft > 0}
            >
              {timeLeft > 0
                ? `Resend code (${formatTime(timeLeft)})`
                : "Resend code"}
            </Button>

            <p className="text-muted-foreground">
              Didn't receive the code?{" "}
              <Link href="/signup" className="text-primary hover:underline">
                Sign up again
              </Link>
            </p>
          </div>
        </>
      }
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <Label>Enter verification code</Label>
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={(value) => setOtp(value)}
            onComplete={handleVerify}
          >
            <InputOTPGroup>
              {Array.from({ length: 6 }).map((_, i) => (
                <InputOTPSlot key={i} index={i} />
              ))}
            </InputOTPGroup>
          </InputOTP>
          <p className="text-xs text-muted-foreground text-center mt-2">
            Code expires in: {formatTime(timeLeft)}
          </p>
        </div>

        {timeLeft === 0 && (
          <div className="text-sm text-destructive text-center">
            Code has expired. Please request a new one.
          </div>
        )}
      </div>
    </AuthCard>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={
      <AuthCard
        title="Verify your email"
        description="Enter the verification code sent to your email"
      >
        <div className="space-y-6">
          <div className="h-12 w-full animate-pulse bg-muted rounded" />
        </div>
      </AuthCard>
    }>
      <VerifyForm />
    </Suspense>
  );
}
