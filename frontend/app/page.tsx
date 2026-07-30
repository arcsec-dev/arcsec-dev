import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Navbar } from "@/components/landing/navbar";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
