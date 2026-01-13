<div align="center">

# 📈 Zerodha Clone - Full Stack Trading Platform

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-green?style=for-the-badge)](https://www.mongodb.com/mern-stack)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)

A professional, full-featured stock trading platform clone inspired by Zerodha, built with the MERN stack. Features include real-time portfolio management, order placement, holdings tracking, and comprehensive data visualization.

[Live Demo](#-live-demo) | [Features](#-features) | [Installation](#️-installation) | [API Docs](#-api-endpoints)

</div>

---

## 🚀 Live Demo

<div align="center">

| Service | URL | Status |
|---------|-----|--------|
| 🌐 **Frontend** | [zerodha-clone-frontend](https://zerodha-clone-full-stack-madeby-krishna.onrender.com) | ✅ Live |
| 📊 **Dashboard** | [zerodha-clone-dashboard](https://zerodha-clone-full-stack-dashboard.onrender.com) | ✅ Live |
| 🔧 **Backend API** | [zerodha-clone-api](https://zerodha-clone-full-stack-backend.onrender.com) | ✅ Live |

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [🚀 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚙️ Installation](#️-installation)
- [🔧 Configuration](#-configuration)
- [🎯 Usage](#-usage)
- [🔐 API Endpoints](#-api-endpoints)
- [🔒 Security Features](#-security-features)
- [🧪 Testing](#-testing)
- [🚢 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

### 🌐 Frontend (Landing Page)
✅ **Modern Landing Page** - Responsive design with multiple sections  
✅ **Product Showcase** - Detailed product information and features  
✅ **Pricing Calculator** - Interactive brokerage calculator  
✅ **Educational Content** - Awards, statistics, and learning resources  
✅ **Support Portal** - Comprehensive support system with ticket creation  
✅ **About Section** - Team information and company details  
✅ **User Authentication** - Secure signup and login functionality  

### 📊 Trading Dashboard
✅ **Portfolio Overview** - Real-time portfolio summary with visual charts  
✅ **Holdings Management** - Track all your stock holdings with P&L calculation  
✅ **Positions Tracking** - Monitor active trading positions  
✅ **Order Placement** - Buy/Sell stocks with interactive order window  
✅ **Watchlist** - Keep track of favorite stocks  
✅ **Fund Management** - View available funds and margins  
✅ **Data Visualization** - Interactive charts using Chart.js:
  - 🍩 Doughnut charts for portfolio distribution
  - 📊 Vertical graphs for performance metrics  
✅ **Responsive Design** - Optimized for desktop and mobile devices  
✅ **Mobile Dashboard** - Dedicated mobile-optimized interface  

### 🔒 Backend API
✅ **RESTful API** - Clean and structured API endpoints  
✅ **User Authentication** - JWT-based authentication with bcrypt password hashing  
✅ **MongoDB Integration** - Efficient data storage and retrieval  
✅ **CORS Support** - Configured for cross-origin requests  
✅ **Cookie Management** - Secure HTTP-only cookie handling  
✅ **Error Handling** - Comprehensive error management  
✅ **Data Models**:
  - 👤 User Model (Authentication)
  - 💼 Holdings Model (Stock holdings)
  - 📍 Positions Model (Active positions)
  - 📝 Orders Model (Order history)


---

## 🏗️ Architecture

This project follows a **three-tier architecture** pattern for scalability and maintainability:

```
┌──────────────────────────────────────────────────────────────┐
│                   Frontend (Landing Page)                     │
│              React 19 + Vite + React Router                   │
│         Marketing, Product Info & User Onboarding             │
└───────────────────────────┬──────────────────────────────────┘
                            │
┌───────────────────────────┴──────────────────────────────────┐
│                Dashboard (Trading Interface)                  │
│     React 19 + Material-UI + Chart.js + Bootstrap + Axios    │
│        Interactive Trading Dashboard & Portfolio Mgmt         │
└───────────────────────────┬──────────────────────────────────┘
                            │
                            │ REST API (JWT Auth)
                            │
┌───────────────────────────┴──────────────────────────────────┐
│                    Backend (Node.js/Express)                  │
│         Express + JWT + bcrypt + Passport.js + CORS          │
│             Business Logic & Authentication Layer             │
└───────────────────────────┬──────────────────────────────────┘
                            │
┌───────────────────────────┴──────────────────────────────────┐
│                      MongoDB Database                         │
│        Collections: Users, Holdings, Positions, Orders        │
└──────────────────────────────────────────────────────────────┘
```

**Design Patterns Used:**
- 🏛️ **MVC Pattern** - Separation of concerns
- 🔐 **Repository Pattern** - Data access abstraction
- 🎯 **Middleware Pattern** - Request/response processing
- 🔄 **Singleton Pattern** - Database connection

---

## 🚀 Tech Stack

<div align="center">

### Frontend Stack
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.0.0 | UI Framework |
| Vite | 6.1.0 | Build Tool & Dev Server |
| React Router | 7.2.0 | Client-side Routing |
| Axios | 1.7.9 | HTTP Client |
| Vitest | 3.0.6 | Unit Testing |
| Testing Library | 16.2.0 | Component Testing |

### Dashboard Stack
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.0.0 | UI Framework |
| Material-UI | 6.4.5 | Component Library |
| Chart.js | 4.4.8 | Data Visualization |
| React Chart.js 2 | 5.3.0 | React Chart Wrapper |
| Bootstrap | 5.3.3 | CSS Framework |
| React Toastify | 11.0.3 | Toast Notifications |
| Vite | 6.1.0 | Build Tool |

### Backend Stack
| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | Latest | Runtime Environment |
| Express | 4.21.2 | Web Framework |
| MongoDB | Latest | NoSQL Database |
| Mongoose | 8.10.1 | ODM for MongoDB |
| JWT | 9.0.2 | Authentication Tokens |
| bcryptjs | 3.0.2 | Password Hashing |
| Passport.js | 0.7.0 | Authentication Middleware |
| CORS | 2.8.5 | Cross-Origin Resource Sharing |
| dotenv | 16.4.7 | Environment Variables |

</div>

---

## 📁 Project Structure

```
Zerodha-Clone-main/
│
├── 📁 frontend/                        # Landing page application
│   ├── src/
│   │   ├── landing-page/
│   │   │   ├── home/                  # Homepage components
│   │   │   │   ├── Hero.jsx           # Hero section
│   │   │   │   ├── Awards.jsx         # Awards showcase
│   │   │   │   ├── Stats.jsx          # Statistics display
│   │   │   │   ├── Pricing.jsx        # Pricing info
│   │   │   │   ├── Education.jsx      # Educational content
│   │   │   │   └── HomeWrap.jsx       # Home wrapper
│   │   │   ├── about/                 # About page
│   │   │   │   ├── About.jsx
│   │   │   │   ├── Hero.jsx
│   │   │   │   └── Team.jsx           # Team information
│   │   │   ├── pricing/               # Pricing section
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── Brokerage.jsx
│   │   │   │   ├── BrokerageCalculator.jsx
│   │   │   │   ├── AccountCharges.jsx
│   │   │   │   └── PricingWrap.jsx
│   │   │   ├── products/              # Product showcase
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── LeftSection.jsx
│   │   │   │   ├── RightSection.jsx
│   │   │   │   ├── Universe.jsx
│   │   │   │   └── ProductsWrap.jsx
│   │   │   ├── signup/                # Authentication
│   │   │   │   ├── Signup.jsx
│   │   │   │   └── Login.jsx
│   │   │   ├── support/               # Support portal
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── CreateTick.jsx
│   │   │   │   ├── SupportPortal.jsx
│   │   │   │   └── SupportWrap.jsx
│   │   │   ├── Footer.jsx             # Footer component
│   │   │   ├── Navbar.jsx             # Navigation bar
│   │   │   ├── OpenAccount.jsx        # CTA section
│   │   │   └── Notfound.jsx           # 404 page
│   │   ├── App.jsx                     # Main app component
│   │   ├── main.jsx                    # Entry point
│   │   ├── App.css                     # Global styles
│   │   └── index.css                   # Base styles
│   ├── tests/
│   │   └── Components.test.jsx         # Component tests
│   ├── public/
│   │   └── assets/                     # Static assets
│   ├── package.json
│   ├── vite.config.js
│   ├── vercel.json                     # Vercel config
│   └── eslint.config.js
│
├── 📁 dashboard/                       # Trading dashboard
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.jsx          # Main dashboard container
│   │   │   ├── TopBar.jsx             # Navigation bar
│   │   │   ├── Menu.jsx               # Sidebar menu
│   │   │   ├── Summary.jsx            # Portfolio summary
│   │   │   ├── Holdings.jsx           # Holdings view
│   │   │   ├── Positions.jsx          # Positions view
│   │   │   ├── Orders.jsx             # Order history
│   │   │   ├── WatchList.jsx          # Stock watchlist
│   │   │   ├── Funds.jsx              # Fund management
│   │   │   ├── Apps.jsx               # Apps section
│   │   │   ├── BuyActionWindow.jsx    # Order placement modal
│   │   │   ├── DoughnoutChart.jsx     # Doughnut chart component
│   │   │   ├── VerticalGraph.jsx      # Vertical bar chart
│   │   │   ├── MobileDashboard.jsx    # Mobile view
│   │   │   ├── GeneralContext.jsx     # React Context
│   │   │   ├── BuyActionWindow.css    # Order modal styles
│   │   │   ├── Dashboard.css          # Dashboard styles
│   │   │   ├── Holdings.css           # Holdings styles
│   │   │   ├── MobileDashboard.css    # Mobile styles
│   │   │   └── TopBar.css             # TopBar styles
│   │   ├── data/
│   │   │   └── data.jsx               # Static/mock data
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── App.css
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
│
├── 📁 backend/                         # Node.js backend
│   ├── models/
│   │   ├── UserModel.js               # User schema & model
│   │   ├── HoldingModel.js            # Holdings schema
│   │   ├── PositionModel.js           # Positions schema
│   │   └── OrderModel.js              # Orders schema
│   ├── schemas/
│   │   ├── HoldingSchema.js           # Mongoose schema
│   │   ├── PositionSchema.js
│   │   └── OrderSchema.js
│   ├── util/
│   │   └── SecretToken.js             # JWT token utilities
│   ├── index.js                        # Server entry point
│   ├── package.json
│   └── .env                            # Environment variables (not in repo)
│
└── README.md                           # This file
```

---

## ⚙️ Installation

### Prerequisites

Before you begin, ensure you have the following installed:

| Software | Version | Download |
|----------|---------|----------|
| Node.js | v16+ | [Download](https://nodejs.org/) |
| npm | v8+ | Comes with Node.js |
| MongoDB | v5+ | [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or [Local](https://www.mongodb.com/try/download/community) |
| Git | Latest | [Download](https://git-scm.com/) |

### Step-by-Step Installation

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/KrishnaGupta25/Zerodha_Clone_Full_Stack.git
cd Zerodha_Clone_Full_Stack
```

#### 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

**Backend Dependencies Include:**
- express, mongoose, cors, dotenv
- bcryptjs, jsonwebtoken, passport
- cookie-parser

#### 3️⃣ Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

**Frontend Dependencies Include:**
- react, react-dom, react-router-dom
- axios, vite

#### 4️⃣ Install Dashboard Dependencies

```bash
cd ../dashboard
npm install
```

**Dashboard Dependencies Include:**
- react, @mui/material, @mui/icons-material
- chart.js, react-chartjs-2, bootstrap
- react-toastify, axios

---

## 🔧 Configuration

### Backend Environment Variables

Create a `.env` file in the `backend/` directory:

```env
# Server Configuration
PORT=3002
NODE_ENV=development

# MongoDB Configuration
MONGO_URL=mongodb://localhost:27017/zerodha-clone
# OR use MongoDB Atlas (recommended for production)
# MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/zerodha?retryWrites=true&w=majority

# JWT Secret (CHANGE THIS IN PRODUCTION!)
JWT_SECRET=your_super_secret_jwt_key_min_32_characters_long

# CORS Origins (comma-separated)
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:5174
```

### Frontend Configuration

Update the API base URL in frontend files if needed:

**Dashboard** - Update in components that make API calls:
```javascript
// dashboard/src/components/BuyActionWindow.jsx
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3002";

// Use in axios calls
axios.post(`${API_URL}/newOrder`, {...})
```

**Optional:** Create `.env` files in frontend/dashboard:
```env
# frontend/.env or dashboard/.env
VITE_API_URL=http://localhost:3002
```

---

## 🎯 Usage

### Development Mode

#### 1️⃣ Start MongoDB
```bash
# If using local MongoDB
mongod

# Or make sure MongoDB Atlas is accessible
```

#### 2️⃣ Start Backend Server
```bash
cd backend
npm start

# Or with nodemon for auto-reload
npx nodemon index.js
```
✅ Server runs on **`http://localhost:3002`**

#### 3️⃣ Start Frontend (Landing Page)
```bash
cd frontend
npm run dev
```
✅ Frontend runs on **`http://localhost:5173`**

#### 4️⃣ Start Dashboard (Trading Interface)
```bash
cd dashboard
npm run dev
```
✅ Dashboard runs on **`http://localhost:5174`**

### Production Build

#### Build Frontend
```bash
cd frontend
npm run build
# Output: frontend/dist/
```

#### Build Dashboard
```bash
cd dashboard
npm run build
# Output: dashboard/dist/
```

#### Start Backend in Production Mode
```bash
cd backend
NODE_ENV=production npm start
```

### Testing the Application

1. **Open Frontend**: Navigate to `http://localhost:5173`
2. **Create Account**: Click "Sign Up" and create a new user
3. **Login**: Use your credentials to log in
4. **Access Dashboard**: Navigate to `http://localhost:5174`
5. **Explore Features**: 
   - View Holdings, Positions, Orders
   - Place buy/sell orders
   - Check portfolio summary

---

## 🔐 API Endpoints

### Authentication Endpoints

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| POST | `/signup` | Register new user | `{ email, password, username }` | `{ message, success, user }` |
| POST | `/login` | User login | `{ email, password }` | `{ message, user }` |

**Example - Signup:**
```bash
curl -X POST http://localhost:3002/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "securePassword123",
    "username": "testuser"
  }'
```

**Response:**
```json
{
  "message": "Signup successful",
  "success": true,
  "user": {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "email": "test@example.com",
    "username": "testuser"
  }
}
```

### Portfolio Endpoints

| Method | Endpoint | Description | Auth Required | Response |
|--------|----------|-------------|---------------|----------|
| GET | `/allHoldings` | Get all user holdings | Yes | Array of holdings |
| GET | `/allPositions` | Get all user positions | Yes | Array of positions |
| GET | `/allOrders` | Get all user orders | Yes | Array of orders |

**Example - Get Holdings:**
```bash
curl -X GET http://localhost:3002/allHoldings \
  -H "Cookie: token=your_jwt_token"
```

**Response:**
```json
[
  {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "name": "RELIANCE",
    "qty": 10,
    "avg": 2450.50,
    "price": 2500.00,
    "net": "+2.02%",
    "day": "+0.50%"
  }
]
```

### Trading Endpoints

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| POST | `/newOrder` | Place new buy/sell order | `{ name, qty, price, mode }` | `{ message }` |

**Example - Place Order:**
```bash
curl -X POST http://localhost:3002/newOrder \
  -H "Content-Type: application/json" \
  -H "Cookie: token=your_jwt_token" \
  -d '{
    "name": "TCS",
    "qty": 5,
    "price": 3500.00,
    "mode": "BUY"
  }'
```

**Response:**
```json
{
  "message": "Order saved successfully!"
}
```

### Error Responses

All endpoints return consistent error responses:

```json
{
  "message": "Error description",
  "success": false
}
```

**Common Status Codes:**
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `500` - Internal Server Error

---

## 🔒 Security Features

### 🛡️ Authentication & Authorization
- ✅ **JWT-based Authentication** - Stateless token-based auth
- ✅ **bcrypt Password Hashing** - Passwords hashed with salt rounds (10)
- ✅ **HTTP-Only Cookies** - Prevents XSS attacks
- ✅ **Secure Cookie Settings** - SameSite=None, Secure flag for HTTPS
- ✅ **Token Expiration** - 1-hour token lifetime

### 🔐 CORS Configuration
- ✅ **Whitelist-based Origins** - Only allowed domains can access API
- ✅ **Credentials Support** - Enables cookie-based authentication
- ✅ **Preflight Handling** - Proper OPTIONS request handling

### 🚨 Input Validation
- ✅ **Required Field Validation** - All inputs validated before processing
- ✅ **Duplicate User Check** - Prevents duplicate email registration
- ✅ **Error Handling** - Comprehensive try-catch blocks

### 🔧 Best Practices
- ✅ **Environment Variables** - Sensitive data in .env files
- ✅ **Connection Security** - MongoDB connection error handling
- ✅ **Password Strength** - Minimum length requirements (implement as needed)

**Security Headers:**
```javascript
Access-Control-Allow-Origin: <allowed-origin>
Access-Control-Allow-Credentials: true
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

---

## 🧪 Testing

### Frontend Tests

The frontend includes test setup using **Vitest** and **Testing Library**.

```bash
cd frontend

# Run tests once
npm run test

# Run tests in watch mode
npm run test:watch
```

**Test Files Location:**
```
frontend/tests/Components.test.jsx
```

### Manual API Testing

#### Using cURL

**Test Signup:**
```bash
curl -X POST http://localhost:3002/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"test123","username":"testuser"}'
```

**Test Login:**
```bash
curl -X POST http://localhost:3002/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"test123"}' \
  -c cookies.txt
```

**Test Get Holdings (with auth):**
```bash
curl -X GET http://localhost:3002/allHoldings \
  -b cookies.txt
```

#### Using Postman/Insomnia

1. Import the endpoints
2. Set `Content-Type: application/json`
3. For authenticated routes, ensure cookies are enabled
4. Test each endpoint with sample data

### Testing Checklist

- [ ] User signup with valid data
- [ ] User signup with duplicate email (should fail)
- [ ] User login with correct credentials
- [ ] User login with wrong password (should fail)
- [ ] Get holdings with authentication
- [ ] Get positions with authentication
- [ ] Place new order
- [ ] View order history

---

## 🚢 Deployment

### Deploying Backend to Render

1. **Create Render Account**: Sign up at [render.com](https://render.com)

2. **Create New Web Service**:
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository

3. **Configure Settings**:
   ```
   Name: zerodha-clone-backend
   Root Directory: backend
   Environment: Node
   Build Command: npm install
   Start Command: npm start
   ```

4. **Add Environment Variables**:
   ```
   MONGO_URL=mongodb+srv://...
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=production
   PORT=3002
   ```

5. **Deploy**: Click "Create Web Service"

### Deploying Frontend/Dashboard to Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy Frontend**:
   ```bash
   cd frontend
   vercel --prod
   ```

3. **Deploy Dashboard**:
   ```bash
   cd dashboard
   vercel --prod
   ```

4. **Configure Vercel** (vercel.json):
   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/" }]
   }
   ```

### Post-Deployment Steps

1. **Update CORS Origins** in `backend/index.js`:
   ```javascript
   const allowedOrigins = [
     "https://your-frontend.vercel.app",
     "https://your-dashboard.vercel.app",
     "https://your-backend.onrender.com"
   ];
   ```

2. **Update API URLs** in frontend/dashboard:
   ```javascript
   const API_URL = "https://your-backend.onrender.com";
   ```

3. **Test Production Build** locally before deploying:
   ```bash
   npm run build
   npm run preview
   ```

### Deployment Checklist

- [ ] MongoDB Atlas setup and connection string ready
- [ ] Environment variables configured in deployment platform
- [ ] CORS origins updated for production URLs
- [ ] API endpoints updated in frontend/dashboard
- [ ] SSL/HTTPS enabled (automatic on Vercel/Render)
- [ ] Test all features in production environment

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**!

### How to Contribute

1. **Fork the Project**
2. **Clone Your Fork**
   ```bash
   git clone https://github.com/your-username/zerodha-clone.git
   ```
3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
4. **Commit Your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
5. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
6. **Open a Pull Request**

### Contribution Guidelines

- ✅ Follow the existing code style
- ✅ Write meaningful commit messages
- ✅ Add tests for new features
- ✅ Update documentation as needed
- ✅ Keep PRs focused and atomic

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - Copyright (c) 2026 Krishna Gupta
```

---

## 👤 Author

<div align="center">

### **Krishna Gupta**

[![GitHub](https://img.shields.io/badge/GitHub-KrishnaGupta25-black?style=for-the-badge&logo=github)](https://github.com/KrishnaGupta25)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/krishnagupta)

**Full Stack Developer | MERN Stack Enthusiast | Open Source Contributor**

</div>

---

## 🙏 Acknowledgments

- 🎯 **Inspired by** [Zerodha](https://zerodha.com/) - India's largest stock broker
- 💻 **Built with** ❤️ using the MERN stack
- 🌟 **Special Thanks to**:
  - React Team for an amazing framework
  - MongoDB Team for the powerful database
  - Express.js & Node.js communities
  - Chart.js & Material-UI developers
  - All open-source contributors

---

## 📞 Support

For support, questions, or suggestions:

📧 **Email**: Create an issue in this repository  
🐛 **Issues**: [Create an Issue](../../issues)  
💬 **Discussions**: [GitHub Discussions](../../discussions)  

---

## 🗺️ Roadmap

### Phase 1: Core Features ✅
- [x] User authentication system
- [x] Portfolio management
- [x] Order placement
- [x] Data visualization
- [x] Responsive design

### Phase 2: Enhancements 🚧
- [ ] Real-time stock price updates (WebSocket)
- [ ] Advanced charting tools
- [ ] Portfolio analytics and insights
- [ ] Dark mode support
- [ ] Export portfolio to PDF/CSV

### Phase 3: Advanced Features 🔮
- [ ] Mobile app (React Native)
- [ ] Market news integration
- [ ] Tax reporting features
- [ ] Trading algorithms/strategies
- [ ] Multi-currency support

---

## ⚠️ Disclaimer

**Important Notice:**

This project is created for **educational purposes only**. It is a clone project built to demonstrate full-stack development skills using the MERN stack.

- ❌ This is **NOT** affiliated with or endorsed by Zerodha
- ❌ This is **NOT** a real trading platform
- ❌ Do **NOT** use this for actual financial transactions
- ❌ All data and transactions are simulated

---

<div align="center">

### ⭐ If you found this project helpful, please give it a star!

**Made with ❤️ by [Krishna Gupta](https://github.com/KrishnaGupta25)**

**© 2026 Krishna Gupta. All rights reserved.**

</div>
