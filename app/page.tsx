import { HeroSection } from "@/components/hero-section"
import { WhyPawsly } from "@/components/why-pawsly"
import { HowItWorks } from "@/components/how-it-works"
import { AppMockup } from "@/components/app-mockup"
import { FeaturesSection } from "@/components/features-section"
import { Testimonials } from "@/components/testimonials"
import { ForWho } from "@/components/for-who"
import { PricingPlans } from "@/components/pricing-plans"
import { JoinThePack } from "@/components/join-the-pack"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyPawsly />
      <HowItWorks />
      <AppMockup />
      <FeaturesSection />
      <Testimonials />
      <ForWho />
      <PricingPlans />
      <JoinThePack />
      <Footer />
      <CookieBanner />
    </main>
  )
}
