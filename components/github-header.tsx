import { Button } from "@/components/ui/button"

export function RenHeader() {
  return (
    <header className="border-b border-border/40 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
              <span className="text-lg font-bold text-background">R</span>
            </div>
            <span className="text-xl font-semibold text-foreground">Ren IDE</span>
          </div>

          <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 font-semibold">
            Join the waitlist
          </Button>
        </div>
      </div>
    </header>
  )
}
