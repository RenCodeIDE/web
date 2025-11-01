"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { api } from "@/lib/api";
import { getErrorMessage } from "@/lib/helpers";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function HeroSection() {
  const { user, updateUser, loading: authLoading } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleWaitlistClick = async () => {
    // If user is not logged in, redirect to signup
    if (!user) {
      router.push("/signup?joinWaitlist=true");
      return;
    }

    // If user is already on waitlist, show message
    if (user.waitlist) {
      toast.info("You're already on the waitlist!");
      return;
    }

    // User is logged in but not on waitlist - join them
    setLoading(true);
    try {
      const response = await api.joinWaitlist();
      toast.success(response.message);
      updateUser(response.user);
    } catch (error) {
      toast.error(getErrorMessage(error, "Failed to join waitlist"));
    } finally {
      setLoading(false);
    }
  };

  const getButtonText = () => {
    if (authLoading) return "Loading...";
    if (user?.waitlist) return "✓ You're on the waitlist!";
    if (user) return "Join the waitlist →";
    return "Join the waitlist →";
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[800px] w-[800px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-emerald-600/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-sm font-medium text-foreground backdrop-blur-sm">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Introducing Ren IDE
          </div>

          <h1 className="mb-4 text-5xl font-bold leading-[1.1] tracking-tight text-foreground lg:text-7xl">
            Build Fast.
            <br />
            Stay Aligned.
          </h1>

          <p className="mb-4 max-w-2xl text-lg leading-relaxed text-muted-foreground/90 lg:text-xl">
            The AI-powered IDE that keeps your team in sync. Write code faster,
            maintain consistency, and ship with confidence.
          </p>

          <Button
            size="lg"
            onClick={handleWaitlistClick}
            disabled={loading || authLoading || user?.waitlist}
            className={`h-14 px-8 text-base font-semibold transition-all shadow-lg hover:shadow-xl ${
              user?.waitlist
                ? "bg-primary text-primary-foreground hover:bg-primary/90 cursor-default"
                : "bg-foreground text-background hover:bg-foreground/90 hover:scale-105"
            }`}
          >
            {loading ? "Joining..." : getButtonText()}
          </Button>
        </div>
      </div>
    </section>
  );
}
