# 🔐 Auth API - Node.js + Express + MongoDB

This is a basic authentication API with signup, login, and JWT-based protected routes.

## Features
- User registration
- Login with JWT token
- Protected route to get user info
- Password hashing with bcrypt
- Environment variables support

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT

## Routes
| Method | Route      | Description      |
|--------|------------|------------------|
| POST   | /signup    | Register user    |
| POST   | /login     | Login user       |
| GET    | /me        | Get user profile (auth required) |

## How to Run
```bash
git clone https://github.com/your-username/auth-api
cd auth-api
npm install
cp .env.example .env
# Fill in your Mongo URI and JWT_SECRET in .env
npm run dev
