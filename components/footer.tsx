import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/code.png"
              alt="Ren IDE"
              width={32}
              height={32}
              className="h-8 w-8"
              style={{ 
                background: "transparent",
                imageRendering: "crisp-edges"
              }}
            />
            <span className="text-xl font-semibold text-foreground">Ren IDE</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Ren IDE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

