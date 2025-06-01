# Deepfake Detection System

End-to-end modular, production-ready deepfake and geospatial authenticity detection system.

## Quickstart

1. Clone repo and `cd deepfake-detection-system`
2. Create self-signed certs in `certs/`:
   ```
   openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout certs/server.key -out certs/server.crt -subj "/CN=localhost"
   ```
3. Build and start services:
   ```
   bash scripts/build_and_start.sh
   ```
4. (Optional) Pre-seed users:
   ```
   bash scripts/preseed_data.sh
   ```
5. Access frontend at https://localhost, API at https://localhost/api

## Folders

- `backend/`   – FastAPI modular backend, Celery, PostgreSQL, Redis
- `frontend/`  – React client (upload, dashboard)
- `mobile/`    – SwiftUI, Android, React Native uploaders
- `nginx/`     – Reverse proxy config
- `infra/`     – Persistent volumes
- `certs/`     – HTTPS certs
- `scripts/`   – Build/start/preseed scripts

## Auth Accounts

- Admin: `admin@local` / `adminpass`
- User:  `user@local` / `userpass`

## CORS

- Set allowed origins in `.env` for production security.

## Further Reading

- Modular design supports multimodal detection, real-time streaming, blockchain verification, child protection, and geospatial tamper detection.
