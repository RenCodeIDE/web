"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const universities = [
  {
    name: "Stanford",
    logo: "/unis/stanford.png",
    width: 280,
    height: 70,
  },
  {
    name: "UIUC",
    logo: "/unis/uiuc.png",
    width: 200,
    height: 70,
  },
  {
    name: "UNC",
    logo: "/unis/unc.png",
    width: 180,
    height: 70,
  },
  {
    name: "Duke",
    logo: "/unis/duke.png",
    width: 200,
    height: 70,
  },
  {
    name: "Berkeley",
    logo: "/unis/berkeley.png",
    width: 200,
    height: 70,
  },
  {
    name: "Georgia Tech",
    logo: "/unis/gat.png",
    width: 240,
    height: 70,
  },
];

export function TrustSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scroll = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative overflow-hidden border-y border-border/50 bg-background/50 py-16 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by developers at
        </p>

        <div
          ref={scrollRef}
          className="flex items-center gap-20 overflow-hidden"
          style={{ scrollBehavior: "auto" }}
        >
          {/* Duplicate the list for seamless loop */}
          {[...universities, ...universities].map((uni, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex flex-col items-center justify-center opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 gap-3"
              style={{ minWidth: `${uni.width}px` }}
            >
              <Image
                src={uni.logo}
                alt={uni.name}
                width={uni.width}
                height={uni.height}
                className="h-auto w-auto max-h-[80px] object-contain"
                style={{ backgroundColor: "transparent" }}
                unoptimized
                onError={(e) => {
                  // Fallback to text if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-xl font-semibold text-foreground/60">${uni.name}</span>`;
                  }
                }}
              />
              <p className="text-sm font-medium text-muted-foreground">
                {uni.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
