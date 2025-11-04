import { RenHeader } from "@/components/github-header";
import { HeroSection } from "@/components/hero-section";
import { CopilotMockup } from "@/components/copilot-mockup";
import { TrustSection } from "@/components/trust-section";
import { TeamSection } from "@/components/team-section";
import { Footer } from "@/components/footer";
import { FeaturesBento } from "@/components/features-bento";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <RenHeader />
      <HeroSection />
      <CopilotMockup />
      <TrustSection />
      <FeaturesBento />
      <TeamSection />
      <Footer />
    </div>
  );
}
