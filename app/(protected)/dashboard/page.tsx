"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { api } from "@/lib/api";
import { getErrorMessage } from "@/lib/helpers";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { RenHeader } from "@/components/github-header";
import { UsageHeatmap } from "@/components/usage-heatmap";

export default function DashboardPage() {
  const { user, updateUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [usageLoading, setUsageLoading] = useState(false);
  const [usageError, setUsageError] = useState<string | null>(null);
  const [usageDays, setUsageDays] = useState<Array<{ date: string; totalTokens: number }>>([]);

  useEffect(() => {
    let mounted = true;
    const fetchUsage = async () => {
      if (!user) return;
      setUsageLoading(true);
      setUsageError(null);
      try {
        // last 365 days by default
        const res = await api.getDailyUsage();
        if (!mounted) return;
        setUsageDays(res.days || []);
      } catch (err) {
        if (!mounted) return;
        setUsageError(getErrorMessage(err, "Failed to load usage"));
      } finally {
        if (mounted) setUsageLoading(false);
      }
    };
    fetchUsage();
    return () => {
      mounted = false;
    };
  }, [user]);

  const handleJoinWaitlist = async () => {
    if (!user) return;

    setLoading(true);
    try {
      const response = await api.joinWaitlist();
      toast.success(response.message);
      // Update user state directly from response
      updateUser(response.user);
    } catch (error) {
      toast.error(getErrorMessage(error, "Failed to join waitlist"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <RenHeader />
      <div className="p-6">
        <div className="container mx-auto max-w-4xl space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Welcome to Ren IDE</CardTitle>
            <CardDescription>Your dashboard</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {user && (
              <div className="space-y-2">
                <p className="text-lg">
                  <strong>Name:</strong> {user.name}
                </p>
                <p className="text-lg">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Account created:</strong>{" "}
                  {user.createdAt
                    ? new Date(user.createdAt).toLocaleDateString()
                    : "Not verified"}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {user && (
          <Card>
            <CardHeader>
              <CardTitle>Token usage (last 12 months)</CardTitle>
              <CardDescription>
                Hover a day to see total used tokens for that date
              </CardDescription>
            </CardHeader>
            <CardContent>
              {usageLoading ? (
                <div className="text-sm text-muted-foreground">Loading usage…</div>
              ) : usageError ? (
                <div className="text-sm text-destructive">{usageError}</div>
              ) : (
                <UsageHeatmap days={usageDays} />
              )}
            </CardContent>
          </Card>
        )}

        {user && (
          <Card>
            <CardHeader>
              <CardTitle>Early Access</CardTitle>
              <CardDescription>
                Get early access to Ren IDE features
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {user.waitlist ? (
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-primary">
                    🎉 Congratulations! You have signed up to get early access to Ren.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We'll notify you when new features are available.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Join our waitlist to be among the first to access new Ren IDE features and updates.
                  </p>
                  <Button
                    onClick={handleJoinWaitlist}
                    disabled={loading}
                    className="w-full"
                  >
                    {loading ? "Signing up..." : "Sign up for early access"}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )}
        </div>
      </div>
    </div>
  );
}
