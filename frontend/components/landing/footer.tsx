import { Logo } from "@/components/logo";

const footerLinks = [
  { label: "Product", href: "#features" },
  { label: "Documentation", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/50 px-6 py-12 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 sm:items-start">
        <Logo height={36} />

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 sm:justify-start">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex w-full flex-col items-center gap-2 border-t border-border/50 pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Built for AI-first developers.
          </p>
          <p className="text-sm text-muted-foreground">© 2026 VibeSec</p>
        </div>
      </div>
    </footer>
  );
}
