import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { changelogData } from "@/lib/changelog-data";

export function ChangelogSection() {
  return (
    <section className="relative overflow-hidden border-y border-border/50 bg-background pt-16 pb-12">
      <div className="container relative z-10 mx-auto px-6 pb-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-1.5 text-sm backdrop-blur-sm">
            <Calendar className="h-3.5 w-3.5" />
            <span className="font-medium">Product Updates</span>
          </div>
          <h2 className="mb-4 font-mono text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Changelog
          </h2>
          <p className="text-balance text-lg text-muted-foreground">
            Track our progress as we build the future of collaborative
            development
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-primary/50 via-primary/20 to-primary/10 md:left-1/2" />

            {changelogData.map((update, index) => {
              // Only show first 3 items in the section preview if there are many
              if (index > 2) return null;

              const Icon = update.icon;
              return (
                <div
                  key={update.version}
                  className="relative grid gap-8 md:grid-cols-2 md:gap-16"
                >
                  {/* Left side (date on desktop) */}
                  <div
                    className={`hidden md:block ${
                      index % 2 === 0 ? "md:order-2" : "md:text-right"
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background px-3 py-1 text-sm font-mono backdrop-blur-sm">
                        <Calendar className="h-3 w-3" />
                        {update.date}
                      </div>
                      <div className="text-2xl font-bold font-mono text-primary">
                        {update.version}
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-8 top-0 flex h-16 w-16 items-center justify-center md:left-1/2 md:-ml-8">
                    <div
                      className={`group flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-primary/10 ring-2 ring-primary/30 backdrop-blur-sm transition-all duration-500 hover:scale-125 hover:bg-primary hover:ring-primary hover:shadow-2xl hover:shadow-primary/60 cursor-pointer ${
                        update.isComingSoon
                          ? "ring-amber-500/30 bg-amber-500/10 hover:bg-amber-500 hover:ring-amber-500 hover:shadow-amber-500/60"
                          : ""
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 transition-all duration-500 group-hover:scale-110 group-hover:text-primary-foreground ${
                          update.isComingSoon
                            ? "text-amber-500"
                            : "text-primary"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Right side (content) */}
                  <div
                    className={`ml-24 md:ml-0 ${
                      index % 2 === 0 ? "" : "md:order-2"
                    }`}
                  >
                    <div
                      className={`rounded-lg border border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-all duration-300 hover:shadow-lg ${
                        update.isComingSoon
                          ? "hover:border-amber-500/50 hover:shadow-amber-500/5"
                          : "hover:border-primary/50 hover:shadow-primary/5"
                      }`}
                    >
                      {/* Mobile date */}
                      <div className="mb-3 flex items-center justify-between md:hidden">
                        <div className="text-base font-bold font-mono text-primary">
                          {update.version}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {update.date}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-1.5">
                        <h3 className="text-lg font-bold text-foreground">
                          {update.title}
                        </h3>
                        {update.isComingSoon && (
                          <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-500">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {update.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="relative flex items-center justify-center pt-8">
              <div className="ml-24 md:ml-0">
                <Link
                  href="/changelog"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 font-medium text-foreground transition-all hover:border-primary hover:bg-primary/5 hover:text-primary hover:shadow-lg"
                >
                  View Full Changelog
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
