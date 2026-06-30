import { ProductPreview } from "@/components/landing/product-preview";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 sm:pb-28 sm:pt-24 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,211,238,0.12),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
            Every AI-Built Application Deserves an AI Security Engineer
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Detect vulnerabilities, understand security risks, and automatically
            generate secure fixes before deployment.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" type="button">
              Scan Project
            </Button>
            <Button size="lg" variant="secondary" type="button">
              View Demo
            </Button>
          </div>
        </div>

        <div className="lg:justify-self-end">
          <ProductPreview />
        </div>
      </div>
    </section>
  );
}
