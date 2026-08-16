<!-- ArcSec | Find. Fix. Ship. (New Palette) -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>ARCSEC. | AI-BUILDER SECURITY</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&amp;family=Bebas+Neue&amp;family=Inter:wght@400;500;700&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue:wght@100..900&amp;family=Inter:wght@100..900&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-container-highest": "#353534",
                    "line-mute": "#584140",
                    "on-tertiary-fixed-variant": "#194972",
                    "surface": "#131313",
                    "on-primary-fixed-variant": "#8c1522",
                    "ink": "#0e0e0e",
                    "background": "#131313",
                    "inverse-on-surface": "#313030",
                    "on-primary-fixed": "#410007",
                    "on-background": "#e5e2e1",
                    "on-error-container": "#ffdad6",
                    "primary-fixed": "#ffdad8",
                    "on-tertiary": "#003256",
                    "tertiary": "#a0cafa",
                    "on-primary": "#680011",
                    "surface-tint": "#ffb3b1",
                    "grid-dot": "#393939",
                    "paper": "#e5e2e1",
                    "on-primary-container": "#ff797a",
                    "secondary-fixed": "#ffdeac",
                    "surface-container": "#201f1f",
                    "on-surface": "#e5e2e1",
                    "primary-container": "#780116",
                    "surface-container-lowest": "#0e0e0e",
                    "inverse-surface": "#e5e2e1",
                    "secondary-fixed-dim": "#fdbb3d",
                    "signal": "#780116",
                    "on-secondary-container": "#402a00",
                    "on-secondary-fixed-variant": "#5f4100",
                    "tertiary-fixed-dim": "#a0cafa",
                    "outline": "#a78a89",
                    "on-tertiary-container": "#7ca6d4",
                    "outline-variant": "#584140",
                    "error": "#ffb4ab",
                    "on-secondary": "#432c00",
                    "primary": "#ffb3b1",
                    "on-surface-variant": "#e0bfbd",
                    "primary-fixed-dim": "#ffb3b1",
                    "surface-container-low": "#1c1b1b",
                    "surface-variant": "#353534",
                    "error-container": "#93000a",
                    "tertiary-fixed": "#d0e4ff",
                    "on-tertiary-fixed": "#001d34",
                    "tertiary-container": "#003b63",
                    "gold": "#f7b538",
                    "surface-bright": "#393939",
                    "secondary": "#fdbb3d",
                    "surface-container-high": "#2a2a2a",
                    "on-secondary-fixed": "#281900",
                    "on-error": "#690005",
                    "inverse-primary": "#ae2f37",
                    "surface-dim": "#131313",
                    "secondary-container": "#c68b00"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "section-v": "110px",
                    "unit": "8px",
                    "container-max": "1240px",
                    "gutter": "24px",
                    "margin-safe": "40px"
            },
            "fontFamily": {
                    "technical-xs": ["JetBrains Mono"],
                    "technical-sm": ["JetBrains Mono"],
                    "display-xl": ["Bebas Neue"],
                    "display-lg": ["Bebas Neue"],
                    "display-xl-mobile": ["Bebas Neue"],
                    "body-md": ["Inter"],
                    "headline-md": ["Bebas Neue"],
                    "display-lg-mobile": ["Bebas Neue"],
                    "body-lg": ["Inter"]
            },
            "fontSize": {
                    "technical-xs": ["11px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "technical-sm": ["13px", {"lineHeight": "1.4", "fontWeight": "500"}],
                    "display-xl": ["76px", {"lineHeight": "0.95", "letterSpacing": "-0.02em", "fontWeight": "400"}],
                    "display-lg": ["48px", {"lineHeight": "0.95", "letterSpacing": "-0.01em", "fontWeight": "400"}],
                    "display-xl-mobile": ["48px", {"lineHeight": "1.0", "fontWeight": "400"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-md": ["32px", {"lineHeight": "1.1", "fontWeight": "400"}],
                    "display-lg-mobile": ["32px", {"lineHeight": "1.0", "fontWeight": "400"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .bg-grid-dot {
            background-image: radial-gradient(circle, #353534 1px, transparent 1px);
        }
        .hard-shadow-signal {
            box-shadow: 4px 4px 0px 0px #780116;
        }
        .hard-shadow-ink {
            box-shadow: 4px 4px 0px 0px #0e0e0e;
        }
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
        }
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body class="bg-surface text-on-surface font-body-md bg-grid-dot bg-[length:28px_28px] selection:bg-signal selection:text-paper">
<!-- TopNavBar -->
<nav class="w-full sticky top-0 z-50 bg-surface dark:bg-surface border-b border-line-mute shadow-[4px_4px_0px_0px_rgba(14,14,14,1)]">
<div class="max-w-[1240px] mx-auto px-margin-safe flex items-center justify-between h-20">
<div class="font-display-lg text-display-lg text-on-surface dark:text-on-surface tracking-tighter">ARCSEC.</div>
<div class="hidden md:flex gap-gutter items-center">
<a class="font-technical-sm text-technical-sm uppercase tracking-wider text-signal font-bold border-b-2 border-signal pb-1 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-150" href="#">Product</a>
<a class="font-technical-sm text-technical-sm uppercase tracking-wider text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-150" href="#">Docs</a>
<a class="font-technical-sm text-technical-sm uppercase tracking-wider text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-150" href="#">Wall of Fixes</a>
</div>
<button class="bg-signal text-paper px-6 py-2 font-technical-sm uppercase font-bold hard-shadow-ink hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all">
                Deploy Scan
            </button>
</div>
</nav>
<!-- Hero Section -->
<section class="max-w-[1240px] mx-auto px-margin-safe pt-24 pb-section-v flex flex-col items-center text-center">
<div class="reveal active">
<h1 class="font-display-xl text-display-xl-mobile md:text-display-xl max-w-4xl mx-auto mb-6">
                AI-BUILDERS SHIP <span class="text-signal">VULNERABILITIES</span>.<br/>YOU SHIP THE FIXES.
            </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
                Automated security remediation for the generative era. Scan exports from Lovable, Bolt, and v0. Receive production-ready code diffs that patch SQLi, hardcoded secrets, and XSS instantly.
            </p>
<div class="flex flex-col sm:flex-row gap-gutter justify-center mb-20">
<button class="bg-signal text-paper px-8 py-4 font-technical-sm text-lg uppercase font-bold hard-shadow-ink hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 transition-all">
                    Scan your first project free
                </button>
<button class="border-2 border-line-mute text-on-surface px-8 py-4 font-technical-sm text-lg uppercase font-bold hover:bg-surface-bright transition-all">
                    View Docs
                </button>
</div>
</div>
<!-- Terminal Window Component -->
<div class="reveal w-full max-w-4xl bg-ink border border-line-mute hard-shadow-signal overflow-hidden text-left">
<div class="bg-surface-container-high border-b border-line-mute px-4 py-2 flex items-center justify-between">
<div class="flex gap-2">
<div class="w-3 h-3 rounded-full bg-line-mute"></div>
<div class="w-3 h-3 rounded-full bg-line-mute"></div>
<div class="w-3 h-3 rounded-full bg-line-mute"></div>
</div>
<div class="font-technical-xs text-on-surface-variant">terminal — arcsec-remediate.sh</div>
<div class="w-12"></div>
</div>
<div class="p-6 font-technical-sm text-on-surface leading-relaxed overflow-x-auto">
<div class="flex gap-4">
<span class="text-line-mute">01</span>
<span class="text-on-surface-variant">$ arcsec scan ./bolt-export-v4</span>
</div>
<div class="flex gap-4">
<span class="text-line-mute">02</span>
<span class="text-primary">INFO: Analyzing 42 files...</span>
</div>
<div class="flex gap-4">
<span class="text-line-mute">03</span>
<span class="text-signal">CRITICAL: SQL Injection found in /api/users.ts</span>
</div>
<div class="flex gap-4 mt-4">
<span class="text-line-mute">04</span>
<span class="text-on-surface-variant font-bold">--- remediation preview ---</span>
</div>
<div class="flex gap-4 bg-red-900/20 border-l-4 border-signal px-2">
<span class="text-line-mute">05</span>
<span class="text-signal opacity-50">- const user = await db.query(`SELECT * FROM users WHERE id = ${req.body.id}`);</span>
</div>
<div class="flex gap-4 bg-green-900/20 border-l-4 border-green-500 px-2">
<span class="text-line-mute">06</span>
<span class="text-green-500">+ const user = await db.query('SELECT * FROM users WHERE id = $1', [req.body.id]);</span>
</div>
<div class="flex gap-4 mt-4">
<span class="text-line-mute">07</span>
<span class="text-gold">SUCCESS: [REMEDIATION] applied. Project secure.</span>
</div>
<div class="flex gap-4">
<span class="text-line-mute">08</span>
<span class="animate-pulse">_</span>
</div>
</div>
</div>
</section>
<!-- Authority Band -->
<section class="reveal bg-surface-container-lowest border-y border-line-mute py-12 mb-section-v">
<div class="max-w-[1240px] mx-auto px-margin-safe">
<p class="font-technical-xs text-center uppercase tracking-[0.3em] text-on-surface-variant mb-8">Built for the generation of AI-Builders</p>
<div class="flex flex-wrap justify-center items-center gap-16 grayscale opacity-60">
<div class="font-display-lg text-on-surface">LOVABLE</div>
<div class="font-display-lg text-on-surface">BOLT.NEW</div>
<div class="font-display-lg text-on-surface">V0.DEV</div>
<div class="font-display-lg text-on-surface">CURSOR</div>
</div>
</div>
</section>
<!-- Feature/Comparison Grid -->
<section class="max-w-[1240px] mx-auto px-margin-safe mb-section-v">
<div class="reveal mb-16">
<h2 class="font-display-lg text-display-lg-mobile md:text-display-lg mb-4">ENGINEERING PRECISION</h2>
<p class="font-body-md text-on-surface-variant max-w-xl">Don't just find bugs. Solve them with technical structural integrity.</p>
</div>
<div class="reveal grid md:grid-cols-3 border border-line-mute divide-y md:divide-y-0 md:divide-x divide-line-mute">
<!-- Header Row -->
<div class="hidden md:block bg-surface-container-high p-4 font-technical-xs uppercase text-on-surface-variant border-b border-line-mute">Vulnerability Category</div>
<div class="hidden md:block bg-surface-container-high p-4 font-technical-xs uppercase text-on-surface-variant border-b border-line-mute">AI Gen Root Cause</div>
<div class="hidden md:block bg-surface-container-high p-4 font-technical-xs uppercase text-signal border-b border-line-mute">ArcSec Remediation</div>
<!-- Row 1 -->
<div class="p-6 md:p-8 flex flex-col gap-2">
<span class="md:hidden font-technical-xs text-on-surface-variant uppercase mb-2">Category</span>
<span class="font-headline-md text-on-surface">Injection Vectors</span>
</div>
<div class="p-6 md:p-8 flex flex-col gap-2 bg-surface-container-low">
<span class="md:hidden font-technical-xs text-on-surface-variant uppercase mb-2">Root Cause</span>
<p class="font-body-md italic text-on-surface-variant">"LLMs often prefer string interpolation for readability over parameterized queries."</p>
</div>
<div class="p-6 md:p-8 flex flex-col gap-4 border-l-2 border-signal">
<span class="md:hidden font-technical-xs text-signal uppercase mb-2">ArcSec Fix</span>
<div class="font-technical-sm bg-ink p-3 rounded">
<span class="text-gold">Auto-injects prepared statements and ORM sanitation logic.</span>
</div>
</div>
<!-- Row 2 -->
<div class="p-6 md:p-8 flex flex-col gap-2">
<span class="md:hidden font-technical-xs text-on-surface-variant uppercase mb-2">Category</span>
<span class="font-headline-md text-on-surface">Secret Leakage</span>
</div>
<div class="p-6 md:p-8 flex flex-col gap-2 bg-surface-container-low">
<span class="md:hidden font-technical-xs text-on-surface-variant uppercase mb-2">Root Cause</span>
<p class="font-body-md italic text-on-surface-variant">"Hardcoded keys in generated React components for 'rapid prototyping' speed."</p>
</div>
<div class="p-6 md:p-8 flex flex-col gap-4 border-l-2 border-signal">
<span class="md:hidden font-technical-xs text-signal uppercase mb-2">ArcSec Fix</span>
<div class="font-technical-sm bg-ink p-3 rounded">
<span class="text-gold">Extracts to .env, adds .gitignore, and rotates compromised keys.</span>
</div>
</div>
<!-- Row 3 -->
<div class="p-6 md:p-8 flex flex-col gap-2">
<span class="md:hidden font-technical-xs text-on-surface-variant uppercase mb-2">Category</span>
<span class="font-headline-md text-on-surface">Auth Bypass</span>
</div>
<div class="p-6 md:p-8 flex flex-col gap-2 bg-surface-container-low">
<span class="md:hidden font-technical-xs text-on-surface-variant uppercase mb-2">Root Cause</span>
<p class="font-body-md italic text-on-surface-variant">"Incomplete middleware logic in route exports leads to unprotected API endpoints."</p>
</div>
<div class="p-6 md:p-8 flex flex-col gap-4 border-l-2 border-signal">
<span class="md:hidden font-technical-xs text-signal uppercase mb-2">ArcSec Fix</span>
<div class="font-technical-sm bg-ink p-3 rounded">
<span class="text-gold">Standardizes JWT/Session validation across all exported routes.</span>
</div>
</div>
</div>
</section>
<!-- Detailed Feature Section with Bento Feel -->
<section class="max-w-[1240px] mx-auto px-margin-safe mb-section-v">
<div class="grid md:grid-cols-12 gap-gutter">
<div class="reveal md:col-span-8 bg-surface-container border border-line-mute p-10 flex flex-col justify-between min-h-[400px]">
<div>
<div class="font-technical-xs text-signal uppercase mb-4 tracking-widest">Core Engine</div>
<h3 class="font-display-lg text-display-lg-mobile md:text-display-lg mb-6">REAL-TIME PATCHING FOR AI OUTPUTS</h3>
<p class="font-body-lg text-on-surface-variant max-w-xl">ArcSec doesn't just bark. It bites back at vulnerabilities. Our engine understands the context of AI-generated code and applies semantic patches that preserve your app's logic while hardening its shell.</p>
</div>
<div class="mt-10 flex gap-4 overflow-x-auto pb-4">
<span class="bg-surface-bright border border-line-mute px-4 py-2 font-technical-xs uppercase">CWE Compliance</span>
<span class="bg-surface-bright border border-line-mute px-4 py-2 font-technical-xs uppercase">OWASP Top 10</span>
<span class="bg-surface-bright border border-line-mute px-4 py-2 font-technical-xs uppercase">Snyk Integration</span>
<span class="bg-surface-bright border border-line-mute px-4 py-2 font-technical-xs uppercase">Github Actions</span>
</div>
</div>
<div class="reveal md:col-span-4 bg-signal p-10 flex flex-col justify-center items-center text-center text-paper hard-shadow-ink">
<span class="material-symbols-outlined text-6xl mb-6" style="font-variation-settings: 'FILL' 1;">terminal</span>
<h3 class="font-display-lg mb-2">CLI FIRST</h3>
<p class="font-technical-sm uppercase opacity-90">Deep integration for terminal power users.</p>
<div class="mt-8 bg-ink text-left p-4 font-technical-xs w-full text-on-surface opacity-80">
                    $ npm install -g @arcsec/cli
                </div>
</div>
</div>
</section>
<!-- Closing CTA -->
<section class="reveal max-w-[1240px] mx-auto px-margin-safe mb-section-v">
<div class="bg-surface-container-highest p-12 md:p-24 border border-line-mute text-center flex flex-col items-center">
<h2 class="font-display-xl text-display-xl-mobile md:text-display-xl mb-6">STOP TRIAGING.<br/>START SHIPPING.</h2>
<p class="font-body-lg text-on-surface-variant max-w-2xl mb-12">
                Join 1,200+ security-conscious developers who use ArcSec to secure their AI-generated prototypes before they hit production.
            </p>
<button class="bg-signal text-paper px-12 py-5 font-technical-sm text-xl uppercase font-bold hard-shadow-ink hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 transition-all">
                Scan your project now — free
            </button>
<p class="mt-8 font-technical-xs text-on-surface-variant uppercase opacity-50">No credit card required. Scan up to 10k lines/mo.</p>
</div>
</section>
<!-- Footer -->
<footer class="w-full border-t border-line-mute bg-grid-dot bg-[length:28px_28px]">
<div class="max-w-[1240px] mx-auto px-margin-safe py-section-v flex flex-col md:flex-row justify-between gap-gutter">
<div class="flex flex-col gap-4">
<div class="font-display-md text-headline-md text-on-surface uppercase">ARCSEC.</div>
<p class="font-technical-xs text-technical-xs text-on-surface-variant max-w-xs">
                    © 2024 ArcSec. All rights reserved. Secure by Default. Designed for the high-velocity builder.
                </p>
</div>
<div class="grid grid-cols-2 md:grid-cols-3 gap-8">
<div class="flex flex-col gap-3">
<span class="font-technical-xs text-signal uppercase mb-2">Compliance</span>
<a class="font-technical-xs text-technical-xs text-on-surface-variant hover:text-signal transition-colors" href="#">CWE Compliance</a>
<a class="font-technical-xs text-technical-xs text-on-surface-variant hover:text-signal transition-colors" href="#">OWASP Top 10</a>
</div>
<div class="flex flex-col gap-3">
<span class="font-technical-xs text-signal uppercase mb-2">Product</span>
<a class="font-technical-xs text-technical-xs text-on-surface-variant hover:text-signal transition-colors" href="#">Terminal Access</a>
<a class="font-technical-xs text-technical-xs text-on-surface-variant hover:text-signal transition-colors" href="#">Wall of Fixes</a>
</div>
<div class="flex flex-col gap-3">
<span class="font-technical-xs text-signal uppercase mb-2">Legal</span>
<a class="font-technical-xs text-technical-xs text-on-surface-variant hover:text-signal transition-colors" href="#">Privacy Policy</a>
<a class="font-technical-xs text-technical-xs text-on-surface-variant hover:text-signal transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
<script>
        // Scroll Reveal Implementation
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((el) => {
            observer.observe(el);
        });

        // Simple terminal typing effect simulation or micro-interactions
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                // Subtle feedback handled by Tailwind hover classes
            });
        });
    </script>
</body></html>

<!-- Dashboard | ArcSec Terminal (New Palette) -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>ArcSec Terminal | Vulnerability Scan</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&amp;family=Inter:wght@400;700&amp;family=JetBrains+Mono:wght@400;500;600;700&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        
        /* Dotted Grid Background */
        .dotted-canvas {
            background-image: radial-gradient(circle, #584140 1.5px, transparent 1.5px);
            background-size: 28px 28px;
            background-color: #131313;
            opacity: 0.15;
        }

        .hard-shadow-primary {
            box-shadow: 4px 4px 0px 0px #780116;
        }

        .hard-shadow-ink {
            box-shadow: 4px 4px 0px 0px #0e0e0e;
        }

        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #1c1b1b;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #353534;
        }

        /* Transition */
        .btn-primary-hover:hover {
            box-shadow: 3px 4px 0px #780116;
            transform: translate(-2px, -2px);
        }

        .terminal-cursor::after {
            content: "_";
            animation: blink 1s step-end infinite;
        }

        @keyframes blink {
            from, to { opacity: 1; }
            50% { opacity: 0; }
        }
    </style>
<script id="tailwind-config">
  tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        "colors": {
                "on-error": "#690005",
                "surface-bright": "#393939",
                "primary-fixed-dim": "#ffb3b1",
                "on-primary-fixed": "#410007",
                "on-primary-fixed-variant": "#8c1522",
                "on-secondary-fixed-variant": "#5f4100",
                "on-error-container": "#ffdad6",
                "on-primary-container": "#ff797a",
                "surface-container-high": "#2a2a2a",
                "on-primary": "#680011",
                "surface-container-low": "#1c1b1b",
                "background": "#131313",
                "inverse-on-surface": "#313030",
                "tertiary-fixed-dim": "#a0cafa",
                "secondary": "#f7b538",
                "tertiary": "#a0cafa",
                "outline-variant": "#584140",
                "surface-dim": "#131313",
                "primary-container": "#780116",
                "surface-container": "#201f1f",
                "on-background": "#e5e2e1",
                "tertiary-fixed": "#d0e4ff",
                "on-secondary-fixed": "#281900",
                "error": "#ffb4ab",
                "on-tertiary-container": "#7ca6d4",
                "secondary-container": "#c68b00",
                "on-tertiary-fixed": "#001d34",
                "secondary-fixed-dim": "#f7b538",
                "on-tertiary-fixed-variant": "#194972",
                "surface-container-lowest": "#0e0e0e",
                "outline": "#a78a89",
                "on-tertiary": "#003256",
                "on-secondary": "#432c00",
                "on-surface-variant": "#e0bfbd",
                "secondary-fixed": "#ffdeac",
                "surface-container-highest": "#353534",
                "error-container": "#93000a",
                "surface": "#131313",
                "on-secondary-container": "#402a00",
                "inverse-primary": "#ae2f37",
                "surface-variant": "#353534",
                "on-surface": "#e5e2e1",
                "primary": "#780116",
                "tertiary-container": "#003b63",
                "primary-fixed": "#ffdad8",
                "surface-tint": "#ffb3b1",
                "inverse-surface": "#e5e2e1",
                "line-mute": "#584140",
                "signal": "#780116",
                "xanthous": "#f7b538"
        },
        "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
        },
        "spacing": {
                "margin-mobile": "20px",
                "stack-md": "16px",
                "stack-sm": "8px",
                "unit": "4px",
                "stack-lg": "32px",
                "gutter": "24px",
                "margin-desktop": "64px"
        },
        "fontFamily": {
                "headline-lg": ["bebasNeue"],
                "display-xl": ["bebasNeue"],
                "label-technical": ["jetbrainsMono"],
                "headline-md": ["bebasNeue"],
                "headline-lg-mobile": ["bebasNeue"],
                "body-lg": ["hankenGrotesk"],
                "body-md": ["hankenGrotesk"],
                "label-caps": ["jetbrainsMono"],
                "technical-sm": ["jetbrainsMono"],
                "technical-xs": ["jetbrainsMono"]
        },
        "fontSize": {
                "headline-lg": ["64px", {"lineHeight": "60px", "fontWeight": "400"}],
                "display-xl": ["120px", {"lineHeight": "110px", "letterSpacing": "0.02em", "fontWeight": "400"}],
                "label-technical": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "500"}],
                "headline-md": ["32px", {"lineHeight": "32px", "fontWeight": "400"}],
                "headline-lg-mobile": ["48px", {"lineHeight": "44px", "fontWeight": "400"}],
                "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                "technical-sm": ["13px", {"lineHeight": "1.4", "fontWeight": "500"}],
                "label-caps": ["10px", {"lineHeight": "1", "fontWeight": "700"}],
                "technical-xs": ["11px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600"}]
        }
},
    },
  }
</script>
</head>
<body class="bg-background text-on-background font-body-md overflow-hidden h-screen flex">
<!-- SideNavBar Anchor -->
<aside class="fixed left-0 top-0 h-full flex flex-col z-40 bg-surface-container border-r border-line-mute w-64">
<!-- Logo / Brand -->
<div class="px-6 py-8 border-b border-line-mute">
<h1 class="font-headline-md text-headline-md text-on-surface">ARCSEC<span class="text-primary">.</span> TERMINAL</h1>
<p class="font-technical-xs text-technical-xs text-line-mute mt-1 uppercase tracking-widest">v2.4.0-stable</p>
</div>
<!-- Navigation Links -->
<nav class="flex-1 mt-6 px-2 space-y-1">
<!-- Active: Scans -->
<a class="bg-surface-variant text-xanthous border-l-4 border-xanthous px-4 py-3 flex items-center gap-3 transition-all" href="#">
<span class="material-symbols-outlined text-xl">security</span>
<span class="font-label-caps text-label-caps uppercase tracking-tighter">Scans</span>
</a>
<a class="text-on-surface-variant px-4 py-3 flex items-center gap-3 hover:bg-surface-bright transition-all" href="#">
<span class="material-symbols-outlined text-xl">dashboard</span>
<span class="font-label-caps text-label-caps uppercase tracking-tighter">Dashboard</span>
</a>
<a class="text-on-surface-variant px-4 py-3 flex items-center gap-3 hover:bg-surface-bright transition-all" href="#">
<span class="material-symbols-outlined text-xl">history</span>
<span class="font-label-caps text-label-caps uppercase tracking-tighter">History</span>
</a>
<a class="text-on-surface-variant px-4 py-3 flex items-center gap-3 hover:bg-surface-bright transition-all" href="#">
<span class="material-symbols-outlined text-xl">group</span>
<span class="font-label-caps text-label-caps uppercase tracking-tighter">Team</span>
</a>
</nav>
<!-- CTA Action -->
<div class="px-4 py-6 border-t border-line-mute">
<button class="w-full bg-primary text-on-background font-label-caps py-4 border border-surface-container-lowest flex items-center justify-center gap-2 transition-transform active:scale-95 btn-primary-hover">
<span class="material-symbols-outlined text-lg">add_circle</span>
                NEW ANALYSIS
            </button>
</div>
<!-- Footer Links -->
<div class="px-2 pb-6 space-y-1">
<a class="text-on-surface-variant px-4 py-2 flex items-center gap-3 hover:bg-surface-bright transition-all" href="#">
<span class="material-symbols-outlined text-lg">settings</span>
<span class="font-label-caps text-label-caps uppercase">Settings</span>
</a>
<a class="text-on-surface-variant px-4 py-2 flex items-center gap-3 hover:bg-surface-bright transition-all" href="#">
<span class="material-symbols-outlined text-lg">logout</span>
<span class="font-label-caps text-label-caps uppercase">Log Out</span>
</a>
</div>
</aside>
<!-- Main Content Area -->
<main class="flex-1 ml-64 flex flex-col relative overflow-hidden h-screen">
<!-- TopNavBar Anchor -->
<header class="flex justify-between items-center w-full px-10 h-16 bg-background border-b border-line-mute z-30">
<div class="flex items-center gap-8">
<div class="flex items-center gap-2">
<span class="font-technical-sm text-technical-sm text-line-mute">PROJECT /</span>
<span class="font-technical-sm text-technical-sm text-on-surface">CORE-PROTOCOL-ALPHA</span>
<span class="material-symbols-outlined text-line-mute text-sm">expand_more</span>
</div>
<div class="hidden md:flex gap-6">
<a class="font-technical-sm text-technical-sm text-on-surface-variant hover:text-xanthous transition-colors" href="#">Product</a>
<a class="font-technical-sm text-technical-sm text-on-surface-variant hover:text-xanthous transition-colors" href="#">Docs</a>
<a class="font-technical-sm text-technical-sm text-on-surface-variant hover:text-xanthous transition-colors" href="#">Wall of Fixes</a>
</div>
</div>
<div class="flex items-center gap-6">
<div class="flex items-center gap-3">
<div class="text-right hidden sm:block">
<p class="font-technical-sm text-technical-sm text-on-surface leading-none">SYS_ADMIN_01</p>
<p class="font-technical-xs text-technical-xs text-line-mute leading-none mt-1">Tier: Enterprise</p>
</div>
<div class="w-10 h-10 border border-line-mute flex items-center justify-center bg-surface-container-high overflow-hidden">
<img alt="Profile avatar" class="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu5tECVdXSZ-AsF5nAaTgCNREewNnnMQia_537IQgyKlB4-iXz7H1awHOQBm11bC7fB6oDmXLXvs4r4_cLoNRNg-H1IECAWtupf_h5ipkhS9SOSGUwILC0CGp2uBG6N2ytFvaPxEdszNrJJj-HHO6YrUoE9EE4GqOMrsfDyvxRdsXf12YK_Cae0ShkWjhdj6fTFWEbdfRdc4J2xCsYt9dE2BbBXCBwz5FDG1NJAqOIQOk6xdb7Cn2NBg"/>
</div>
</div>
<button class="bg-primary text-on-background px-5 py-2 font-label-caps text-label-caps border border-surface-container-lowest btn-primary-hover">
                    DEPLOY SCAN
                </button>
</div>
</header>
<!-- Canvas Workspace -->
<div class="flex-1 relative overflow-auto custom-scrollbar p-10">
<!-- Background Dotted Grid -->
<div class="absolute inset-0 dotted-canvas pointer-events-none"></div>
<!-- Dashboard Content -->
<div class="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center min-h-full py-10">
<!-- Welcome Section -->
<div class="text-center mb-16 space-y-4">
<span class="font-technical-sm text-technical-sm text-xanthous bg-xanthous/10 px-3 py-1 inline-block border border-xanthous/20">READY FOR DISCOVERY</span>
<h2 class="font-headline-md text-5xl text-on-surface leading-none tracking-tight uppercase mb-4">Initialize New Scan</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                        Connect your codebase for an automated deep-packet inspection. ArcSec will map dependencies, identify CWE vulnerabilities, and generate a compliance report.
                    </p>
</div>
<!-- Empty State / Upload Area -->
<div class="w-full border-2 border-dashed border-line-mute bg-surface-container/30 backdrop-blur-sm group hover:border-xanthous transition-all duration-300 relative cursor-pointer" id="drop-zone">
<div class="p-16 flex flex-col items-center justify-center text-center">
<!-- Technical Graphic Decoration -->
<div class="mb-8 w-32 h-32 relative">
<div class="absolute inset-0 border border-line-mute rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
<div class="absolute inset-0 border border-xanthous opacity-20 scale-110 group-hover:scale-125 transition-transform duration-500"></div>
<div class="absolute inset-0 flex items-center justify-center">
<span class="material-symbols-outlined text-5xl text-on-surface-variant group-hover:text-xanthous group-hover:scale-110 transition-all">upload_file</span>
</div>
</div>
<h3 class="font-headline-md text-headline-md text-on-surface uppercase mb-2">Upload Source ZIP</h3>
<p class="font-technical-sm text-technical-sm text-on-surface-variant mb-8 max-w-sm">
                            Drag your compressed project file here or click to browse local terminal. Max size 2GB.
                        </p>
<div class="flex flex-wrap justify-center gap-4">
<button class="bg-surface-container-lowest text-on-background border border-on-surface px-8 py-3 font-label-caps btn-primary-hover hover:bg-primary">
                                CHOOSE FILE
                            </button>
<button class="bg-surface-bright text-on-surface border border-line-mute px-8 py-3 font-label-caps hover:bg-surface-variant transition-colors">
                                REPO INTEGRATION
                            </button>
</div>
</div>
<!-- Scan metadata indicators -->
<div class="absolute bottom-4 left-4 flex gap-4 pointer-events-none">
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-xanthous animate-pulse"></div>
<span class="font-technical-xs text-technical-xs text-line-mute uppercase">Uploader Active</span>
</div>
<div class="flex items-center gap-2">
<span class="font-technical-xs text-technical-xs text-line-mute uppercase">LATENCY: 14MS</span>
</div>
</div>
<div class="absolute bottom-4 right-4 pointer-events-none">
<span class="font-technical-xs text-technical-xs text-line-mute uppercase terminal-cursor">SRV: US-EAST-1</span>
</div>
</div>
<!-- Secondary Info Grid (Bento Style) -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-16">
<div class="border border-line-mute p-6 bg-surface-container-low">
<span class="font-technical-xs text-technical-xs text-line-mute mb-4 block">001 / COMPLIANCE</span>
<h4 class="font-label-caps text-label-caps text-on-surface uppercase mb-2">SOC2 Type II Ready</h4>
<p class="font-technical-sm text-technical-sm text-on-surface-variant opacity-70">Automated reporting for internal audit trails and external certifications.</p>
</div>
<div class="border border-line-mute p-6 bg-surface-container-low">
<span class="font-technical-xs text-technical-xs text-line-mute mb-4 block">002 / DETECTION</span>
<h4 class="font-label-caps text-label-caps text-on-surface uppercase mb-2">OWASP TOP 10</h4>
<p class="font-technical-sm text-technical-sm text-on-surface-variant opacity-70">Heuristic engine specifically tuned for the latest OWASP vulnerabilities.</p>
</div>
<div class="border border-line-mute p-6 bg-surface-container-low">
<span class="font-technical-xs text-technical-xs text-line-mute mb-4 block">003 / SPEED</span>
<h4 class="font-label-caps text-label-caps text-on-surface uppercase mb-2">Instant Remediation</h4>
<p class="font-technical-sm text-technical-sm text-on-surface-variant opacity-70">AI-suggested code fixes with terminal-ready patches generated instantly.</p>
</div>
</div>
</div>
</div>
<!-- System Stats Footer -->
<footer class="h-10 bg-surface-container border-t border-line-mute flex items-center justify-between px-10 z-30">
<div class="flex items-center gap-6">
<span class="font-technical-xs text-technical-xs text-line-mute uppercase">© 2024 ARCSEC SYSTEMS. SECURE BY DEFAULT.</span>
<div class="h-4 w-px bg-line-mute"></div>
<div class="flex gap-4">
<a class="font-technical-xs text-technical-xs text-on-surface-variant hover:text-on-surface" href="#">CWE COMPLIANCE</a>
<a class="font-technical-xs text-technical-xs text-on-surface-variant hover:text-on-surface" href="#">OWASP TOP 10</a>
<a class="font-technical-xs text-technical-xs text-on-surface-variant hover:text-on-surface" href="#">PRIVACY</a>
</div>
</div>
<div class="flex items-center gap-6">
<div class="flex items-center gap-2">
<span class="font-technical-xs text-technical-xs text-line-mute uppercase">UPTIME:</span>
<span class="font-technical-xs text-technical-xs text-on-surface">99.992%</span>
</div>
<div class="flex items-center gap-2">
<span class="font-technical-xs text-technical-xs text-line-mute uppercase">ENGINE:</span>
<span class="font-technical-xs text-technical-xs text-primary">STABLE_V4</span>
</div>
</div>
</footer>
</main>
<script>
        // Simple drag and drop interaction simulation
        const dropZone = document.getElementById('drop-zone');

        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropZone.addEventListener(eventName, preventDefaults, false);
        });

        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }

        ['dragenter', 'dragover'].forEach(eventName => {
            dropZone.addEventListener(eventName, () => {
                dropZone.classList.add('border-xanthous', 'bg-xanthous/5');
            }, false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropZone.addEventListener(eventName, () => {
                dropZone.classList.remove('border-xanthous', 'bg-xanthous/5');
            }, false);
        });

        dropZone.addEventListener('drop', (e) => {
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                alert(`Initializing analysis for: ${files[0].name}`);
            }
        });
    </script>
</body></html>

<!-- Login | ArcSec (New Palette) -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>ArcSec | Terminal Access</title>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&amp;family=Inter:wght@400;700&amp;family=JetBrains+Mono:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        /* Custom Dotted Grid Background */
        .dotted-grid {
            background-image: radial-gradient(circle, var(--tw-colors-grid-dot) 1px, transparent 1px);
            background-size: 28px 28px;
            background-color: #131313;
        }
        /* Hard-Edge Elevation */
        .elevation-hard {
            box-shadow: 8px 8px 0px 0px #0e0e0e;
        }
        .btn-primary-hover:hover {
            box-shadow: 4px 4px 0px 0px #780116;
            transform: translate(-2px, -2px);
        }
        /* Custom cursor for terminal feel */
        .terminal-cursor::after {
            content: '_';
            animation: blink 1s step-end infinite;
        }
        @keyframes blink {
            50% { opacity: 0; }
        }
    </style>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-tertiary-fixed-variant": "#194972",
                    "on-tertiary": "#003256",
                    "error": "#ffb4ab",
                    "tertiary": "#a0cafa",
                    "on-surface-variant": "#e0bfbd",
                    "gold": "#f7b538", /* Updated to Xanthous */
                    "on-error-container": "#ffdad6",
                    "on-secondary-fixed": "#281900",
                    "error-container": "#93000a",
                    "primary": "#ffb3b1",
                    "surface": "#131313",
                    "on-secondary-container": "#402a00",
                    "surface-container-low": "#1c1b1b",
                    "surface-bright": "#393939",
                    "surface-tint": "#ffb3b1",
                    "on-tertiary-container": "#7ca6d4",
                    "ink": "#0e0e0e",
                    "background": "#131313",
                    "tertiary-fixed-dim": "#a0cafa",
                    "surface-container-lowest": "#0e0e0e",
                    "surface-container-high": "#2a2a2a",
                    "on-primary-fixed": "#410007",
                    "on-primary-container": "#ff797a",
                    "on-primary": "#680011",
                    "on-primary-fixed-variant": "#8c1522",
                    "secondary-container": "#c68b00",
                    "secondary": "#f7b538", /* Updated to Xanthous */
                    "tertiary-fixed": "#d0e4ff",
                    "on-tertiary-fixed": "#001d34",
                    "on-surface": "#e5e2e1",
                    "paper": "#e5e2e1",
                    "surface-variant": "#353534",
                    "surface-container-highest": "#353534",
                    "primary-container": "#780116", /* Updated to Burgundy */
                    "secondary-fixed-dim": "#f7b538", /* Updated to Xanthous */
                    "inverse-surface": "#e5e2e1",
                    "on-secondary-fixed-variant": "#5f4100",
                    "primary-fixed": "#ffdad8",
                    "signal": "#780116", /* Updated to Burgundy */
                    "outline": "#a78a89",
                    "line-mute": "#584140",
                    "on-background": "#e5e2e1",
                    "inverse-primary": "#ae2f37",
                    "outline-variant": "#584140",
                    "primary-fixed-dim": "#ffb3b1",
                    "surface-dim": "#131313",
                    "on-secondary": "#432c00",
                    "tertiary-container": "#003b63",
                    "secondary-fixed": "#ffdeac",
                    "on-error": "#690005",
                    "surface-container": "#201f1f",
                    "inverse-on-surface": "#313030",
                    "grid-dot": "#393939"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "unit": "8px",
                    "container-max": "1240px",
                    "margin-safe": "40px",
                    "gutter": "24px",
                    "section-v": "110px"
            },
            "fontFamily": {
                    "technical-sm": ["JetBrains Mono"],
                    "label-caps": ["JetBrains Mono"],
                    "body-lg": ["Inter"],
                    "headline-md": ["Bebas Neue"],
                    "display-lg": ["Bebas Neue"],
                    "body-md": ["Inter"],
                    "technical-xs": ["JetBrains Mono"],
                    "display-xl": ["Bebas Neue"]
            },
            "fontSize": {
                    "technical-sm": ["13px", {"lineHeight": "1.4", "fontWeight": "500"}],
                    "label-caps": ["10px", {"lineHeight": "1", "fontWeight": "700"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-md": ["32px", {"lineHeight": "1.1", "fontWeight": "400"}],
                    "display-lg": ["48px", {"lineHeight": "0.95", "fontWeight": "400"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "technical-xs": ["11px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "display-xl": ["76px", {"lineHeight": "0.95", "letterSpacing": "-0.02em", "fontWeight": "400"}]
            }
          },
        },
      }
    </script>
</head>
<body class="bg-background text-on-background font-body-md overflow-x-hidden dotted-grid min-h-screen flex flex-col">
<!-- Top Bar -->
<header class="w-full h-16 flex items-center px-margin-safe max-w-container-max mx-auto justify-between z-50">
<div class="font-display-lg text-display-lg tracking-tighter text-on-background uppercase">ARCSEC<span class="text-signal">.</span></div>
<div class="hidden md:block">
<span class="font-technical-xs text-technical-xs text-line-mute uppercase tracking-widest">
                System Status: <span class="text-secondary">Optimal</span>
</span>
</div>
</header>
<!-- Main Content Canvas -->
<main class="flex-grow flex items-center justify-center px-6 py-section-v">
<div class="relative w-full max-w-md">
<!-- Structural Decoration: Technical Corners -->
<div class="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-signal"></div>
<div class="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-signal"></div>
<!-- Auth Card -->
<div class="bg-surface-container border border-line-mute p-10 elevation-hard relative overflow-hidden">
<!-- Background Decoration: Tech Schematic Fade -->
<div class="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
<span class="material-symbols-outlined text-[120px]">security</span>
</div>
<!-- Header -->
<div class="mb-10">
<div class="font-technical-xs text-technical-xs text-signal uppercase mb-2">Terminal Access</div>
<h1 class="font-headline-md text-headline-md uppercase">Initialize Session</h1>
<p class="font-body-md text-on-surface-variant mt-2 text-sm">Enter credentials to bypass secondary firewall.</p>
</div>
<!-- Form -->
<form class="space-y-6" id="loginForm">
<!-- Email Field -->
<div class="space-y-2">
<label class="font-label-caps text-label-caps uppercase text-on-surface-variant flex justify-between" for="email">
                            User Identifier
                            <span class="text-line-mute">[REQUIRED]</span>
</label>
<div class="relative">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-line-mute">
<span class="material-symbols-outlined text-sm">alternate_email</span>
</div>
<input class="w-full bg-surface-container-highest border border-line-mute py-3 pl-10 pr-4 font-technical-sm text-technical-sm text-on-surface placeholder:opacity-30 focus:outline-none focus:border-signal focus:ring-0 transition-all duration-200" id="email" name="email" placeholder="operator@arcsec.sys" required="" type="email"/>
</div>
</div>
<!-- Password Field -->
<div class="space-y-2">
<label class="font-label-caps text-label-caps uppercase text-on-surface-variant flex justify-between" for="password">
                            Security Key
                            <span class="text-line-mute">[ENCRYPTED]</span>
</label>
<div class="relative">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-line-mute">
<span class="material-symbols-outlined text-sm">lock</span>
</div>
<input class="w-full bg-surface-container-highest border border-line-mute py-3 pl-10 pr-4 font-technical-sm text-technical-sm text-on-surface placeholder:opacity-30 focus:outline-none focus:border-signal focus:ring-0 transition-all duration-200" id="password" name="password" placeholder="••••••••••••" required="" type="password"/>
</div>
</div>
<!-- Actions -->
<div class="pt-4 space-y-4">
<button class="w-full bg-ink text-paper font-label-caps text-label-caps uppercase py-4 border border-line-mute flex items-center justify-center gap-2 transition-all duration-200 btn-primary-hover active:scale-95" type="submit">
                            Sign In
                            <span class="material-symbols-outlined text-sm">login</span>
</button>
<div class="flex items-center justify-between mt-6">
<a class="font-technical-xs text-technical-xs text-on-surface-variant hover:text-signal transition-colors uppercase decoration-signal underline-offset-4 hover:underline" href="#">
                                Forgot password?
                            </a>
<div class="flex items-center gap-2">
<div class="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></div>
<span class="font-technical-xs text-technical-xs text-line-mute uppercase">Uplink Active</span>
</div>
</div>
</div>
</form>
<!-- Footer info inside card -->
<div class="mt-10 pt-6 border-t border-line-mute/30">
<p class="font-technical-xs text-technical-xs text-line-mute text-center">
                        AUTHORIZED PERSONNEL ONLY. ALL ACTIONS LOGGED.
                    </p>
</div>
</div>
<!-- Side Link: Signup -->
<div class="mt-8 text-center">
<p class="font-technical-sm text-technical-sm text-on-surface-variant">
                    First time at the terminal? 
                    <a class="text-secondary font-bold hover:underline underline-offset-2" href="#">Register credentials</a>
</p>
</div>
</div>
</main>
<!-- Global Footer -->
<footer class="w-full border-t border-line-mute pt-8 pb-12 mt-auto">
<div class="max-w-container-max mx-auto px-margin-safe flex flex-col md:flex-row justify-between items-center gap-6">
<div class="font-technical-xs text-technical-xs text-line-mute uppercase tracking-tighter">
                © 2024 ARCSEC SYSTEMS. SECURE BY DEFAULT.
            </div>
<div class="flex gap-8">
<a class="font-technical-xs text-technical-xs text-on-surface-variant hover:text-on-surface transition-colors uppercase" href="#">Terminal Access</a>
<a class="font-technical-xs text-technical-xs text-on-surface-variant hover:text-on-surface transition-colors uppercase" href="#">CWE Compliance</a>
<a class="font-technical-xs text-technical-xs text-on-surface-variant hover:text-on-surface transition-colors uppercase" href="#">Privacy</a>
</div>
</div>
</footer>
<!-- Atmosphere: Grainy Overlay -->
<div class="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
<script>
        // Micro-interaction for form submission
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button');
            const originalHtml = btn.innerHTML;
            
            btn.innerHTML = `
                <span class="animate-spin material-symbols-outlined text-sm">sync</span>
                AUTHENTICATING...
            `;
            btn.disabled = true;
            btn.classList.add('opacity-80');

            setTimeout(() => {
                btn.innerHTML = `
                    <span class="material-symbols-outlined text-sm text-secondary">check_circle</span>
                    GRANTED
                `;
                btn.classList.add('border-secondary', 'text-secondary');
                
                // Simulate redirect
                setTimeout(() => {
                    alert('Session established. Routing to dashboard...');
                    btn.innerHTML = originalHtml;
                    btn.disabled = false;
                    btn.classList.remove('opacity-80', 'border-secondary', 'text-secondary');
                }, 1000);
            }, 2000);
        });

        // Add a typewriter effect to the help text or similar
        const cursorEffect = () => {
            const subtitle = document.querySelector('p.font-body-md');
            if (subtitle) {
                subtitle.classList.add('terminal-cursor');
            }
        }
        window.onload = cursorEffect;
    </script>
</body></html>

<!-- ArcSec | Secure your AI-built apps (New Palette) -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>ArcSec | Secure AI-Driven Development</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&amp;family=Inter:wght@400;700&amp;family=JetBrains+Mono:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
  tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        "colors": {
                "on-error": "#690005",
                "surface-bright": "#393939",
                "primary-fixed-dim": "#ffb3b1",
                "on-primary-fixed": "#410007",
                "on-primary-fixed-variant": "#8c1522",
                "on-secondary-fixed-variant": "#5f4100",
                "on-error-container": "#ffdad6",
                "on-primary-container": "#ff797a",
                "surface-container-high": "#2a2a2a",
                "on-primary": "#680011",
                "surface-container-low": "#1c1b1b",
                "background": "#131313",
                "inverse-on-surface": "#313030",
                "tertiary-fixed-dim": "#a0cafa",
                "secondary": "#f7b538",
                "tertiary": "#a0cafa",
                "outline-variant": "#584140",
                "surface-dim": "#131313",
                "primary-container": "#780116",
                "surface-container": "#201f1f",
                "on-background": "#e5e2e1",
                "tertiary-fixed": "#d0e4ff",
                "on-secondary-fixed": "#281900",
                "error": "#ffb4ab",
                "on-tertiary-container": "#7ca6d4",
                "secondary-container": "#f7b538",
                "on-tertiary-fixed": "#001d34",
                "secondary-fixed-dim": "#f7b538",
                "on-tertiary-fixed-variant": "#194972",
                "surface-container-lowest": "#0e0e0e",
                "outline": "#a78a89",
                "on-tertiary": "#003256",
                "on-secondary": "#432c00",
                "on-surface-variant": "#e0bfbd",
                "secondary-fixed": "#ffdeac",
                "surface-container-highest": "#353534",
                "error-container": "#93000a",
                "surface": "#131313",
                "on-secondary-container": "#402a00",
                "inverse-primary": "#ae2f37",
                "surface-variant": "#353534",
                "on-surface": "#e5e2e1",
                "primary": "#780116",
                "tertiary-container": "#003b63",
                "primary-fixed": "#ffdad8",
                "surface-tint": "#780116",
                "inverse-surface": "#e5e2e1",
                "signal": "#780116",
                "xanthous": "#f7b538",
                "paper": "#e5e2e1",
                "ink": "#0e0e0e",
                "line-mute": "#393939",
                "grid-dot": "#393939"
        },
        "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
        },
        "spacing": {
                "unit": "8px",
                "container-max": "1240px",
                "margin-safe": "40px",
                "gutter": "24px",
                "section-v": "110px"
        },
        "fontFamily": {
                "technical-sm": ["JetBrains Mono"],
                "label-caps": ["JetBrains Mono"],
                "body-lg": ["Inter"],
                "headline-md": ["Bebas Neue"],
                "display-lg": ["Bebas Neue"],
                "body-md": ["Inter"],
                "technical-xs": ["JetBrains Mono"],
                "display-xl": ["Bebas Neue"]
        },
        "fontSize": {
                "technical-sm": ["13px", {"lineHeight": "1.4", "fontWeight": "500"}],
                "label-caps": ["10px", {"lineHeight": "1", "fontWeight": "700"}],
                "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "headline-md": ["32px", {"lineHeight": "1.1", "fontWeight": "400"}],
                "display-lg": ["48px", {"lineHeight": "0.95", "fontWeight": "400"}],
                "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "technical-xs": ["11px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600"}],
                "display-xl": ["76px", {"lineHeight": "0.95", "letterSpacing": "-0.02em", "fontWeight": "400"}]
        }
},
    },
  }
</script>
<style>
        body {
            background-color: #131313;
            background-image: radial-gradient(#393939 1.5px, transparent 1.5px);
            background-size: 28px 28px;
        }
        .hard-shadow {
            box-shadow: 4px 4px 0px 0px #780116;
        }
        .hard-shadow-ink {
            box-shadow: 4px 4px 0px 0px #0e0e0e;
        }
        .btn-hover-active:hover {
            transform: translate(-2px, -2px);
            box-shadow: 6px 6px 0px 0px #780116;
        }
        .btn-hover-active:active {
            transform: translate(1px, 1px);
            box-shadow: 2px 2px 0px 0px #780116;
        }
        .code-line-added { background-color: rgba(0, 255, 0, 0.05); border-left: 3px solid #f7b538; }
        .code-line-removed { background-color: rgba(120, 1, 22, 0.1); border-left: 3px solid #780116; }
    </style>
</head>
<body class="text-on-background font-body-md overflow-x-hidden">
<!-- TopNavBar -->
<header class="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-line-mute">
<div class="flex justify-between items-center w-full px-margin-safe h-16 max-w-container-max mx-auto">
<div class="flex items-center gap-8">
<span class="font-display-lg text-display-lg tracking-tighter text-on-background">ARCSEC<span class="text-signal">.</span></span>
<nav class="hidden md:flex gap-6">
<a class="text-signal font-bold border-b-2 border-signal pb-1 font-technical-sm text-technical-sm" href="#">Product</a>
<a class="text-on-surface-variant hover:text-signal transition-colors duration-200 font-technical-sm text-technical-sm" href="#">Docs</a>
<a class="text-on-surface-variant hover:text-signal transition-colors duration-200 font-technical-sm text-technical-sm" href="#">Wall of Fixes</a>
</nav>
</div>
<button class="bg-signal text-paper font-technical-sm text-technical-sm px-6 py-2 border-1.5 border-ink hard-shadow-ink hover:scale-95 transition-transform">
                Deploy Scan
            </button>
</div>
</header>
<main class="pt-24">
<!-- Hero Section -->
<section class="max-w-container-max mx-auto px-margin-safe py-section-v flex flex-col items-center text-center">
<div class="inline-block px-3 py-1 bg-signal/10 border border-signal mb-8">
<span class="font-technical-xs text-technical-xs text-signal">SECURITY V2.4.0-STABLE</span>
</div>
<h1 class="font-display-xl text-display-xl mb-6 max-w-4xl">
                AI-BUILDERS <span class="text-xanthous">SHIP VULNERABILITIES.</span><br/>
                YOU SHIP THE FIXES.
            </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">
                The first terminal-centric security layer built for the era of generated code. Stop triaging endless alerts—ArcSec patches CWEs before they hit production.
            </p>
<div class="flex flex-col md:flex-row gap-6">
<button class="bg-ink text-paper border-1.5 border-ink font-technical-sm text-technical-sm px-10 py-4 hard-shadow btn-hover-active transition-all">
                    Scan your first project free
                </button>
<button class="border border-line-mute px-10 py-4 font-technical-sm text-technical-sm hover:bg-surface-bright transition-colors">
                    View terminal demo
                </button>
</div>
<!-- Hero Diagram -->
<div class="mt-20 w-full max-w-4xl aspect-[16/9] relative border border-line-mute bg-surface-container overflow-hidden p-8 hard-shadow-ink">
<div class="relative z-10 font-technical-sm text-technical-sm text-left text-on-surface-variant h-full flex flex-col">
<div class="flex gap-2 mb-4">
<div class="w-3 h-3 rounded-full bg-signal"></div>
<div class="w-3 h-3 rounded-full bg-xanthous"></div>
<div class="w-3 h-3 rounded-full bg-line-mute"></div>
</div>
<div class="flex-1 bg-ink/50 border border-line-mute p-4 overflow-hidden">
<p class="text-signal">$ arcsec init</p>
<p class="text-on-surface opacity-50">Initializing secure tunnel...</p>
<p class="text-on-surface opacity-50">Analyzing dependency tree...</p>
<p class="text-xanthous">WARNING: Detected 12 critical CWE vulnerabilities in generated/ai-models/v1.ts</p>
<p class="text-on-surface">Running automated fix sequence...</p>
<div class="mt-4 p-2 border border-signal/30 bg-signal/5">
<span class="text-signal">[REMEDIATION]</span> Applied BufferOverflow protection to line 142.
                        </div>
</div>
</div>
</div>
</section>
<!-- Social Proof -->
<section class="border-y border-line-mute bg-surface-container py-12">
<div class="max-w-container-max mx-auto px-margin-safe">
<p class="text-center font-technical-xs text-technical-xs text-on-surface-variant uppercase tracking-widest mb-8">Trusted by leading AI labs and security firms</p>
<div class="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60">
<img class="h-8" data-alt="Minimalist vector logo of a prominent AI laboratory in a clean, technical monochromatic style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuNsJfXFlkLsaZQIYRBlRt3lxxvNcWT1OQhhYzkzCzZqSLiQWaCDpjTFQSvWgZY1DYuFLWzNJcgMH0I0-UOXMtAIdHoGUvPi6slqOpw561NniFfG67BDL9ECNyTVlyyv6sVVJk7j2jlJl1RE90ka00IfqcN-C3aWmALnGRTUvxaF_gvPz4rpu9EcHoJDPgBc4bIYA2ZR9Am33iLjPBDiCGvt-YPNkw5p6NEvRuPs_-6AKerft6SfNdsQ"/>
<img class="h-8" data-alt="Sleek, high-contrast logo of a cybersecurity firm specializing in penetration testing and cloud security." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB23QdtHg8zpNn31zYG92SDX8romuqW3v4bZVtlMzYujZwnVhof7hWZwhigzks_6GjCO8tAsDvT_YedxHf1NMhrx8C0WkWk9Qi-YPCFhkQy3av3ifS2jUbXS8q-URtGFuALpq8oGD-XoXJUlvGjjlLx_I_ZAn3dwM8m-P2-jGzl2UOqGwxwtStXuKng3iwlsJojWFQEeRu2dZBkK0azg9E1HG9v6rofu7owA885B6-5lTsLa5nxps4-Kg"/>
<img class="h-8" data-alt="Modern geometric logo for a technical software development studio, rendered in flat vector lines." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVrKl4wV_lvQQcf8mrR8RKSe7Fzt35VLXDWQhv16eTRRtUnLVdHN4BHGqjNWpHJROKJbzqJlyoL2xuUepDY1lbAsANYWEXBqMxnivPtqpbvCoHe1BZESO1XCYILdWipjylWr42kKNXO6XnrAygzEKAH4xjTpuicZb4j8I4_uVMkbUFoe4NIeWTgDg-L9mbc5H15oiBwi4NYmWH0yi8SJTdLWnnxAckwd-BWbqlLI2cIg7iCFmswx2hrg"/>
<img class="h-8" data-alt="A futuristic, typography-based logo for a high-end data infrastructure company using bold industrial fonts." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA341rUbNGH01raQPqzmXzaybXwkOE3w_H9BryeVa7Nsz6giEsxspYDKEeWX2rvw96-xtBL85c25zMa_lYpC707Me4g9TsQ7pqzExiE_iWfZqGDUyyqZ5cN75-GeFc4NPLgcyK0IWBzYVLTGbsUfktmksNDeXmsU5B8kzOSd2WkKRL4UU0vA7OBKM7FMJ6wOdP9zSeNklStZEVonzTUyJ084AdCyolKXcnB7q6XlV-B9etdTbJVPhZ7XA"/>
<img class="h-8" data-alt="Technical logo for a distributed systems company with abstract network nodes and sharp geometric shapes." src="https://lh3.googleusercontent.com/aida-public/AB6AXuALdfYsbqDma2-ddFKA132CswKh93nw7ggGUIcZlJGaMaiz6oYWPBiOZefWJU50fNg6E61F4raX4DIXTJIwQSgKXNtv7xnis_nTsCB7R8vQHpNcJfHVUC65pmIYX7w-TwKhfn_8bpKHXVryQIuyhn_hHxcNipTPny5GDk1tg2lJENQwOt-guiowoXSCaVMs6cPJx_3BgtH5Smbc2Mkpzpf001ynS0AGfoDpC82QRMIRsF7-aOqTtVCMVQ"/>
</div>
</div>
</section>
<!-- How It Works -->
<section class="max-w-container-max mx-auto px-margin-safe py-section-v">
<div class="text-center mb-20">
<h2 class="font-headline-md text-headline-md text-xanthous mb-2">OPERATIONAL FLOW</h2>
<h3 class="font-display-lg text-display-lg">THREE STEPS TO TOTAL SECURITY</h3>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Step 1 -->
<div class="border border-grid-dot p-10 bg-surface-container-low hover:bg-surface-container transition-colors">
<div class="font-technical-xs text-technical-xs text-signal mb-4">01 // INGESTION</div>
<h4 class="font-headline-md text-headline-md mb-4">Upload ZIP</h4>
<p class="font-body-md text-body-md text-on-surface-variant mb-8">Connect your repo or upload a direct ZIP of your codebase. We handle legacy and AI-generated scripts instantly.</p>
<div class="h-32 w-full bg-ink flex items-center justify-center border border-line-mute">
<span class="material-symbols-outlined text-signal text-5xl">upload_file</span>
</div>
</div>
<!-- Step 2 -->
<div class="border border-grid-dot p-10 bg-surface-container-low hover:bg-surface-container transition-colors">
<div class="font-technical-xs text-technical-xs text-signal mb-4">02 // ANALYSIS</div>
<h4 class="font-headline-md text-headline-md mb-4">Scan for CWE</h4>
<p class="font-body-md text-body-md text-on-surface-variant mb-8">Our proprietary LLM-aware scanner maps code flows to the Common Weakness Enumeration database.</p>
<div class="h-32 w-full bg-ink flex items-center justify-center border border-line-mute">
<span class="material-symbols-outlined text-signal text-5xl">security_update_good</span>
</div>
</div>
<!-- Step 3 -->
<div class="border border-grid-dot p-10 bg-surface-container-low hover:bg-surface-container transition-colors">
<div class="font-technical-xs text-technical-xs text-signal mb-4">03 // RESOLUTION</div>
<h4 class="font-headline-md text-headline-md mb-4">Auto-fix</h4>
<p class="font-body-md text-body-md text-on-surface-variant mb-8">Review the proposed patches and merge them with a single click or CLI command. Ship with confidence.</p>
<div class="h-32 w-full bg-ink flex items-center justify-center border border-line-mute">
<span class="material-symbols-outlined text-signal text-5xl">build_circle</span>
</div>
</div>
</div>
</section>
<!-- Before/After Visualization -->
<section class="bg-surface-container-highest py-section-v border-y border-line-mute relative overflow-hidden">
<div class="max-w-container-max mx-auto px-margin-safe relative z-10">
<div class="flex flex-col lg:flex-row gap-20 items-center">
<div class="lg:w-1/2">
<h2 class="font-display-lg text-display-lg mb-6">SEE THE <span class="text-xanthous">TRANSFORMATION</span></h2>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-8">
                            Legacy security tools just tell you what's broken. ArcSec shows you exactly how to fix it, maintaining your coding style while hardening the logic.
                        </p>
<ul class="space-y-4">
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-signal mt-1">check_circle</span>
<span class="font-technical-sm text-technical-sm">Eliminate SQL Injection in generated Python scripts.</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-signal mt-1">check_circle</span>
<span class="font-technical-sm text-technical-sm">Patch Cross-Site Scripting (XSS) in frontend components.</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-signal mt-1">check_circle</span>
<span class="font-technical-sm text-technical-sm">Secure sensitive data leaking through API endpoints.</span>
</li>
</ul>
</div>
<div class="lg:w-1/2 w-full">
<div class="bg-ink border border-line-mute p-6 rounded shadow-2xl">
<div class="flex justify-between items-center mb-4 border-b border-line-mute pb-4">
<span class="font-technical-xs text-technical-xs text-on-surface-variant">VULNERABILITY_FIX_V2.JS</span>
<span class="bg-signal/10 text-signal px-2 py-0.5 font-technical-xs text-technical-xs border border-signal/20">CRITICAL CWE-89</span>
</div>
<div class="font-technical-sm text-technical-sm text-on-surface space-y-1">
<div class="opacity-40">11 const query = `SELECT * FROM users WHERE id = ${req.body.id}`;</div>
<div class="code-line-removed text-error">12 // DANGEROUS: Direct template literal injection</div>
<div class="code-line-added text-xanthous">13 const query = 'SELECT * FROM users WHERE id = ?';</div>
<div class="code-line-added text-xanthous">14 db.execute(query, [req.body.id], (err, results) =&gt; {</div>
<div class="opacity-40">15   if (err) throw err;</div>
<div class="opacity-40">16   res.send(results);</div>
<div class="code-line-added text-xanthous">17 });</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Final CTA -->
<section class="max-w-container-max mx-auto px-margin-safe py-section-v text-center relative">
<div class="relative z-10 py-20 border-2 border-dashed border-signal/30">
<h2 class="font-display-xl text-display-xl mb-6">STOP TRIAGING.<br/><span class="text-xanthous">START SHIPPING.</span></h2>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-12">
                    Join over 5,000 security-first teams using ArcSec to automate their supply chain security.
                </p>
<div class="flex justify-center">
<button class="bg-signal text-paper border-1.5 border-ink font-technical-sm text-technical-sm px-16 py-6 hard-shadow-ink btn-hover-active transition-all text-xl uppercase tracking-widest">
                        Get Started For Free
                    </button>
</div>
<p class="mt-8 font-technical-xs text-technical-xs text-on-surface-variant">No credit card required. First 1,000 scans are on us.</p>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-background border-t border-line-mute pt-section-v pb-12">
<div class="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-safe max-w-container-max mx-auto py-16">
<div class="flex flex-col gap-6">
<span class="font-display-lg text-display-lg text-signal">ARCSEC<span class="text-signal">.</span></span>
<p class="font-technical-xs text-technical-xs text-on-surface-variant">SECURE BY DEFAULT. FORGED IN CODE.</p>
<div class="flex gap-4">
<a class="text-on-surface-variant hover:text-signal transition-colors" href="#"><span class="material-symbols-outlined">terminal</span></a>
<a class="text-on-surface-variant hover:text-signal transition-colors" href="#"><span class="material-symbols-outlined">code</span></a>
<a class="text-on-surface-variant hover:text-signal transition-colors" href="#"><span class="material-symbols-outlined">hub</span></a>
</div>
</div>
<div>
<h5 class="font-technical-sm text-technical-sm text-on-surface mb-6 font-bold uppercase tracking-widest">Protocol</h5>
<ul class="space-y-4 font-body-md text-body-md text-on-surface-variant">
<li><a class="hover:text-on-surface transition-colors" href="#">CWE Compliance</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">OWASP Top 10</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">SCA Integration</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">SAST Engine</a></li>
</ul>
</div>
<div>
<h5 class="font-technical-sm text-technical-sm text-on-surface mb-6 font-bold uppercase tracking-widest">Terminal</h5>
<ul class="space-y-4 font-body-md text-body-md text-on-surface-variant">
<li><a class="hover:text-on-surface transition-colors" href="#">Documentation</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">Terminal Access</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">API Keys</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">CLI Download</a></li>
</ul>
</div>
<div>
<h5 class="font-technical-sm text-technical-sm text-on-surface mb-6 font-bold uppercase tracking-widest">Legal</h5>
<ul class="space-y-4 font-body-md text-body-md text-on-surface-variant">
<li><a class="hover:text-on-surface transition-colors" href="#">Privacy Policy</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">Terms of Service</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">Security Disclosure</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">Cookie Prefs</a></li>
</ul>
</div>
</div>
<div class="max-w-container-max mx-auto px-margin-safe border-t border-line-mute pt-8 flex flex-col md:row justify-between items-center gap-4">
<span class="font-technical-xs text-technical-xs text-on-surface-variant">© 2024 ARCSEC SYSTEMS. ALL RIGHTS RESERVED.</span>
<div class="flex gap-8 grayscale opacity-40">
<img class="h-6" data-alt="A small, stylized security badge logo representing ISO 27001 certification." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsreJaVezMEYcR9hTZYpXs9l8N_b7_wJ5h00Eo1La4ZdSCbY-FoOJXAOKdLs_S9tPblthuOoxPcHuglsKg-q9p-4O8ZOh5YH_T2lH4-xdmc0vwuxjenk6PsPBrQ_ph-EWLz0K4WRviPZry6VX82xwIbM8aEuCMrCz5KqYw6yQ7H82fdyXhrbuUMDGGlE_JSJl-UtRieJwaw90TGHVn0480IyotA2qd5eA3Y3QzJGE24UPeHPucB221Pg"/>
<img class="h-6" data-alt="A small, stylized SOC 2 Type II compliance badge with professional technical typography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIzTvx_yR3sOIuGAtNqX2-nrXEAs9_ZG-ghNclKHwUihuZJ-9n_xpUxMx_uWSJktjna065ROyj5ensTvprJ5C32_KVFHkiB5JXrg1akGwBm3uem8bTy_ZnfqCL9jw35pql8ide-zTWuV8_aA4xCdXP6-WXNYS64bx2RtI5chfY0MpLMN4Fhwl08vKGRay0r0zlJ0hHC2r7j8TEOtrFayhT2uvfUATJH84sqxmI87xxf8WYfLzBaWdw2A"/>
</div>
</div>
</footer>
<script>
        // Micro-interactions for the "terminal" simulation
        document.addEventListener('DOMContentLoaded', () => {
            const terminalLines = document.querySelectorAll('.bg-ink/50 p');
            terminalLines.forEach((line, index) => {
                line.style.opacity = '0';
                setTimeout(() => {
                    line.style.opacity = '1';
                    line.classList.add('transition-opacity', 'duration-500');
                }, index * 800);
            });
        });
    </script>
</body></html>

<!-- Sign Up | ArcSec (New Palette) -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>ArcSec | Join the Network</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&amp;family=Inter:wght@400;700&amp;family=JetBrains+Mono:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        :root {
            --grid-dot-size: 1.5px;
            --grid-gap: 28px;
        }
        body {
            background-color: #131313;
            background-image: radial-gradient(circle, #393939 1.5px, transparent 1.5px);
            background-size: var(--grid-gap) var(--grid-gap);
            background-attachment: fixed;
            color: #e5e2e1;
        }
        .hard-shadow {
            box-shadow: 6px 6px 0px 0px #0e0e0e;
        }
        .btn-primary-hover:hover {
            box-shadow: 3px 4px 0px 0px #780116;
        }
        .signal-glow {
            box-shadow: 0 0 15px rgba(247, 181, 56, 0.2);
        }
        /* Custom scrollbar for technical feel */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #131313; }
        ::-webkit-scrollbar-thumb { background: #393939; }
    </style>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-tertiary-fixed-variant": "#194972",
                    "on-tertiary": "#003256",
                    "error": "#ffb4ab",
                    "tertiary": "#a0cafa",
                    "on-surface-variant": "#e0bfbd",
                    "gold": "#f7b538",
                    "on-error-container": "#ffdad6",
                    "on-secondary-fixed": "#281900",
                    "error-container": "#93000a",
                    "primary": "#ffb3b1",
                    "surface": "#131313",
                    "on-secondary-container": "#402a00",
                    "surface-container-low": "#1c1b1b",
                    "surface-bright": "#393939",
                    "surface-tint": "#ffb3b1",
                    "on-tertiary-container": "#7ca6d4",
                    "ink": "#0e0e0e",
                    "background": "#131313",
                    "tertiary-fixed-dim": "#a0cafa",
                    "surface-container-lowest": "#0e0e0e",
                    "surface-container-high": "#2a2a2a",
                    "on-primary-fixed": "#410007",
                    "on-primary-container": "#ff797a",
                    "on-primary": "#680011",
                    "on-primary-fixed-variant": "#8c1522",
                    "secondary-container": "#c68b00",
                    "secondary": "#f7b538",
                    "tertiary-fixed": "#d0e4ff",
                    "on-tertiary-fixed": "#001d34",
                    "on-surface": "#e5e2e1",
                    "paper": "#e5e2e1",
                    "surface-variant": "#353534",
                    "surface-container-highest": "#353534",
                    "primary-container": "#780116",
                    "secondary-fixed-dim": "#f7b538",
                    "inverse-surface": "#e5e2e1",
                    "on-secondary-fixed-variant": "#5f4100",
                    "primary-fixed": "#ffdad8",
                    "signal": "#f7b538",
                    "burgundy": "#780116",
                    "outline": "#a78a89",
                    "line-mute": "#584140",
                    "on-background": "#e5e2e1",
                    "inverse-primary": "#ae2f37",
                    "outline-variant": "#584140",
                    "primary-fixed-dim": "#ffb3b1",
                    "surface-dim": "#131313",
                    "on-secondary": "#432c00",
                    "tertiary-container": "#003b63",
                    "secondary-fixed": "#ffdeac",
                    "on-error": "#690005",
                    "surface-container": "#201f1f",
                    "inverse-on-surface": "#313030",
                    "grid-dot": "#393939"
            },
            "spacing": {
                    "unit": "8px",
                    "container-max": "1240px",
                    "margin-safe": "40px",
                    "gutter": "24px",
                    "section-v": "110px"
            },
            "fontFamily": {
                    "technical-sm": ["JetBrains Mono"],
                    "label-caps": ["JetBrains Mono"],
                    "body-lg": ["Inter"],
                    "headline-md": ["Bebas Neue"],
                    "display-lg": ["Bebas Neue"],
                    "body-md": ["Inter"],
                    "technical-xs": ["JetBrains Mono"],
                    "display-xl": ["Bebas Neue"]
            },
            "fontSize": {
                    "technical-sm": ["13px", {"lineHeight": "1.4", "fontWeight": "500"}],
                    "label-caps": ["10px", {"lineHeight": "1", "fontWeight": "700"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-md": ["32px", {"lineHeight": "1.1", "fontWeight": "400"}],
                    "display-lg": ["48px", {"lineHeight": "0.95", "fontWeight": "400"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "technical-xs": ["11px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "display-xl": ["76px", {"lineHeight": "0.95", "letterSpacing": "-0.02em", "fontWeight": "400"}]
            }
          },
        },
      }
    </script>
</head>
<body class="flex flex-col min-h-screen">
<!-- Top App Bar -->
<header class="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-line-mute h-16">
<div class="flex justify-between items-center w-full px-margin-safe h-full max-w-container-max mx-auto">
<div class="flex items-center gap-4">
<span class="font-display-lg text-display-lg tracking-tighter text-on-background uppercase">Arcsec<span class="text-signal">.</span></span>
<span class="hidden md:inline-block font-technical-xs text-technical-xs bg-signal/10 text-signal px-2 py-0.5 border border-signal/20">V2.4.0-STABLE</span>
</div>
<div class="flex items-center gap-8">
<nav class="hidden md:flex gap-6">
<a class="text-on-surface-variant font-technical-sm text-technical-sm hover:text-signal transition-colors" href="#">Product</a>
<a class="text-on-surface-variant font-technical-sm text-technical-sm hover:text-signal transition-colors" href="#">Docs</a>
<a class="text-on-surface-variant font-technical-sm text-technical-sm hover:text-signal transition-colors" href="#">Wall of Fixes</a>
</nav>
<button class="bg-ink text-on-surface px-4 py-2 font-technical-sm text-technical-sm border-[1.5px] border-ink transition-all active:scale-95 btn-primary-hover">
                    Deploy Scan
                </button>
</div>
</div>
</header>
<main class="flex-grow flex items-center justify-center px-4 pt-20 pb-12 relative overflow-hidden">
<!-- Background Atmospheric Element -->
<div class="absolute -top-24 -right-24 w-96 h-96 border border-line-mute/30 rounded-full opacity-20 pointer-events-none"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen opacity-10 pointer-events-none">
</div>
<!-- AUTH CARD -->
<div class="relative w-full max-w-md">
<!-- Technical Tag -->
<div class="absolute -top-6 left-0 bg-burgundy text-paper px-3 py-1 font-technical-xs text-technical-xs border border-burgundy z-10">
                AUTH_PROTOCOL: SECURE_ENROLL
            </div>
<div class="bg-surface-container border border-line-mute p-8 md:p-10 relative hard-shadow">
<!-- Branding & Title -->
<div class="mb-10 text-center md:text-left">
<h1 class="font-display-xl text-display-xl mb-2 text-on-surface">JOIN ARCSEC</h1>
<p class="font-technical-sm text-technical-sm text-signal uppercase tracking-widest">
                        Secure your build in seconds.
                    </p>
</div>
<!-- Form -->
<form class="space-y-6" onsubmit="return false">
<!-- Email Field -->
<div class="space-y-2">
<label class="block font-label-caps text-label-caps text-on-surface-variant tracking-tighter" for="email">
                            NETWORK_IDENTIFIER (EMAIL)
                        </label>
<div class="relative group">
<input class="w-full bg-surface-container-high border border-line-mute text-on-surface font-technical-sm text-technical-sm p-4 focus:ring-0 focus:border-signal focus:outline-none transition-all placeholder:opacity-40" id="email" placeholder="developer@arcsec.systems" type="email"/>
<span class="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant opacity-50 group-focus-within:text-signal group-focus-within:opacity-100 transition-all">
                                alternate_email
                            </span>
</div>
</div>
<!-- Password Field -->
<div class="space-y-2">
<label class="block font-label-caps text-label-caps text-on-surface-variant tracking-tighter" for="password">
                            ACCESS_KEY (PASSWORD)
                        </label>
<div class="relative group">
<input class="w-full bg-surface-container-high border border-line-mute text-on-surface font-technical-sm text-technical-sm p-4 focus:ring-0 focus:border-signal focus:outline-none transition-all placeholder:opacity-40" id="password" placeholder="••••••••••••" type="password"/>
<span class="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant opacity-50 group-focus-within:text-signal group-focus-within:opacity-100 transition-all">
                                vpn_key
                            </span>
</div>
</div>
<!-- Primary Action -->
<div class="pt-2">
<button class="w-full bg-burgundy text-paper py-4 font-headline-md text-headline-md tracking-wider border-[1.5px] border-burgundy hover:bg-transparent hover:text-burgundy transition-all duration-200 active:scale-[0.98]">
                            INITIALIZE ACCOUNT
                        </button>
</div>
<!-- Divider -->
<div class="flex items-center gap-4 py-2">
<div class="h-[1px] flex-grow bg-line-mute"></div>
<span class="font-technical-xs text-technical-xs text-on-surface-variant/40">OR</span>
<div class="h-[1px] flex-grow bg-line-mute"></div>
</div>
<!-- SSO Action -->
<button class="w-full bg-ink text-on-surface py-4 flex items-center justify-center gap-3 font-technical-sm text-technical-sm border-[1.5px] border-ink btn-primary-hover transition-all">
<img alt="Google Icon" class="w-5 h-5 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjjVSPALEf1JWyYjfcKT4mueCFSr_k61bhqI0kSpmzMSFK2vckhrSFFIJKRfvB6hqF_xXC-rNTyxtybU45Yi7TKALVW5VPxXvjAftg6jMjV1ulGzO7wKtTFmecRdovqN9Ay0yQoBnbQGRLJdAbEQl_4bCdKSjl45og6VG1kmTWSmHXfjrpkEYjBdryKjOz-eWGD9NPHsM3l7HxHvWLryrbQIfl-RRZNAyZ14le-1UkD4x0ZTwpodB46g"/>
                        CONTINUE WITH GOOGLE
                    </button>
</form>
<!-- Footer Text -->
<div class="mt-10 border-t border-line-mute/30 pt-6">
<p class="font-body-md text-body-md text-on-surface-variant text-center">
                        Already authenticated? <a class="text-signal font-bold hover:underline" href="#">Log in here</a>
</p>
</div>
</div>
<!-- Card Metadata -->
<div class="mt-4 flex justify-between items-center px-2">
<span class="font-technical-xs text-technical-xs text-on-surface-variant/50">SEC_LEVEL: ALPHA</span>
<span class="font-technical-xs text-technical-xs text-on-surface-variant/50">ENC: AES-256-GCM</span>
</div>
</div>
</main>
<!-- Footer -->
<footer class="border-t border-line-mute bg-background">
<div class="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-safe max-w-container-max mx-auto py-16">
<div class="md:col-span-1">
<span class="font-display-lg text-display-lg text-on-background uppercase">Arcsec<span class="text-signal">.</span></span>
<p class="font-technical-xs text-technical-xs text-on-surface-variant mt-4 leading-relaxed">
                    © 2024 ARCSEC SYSTEMS. SECURE BY DEFAULT.
                </p>
</div>
<div class="md:col-span-1">
<h4 class="font-label-caps text-label-caps text-on-surface mb-4">Resources</h4>
<ul class="space-y-2">
<li><a class="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">CWE Compliance</a></li>
<li><a class="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">OWASP Top 10</a></li>
</ul>
</div>
<div class="md:col-span-1">
<h4 class="font-label-caps text-label-caps text-on-surface mb-4">Legal</h4>
<ul class="space-y-2">
<li><a class="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">Privacy Policy</a></li>
<li><a class="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div class="md:col-span-1">
<h4 class="font-label-caps text-label-caps text-on-surface mb-4">System</h4>
<ul class="space-y-2">
<li><a class="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">Terminal Access</a></li>
<li><a class="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">Node Status</a></li>
</ul>
</div>
</div>
</footer>
<script>
        // Micro-interaction: Focus effect
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.parentElement.classList.add('signal-glow');
            });
            input.addEventListener('blur', () => {
                input.parentElement.parentElement.classList.remove('signal-glow');
            });
        });

        // Simple button press simulation
        const primaryBtn = document.querySelector('button.bg-burgundy');
        if(primaryBtn) {
            primaryBtn.addEventListener('mousedown', () => {
                primaryBtn.style.transform = 'translate(2px, 2px)';
            });
            primaryBtn.addEventListener('mouseup', () => {
                primaryBtn.style.transform = 'translate(0px, 0px)';
            });
        }
    </script>
</body></html>

<!-- ArcSec | Find. Fix. Ship. (V2 - New Palette) -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>ARCSEC. | AI-BUILDER SECURITY</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&amp;family=Bebas+Neue&amp;family=Inter:wght@400;500;700&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue:wght@100..900&amp;family=Inter:wght@100..900&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-container-highest": "#373430",
                    "line-mute": "#5B564C",
                    "on-tertiary-fixed-variant": "#3d4568",
                    "surface": "#131313",
                    "on-primary-fixed-variant": "#891d00",
                    "ink": "#0e0e0e",
                    "background": "#131313",
                    "inverse-on-surface": "#33302b",
                    "on-primary-fixed": "#3c0800",
                    "on-background": "#e8e1da",
                    "on-error-container": "#ffdad6",
                    "primary-fixed": "#ffdbd2",
                    "on-tertiary": "#262e51",
                    "tertiary": "#bdc4ef",
                    "on-primary": "#ffffff",
                    "surface-tint": "#780116",
                    "grid-dot": "#393939",
                    "paper": "#F5F0E6",
                    "on-primary-container": "#550f00",
                    "secondary-fixed": "#ffdeaa",
                    "surface-container": "#1c1b1b",
                    "on-surface": "#e8e1da",
                    "primary-container": "#780116",
                    "surface-container-lowest": "#0e0e0e",
                    "inverse-surface": "#e8e1da",
                    "secondary-fixed-dim": "#f7b538",
                    "signal": "#780116",
                    "on-secondary-container": "#fff7f0",
                    "on-secondary-fixed-variant": "#5f4100",
                    "tertiary-fixed-dim": "#bdc4ef",
                    "outline": "#aa8982",
                    "on-tertiary-container": "#202849",
                    "outline-variant": "#5a413a",
                    "error": "#ffb4ab",
                    "on-secondary": "#131313",
                    "primary": "#780116",
                    "on-surface-variant": "#e3beb6",
                    "primary-fixed-dim": "#780116",
                    "surface-container-low": "#1c1b1b",
                    "surface-variant": "#393939",
                    "error-container": "#93000a",
                    "tertiary-fixed": "#dde1ff",
                    "on-tertiary-fixed": "#11193a",
                    "tertiary-container": "#878fb7",
                    "gold": "#f7b538",
                    "surface-bright": "#393939",
                    "secondary": "#f7b538",
                    "surface-container-high": "#2c2a25",
                    "on-secondary-fixed": "#271900",
                    "on-error": "#690005",
                    "inverse-primary": "#b32a02",
                    "surface-dim": "#131313",
                    "secondary-container": "#976a00"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "section-v": "110px",
                    "unit": "8px",
                    "container-max": "1240px",
                    "gutter": "24px",
                    "margin-safe": "40px"
            },
            "fontFamily": {
                    "technical-xs": ["JetBrains Mono"],
                    "technical-sm": ["JetBrains Mono"],
                    "display-xl": ["Bebas Neue"],
                    "display-lg": ["Bebas Neue"],
                    "display-xl-mobile": ["Bebas Neue"],
                    "body-md": ["Inter"],
                    "headline-md": ["Bebas Neue"],
                    "display-lg-mobile": ["Bebas Neue"],
                    "body-lg": ["Inter"]
            },
            "fontSize": {
                    "technical-xs": ["11px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "technical-sm": ["13px", {"lineHeight": "1.4", "fontWeight": "500"}],
                    "display-xl": ["76px", {"lineHeight": "0.95", "letterSpacing": "-0.02em", "fontWeight": "400"}],
                    "display-lg": ["48px", {"lineHeight": "0.95", "letterSpacing": "-0.01em", "fontWeight": "400"}],
                    "display-xl-mobile": ["48px", {"lineHeight": "1.0", "fontWeight": "400"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-md": ["32px", {"lineHeight": "1.1", "fontWeight": "400"}],
                    "display-lg-mobile": ["32px", {"lineHeight": "1.0", "fontWeight": "400"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .bg-grid-dot {
            background-image: radial-gradient(circle, #393939 1px, transparent 1px);
        }
        .hard-shadow-signal {
            box-shadow: 4px 4px 0px 0px #780116;
        }
        .hard-shadow-ink {
            box-shadow: 4px 4px 0px 0px #0e0e0e;
        }
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
        }
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body class="bg-surface text-on-surface font-body-md bg-grid-dot bg-[length:28px_28px] selection:bg-signal selection:text-paper">
<!-- TopNavBar -->
<nav class="w-full sticky top-0 z-50 bg-surface dark:bg-surface border-b border-line-mute shadow-[4px_4px_0px_0px_rgba(14,14,14,1)]">
<div class="max-w-[1240px] mx-auto px-margin-safe flex items-center justify-between h-20">
<div class="font-display-lg text-display-lg text-on-surface dark:text-on-surface tracking-tighter">ARCSEC.</div>
<div class="hidden md:flex gap-gutter items-center">
<a class="font-technical-sm text-technical-sm uppercase tracking-wider text-signal font-bold border-b-2 border-signal pb-1 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-150" href="#">Product</a>
<a class="font-technical-sm text-technical-sm uppercase tracking-wider text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-150" href="#">Docs</a>
<a class="font-technical-sm text-technical-sm uppercase tracking-wider text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-150" href="#">Wall of Fixes</a>
</div>
<button class="bg-signal text-paper px-6 py-2 font-technical-sm uppercase font-bold hard-shadow-ink hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all">
                Deploy Scan
            </button>
</div>
</nav>
<!-- Hero Section -->
<section class="max-w-[1240px] mx-auto px-margin-safe pt-24 pb-section-v flex flex-col items-center text-center">
<div class="reveal active">
<h1 class="font-display-xl text-display-xl-mobile md:text-display-xl max-w-4xl mx-auto mb-6">
                AI-BUILDERS SHIP <span class="text-signal">VULNERABILITIES</span>.<br/>YOU SHIP THE FIXES.
            </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
                Automated security remediation for the generative era. Scan exports from Lovable, Bolt, and v0. Receive production-ready code diffs that patch SQLi, hardcoded secrets, and XSS instantly.
            </p>
<div class="flex flex-col sm:flex-row gap-gutter justify-center mb-20">
<button class="bg-signal text-paper px-8 py-4 font-technical-sm text-lg uppercase font-bold hard-shadow-ink hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 transition-all">
                    Scan your first project free
                </button>
<button class="border-2 border-line-mute text-on-surface px-8 py-4 font-technical-sm text-lg uppercase font-bold hover:bg-surface-bright transition-all">
                    View Docs
                </button>
</div>
</div>
<!-- Terminal Window Component -->
<div class="reveal w-full max-w-4xl bg-ink border border-line-mute hard-shadow-signal overflow-hidden text-left">
<div class="bg-surface-container-high border-b border-line-mute px-4 py-2 flex items-center justify-between">
<div class="flex gap-2">
<div class="w-3 h-3 rounded-full bg-line-mute"></div>
<div class="w-3 h-3 rounded-full bg-line-mute"></div>
<div class="w-3 h-3 rounded-full bg-line-mute"></div>
</div>
<div class="font-technical-xs text-on-surface-variant">terminal — arcsec-remediate.sh</div>
<div class="w-12"></div>
</div>
<div class="p-6 font-technical-sm text-on-surface leading-relaxed overflow-x-auto">
<div class="flex gap-4">
<span class="text-line-mute">01</span>
<span class="text-on-surface-variant">$ arcsec scan ./bolt-export-v4</span>
</div>
<div class="flex gap-4">
<span class="text-line-mute">02</span>
<span class="text-gold">INFO: Analyzing 42 files...</span>
</div>
<div class="flex gap-4">
<span class="text-line-mute">03</span>
<span class="text-signal font-bold uppercase">CRITICAL: SQL Injection found in /api/users.ts</span>
</div>
<div class="flex gap-4 mt-4">
<span class="text-line-mute">04</span>
<span class="text-on-surface-variant font-bold">--- remediation preview ---</span>
</div>
<div class="flex gap-4 bg-red-900/20 border-l-4 border-signal px-2">
<span class="text-line-mute">05</span>
<span class="text-signal opacity-70">- const user = await db.query(`SELECT * FROM users WHERE id = ${req.body.id}`);</span>
</div>
<div class="flex gap-4 bg-green-900/20 border-l-4 border-green-500 px-2">
<span class="text-line-mute">06</span>
<span class="text-green-500">+ const user = await db.query('SELECT * FROM users WHERE id = $1', [req.body.id]);</span>
</div>
<div class="flex gap-4 mt-4">
<span class="text-line-mute">07</span>
<span class="text-gold">SUCCESS: [REMEDIATION] applied. Project secure.</span>
</div>
<div class="flex gap-4">
<span class="text-line-mute">08</span>
<span class="animate-pulse">_</span>
</div>
</div>
</div>
</section>
<!-- Authority Band -->
<section class="reveal bg-surface-container-lowest border-y border-line-mute py-12 mb-section-v">
<div class="max-w-[1240px] mx-auto px-margin-safe">
<p class="font-technical-xs text-center uppercase tracking-[0.3em] text-on-surface-variant mb-8">Built for the generation of AI-Builders</p>
<div class="flex flex-wrap justify-center items-center gap-16 grayscale opacity-60">
<div class="font-display-lg text-on-surface">LOVABLE</div>
<div class="font-display-lg text-on-surface">BOLT.NEW</div>
<div class="font-display-lg text-on-surface">V0.DEV</div>
<div class="font-display-lg text-on-surface">CURSOR</div>
</div>
</div>
</section>
<!-- Feature/Comparison Grid -->
<section class="max-w-[1240px] mx-auto px-margin-safe mb-section-v">
<div class="reveal mb-16">
<h2 class="font-display-lg text-display-lg-mobile md:text-display-lg mb-4">ENGINEERING PRECISION</h2>
<p class="font-body-md text-on-surface-variant max-w-xl">Don't just find bugs. Solve them with technical structural integrity.</p>
</div>
<div class="reveal grid md:grid-cols-3 border border-line-mute divide-y md:divide-y-0 md:divide-x divide-line-mute">
<!-- Header Row -->
<div class="hidden md:block bg-surface-container-high p-4 font-technical-xs uppercase text-on-surface-variant border-b border-line-mute">Vulnerability Category</div>
<div class="hidden md:block bg-surface-container-high p-4 font-technical-xs uppercase text-on-surface-variant border-b border-line-mute">AI Gen Root Cause</div>
<div class="hidden md:block bg-surface-container-high p-4 font-technical-xs uppercase text-gold border-b border-line-mute">ArcSec Remediation</div>
<!-- Row 1 -->
<div class="p-6 md:p-8 flex flex-col gap-2">
<span class="md:hidden font-technical-xs text-on-surface-variant uppercase mb-2">Category</span>
<span class="font-headline-md text-on-surface">Injection Vectors</span>
</div>
<div class="p-6 md:p-8 flex flex-col gap-2 bg-surface-container-low">
<span class="md:hidden font-technical-xs text-on-surface-variant uppercase mb-2">Root Cause</span>
<p class="font-body-md italic text-on-surface-variant">"LLMs often prefer string interpolation for readability over parameterized queries."</p>
</div>
<div class="p-6 md:p-8 flex flex-col gap-4 border-l-2 border-signal">
<span class="md:hidden font-technical-xs text-gold uppercase mb-2">ArcSec Fix</span>
<div class="font-technical-sm bg-ink p-3 rounded">
<span class="text-gold">Auto-injects prepared statements and ORM sanitation logic.</span>
</div>
</div>
<!-- Row 2 -->
<div class="p-6 md:p-8 flex flex-col gap-2">
<span class="md:hidden font-technical-xs text-on-surface-variant uppercase mb-2">Category</span>
<span class="font-headline-md text-on-surface">Secret Leakage</span>
</div>
<div class="p-6 md:p-8 flex flex-col gap-2 bg-surface-container-low">
<span class="md:hidden font-technical-xs text-on-surface-variant uppercase mb-2">Root Cause</span>
<p class="font-body-md italic text-on-surface-variant">"Hardcoded keys in generated React components for 'rapid prototyping' speed."</p>
</div>
<div class="p-6 md:p-8 flex flex-col gap-4 border-l-2 border-signal">
<span class="md:hidden font-technical-xs text-gold uppercase mb-2">ArcSec Fix</span>
<div class="font-technical-sm bg-ink p-3 rounded">
<span class="text-gold">Extracts to .env, adds .gitignore, and rotates compromised keys.</span>
</div>
</div>
<!-- Row 3 -->
<div class="p-6 md:p-8 flex flex-col gap-2">
<span class="md:hidden font-technical-xs text-on-surface-variant uppercase mb-2">Category</span>
<span class="font-headline-md text-on-surface">Auth Bypass</span>
</div>
<div class="p-6 md:p-8 flex flex-col gap-2 bg-surface-container-low">
<span class="md:hidden font-technical-xs text-on-surface-variant uppercase mb-2">Root Cause</span>
<p class="font-body-md italic text-on-surface-variant">"Incomplete middleware logic in route exports leads to unprotected API endpoints."</p>
</div>
<div class="p-6 md:p-8 flex flex-col gap-4 border-l-2 border-signal">
<span class="md:hidden font-technical-xs text-gold uppercase mb-2">ArcSec Fix</span>
<div class="font-technical-sm bg-ink p-3 rounded">
<span class="text-gold">Standardizes JWT/Session validation across all exported routes.</span>
</div>
</div>
</div>
</section>
<!-- Detailed Feature Section with Bento Feel -->
<section class="max-w-[1240px] mx-auto px-margin-safe mb-section-v">
<div class="grid md:grid-cols-12 gap-gutter">
<div class="reveal md:col-span-8 bg-surface-container border border-line-mute p-10 flex flex-col justify-between min-h-[400px]">
<div>
<div class="font-technical-xs text-gold uppercase mb-4 tracking-widest">Core Engine</div>
<h3 class="font-display-lg text-display-lg-mobile md:text-display-lg mb-6">REAL-TIME PATCHING FOR AI OUTPUTS</h3>
<p class="font-body-lg text-on-surface-variant max-w-xl">ArcSec doesn't just bark. It bites back at vulnerabilities. Our engine understands the context of AI-generated code and applies semantic patches that preserve your app's logic while hardening its shell.</p>
</div>
<div class="mt-10 flex gap-4 overflow-x-auto pb-4">
<span class="bg-surface-bright border border-line-mute px-4 py-2 font-technical-xs uppercase text-gold">CWE Compliance</span>
<span class="bg-surface-bright border border-line-mute px-4 py-2 font-technical-xs uppercase text-gold">OWASP Top 10</span>
<span class="bg-surface-bright border border-line-mute px-4 py-2 font-technical-xs uppercase text-gold">Snyk Integration</span>
<span class="bg-surface-bright border border-line-mute px-4 py-2 font-technical-xs uppercase text-gold">Github Actions</span>
</div>
</div>
<div class="reveal md:col-span-4 bg-signal p-10 flex flex-col justify-center items-center text-center text-paper hard-shadow-ink">
<span class="material-symbols-outlined text-6xl mb-6 text-gold" style="font-variation-settings: 'FILL' 1;">terminal</span>
<h3 class="font-display-lg mb-2">CLI FIRST</h3>
<p class="font-technical-sm uppercase opacity-90">Deep integration for terminal power users.</p>
<div class="mt-8 bg-ink text-left p-4 font-technical-xs w-full text-gold opacity-80 border border-gold/20">
                    $ npm install -g @arcsec/cli
                </div>
</div>
</div>
</section>
<!-- Closing CTA -->
<section class="reveal max-w-[1240px] mx-auto px-margin-safe mb-section-v">
<div class="bg-surface-container-highest p-12 md:p-24 border border-line-mute text-center flex flex-col items-center">
<h2 class="font-display-xl text-display-xl-mobile md:text-display-xl mb-6">STOP TRIAGING.<br/>START SHIPPING.</h2>
<p class="font-body-lg text-on-surface-variant max-w-2xl mb-12">
                Join 1,200+ security-conscious developers who use ArcSec to secure their AI-generated prototypes before they hit production.
            </p>
<button class="bg-signal text-paper px-12 py-5 font-technical-sm text-xl uppercase font-bold hard-shadow-ink hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 transition-all">
                Scan your project now — free
            </button>
<p class="mt-8 font-technical-xs text-gold uppercase opacity-70">No credit card required. Scan up to 10k lines/mo.</p>
</div>
</section>
<!-- Footer -->
<footer class="w-full border-t border-line-mute bg-grid-dot bg-[length:28px_28px]">
<div class="max-w-[1240px] mx-auto px-margin-safe py-section-v flex flex-col md:flex-row justify-between gap-gutter">
<div class="flex flex-col gap-4">
<div class="font-display-md text-headline-md text-on-surface uppercase">ARCSEC.</div>
<p class="font-technical-xs text-technical-xs text-on-surface-variant max-w-xs">
                    © 2024 ArcSec. All rights reserved. Secure by Default. Designed for the high-velocity builder.
                </p>
</div>
<div class="grid grid-cols-2 md:grid-cols-3 gap-8">
<div class="flex flex-col gap-3">
<span class="font-technical-xs text-gold uppercase mb-2">Compliance</span>
<a class="font-technical-xs text-technical-xs text-on-surface-variant hover:text-gold transition-colors" href="#">CWE Compliance</a>
<a class="font-technical-xs text-technical-xs text-on-surface-variant hover:text-gold transition-colors" href="#">OWASP Top 10</a>
</div>
<div class="flex flex-col gap-3">
<span class="font-technical-xs text-gold uppercase mb-2">Product</span>
<a class="font-technical-xs text-technical-xs text-on-surface-variant hover:text-gold transition-colors" href="#">Terminal Access</a>
<a class="font-technical-xs text-technical-xs text-on-surface-variant hover:text-gold transition-colors" href="#">Wall of Fixes</a>
</div>
<div class="flex flex-col gap-3">
<span class="font-technical-xs text-gold uppercase mb-2">Legal</span>
<a class="font-technical-xs text-technical-xs text-on-surface-variant hover:text-gold transition-colors" href="#">Privacy Policy</a>
<a class="font-technical-xs text-technical-xs text-on-surface-variant hover:text-gold transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
<script>
        // Scroll Reveal Implementation
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((el) => {
            observer.observe(el);
        });

        // Simple terminal typing effect simulation or micro-interactions
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                // Subtle feedback handled by Tailwind hover classes
            });
        });
    </script>
</body></html>

<!-- ArcSec | Secure your AI-built apps (Updated Logo - New Palette) -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>ArcSec | Secure AI-Driven Development</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&amp;family=Inter:wght@400;700&amp;family=JetBrains+Mono:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-tertiary-fixed-variant": "#3d4568",
                        "on-tertiary": "#262e51",
                        "error": "#ffb4ab",
                        "tertiary": "#bdc4ef",
                        "on-surface-variant": "#e3beb6",
                        "gold": "#f7b538", // Xanthous for highlights/technical
                        "on-error-container": "#ffdad6",
                        "on-secondary-fixed": "#271900",
                        "error-container": "#93000a",
                        "primary": "#ffb4a2",
                        "surface": "#131313", // Updated from DESIGN_SYSTEM_1
                        "on-secondary-container": "#fff7f0",
                        "surface-container-low": "#1c1b1b", // Updated from DESIGN_SYSTEM_1
                        "surface-bright": "#393939", // Updated from DESIGN_SYSTEM_1
                        "surface-tint": "#ffb4a2",
                        "on-tertiary-container": "#202849",
                        "ink": "#0e0e0e", // surface-container-lowest
                        "background": "#131313", // surface
                        "tertiary-fixed-dim": "#bdc4ef",
                        "surface-container-lowest": "#0e0e0e",
                        "surface-container-high": "#2c2a25",
                        "on-primary-fixed": "#3c0800",
                        "on-primary-container": "#550f00",
                        "on-primary": "#611200",
                        "on-primary-fixed-variant": "#891d00",
                        "secondary-container": "#976a00",
                        "secondary": "#f7b538", // Xanthous
                        "tertiary-fixed": "#dde1ff",
                        "on-tertiary-fixed": "#11193a",
                        "on-surface": "#e8e2db",
                        "paper": "#F5F0E6",
                        "surface-variant": "#373430",
                        "surface-container-highest": "#373430",
                        "primary-container": "#780116", // Burgundy
                        "secondary-fixed-dim": "#f7b538",
                        "inverse-surface": "#e8e2db",
                        "on-secondary-fixed-variant": "#5f4100",
                        "primary-fixed": "#ffdbd2",
                        "signal": "#780116", // Burgundy
                        "outline": "#aa8982",
                        "line-mute": "#393939", // surface-bright
                        "on-background": "#e8e2db",
                        "inverse-primary": "#b32a02",
                        "outline-variant": "#5a413a",
                        "primary-fixed-dim": "#ffb4a2",
                        "surface-dim": "#131313",
                        "on-secondary": "#422c00",
                        "tertiary-container": "#878fb7",
                        "secondary-fixed": "#ffdeaa",
                        "on-error": "#690005",
                        "surface-container": "#211f1b",
                        "inverse-on-surface": "#33302c",
                        "grid-dot": "#393939",
                        "xanthous": "#f7b538",
                        "burgundy": "#780116"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "unit": "8px",
                        "container-max": "1240px",
                        "margin-safe": "40px",
                        "gutter": "24px",
                        "section-v": "110px"
                    },
                    "fontFamily": {
                        "technical-sm": ["JetBrains Mono"],
                        "label-caps": ["JetBrains Mono"],
                        "body-lg": ["Inter"],
                        "headline-md": ["Bebas Neue"],
                        "display-lg": ["Bebas Neue"],
                        "body-md": ["Inter"],
                        "technical-xs": ["JetBrains Mono"],
                        "display-xl": ["Bebas Neue"]
                    },
                    "fontSize": {
                        "technical-sm": ["13px", {"lineHeight": "1.4", "fontWeight": "500"}],
                        "label-caps": ["10px", {"lineHeight": "1", "fontWeight": "700"}],
                        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "headline-md": ["32px", {"lineHeight": "1.1", "fontWeight": "400"}],
                        "display-lg": ["48px", {"lineHeight": "0.95", "fontWeight": "400"}],
                        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "technical-xs": ["11px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600"}],
                        "display-xl": ["76px", {"lineHeight": "0.95", "letterSpacing": "-0.02em", "fontWeight": "400"}]
                    }
                }
            }
        }
    </script>
<style>
        body {
            background-color: #131313;
            background-image: radial-gradient(#393939 1px, transparent 1px);
            background-size: 28px 28px;
        }
        .hard-shadow {
            box-shadow: 4px 4px 0px 0px #780116; /* Burgundy */
        }
        .hard-shadow-ink {
            box-shadow: 4px 4px 0px 0px #0e0e0e;
        }
        .btn-hover-active:hover {
            transform: translate(-2px, -2px);
            box-shadow: 6px 6px 0px 0px #780116;
        }
        .btn-hover-active:active {
            transform: translate(1px, 1px);
            box-shadow: 2px 2px 0px 0px #780116;
        }
        .code-line-added { background-color: rgba(247, 181, 56, 0.1); border-left: 3px solid #f7b538; }
        .code-line-removed { background-color: rgba(120, 1, 22, 0.1); border-left: 3px solid #780116; }
    </style>
</head>
<body class="text-on-background font-body-md overflow-x-hidden">
<!-- TopNavBar -->
<header class="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-line-mute">
<div class="flex justify-between items-center w-full px-margin-safe h-16 max-w-container-max mx-auto">
<div class="flex items-center gap-8">
<span class="font-display-lg text-display-lg tracking-tighter text-on-background">ARCSEC<span class="text-signal">.</span></span>
<nav class="hidden md:flex gap-6">
<a class="text-signal font-bold border-b-2 border-signal pb-1 font-technical-sm text-technical-sm" href="#">Product</a>
<a class="text-on-surface-variant hover:text-signal transition-colors duration-200 font-technical-sm text-technical-sm" href="#">Docs</a>
<a class="text-on-surface-variant hover:text-signal transition-colors duration-200 font-technical-sm text-technical-sm" href="#">Wall of Fixes</a>
</nav>
</div>
<button class="bg-signal text-paper font-technical-sm text-technical-sm px-6 py-2 border-1.5 border-ink hard-shadow-ink hover:scale-95 transition-transform">
                Deploy Scan
            </button>
</div>
</header>
<main class="pt-24">
<!-- Hero Section -->
<section class="max-w-container-max mx-auto px-margin-safe py-section-v flex flex-col items-center text-center">
<div class="inline-block px-3 py-1 bg-burgundy/10 border border-burgundy mb-8">
<span class="font-technical-xs text-technical-xs text-xanthous">SECURITY V2.4.0-STABLE</span>
</div>
<h1 class="font-display-xl text-display-xl mb-6 max-w-4xl">
                AI-BUILDERS <span class="text-signal">SHIP VULNERABILITIES.</span><br/>
                YOU SHIP THE FIXES.
            </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">
                The first terminal-centric security layer built for the era of generated code. Stop triaging endless alerts—ArcSec patches CWEs before they hit production.
            </p>
<div class="flex flex-col md:flex-row gap-6">
<button class="bg-ink text-paper border-1.5 border-ink font-technical-sm text-technical-sm px-10 py-4 hard-shadow btn-hover-active transition-all">
                    Scan your first project free
                </button>
<button class="border border-line-mute px-10 py-4 font-technical-sm text-technical-sm hover:bg-surface-bright transition-colors">
                    View terminal demo
                </button>
</div>
<!-- Hero Diagram -->
<div class="mt-20 w-full max-w-4xl aspect-[16/9] relative border border-line-mute bg-surface-container-low overflow-hidden p-8 hard-shadow-ink">
<div class="relative z-10 font-technical-sm text-technical-sm text-left text-on-surface-variant h-full flex flex-col">
<div class="flex gap-2 mb-4">
<div class="w-3 h-3 rounded-full bg-burgundy"></div>
<div class="w-3 h-3 rounded-full bg-xanthous"></div>
<div class="w-3 h-3 rounded-full bg-line-mute"></div>
</div>
<div class="flex-1 bg-ink/50 border border-line-mute p-4 overflow-hidden">
<p class="text-xanthous">$ arcsec init</p>
<p class="text-on-surface opacity-50">Initializing secure tunnel...</p>
<p class="text-on-surface opacity-50">Analyzing dependency tree...</p>
<p class="text-xanthous">WARNING: Detected 12 critical CWE vulnerabilities in generated/ai-models/v1.ts</p>
<p class="text-on-surface">Running automated fix sequence...</p>
<div class="mt-4 p-2 border border-burgundy/30 bg-burgundy/5">
<span class="text-burgundy">[REMEDIATION]</span> Applied BufferOverflow protection to line 142.
                        </div>
</div>
</div>
</div>
</section>
<!-- Social Proof -->
<section class="border-y border-line-mute bg-surface-container-low py-12">
<div class="max-w-container-max mx-auto px-margin-safe">
<p class="text-center font-technical-xs text-technical-xs text-on-surface-variant uppercase tracking-widest mb-8">Trusted by leading AI labs and security firms</p>
<div class="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60">
<img class="h-8" data-alt="Logo 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuNsJfXFlkLsaZQIYRBlRt3lxxvNcWT1OQhhYzkzCzZqSLiQWaCDpjTFQSvWgZY1DYuFLWzNJcgMH0I0-UOXMtAIdHoGUvPi6slqOpw561NniFfG67BDL9ECNyTVlyyv6sVVJk7j2jlJl1RE90ka00IfqcN-C3aWmALnGRTUvxaF_gvPz4rpu9EcHoJDPgBc4bIYA2ZR9Am33iLjPBDiCGvt-YPNkw5p6NEvRuPs_-6AKerft6SfNdsQ"/>
<img class="h-8" data-alt="Logo 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB23QdtHg8zpNn31zYG92SDX8romuqW3v4bZVtlMzYujZwnVhof7hWZwhigzks_6GjCO8tAsDvT_YedxHf1NMhrx8C0WkWk9Qi-YPCFhkQy3av3ifS2jUbXS8q-URtGFuALpq8oGD-XoXJUlvGjjlLx_I_ZAn3dwM8m-P2-jGzl2UOqGwxwtStXuKng3iwlsJojWFQEeRu2dZBkK0azg9E1HG9v6rofu7owA885B6-5lTsLa5nxps4-Kg"/>
<img class="h-8" data-alt="Logo 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVrKl4wV_lvQQcf8mrR8RKSe7Fzt35VLXDWQhv16eTRRtUnLVdHN4BHGqjNWpHJROKJbzqJlyoL2xuUepDY1lbAsANYWEXBqMxnivPtqpbvCoHe1BZESO1XCYILdWipjylWr42kKNXO6XnrAygzEKAH4xjTpuicZb4j8I4_uVMkbUFoe4NIeWTgDg-L9mbc5H15oiBwi4NYmWH0yi8SJTdLWnnxAckwd-BWbqlLI2cIg7iCFmswx2hrg"/>
<img class="h-8" data-alt="Logo 4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA341rUbNGH01raQPqzmXzaybXwkOE3w_H9BryeVa7Nsz6giEsxspYDKEeWX2rvw96-xtBL85c25zMa_lYpC707Me4g9TsQ7pqzExiE_iWfZqGDUyyqZ5cN75-GeFc4NPLgcyK0IWBzYVLTGbsUfktmksNDeXmsU5B8kzOSd2WkKRL4UU0vA7OBKM7FMJ6wOdP9zSeNklStZEVonzTUyJ084AdCyolKXcnB7q6XlV-B9etdTbJVPhZ7XA"/>
<img class="h-8" data-alt="Logo 5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALdfYsbqDma2-ddFKA132CswKh93nw7ggGUIcZlJGaMaiz6oYWPBiOZefWJU50fNg6E61F4raX4DIXTJIwQSgKXNtv7xnis_nTsCB7R8vQHpNcJfHVUC65pmIYX7w-TwKhfn_8bpKHXVryQIuyhn_hHxcNipTPny5GDk1tg2lJENQwOt-guiowoXSCaVMs6cPJx_3BgtH5Smbc2Mkpzpf001ynS0AGfoDpC82QRMIRsF7-aOqTtVCMVQ"/>
</div>
</div>
</section>
<!-- How It Works -->
<section class="max-w-container-max mx-auto px-margin-safe py-section-v">
<div class="text-center mb-20">
<h2 class="font-headline-md text-headline-md text-xanthous mb-2">OPERATIONAL FLOW</h2>
<h3 class="font-display-lg text-display-lg">THREE STEPS TO TOTAL SECURITY</h3>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Step 1 -->
<div class="border border-grid-dot p-10 bg-surface-container-low hover:bg-surface-bright transition-colors">
<div class="font-technical-xs text-technical-xs text-xanthous mb-4">01 // INGESTION</div>
<h4 class="font-headline-md text-headline-md mb-4">Upload ZIP</h4>
<p class="font-body-md text-body-md text-on-surface-variant mb-8">Connect your repo or upload a direct ZIP of your codebase. We handle legacy and AI-generated scripts instantly.</p>
<div class="h-32 w-full bg-ink flex items-center justify-center border border-line-mute">
<span class="material-symbols-outlined text-xanthous text-5xl">upload_file</span>
</div>
</div>
<!-- Step 2 -->
<div class="border border-grid-dot p-10 bg-surface-container-low hover:bg-surface-bright transition-colors">
<div class="font-technical-xs text-technical-xs text-xanthous mb-4">02 // ANALYSIS</div>
<h4 class="font-headline-md text-headline-md mb-4">Scan for CWE</h4>
<p class="font-body-md text-body-md text-on-surface-variant mb-8">Our proprietary LLM-aware scanner maps code flows to the Common Weakness Enumeration database.</p>
<div class="h-32 w-full bg-ink flex items-center justify-center border border-line-mute">
<span class="material-symbols-outlined text-xanthous text-5xl">security_update_good</span>
</div>
</div>
<!-- Step 3 -->
<div class="border border-grid-dot p-10 bg-surface-container-low hover:bg-surface-bright transition-colors">
<div class="font-technical-xs text-technical-xs text-xanthous mb-4">03 // RESOLUTION</div>
<h4 class="font-headline-md text-headline-md mb-4">Auto-fix</h4>
<p class="font-body-md text-body-md text-on-surface-variant mb-8">Review the proposed patches and merge them with a single click or CLI command. Ship with confidence.</p>
<div class="h-32 w-full bg-ink flex items-center justify-center border border-line-mute">
<span class="material-symbols-outlined text-xanthous text-5xl">build_circle</span>
</div>
</div>
</div>
</section>
<!-- Before/After Visualization -->
<section class="bg-surface-container-low py-section-v border-y border-line-mute relative overflow-hidden">
<div class="max-w-container-max mx-auto px-margin-safe relative z-10">
<div class="flex flex-col lg:flex-row gap-20 items-center">
<div class="lg:w-1/2">
<h2 class="font-display-lg text-display-lg mb-6">SEE THE <span class="text-signal">TRANSFORMATION</span></h2>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-8">
                            Legacy security tools just tell you what's broken. ArcSec shows you exactly how to fix it, maintaining your coding style while hardening the logic.
                        </p>
<ul class="space-y-4">
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-signal mt-1">check_circle</span>
<span class="font-technical-sm text-technical-sm">Eliminate SQL Injection in generated Python scripts.</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-signal mt-1">check_circle</span>
<span class="font-technical-sm text-technical-sm">Patch Cross-Site Scripting (XSS) in frontend components.</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-signal mt-1">check_circle</span>
<span class="font-technical-sm text-technical-sm">Secure sensitive data leaking through API endpoints.</span>
</li>
</ul>
</div>
<div class="lg:w-1/2 w-full">
<div class="bg-ink border border-line-mute p-6 rounded shadow-2xl">
<div class="flex justify-between items-center mb-4 border-b border-line-mute pb-4">
<span class="font-technical-xs text-technical-xs text-on-surface-variant">VULNERABILITY_FIX_V2.JS</span>
<span class="bg-burgundy text-white px-2 py-0.5 font-technical-xs text-technical-xs">CRITICAL CWE-89</span>
</div>
<div class="font-technical-sm text-technical-sm text-on-surface space-y-1">
<div class="opacity-40">11 const query = `SELECT * FROM users WHERE id = ${req.body.id}`;</div>
<div class="code-line-removed text-burgundy">12 // DANGEROUS: Direct template literal injection</div>
<div class="code-line-added text-xanthous">13 const query = 'SELECT * FROM users WHERE id = ?';</div>
<div class="code-line-added text-xanthous">14 db.execute(query, [req.body.id], (err, results) =&gt; {</div>
<div class="opacity-40">15   if (err) throw err;</div>
<div class="opacity-40">16   res.send(results);</div>
<div class="code-line-added text-xanthous">17 });</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Final CTA -->
<section class="max-w-container-max mx-auto px-margin-safe py-section-v text-center relative">
<div class="relative z-10 py-20 border-2 border-dashed border-burgundy/30">
<h2 class="font-display-xl text-display-xl mb-6">STOP TRIAGING.<br/><span class="text-signal">START SHIPPING.</span></h2>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-12">
                    Join over 5,000 security-first teams using ArcSec to automate their supply chain security.
                </p>
<div class="flex justify-center">
<button class="bg-signal text-paper border-1.5 border-ink font-technical-sm text-technical-sm px-16 py-6 hard-shadow-ink btn-hover-active transition-all text-xl uppercase tracking-widest">
                        Get Started For Free
                    </button>
</div>
<p class="mt-8 font-technical-xs text-technical-xs text-on-surface-variant">No credit card required. First 1,000 scans are on us.</p>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-background border-t border-line-mute pt-section-v pb-12">
<div class="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-safe max-w-container-max mx-auto py-16">
<div class="flex flex-col gap-6">
<span class="font-display-lg text-display-lg text-signal">ARCSEC<span class="text-signal">.</span></span>
<p class="font-technical-xs text-technical-xs text-on-surface-variant">SECURE BY DEFAULT. FORGED IN CODE.</p>
<div class="flex gap-4">
<a class="text-on-surface-variant hover:text-signal transition-colors" href="#"><span class="material-symbols-outlined">terminal</span></a>
<a class="text-on-surface-variant hover:text-signal transition-colors" href="#"><span class="material-symbols-outlined">code</span></a>
<a class="text-on-surface-variant hover:text-signal transition-colors" href="#"><span class="material-symbols-outlined">hub</span></a>
</div>
</div>
<div>
<h5 class="font-technical-sm text-technical-sm text-on-surface mb-6 font-bold uppercase tracking-widest">Protocol</h5>
<ul class="space-y-4 font-body-md text-body-md text-on-surface-variant">
<li><a class="hover:text-on-surface transition-colors" href="#">CWE Compliance</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">OWASP Top 10</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">SCA Integration</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">SAST Engine</a></li>
</ul>
</div>
<div>
<h5 class="font-technical-sm text-technical-sm text-on-surface mb-6 font-bold uppercase tracking-widest">Terminal</h5>
<ul class="space-y-4 font-body-md text-body-md text-on-surface-variant">
<li><a class="hover:text-on-surface transition-colors" href="#">Documentation</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">Terminal Access</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">API Keys</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">CLI Download</a></li>
</ul>
</div>
<div>
<h5 class="font-technical-sm text-technical-sm text-on-surface mb-6 font-bold uppercase tracking-widest">Legal</h5>
<ul class="space-y-4 font-body-md text-body-md text-on-surface-variant">
<li><a class="hover:text-on-surface transition-colors" href="#">Privacy Policy</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">Terms of Service</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">Security Disclosure</a></li>
<li><a class="hover:text-on-surface transition-colors" href="#">Cookie Prefs</a></li>
</ul>
</div>
</div>
<div class="max-w-container-max mx-auto px-margin-safe border-t border-line-mute pt-8 flex flex-col md:row justify-between items-center gap-4">
<span class="font-technical-xs text-technical-xs text-on-surface-variant">© 2024 ARCSEC SYSTEMS. ALL RIGHTS RESERVED.</span>
<div class="flex gap-8 grayscale opacity-40">
<img class="h-6" data-alt="Cert 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsreJaVezMEYcR9hTZYpXs9l8N_b7_wJ5h00Eo1La4ZdSCbY-FoOJXAOKdLs_S9tPblthuOoxPcHuglsKg-q9p-4O8ZOh5YH_T2lH4-xdmc0vwuxjenk6PsPBrQ_ph-EWLz0K4WRviPZry6VX82xwIbM8aEuCMrCz5KqYw6yQ7H82fdyXhrbuUMDGGlE_JSJl-UtRieJwaw90TGHVn0480IyotA2qd5eA3Y3QzJGE24UPeHPucB221Pg"/>
<img class="h-6" data-alt="Cert 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIzTvx_yR3sOIuGAtNqX2-nrXEAs9_ZG-ghNclKHwUihuZJ-9n_xpUxMx_uWSJktjna065ROyj5ensTvprJ5C32_KVFHkiB5JXrg1akGwBm3uem8bTy_ZnfqCL9jw35pql8ide-zTWuV8_aA4xCdXP6-WXNYS64bx2RtI5chfY0MpLMN4Fhwl08vKGRay0r0zlJ0hHC2r7j8TEOtrFayhT2uvfUATJH84sqxmI87xxf8WYfLzBaWdw2A"/>
</div>
</div>
</footer>
<script>
        document.addEventListener('DOMContentLoaded', () => {
            const terminalLines = document.querySelectorAll('.bg-ink/50 p');
            terminalLines.forEach((line, index) => {
                line.style.opacity = '0';
                setTimeout(() => {
                    line.style.opacity = '1';
                    line.classList.add('transition-opacity', 'duration-500');
                }, index * 800);
            });
        });
    </script>
</body></html>

<!-- Sign Up | ArcSec (Updated Logo - New Palette) -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>ArcSec | Join the Network</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&amp;family=Inter:wght@400;700&amp;family=JetBrains+Mono:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        :root {
            --grid-dot-size: 1.5px;
            --grid-gap: 28px;
        }
        body {
            background-color: #131313;
            background-image: radial-gradient(circle, #393939 1.5px, transparent 1.5px);
            background-size: var(--grid-gap) var(--grid-gap);
            background-attachment: fixed;
            color: #e8e1da;
        }
        .hard-shadow {
            box-shadow: 6px 6px 0px 0px #0e0e0e;
        }
        .btn-primary-hover:hover {
            box-shadow: 3px 4px 0px 0px #780116;
        }
        .signal-glow {
            box-shadow: 0 0 15px rgba(120, 1, 22, 0.2);
        }
        /* Custom scrollbar for technical feel */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #131313; }
        ::-webkit-scrollbar-thumb { background: #5B564C; }
    </style>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-tertiary-fixed-variant": "#3d4568",
                    "on-tertiary": "#262e51",
                    "error": "#ffb4ab",
                    "tertiary": "#bdc4ef",
                    "on-surface-variant": "#e3beb6",
                    "gold": "#f7b538",
                    "on-error-container": "#ffdad6",
                    "on-secondary-fixed": "#271900",
                    "error-container": "#93000a",
                    "primary": "#780116",
                    "surface": "#131313",
                    "on-secondary-container": "#fff7f0",
                    "surface-container-low": "#1c1b1b",
                    "surface-bright": "#393939",
                    "surface-tint": "#780116",
                    "on-tertiary-container": "#202849",
                    "ink": "#0e0e0e",
                    "background": "#131313",
                    "tertiary-fixed-dim": "#bdc4ef",
                    "surface-container-lowest": "#0e0e0e",
                    "surface-container-high": "#2c2a25",
                    "on-primary-fixed": "#3c0800",
                    "on-primary-container": "#ffdad6",
                    "on-primary": "#ffffff",
                    "on-primary-fixed-variant": "#891d00",
                    "secondary-container": "#976a00",
                    "secondary": "#f7b538",
                    "tertiary-fixed": "#dde1ff",
                    "on-tertiary-fixed": "#11193a",
                    "on-surface": "#e8e1da",
                    "paper": "#F5F0E6",
                    "surface-variant": "#373430",
                    "surface-container-highest": "#373430",
                    "primary-container": "#780116",
                    "secondary-fixed-dim": "#f7b538",
                    "inverse-surface": "#e8e1da",
                    "on-secondary-fixed-variant": "#5f4100",
                    "primary-fixed": "#ffdbd2",
                    "signal": "#780116",
                    "outline": "#aa8982",
                    "line-mute": "#5B564C",
                    "on-background": "#e8e1da",
                    "inverse-primary": "#b32a02",
                    "outline-variant": "#5a413a",
                    "primary-fixed-dim": "#780116",
                    "surface-dim": "#131313",
                    "on-secondary": "#422c00",
                    "tertiary-container": "#878fb7",
                    "secondary-fixed": "#ffdeaa",
                    "on-error": "#690005",
                    "surface-container": "#211f1b",
                    "inverse-on-surface": "#33302c",
                    "grid-dot": "#393939",
                    "xanthous": "#f7b538"
            },
            "spacing": {
                    "unit": "8px",
                    "container-max": "1240px",
                    "margin-safe": "40px",
                    "gutter": "24px",
                    "section-v": "110px"
            },
            "fontFamily": {
                    "technical-sm": ["JetBrains Mono"],
                    "label-caps": ["JetBrains Mono"],
                    "body-lg": ["Inter"],
                    "headline-md": ["Bebas Neue"],
                    "display-lg": ["Bebas Neue"],
                    "body-md": ["Inter"],
                    "technical-xs": ["JetBrains Mono"],
                    "display-xl": ["Bebas Neue"]
            },
            "fontSize": {
                    "technical-sm": ["13px", {"lineHeight": "1.4", "fontWeight": "500"}],
                    "label-caps": ["10px", {"lineHeight": "1", "fontWeight": "700"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-md": ["32px", {"lineHeight": "1.1", "fontWeight": "400"}],
                    "display-lg": ["48px", {"lineHeight": "0.95", "fontWeight": "400"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "technical-xs": ["11px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "display-xl": ["76px", {"lineHeight": "0.95", "letterSpacing": "-0.02em", "fontWeight": "400"}]
            }
          },
        },
      }
    </script>
</head>
<body class="flex flex-col min-h-screen">
<!-- Top App Bar -->
<header class="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-line-mute h-16">
<div class="flex justify-between items-center w-full px-margin-safe h-full max-w-container-max mx-auto">
<div class="flex items-center gap-4">
<span class="font-display-lg text-display-lg tracking-tighter text-on-background uppercase">Arcsec<span class="text-signal">.</span></span>
<span class="hidden md:inline-block font-technical-xs text-technical-xs bg-xanthous/10 text-xanthous px-2 py-0.5 border border-xanthous/20 uppercase">V2.4.0-STABLE</span>
</div>
<div class="flex items-center gap-8">
<nav class="hidden md:flex gap-6">
<a class="text-on-surface-variant font-technical-sm text-technical-sm hover:text-xanthous transition-colors" href="#">Product</a>
<a class="text-on-surface-variant font-technical-sm text-technical-sm hover:text-xanthous transition-colors" href="#">Docs</a>
<a class="text-on-surface-variant font-technical-sm text-technical-sm hover:text-xanthous transition-colors" href="#">Wall of Fixes</a>
</nav>
<button class="bg-ink text-paper px-4 py-2 font-technical-sm text-technical-sm border-[1.5px] border-ink transition-all active:scale-95 btn-primary-hover">
                    Deploy Scan
                </button>
</div>
</div>
</header>
<main class="flex-grow flex items-center justify-center px-4 pt-20 pb-12 relative overflow-hidden">
<!-- Background Atmospheric Element -->
<div class="absolute -top-24 -right-24 w-96 h-96 border border-line-mute/30 rounded-full opacity-20 pointer-events-none"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen opacity-10 pointer-events-none">
</div>
<!-- AUTH CARD -->
<div class="relative w-full max-w-md">
<!-- Technical Tag -->
<div class="absolute -top-6 left-0 bg-ink text-xanthous px-3 py-1 font-technical-xs text-technical-xs border border-line-mute z-10">
                AUTH_PROTOCOL: SECURE_ENROLL
            </div>
<div class="bg-surface-container-low border border-line-mute p-8 md:p-10 relative hard-shadow">
<!-- Branding & Title -->
<div class="mb-10 text-center md:text-left">
<h1 class="font-display-xl text-display-xl mb-2 text-on-surface">JOIN ARCSEC</h1>
<p class="font-technical-sm text-technical-sm text-xanthous uppercase tracking-widest">
                        Secure your build in seconds.
                    </p>
</div>
<!-- Form -->
<form class="space-y-6" onsubmit="return false">
<!-- Email Field -->
<div class="space-y-2">
<label class="block font-label-caps text-label-caps text-on-surface-variant tracking-tighter" for="email">
                            NETWORK_IDENTIFIER (EMAIL)
                        </label>
<div class="relative group">
<input class="w-full bg-surface-container-high border border-line-mute text-on-surface font-technical-sm text-technical-sm p-4 focus:ring-0 focus:border-xanthous focus:outline-none transition-all placeholder:opacity-40" id="email" placeholder="developer@arcsec.systems" type="email"/>
<span class="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant opacity-50 group-focus-within:text-xanthous group-focus-within:opacity-100 transition-all">
                                alternate_email
                            </span>
</div>
</div>
<!-- Password Field -->
<div class="space-y-2">
<label class="block font-label-caps text-label-caps text-on-surface-variant tracking-tighter" for="password">
                            ACCESS_KEY (PASSWORD)
                        </label>
<div class="relative group">
<input class="w-full bg-surface-container-high border border-line-mute text-on-surface font-technical-sm text-technical-sm p-4 focus:ring-0 focus:border-xanthous focus:outline-none transition-all placeholder:opacity-40" id="password" placeholder="••••••••••••" type="password"/>
<span class="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant opacity-50 group-focus-within:text-xanthous group-focus-within:opacity-100 transition-all">
                                vpn_key
                            </span>
</div>
</div>
<!-- Primary Action -->
<div class="pt-2">
<button class="w-full bg-signal text-paper py-4 font-headline-md text-headline-md tracking-wider border-[1.5px] border-signal hover:bg-transparent hover:text-signal transition-all duration-200 active:scale-[0.98]">
                            INITIALIZE ACCOUNT
                        </button>
</div>
<!-- Divider -->
<div class="flex items-center gap-4 py-2">
<div class="h-[1px] flex-grow bg-line-mute"></div>
<span class="font-technical-xs text-technical-xs text-on-surface-variant/40">OR</span>
<div class="h-[1px] flex-grow bg-line-mute"></div>
</div>
<!-- SSO Action -->
<button class="w-full bg-ink text-paper py-4 flex items-center justify-center gap-3 font-technical-sm text-technical-sm border-[1.5px] border-ink btn-primary-hover transition-all">
<img alt="Google Icon" class="w-5 h-5 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjjVSPALEf1JWyYjfcKT4mueCFSr_k61bhqI0kSpmzMSFK2vckhrSFFIJKRfvB6hqF_xXC-rNTyxtybU45Yi7TKALVW5VPxXvjAftg6jMjV1ulGzO7wKtTFmecRdovqN9Ay0yQoBnbQGRLJdAbEQl_4bCdKSjl45og6VG1kmTWSmHXfjrpkEYjBdryKjOz-eWGD9NPHsM3l7HxHvWLryrbQIfl-RRZNAyZ14le-1UkD4x0ZTwpodB46g"/>
                        CONTINUE WITH GOOGLE
                    </button>
</form>
<!-- Footer Text -->
<div class="mt-10 border-t border-line-mute/30 pt-6">
<p class="font-body-md text-body-md text-on-surface-variant text-center">
                        Already authenticated? <a class="text-xanthous font-bold hover:underline" href="#">Log in here</a>
</p>
</div>
</div>
<!-- Card Metadata -->
<div class="mt-4 flex justify-between items-center px-2">
<span class="font-technical-xs text-technical-xs text-on-surface-variant/50">SEC_LEVEL: <span class="text-xanthous/70">ALPHA</span></span>
<span class="font-technical-xs text-technical-xs text-on-surface-variant/50">ENC: <span class="text-xanthous/70">AES-256-GCM</span></span>
</div>
</div>
</main>
<!-- Footer -->
<footer class="border-t border-line-mute bg-background">
<div class="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-safe max-w-container-max mx-auto py-16">
<div class="md:col-span-1">
<span class="font-display-lg text-display-lg text-on-background uppercase">Arcsec<span class="text-signal">.</span></span>
<p class="font-technical-xs text-technical-xs text-on-surface-variant mt-4 leading-relaxed">
                    © 2024 ARCSEC SYSTEMS. SECURE BY DEFAULT.
                </p>
</div>
<div class="md:col-span-1">
<h4 class="font-label-caps text-label-caps text-on-surface mb-4">Resources</h4>
<ul class="space-y-2">
<li><a class="font-body-md text-body-md text-on-surface-variant hover:text-xanthous transition-colors" href="#">CWE Compliance</a></li>
<li><a class="font-body-md text-body-md text-on-surface-variant hover:text-xanthous transition-colors" href="#">OWASP Top 10</a></li>
</ul>
</div>
<div class="md:col-span-1">
<h4 class="font-label-caps text-label-caps text-on-surface mb-4">Legal</h4>
<ul class="space-y-2">
<li><a class="font-body-md text-body-md text-on-surface-variant hover:text-xanthous transition-colors" href="#">Privacy Policy</a></li>
<li><a class="font-body-md text-body-md text-on-surface-variant hover:text-xanthous transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div class="md:col-span-1">
<h4 class="font-label-caps text-label-caps text-on-surface mb-4">System</h4>
<ul class="space-y-2">
<li><a class="font-body-md text-body-md text-on-surface-variant hover:text-xanthous transition-colors" href="#">Terminal Access</a></li>
<li><a class="font-body-md text-body-md text-on-surface-variant hover:text-xanthous transition-colors" href="#">Node Status</a></li>
</ul>
</div>
</div>
</footer>
<script>
        // Micro-interaction: Focus effect
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.parentElement.classList.add('signal-glow');
            });
            input.addEventListener('blur', () => {
                input.parentElement.parentElement.classList.remove('signal-glow');
            });
        });

        // Simple button press simulation
        const primaryBtn = document.querySelector('button.bg-signal');
        primaryBtn.addEventListener('mousedown', () => {
            primaryBtn.style.transform = 'translate(2px, 2px)';
        });
        primaryBtn.addEventListener('mouseup', () => {
            primaryBtn.style.transform = 'translate(0px, 0px)';
        });
    </script>
</body></html>

<!-- Login | ArcSec (Updated Logo - New Palette) -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>ArcSec | Terminal Access</title>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&amp;family=Inter:wght@400;700&amp;family=JetBrains+Mono:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        /* Custom Dotted Grid Background */
        .dotted-grid {
            background-image: radial-gradient(circle, var(--tw-colors-grid-dot) 1px, transparent 1px);
            background-size: 28px 28px;
            background-color: #131313;
        }
        /* Hard-Edge Elevation */
        .elevation-hard {
            box-shadow: 8px 8px 0px 0px #000000;
        }
        .btn-primary-hover:hover {
            box-shadow: 4px 4px 0px 0px #780116;
            transform: translate(-2px, -2px);
        }
        /* Custom cursor for terminal feel */
        .terminal-cursor::after {
            content: '_';
            animation: blink 1s step-end infinite;
        }
        @keyframes blink {
            50% { opacity: 0; }
        }
    </style>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-tertiary-fixed-variant": "#3d4568",
                    "on-tertiary": "#ffffff",
                    "error": "#ffb4ab",
                    "tertiary": "#bdc4ef",
                    "on-surface-variant": "#a1a1a1",
                    "gold": "#f7b538",
                    "xanthous": "#f7b538",
                    "on-error-container": "#ffdad6",
                    "on-secondary-fixed": "#271900",
                    "error-container": "#93000a",
                    "primary": "#780116",
                    "surface": "#131313",
                    "on-secondary-container": "#fff7f0",
                    "surface-container-low": "#1c1b1b",
                    "surface-bright": "#393939",
                    "surface-tint": "#780116",
                    "on-tertiary-container": "#202849",
                    "ink": "#000000",
                    "background": "#131313",
                    "tertiary-fixed-dim": "#bdc4ef",
                    "surface-container-lowest": "#0e0e0e",
                    "surface-container-high": "#2b2b2b",
                    "on-primary-fixed": "#3c0800",
                    "on-primary-container": "#ffffff",
                    "on-primary": "#ffffff",
                    "on-primary-fixed-variant": "#891d00",
                    "secondary-container": "#f7b538",
                    "secondary": "#f7b538",
                    "tertiary-fixed": "#dde1ff",
                    "on-tertiary-fixed": "#11193a",
                    "on-surface": "#e6e1e1",
                    "paper": "#ffffff",
                    "surface-variant": "#323232",
                    "surface-container-highest": "#373737",
                    "primary-container": "#780116",
                    "secondary-fixed-dim": "#f7b538",
                    "inverse-surface": "#e6e1e1",
                    "on-secondary-fixed-variant": "#5f4100",
                    "primary-fixed": "#ffdbd2",
                    "signal": "#780116",
                    "outline": "#4d4d4d",
                    "line-mute": "#4d4d4d",
                    "on-background": "#e6e1e1",
                    "inverse-primary": "#ffb4a2",
                    "outline-variant": "#323232",
                    "primary-fixed-dim": "#ffb4a2",
                    "surface-dim": "#131313",
                    "on-secondary": "#131313",
                    "tertiary-container": "#878fb7",
                    "secondary-fixed": "#f7b538",
                    "on-error": "#690005",
                    "surface-container": "#222222",
                    "inverse-on-surface": "#131313",
                    "grid-dot": "#323232"
            },
            "borderRadius": {
                    "DEFAULT": "0px",
                    "lg": "0px",
                    "xl": "0px",
                    "full": "0px"
            },
            "spacing": {
                    "unit": "8px",
                    "container-max": "1240px",
                    "margin-safe": "40px",
                    "gutter": "24px",
                    "section-v": "110px"
            },
            "fontFamily": {
                    "technical-sm": ["JetBrains Mono"],
                    "label-caps": ["JetBrains Mono"],
                    "body-lg": ["Inter"],
                    "headline-md": ["Bebas Neue"],
                    "display-lg": ["Bebas Neue"],
                    "body-md": ["Inter"],
                    "technical-xs": ["JetBrains Mono"],
                    "display-xl": ["Bebas Neue"]
            },
            "fontSize": {
                    "technical-sm": ["13px", {"lineHeight": "1.4", "fontWeight": "500"}],
                    "label-caps": ["10px", {"lineHeight": "1", "fontWeight": "700"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-md": ["32px", {"lineHeight": "1.1", "fontWeight": "400"}],
                    "display-lg": ["48px", {"lineHeight": "0.95", "fontWeight": "400"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "technical-xs": ["11px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "display-xl": ["76px", {"lineHeight": "0.95", "letterSpacing": "-0.02em", "fontWeight": "400"}]
            }
          },
        },
      }
    </script>
</head>
<body class="bg-background text-on-background font-body-md overflow-x-hidden dotted-grid min-h-screen flex flex-col">
<!-- Top Bar -->
<header class="w-full h-16 flex items-center px-margin-safe max-w-container-max mx-auto justify-between z-50">
<div class="font-display-lg text-display-lg tracking-tighter text-on-background uppercase">ARCSEC<span class="text-signal">.</span></div>
<div class="hidden md:block">
<span class="font-technical-xs text-technical-xs text-line-mute uppercase tracking-widest">
                System Status: <span class="text-secondary">Optimal</span>
</span>
</div>
</header>
<!-- Main Content Canvas -->
<main class="flex-grow flex items-center justify-center px-6 py-section-v">
<div class="relative w-full max-w-md">
<!-- Structural Decoration: Technical Corners -->
<div class="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-signal"></div>
<div class="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-signal"></div>
<!-- Auth Card -->
<div class="bg-surface-container border border-line-mute p-10 elevation-hard relative overflow-hidden">
<!-- Background Decoration: Tech Schematic Fade -->
<div class="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
<span class="material-symbols-outlined text-[120px]">security</span>
</div>
<!-- Header -->
<div class="mb-10">
<div class="font-technical-xs text-technical-xs text-secondary uppercase mb-2">Terminal Access</div>
<h1 class="font-headline-md text-headline-md uppercase">Initialize Session</h1>
<p class="font-body-md text-on-surface-variant mt-2 text-sm">Enter credentials to bypass secondary firewall.</p>
</div>
<!-- Form -->
<form class="space-y-6" id="loginForm">
<!-- Email Field -->
<div class="space-y-2">
<label class="font-label-caps text-label-caps uppercase text-on-surface-variant flex justify-between" for="email">
                            User Identifier
                            <span class="text-line-mute">[REQUIRED]</span>
</label>
<div class="relative">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-line-mute">
<span class="material-symbols-outlined text-sm">alternate_email</span>
</div>
<input class="w-full bg-surface-container-highest border border-line-mute py-3 pl-10 pr-4 font-technical-sm text-technical-sm text-on-surface placeholder:opacity-30 focus:outline-none focus:border-secondary focus:ring-0 transition-all duration-200" id="email" name="email" placeholder="operator@arcsec.sys" required="" type="email"/>
</div>
</div>
<!-- Password Field -->
<div class="space-y-2">
<label class="font-label-caps text-label-caps uppercase text-on-surface-variant flex justify-between" for="password">
                            Security Key
                            <span class="text-line-mute">[ENCRYPTED]</span>
</label>
<div class="relative">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-line-mute">
<span class="material-symbols-outlined text-sm">lock</span>
</div>
<input class="w-full bg-surface-container-highest border border-line-mute py-3 pl-10 pr-4 font-technical-sm text-technical-sm text-on-surface placeholder:opacity-30 focus:outline-none focus:border-secondary focus:ring-0 transition-all duration-200" id="password" name="password" placeholder="••••••••••••" required="" type="password"/>
</div>
</div>
<!-- Actions -->
<div class="pt-4 space-y-4">
<button class="w-full bg-signal text-on-primary font-label-caps text-label-caps uppercase py-4 border border-line-mute flex items-center justify-center gap-2 transition-all duration-200 btn-primary-hover active:scale-95" type="submit">
                            Sign In
                            <span class="material-symbols-outlined text-sm">login</span>
</button>
<div class="flex items-center justify-between mt-6">
<a class="font-technical-xs text-technical-xs text-on-surface-variant hover:text-secondary transition-colors uppercase decoration-secondary underline-offset-4 hover:underline" href="#">
                                Forgot password?
                            </a>
<div class="flex items-center gap-2">
<div class="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></div>
<span class="font-technical-xs text-technical-xs text-line-mute uppercase">Uplink Active</span>
</div>
</div>
</div>
</form>
<!-- Footer info inside card -->
<div class="mt-10 pt-6 border-t border-line-mute/30">
<p class="font-technical-xs text-technical-xs text-line-mute text-center">
                        AUTHORIZED PERSONNEL ONLY. ALL ACTIONS LOGGED.
                    </p>
</div>
</div>
<!-- Side Link: Signup -->
<div class="mt-8 text-center">
<p class="font-technical-sm text-technical-sm text-on-surface-variant">
                    First time at the terminal? 
                    <a class="text-secondary font-bold hover:underline underline-offset-2" href="#">Register credentials</a>
</p>
</div>
</div>
</main>
<!-- Global Footer -->
<footer class="w-full border-t border-line-mute pt-8 pb-12 mt-auto">
<div class="max-w-container-max mx-auto px-margin-safe flex flex-col md:flex-row justify-between items-center gap-6">
<div class="font-technical-xs text-technical-xs text-line-mute uppercase tracking-tighter">
                © 2024 ARCSEC SYSTEMS. SECURE BY DEFAULT.
            </div>
<div class="flex gap-8">
<a class="font-technical-xs text-technical-xs text-on-surface-variant hover:text-on-surface transition-colors uppercase" href="#">Terminal Access</a>
<a class="font-technical-xs text-technical-xs text-on-surface-variant hover:text-on-surface transition-colors uppercase" href="#">CWE Compliance</a>
<a class="font-technical-xs text-technical-xs text-on-surface-variant hover:text-on-surface transition-colors uppercase" href="#">Privacy</a>
</div>
</div>
</footer>
<!-- Atmosphere: Grainy Overlay -->
<div class="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
<script>
        // Micro-interaction for form submission
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button');
            const originalHtml = btn.innerHTML;
            
            btn.innerHTML = `
                <span class="animate-spin material-symbols-outlined text-sm">sync</span>
                AUTHENTICATING...
            `;
            btn.disabled = true;
            btn.classList.add('opacity-80');

            setTimeout(() => {
                btn.innerHTML = `
                    <span class="material-symbols-outlined text-sm text-secondary">check_circle</span>
                    GRANTED
                `;
                btn.classList.add('border-secondary', 'text-secondary');
                
                // Simulate redirect
                setTimeout(() => {
                    alert('Session established. Routing to dashboard...');
                    btn.innerHTML = originalHtml;
                    btn.disabled = false;
                    btn.classList.remove('opacity-80', 'border-secondary', 'text-secondary');
                }, 1000);
            }, 2000);
        });

        // Add a typewriter effect to the help text or similar
        const cursorEffect = () => {
            const subtitle = document.querySelector('p.font-body-md');
            if (subtitle) {
                subtitle.classList.add('terminal-cursor');
            }
        }
        window.onload = cursorEffect;
    </script>
</body></html>
