# VibeSec Architecture Decisions

This document records important technical and product decisions made during the development of VibeSec.

---

## ADR-001 — Repository Structure

**Date:** 2026-03-05

### Decision

Use a monorepo containing both the frontend and backend.

### Structure

VibeSec/

├── frontend/

├── backend/

└── docs/

### Reason

- Easier development for a single team.

- Frontend and backend evolve together.

- One Git repository simplifies version control.

- Easier deployment and onboarding.

### Status

✅ Accepted

---

## ADR-002 — Frontend Framework

**Date:** 2026-03-05

### Decision

Use Next.js with the App Router.

### Reason

- Excellent React ecosystem.

- Built-in routing.

- Great performance.

- Easy deployment.

- Strong TypeScript support.

### Status

✅ Accepted

---

## ADR-003 — Backend Framework

**Date:** 2026-03-05

### Decision

Use FastAPI.

### Reason

- Native Python ecosystem.

- Automatic API documentation.

- Excellent performance.

- Easy integration with AI libraries.

- Ideal for security scanning tools like Semgrep.

### Status

✅ Accepted

---

