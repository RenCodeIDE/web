import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[800px] w-[800px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-emerald-600/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-sm font-medium text-foreground backdrop-blur-sm">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Introducing Ren IDE
          </div>

          <h1 className="mb-6 text-6xl font-bold leading-[1.1] tracking-tight text-foreground lg:text-8xl">
            Build Fast.
            <br />
            Stay Aligned.
          </h1>

          <p className="mb-10 max-w-2xl text-xl leading-relaxed text-muted-foreground/90 lg:text-2xl">
            The AI-powered IDE that keeps your team in sync. Write code faster, maintain consistency, and ship with
            confidence.
          </p>

          <Button
            size="lg"
            className="h-14 px-8 text-base font-semibold bg-foreground text-background hover:bg-foreground/90 hover:scale-105 transition-all shadow-lg hover:shadow-xl"
          >
            Join the waitlist →
          </Button>
        </div>
      </div>
    </section>
  )
}
