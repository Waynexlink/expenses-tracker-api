# Expense Tracker API

## 📌 Overview
The **Expense Tracker API** is a backend service that allows users to manage their expenses securely. It includes authentication, expense tracking, filtering, and pagination features. The API follows modern best practices with security, validation, and structured error handling.

## 🚀 Features
- **User Authentication** (JWT-based login & registration)
- **Expense Management** (CRUD operations)
- **Filtering & Pagination**
  - Past week
  - Last month
  - Last 3 months
  - Custom date range
- **Security Enhancements**
  - Rate limiting
  - Secure headers with Helmet
  - CORS protection
- **Environment-based Configuration**
- **Deployment-ready** (Optimized for cloud hosting like Render, Heroku)

## 🛠️ Tech Stack
- **Node.js** (Runtime)
- **Express.js** (Web framework)
- **MongoDB + Mongoose** (Database & ORM)
- **JWT** (Authentication)
- **Bcrypt** (Password hashing)
- **Express Validator** (Input validation)
- **Express Rate Limit** (Rate limiting for security)
- **Helmet & CORS** (Security enhancements)

## 📂 Project Structure
```
├── config/            # Configuration files (env variables, DB connection)
├── controllers/       # Request handlers (business logic)
├── middleware/        # Express middleware (auth, validation, etc.)
├── models/           # Mongoose models (User, Expense)
├── routes/           # API route handlers
├── utils/            # Utility functions & error handlers
├── server.js         # Main entry point
├── .env              # Environment variables
├── README.md         # Project documentation
```

## 🏗️ Setup & Installation
### 1️⃣ Clone Repository
```bash
git clone https://github.com/yourusername/expense-tracker-api.git
cd expense-tracker-api
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the root directory and configure it:
```
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the Server
#### Development Mode
```bash
npm run dev
```
#### Production Mode
```bash
NODE_ENV=production npm start
```

## 🔥 API Endpoints
### 🔐 Authentication
| Method | Endpoint      | Description |
|--------|--------------|-------------|
| POST   | `/api/auth/register` | Register new user |
| POST   | `/api/auth/login` | Login and get JWT |

### 💰 Expense Management
| Method | Endpoint      | Description |
|--------|--------------|-------------|
| GET    | `/api/expenses` | Get all expenses (filter & pagination) |
| POST   | `/api/expenses` | Create new expense |
| GET    | `/api/expenses/:id` | Get a specific expense |
| PATCH  | `/api/expenses/:id` | Update an expense |
| DELETE | `/api/expenses/:id` | Delete an expense |

## 📖 Project Roadmap
For further improvements and roadmap, check out **[this guide](https://roadmap.sh/projects/expense-tracker-api)**.

## 🛡️ Security & Best Practices
- **Rate Limiting** to prevent abuse
- **Helmet for Secure HTTP Headers**
- **CORS enabled with domain restrictions**
- **Hashed Passwords using Bcrypt**

## 🚀 Deployment Guide
### Using Render
1. Push your code to **GitHub**.
2. Create a **MongoDB Atlas** database.
3. Deploy on **[Render](https://render.com/)**.
4. Add `.env` variables in Render settings.
5. Start and monitor logs.

## 🛠️ Testing
Automated testing is planned for the next phase.

## 📌 License
This project is **MIT Licensed**.

---
Developed by **[Your Name]** 🚀

