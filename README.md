# ALQIMI Registration Assignment

Full-stack user registration application built using Next.js and NestJS.

## Tech Stack

### Frontend
- Next.js
- TypeScript
- Tailwind CSS

### Backend
- NestJS
- TypeScript
- REST API

---

## Features

- Responsive user registration form
- Form validation
- API integration
- Error handling
- Success notifications
- Cross-browser compatibility

---

## Project Structure

```bash
alqimi-registration-assignment/
├── frontend/
├── backend/
└── README.md
```

---

## Frontend Setup

```bash
cd frontend/alqimi-user-registration-frontend
npm install
npm run dev
```

Frontend runs on:

```txt
http://localhost:3001
```

---

## Backend Setup

```bash
cd backend/alqimi-user-registration-backend
npm install
npm run start:dev
```

Backend runs on:

```txt
http://localhost:3000
```

---

## Environment Variables

### Frontend

Create `.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

---

## API Endpoint

### Register User

```http
POST /register
```

Sample Request:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "Password123"
}
```

---

## Deployment

### Frontend
Deployed on Vercel

### Backend
Deployed on Railway

---

## Author

Safiur Rahaman