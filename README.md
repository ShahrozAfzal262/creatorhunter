# CreatorHuntor

MERN app: landing page + creator search, lists and email outreach.

## Run
1. Start MongoDB (local) or put an Atlas URI in `server/.env`.
2. Backend: `cd server && npm i && npm run seed && npm run dev` (port 5000)
3. Frontend: `cd client && npm i && npm run dev` (port 5173)

Emails print in the server console until you add SMTP_* values in `server/.env`.
