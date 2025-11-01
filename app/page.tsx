import { RenHeader } from "@/components/github-header"
import { HeroSection } from "@/components/hero-section"
import { CopilotMockup } from "@/components/copilot-mockup"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <RenHeader />
      <HeroSection />
      <CopilotMockup />
      <Footer />
    </div>
  )
}
