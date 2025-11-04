"use client";

import { Activity, FileCode, Gauge, Zap } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Activity,
    title: "True Observability",
    description:
      "See exactly what your AI agent is thinking and doing in real-time with complete transparency.",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    icon: FileCode,
    title: "GraphJS",
    description:
      "Navigate your codebase as an intelligent graph, understanding relationships and dependencies instantly.",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
  },
  {
    icon: Gauge,
    title: "Performance & Logic Aware",
    description:
      "AI that understands not just syntax, but performance implications and business logic.",
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30",
  },
  {
    icon: Zap,
    title: "Reimagined Documentation",
    description:
      "Interact with docs in a completely new way - ask questions, get examples, see it in context.",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
  },
];

export function FeaturesBento() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold tracking-tight text-foreground">
            Built Different
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Features that actually change how you code, not just incremental
            improvements.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative overflow-hidden rounded-2xl border ${feature.borderColor} bg-background/50 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 inline-flex rounded-xl bg-background/80 p-3 ring-1 ring-border/50 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon
                      className={`h-6 w-6 transition-colors duration-300 ${
                        hoveredIndex === idx
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>

                {/* Animated border effect */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 ${
                    hoveredIndex === idx ? "opacity-100" : ""
                  }`}
                  style={{
                    background: `linear-gradient(90deg, transparent, ${feature.borderColor
                      .replace("border-", "")
                      .replace("/30", "")} 50%, transparent)`,
                    animation:
                      hoveredIndex === idx ? "shimmer 2s infinite" : "none",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}
