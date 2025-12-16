# Car Rental

## Description
A full-stack car rental application with a React + Vite frontend and an Express + MongoDB backend. Frontend code lives under [`client`](client/) and backend under [`server`](server/).

Key backend files:
- Server entry: [`server/server.js`](server/server.js)  
- DB config: [`server/configs/db.js`](server/configs/db.js)  
- Image uploads: [`server/configs/imageKit.js`](server/configs/imageKit.js)  
- Routes: [`server/routes/userRoutes.js`](server/routes/userRoutes.js), [`server/routes/ownerRoutes.js`](server/routes/ownerRoutes.js), [`server/routes/bookingRoutes.js`](server/routes/bookingRoutes.js)  
- Controllers: [`server/controllers/userController.js`](server/controllers/userController.js), [`server/controllers/ownerController.js`](server/controllers/ownerController.js), [`server/controllers/bookingController.js`](server/controllers/bookingController.js)  
- Models: [`server/models/User.js`](server/models/User.js), [`server/models/Car.js`](server/models/Car.js), [`server/models/Booking.js`](server/models/Booking.js)  
- Auth & uploads middleware: [`server/middleware/auth.js`](server/middleware/auth.js), [`server/middleware/multer.js`](server/middleware/multer.js)

Frontend highlights:
- App entry: [`client/src/main.jsx`](client/src/main.jsx)  
- Global context & API client: [`client/src/context/AppContext.jsx`](client/src/context/AppContext.jsx)  
- Routes & pages: [`client/src/App.jsx`](client/src/App.jsx) and components/pages under [`client/src/`](client/src/)  

Vercel configs:
- Backend: [`server/vercel.json`](server/vercel.json)  
- Frontend: [`client/vercel.json`](client/vercel.json)

---

## Setup instructions

Prerequisites
- Node.js (recommended v18+)
- MongoDB (Atlas or local)

1. Clone the repo and open it:
   - cd to project root

2. Backend
   - cd server
   - Install: `npm install` (see [`server/package.json`](server/package.json))
   - Create a `.env` with:
     - `MONGODB_URI` (your DB connection)
     - `JWT_SECRET`
     - `IMAGEKIT_PUBLIC_KEY`, `IMAGEKIT_PRIVATE_KEY`, `IMAGEKIT_URL_ENDPOINT`
     - optionally `PORT`
   - Start dev server: `npm run server` (uses `nodemon`)  
     - Production start: `npm start`
   - Entry point: [`server/server.js`](server/server.js)

3. Frontend
   - cd client
   - Install: `npm install` (see [`client/package.json`](client/package.json))
   - Create `.env` with:
     - `VITE_BASE_URL` (e.g. `http://localhost:3000`)
     - `VITE_CURRENCY` (optional)
   - Start dev server: `npm run dev` (Vite)
   - Build: `npm run build`

Notes:
- Axios base URL is configured in [`client/src/context/AppContext.jsx`](client/src/context/AppContext.jsx).
- ESLint config: [`client/eslint.config.js`](client/eslint.config.js).

---

## Usage

- Open frontend at the port Vite uses (default printed by `npm run dev`).
- Typical flows:
  - Register / login via `/api/user/register` and `/api/user/login` (see [`server/routes/userRoutes.js`](server/routes/userRoutes.js) and [`server/controllers/userController.js`](server/controllers/userController.js)).
  - Owners can change role, list cars, and manage bookings (see [`server/routes/ownerRoutes.js`](server/routes/ownerRoutes.js) and [`server/controllers/ownerController.js`](server/controllers/ownerController.js)).
  - Bookings endpoints: check availability and create bookings (see [`server/routes/bookingRoutes.js`](server/routes/bookingRoutes.js) and [`server/controllers/bookingController.js`](server/controllers/bookingController.js)).

Example (client uses these endpoints via Axios configured in AppContext):
- Check availability: POST `/api/bookings/check-availability`
- Create booking: POST `/api/bookings/create` (authenticated)

---

## Contributor guidelines

- Create issues for problems or feature requests.
- Fork -> branch -> pull request.
- Keep changes small and focused.
- Run linter: `npm run lint` from `client` (see [`client/eslint.config.js`](client/eslint.config.js)).
- Follow the existing code structure:
  - Backend: routes/controllers/models under `server/`
  - Frontend: components/pages/context under `client/src/`

---

## License

This project is provided under the MIT License
