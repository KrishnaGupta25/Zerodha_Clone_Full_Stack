# Zerodha Clone - Full Stack Trading Platform

A full-stack clone of Zerodha's trading platform built with the MERN stack (MongoDB, Express.js, React, Node.js). This application features a complete trading dashboard, user authentication, and portfolio management.

## 🚀 Live Demo

- **Frontend**: [https://zerodha-clone-full-stack-madeby-krishna.onrender.com](https://zerodha-clone-full-stack-madeby-krishna.onrender.com)
- **Dashboard**: [https://zerodha-clone-full-stack-dashboard.onrender.com](https://zerodha-clone-full-stack-dashboard.onrender.com)
- **Backend API**: [https://zerodha-clone-full-stack-backend.onrender.com](https://zerodha-clone-full-stack-backend.onrender.com)

## ✨ Features

- **User Authentication**: Secure signup/login with JWT and bcrypt password hashing
- **Trading Dashboard**: Interactive trading interface with real-time data
- **Portfolio Management**: Track holdings, positions, and orders
- **Responsive Design**: Mobile-friendly interface built with React and Bootstrap
- **Data Visualization**: Charts and graphs using Chart.js and React-Chartjs-2
- **Order Placement**: Buy/sell stocks with real-time order management
- **RESTful API**: Backend API built with Express.js and MongoDB

## 🛠️ Tech Stack

### Frontend
- React 19.0.0
- React Router DOM 7.2.0
- Axios for API calls
- Bootstrap 5.3.3
- Vite for build tooling

### Dashboard
- React 19.0.0
- Material-UI (MUI) 6.4.5
- Chart.js 4.4.8
- React-Chartjs-2 5.3.0
- React-Toastify for notifications

### Backend
- Node.js with Express.js 4.21.2
- MongoDB with Mongoose 8.10.1
- JWT for authentication
- Bcrypt.js for password hashing
- CORS enabled for cross-origin requests
- Cookie-parser for session management

## 📁 Project Structure

```
Zerodha-Clone/
├── backend/              # Node.js/Express backend
│   ├── index.js         # Main server file
│   ├── models/          # MongoDB models
│   ├── schemas/         # Mongoose schemas
│   ├── util/            # Utility functions (JWT)
│   └── package.json
│
├── frontend/            # React frontend (landing page)
│   ├── src/
│   │   ├── landing-page/
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── pricing/
│   │   │   ├── products/
│   │   │   ├── support/
│   │   │   └── signup/
│   │   └── App.jsx
│   └── package.json
│
└── dashboard/           # React dashboard (trading interface)
    ├── src/
    │   ├── components/
    │   │   ├── Dashboard.jsx
    │   │   ├── Holdings.jsx
    │   │   ├── Positions.jsx
    │   │   ├── Orders.jsx
    │   │   └── BuyActionWindow.jsx
    │   └── App.jsx
    └── package.json
```

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v20 or higher)
- MongoDB Atlas account or local MongoDB
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/KrishnaGupta25/Zerodha_Clone_Full_Stack.git
cd Zerodha_Clone_Full_Stack
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create .env file
echo "MONGO_URL=your_mongodb_connection_string" > .env
echo "JWT_SECRET=your_jwt_secret_key" >> .env

# Start backend server
npm start
```

**Backend Environment Variables:**
- `MONGO_URL`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `PORT`: Server port (default: 3002)

### 3. Frontend Setup
```bash
cd frontend
npm install

# Start frontend development server
npm run dev
```

The frontend will run on `http://localhost:5173`

### 4. Dashboard Setup
```bash
cd dashboard
npm install

# Start dashboard development server
npm run dev
```

The dashboard will run on `http://localhost:5174`

## 🌐 Deployment

### Backend (Render)
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set root directory to `backend`
4. Build command: `npm install`
5. Start command: `npm start`
6. Add environment variables:
   - `MONGO_URL`
   - `JWT_SECRET`

### Frontend & Dashboard (Render/Vercel)
1. Create a new Static Site
2. Set root directory to `frontend` or `dashboard`
3. Build command: `npm run build`
4. Publish directory: `dist`

## 📝 API Endpoints

### Authentication
- `POST /signup` - Register new user
- `POST /login` - User login

### Trading
- `GET /allHoldings` - Get user holdings
- `GET /allPositions` - Get user positions
- `GET /allOrders` - Get user orders
- `POST /newOrder` - Place new order

## 🔒 Security Features

- Password hashing with bcrypt
- JWT-based authentication
- HTTP-only cookies
- CORS configuration for allowed origins
- Secure cookie settings with SameSite

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Krishna Gupta**
- GitHub: [@KrishnaGupta25](https://github.com/KrishnaGupta25)

## 🙏 Acknowledgments

- Inspired by [Zerodha](https://zerodha.com/)
- Built as a learning project for MERN stack development

---

**Note**: This is a clone project for educational purposes only. It is not affiliated with or endorsed by Zerodha.
