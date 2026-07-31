import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden bg-grid-dot bg-[length:28px_28px] min-h-screen flex flex-col">
      {/* Top Bar */}
      <header className="w-full h-16 flex items-center px-6 md:px-[40px] max-w-[1240px] mx-auto justify-between z-50">
        <Link href="/" className="font-display-lg text-4xl tracking-tighter text-on-background uppercase">
          ARCSEC<span className="text-red-600">.</span>
        </Link>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-grow flex items-center justify-center px-6 py-[110px]">
        <div className="relative w-full max-w-[400px]">
          {/* Structural Decoration: Technical Corners */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-signal"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-signal"></div>
          
          <SignIn
            appearance={{
              variables: {
                colorPrimary: "#780116",
                colorBackground: "#201f1f",
                colorForeground: "#e5e2e1",
                colorMutedForeground: "#e0bfbd",
                colorInput: "#353534",
                colorInputForeground: "#e5e2e1",
                colorBorder: "#584140",
                borderRadius: "4px",
                fontFamily: "Inter, sans-serif",
              },
              elements: {
                card: "bg-surface-container border border-line-mute p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(14,14,14,1)] relative overflow-hidden font-body-md w-full",
                headerTitle: "font-display-lg text-3xl uppercase tracking-tighter text-on-background text-left font-normal",
                headerSubtitle: "font-body-md text-on-surface-variant text-sm text-left mt-2",
                formButtonPrimary: "bg-ink hover:bg-signal border border-line-mute text-paper font-technical-sm font-semibold uppercase tracking-wider py-3 btn-hover-active active:scale-95 transition-all w-full cursor-pointer",
                formFieldInput: "bg-surface-container-highest border border-line-mute text-on-surface py-3 focus:outline-none focus:border-signal transition-all duration-200 rounded",
                formFieldLabel: "font-label-caps uppercase text-on-surface-variant text-xs font-bold tracking-wider mb-1",
                footerActionLink: "text-secondary hover:text-signal hover:underline transition-colors uppercase font-technical-xs font-semibold",
                dividerText: "text-line-mute font-technical-xs uppercase text-xs font-semibold",
                dividerLine: "bg-line-mute h-px",
                socialButtonsBlockButton: "border border-line-mute bg-surface-container-highest hover:bg-surface-bright text-on-surface rounded font-technical-sm text-xs py-2 uppercase tracking-wide",
                socialButtonsBlockButtonText: "text-on-surface font-semibold",
                footer: "border-t border-line-mute/30 mt-6 pt-4 text-center",
                footerActionText: "text-on-surface-variant text-xs",
                identityPreviewText: "text-on-surface font-mono text-sm",
                formFieldLabelRow: "mb-1",
                logoImage: "hidden",
                logoBox: "hidden",
              }
            }}
          />
        </div>
      </main>

      {/* Global Footer */}
      <footer className="w-full border-t border-line-mute pt-8 pb-12 mt-auto">
        <div className="max-w-[1240px] mx-auto px-6 md:px-[40px] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-technical-xs text-xs text-line-mute uppercase tracking-wider font-semibold">
            © 2026 ARCSEC. SECURE BY DEFAULT.
          </div>
          <div className="flex gap-8">
            <a className="font-technical-xs text-xs text-on-surface-variant hover:text-on-surface transition-colors uppercase" href="#">
              Workspace
            </a>
            <a className="font-technical-xs text-xs text-on-surface-variant hover:text-on-surface transition-colors uppercase" href="#">
              CWE Compliance
            </a>
            <a className="font-technical-xs text-xs text-on-surface-variant hover:text-on-surface transition-colors uppercase" href="#">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
