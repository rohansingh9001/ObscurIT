# ObscurIT

Privacy-first SaaS that automatically anonymizes sensitive information in images, documents, and videos. This repository is a small monorepo with a React + Vite frontend and a Django + DRF backend.

### Highlights (from PRODUCT.MD)
- Web Studio for manual uploads and interactive editing
- Developer API for automated single or bulk redaction
- AI detection for faces, license plates, text-based PII (emails, phones, addresses, SSNs, card numbers), and signatures
- Anonymization styles: blur, pixelate, blackout, placeholders
- Manual override tools, preview, batch processing, and flexible exports
- Security & privacy: encrypted in transit/at rest, retention windows, compliance-ready

## Project structure
```
obscur/
  backend/            # Django + DRF project (virtualenv in backend/.venv)
    config/           # Django settings and URLs
    api/              # Example API app (ping endpoint)
  frontend/           # React + Vite app (Tailwind CSS)
  PRODUCT.MD          # Product brief
  README.md
```

## Prerequisites
- Node.js 18+ and npm
- Python 3.11+ (newer 3.13 also works)
- macOS/Linux/WSL

## Quick start
Open two terminals: one for the backend API, one for the frontend web app.

### 1) Backend (Django + DRF)
```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install --upgrade pip setuptools wheel
pip install django djangorestframework django-cors-headers
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```
Verify API is up:
```bash
curl http://127.0.0.1:8000/api/ping/
# {"message":"pong"}
```
Key files:
- `backend/config/settings.py`: apps, DRF, CORS (`django-cors-headers`), SQLite DB
- `backend/config/urls.py`: includes `api/`
- `backend/api/urls.py`: `GET /api/ping/`
- `backend/api/views.py`: DRF view returning `{ "message": "pong" }`

### 2) Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev
```
Dev server: `http://localhost:5173/`
- Landing page uses Tailwind CSS.
- Playground calls the backend `/api/ping/` and shows the message.

Tailwind config:
- `postcss.config.js` uses `@tailwindcss/postcss`
- `tailwind.config.js` content includes `./index.html` and `./src/**/*.{js,ts,jsx,tsx}`
- Custom utilities and global styles are in `src/index.css` (grid background, spotlight, noise, reveal animations)

## Environment configuration
Frontend calling a configurable API URL:
1) Create `frontend/.env`:
```bash
VITE_API_URL=http://127.0.0.1:8000
```
2) Read via `import.meta.env.VITE_API_URL`.

Django settings can read env vars (e.g., `DEBUG`, `ALLOWED_HOSTS`, `DATABASE_URL`) in `config/settings.py`.

## Common tasks
- Run backend tests: `cd backend && source .venv/bin/activate && python manage.py test`
- Create another API app: `cd backend && source .venv/bin/activate && python manage.py startapp <app_name>`
- Add a React page/route: add a component in `frontend/src/pages/` and register it in `frontend/src/main.jsx`

## Troubleshooting
- Port already in use
  - Backend: `lsof -nP -iTCP:8000 -sTCP:LISTEN`
  - Frontend: `lsof -nP -iTCP:5173 -sTCP:LISTEN`
- CORS/CSRF
  - Ensure `http://localhost:5173` is in `CORS_ALLOWED_ORIGINS` and `CSRF_TRUSTED_ORIGINS` in `backend/config/settings.py`
- Tailwind PostCSS plugin error
  - Install `@tailwindcss/postcss` and ensure `postcss.config.js` includes it
- Sections not showing / layout oddities
  - Hard refresh. The landing page uses `IntersectionObserver` to add a `.visible` class to `.section-reveal` wrappers for reveal animations; content still renders without JS.

## Roadmap (summary)
- Studio: drag‑and‑drop uploads, AI detection, multiple anonymization modes, manual overrides, preview, batch processing, export formats
- API: REST endpoints, async jobs for large files, JSON-based redaction definitions, webhooks, API keys and usage limits, SDKs
- Security & privacy: encrypted in transit and at rest, configurable retention, compliance-ready (e.g., GDPR)

## License
Proprietary – all rights reserved (update as needed).
