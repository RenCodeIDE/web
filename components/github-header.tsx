"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function RenHeader() {
  const { user, logout, loading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <header className="border-b border-border/40 bg-background backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/code.png"
              alt="Ren IDE"
              width={32}
              height={32}
              className="h-8 w-8"
              style={{
                background: "transparent",
                imageRendering: "crisp-edges",
              }}
            />
            <span className="text-xl font-semibold text-foreground">
              Ren IDE
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            {loading ? (
              <div className="h-10 w-20" />
            ) : user ? (
              <>
                <Link href="/dashboard">
                  <Button variant="ghost" size="lg">
                    Dashboard
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleLogout}
                  className="bg-foreground text-background hover:bg-foreground/90 font-semibold dark:!bg-foreground dark:!text-background dark:hover:!bg-foreground/90"
                >
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="lg">
                    Log in
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="bg-foreground text-background hover:bg-foreground/90 font-semibold"
                  >
                    Sign up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
