# Salud Mental Itapúa — AGENTS.md

## Project Overview
Spanish-language mental health self-help website for the Itapúa Department, Paraguay.
Static frontend built with Vite + React (no backend, no database, no external services).

## Tech Stack
- **Runtime:** Node.js 22 (via `node:22-slim` in compose)
- **Framework:** Vite 6 + React 18
- **Package manager:** npm (no lockfile yet — `npm install` resolves on first boot)
- **Dev server:** `vite --host 0.0.0.0 --port 5173` (live reload enabled)

## Running the App
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
The web entry point is on host port 3000 (mapped to container port 5173).

## Structure
- `src/App.jsx` — main app with simple client-side page state (home, recursos, profesionales, emergencia)
- `src/components/` — Header, Hero, Resources, Professionals, Emergency, Footer
- No backend, no API, no database — purely a static frontend

## No External Credentials Required
This project has no external service dependencies.
