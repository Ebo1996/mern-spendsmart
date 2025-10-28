# SpendSmart - Complete Project Overview

## 📋 Project Description

SpendSmart is a full-stack MERN (MongoDB, Express, React, Node.js) expense tracking application with advanced analytics and visualization features.

## 🎯 Core Features

### MVP Features ✅
- **Authentication**: Secure JWT-based login/register system
- **Transaction Management**: Full CRUD operations for income and expenses
- **Category System**: Default categories + custom category creation
- **Dashboard Analytics**: 
  - Monthly trend line chart
  - Category breakdown pie chart
  - Income/expense summary cards
- **Transaction List**: Paginated list with filtering
- **Responsive UI**: Mobile-friendly design with Tailwind CSS

### Advanced Features (Future)
- Budget planning and alerts
- Recurring transactions
- CSV import/export
- Multi-currency support
- AI-based categorization
- Dark mode
- Family/shared budgets

## 🏗️ Architecture

### Backend (Express + MongoDB)
```
backend/
├── src/
│   ├── models/          # User, Transaction, Category
│   ├── routes/          # API endpoints
│   ├── middlewares/     # Authentication
│   ├── utils/          # Seeding scripts
│   └── app.js          # Express setup
├── server.js
└── package.json
```

**Key Technologies:**
- Express.js - Web framework
- MongoDB + Mongoose - Database
- JWT - Authentication
- bcrypt - Password hashing
- Helmet - Security headers
- Rate limiting - Abuse prevention

### Frontend (React + Vite)
```
frontend/
├── src/
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── api/             # API configuration
│   ├── hooks/          # Custom hooks
│   ├── styles/         # CSS
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── vite.config.js
```

**Key Technologies:**
- React 18 - UI framework
- Vite - Build tool
- React Router - Navigation
- Axios - HTTP client
- Chart.js - Data visualization
- Tailwind CSS - Styling
- Lucide Icons - Icons

## 🗄️ Database Schema

### User Model
```javascript
{
  name: String,
  email: String (unique, required),
  passwordHash: String (required),
  createdAt: Date
}
```

### Category Model
```javascript
{
  user: ObjectId (null for global categories),
  name: String (required),
  color: String
}
```

### Transaction Model
```javascript
{
  user: ObjectId (required),
  amount: Number (required),
  type: 'income' | 'expense' (required),
  category: ObjectId,
  date: Date,
  notes: String
}
```

## 🔐 Security Features

1. **Authentication**: JWT-based secure authentication
2. **Password Security**: bcrypt hashing with salt rounds
3. **Rate Limiting**: 100 requests per minute per IP
4. **Headers Security**: Helmet for secure HTTP headers
5. **CORS**: Configured for specific origins
6. **User Scoping**: All queries scoped to authenticated user

## 📊 API Endpoints

### Auth Endpoints
- `POST /api/auth/register` - Create new user
- `POST /api/auth/login` - Authenticate user

### Transaction Endpoints
- `GET /api/transactions` - List transactions (pagination + filters)
- `POST /api/transactions` - Create transaction
- `GET /api/transactions/:id` - Get single transaction
- `PUT /api/transactions/:id` - Update transaction
- `DELETE /api/transactions/:id` - Delete transaction

### Category Endpoints
- `GET /api/categories` - List all categories
- `POST /api/categories` - Create category
- `PUT /api/categories/:id` - Update category
- `DELETE /api/categories/:id` - Delete category

### Analytics Endpoints
- `GET /api/analytics/summary` - Get income/expense/balance
- `GET /api/analytics/monthly-trend` - Get 12-month trend
- `GET /api/analytics/category-breakdown` - Get category expenses

## 🚀 Getting Started

### Prerequisites
- Node.js 14+
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Backend Setup**
```bash
cd backend
npm install
npm run seed    # Seed default categories
npm run dev     # Start server
```

2. **Frontend Setup**
```bash
cd frontend
npm install
npm run dev     # Start frontend
```

3. **Access**
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## 📦 Deployment

### Backend (Render/Railway/Heroku)
1. Push to GitHub
2. Connect repository to platform
3. Set environment variables:
   - MONGO_URI
   - JWT_SECRET
   - PORT (optional)

### Frontend (Vercel/Netlify)
1. Import from GitHub
2. Set build command: `npm run build`
3. Set environment variable: `VITE_API_URL`

## 🧪 Testing Strategy

### Backend Testing
- Jest + Supertest for API tests
- Test authentication flows
- Test CRUD operations
- Test validation

### Frontend Testing
- React Testing Library
- Test component rendering
- Test user interactions
- Test routing

### E2E Testing
- Cypress for full workflows
- Test complete user journeys

## 📈 Analytics Implementation

### MongoDB Aggregation Pipelines

**Monthly Trend:**
- Match transactions for last 12 months
- Project year, month, and adjusted amount
- Group by year/month
- Sort chronologically

**Category Breakdown:**
- Match expense transactions
- Group by category
- Lookup category details
- Sort by total amount

## 🎨 UI/UX Features

- Modern, clean design
- Responsive layout
- Interactive charts
- Real-time data updates
- Form validation
- Error handling
- Loading states
- Confirmation dialogs

## 🔄 Data Flow

1. User registers/logs in
2. JWT token stored in localStorage
3. All API requests include token in header
4. Backend validates token
5. User data scoped to authenticated user
6. Frontend renders data with charts

## 📝 Development Roadmap

### Phase 1: Core (✅ Complete)
- Backend setup
- Authentication
- Basic CRUD
- Simple dashboard

### Phase 2: Enhancements (✅ Complete)
- Analytics
- Charts
- Filters
- Category management

### Phase 3: Polish (✅ Complete)
- UI/UX improvements
- Error handling
- Validation
- Documentation

### Phase 4: Advanced (Future)
- Budgets
- Recurring transactions
- CSV import/export
- AI features

## 🤝 Contributing

This is a learning project demonstrating:
- Full-stack MERN development
- RESTful API design
- Database modeling
- Authentication & authorization
- Data visualization
- Modern React patterns



