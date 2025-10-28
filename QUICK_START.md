# 🚀 Quick Start Guide

Get SpendSmart running in 5 minutes!

## Prerequisites
- Node.js installed
- MongoDB running (local or Atlas)

## Steps

### 1. Backend Setup (3 minutes)

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file
# Copy and edit with your MongoDB URI

# Seed default categories
npm run seed

# Start backend
npm run dev
```

### 2. Frontend Setup (2 minutes)

```bash
# Open a NEW terminal
cd frontend

# Install dependencies
npm install

# Start frontend
npm run dev
```

### 3. Access the App

Open your browser: http://localhost:3000

### 4. Start Using

1. Register a new account
2. Add your first transaction
3. Explore the dashboard analytics!

## Default Categories

These categories are automatically created:
- Food & Dining
- Shopping
- Transportation
- Bills & Utilities
- Entertainment
- Health & Fitness
- Education
- Travel
- Groceries
- Salary
- Investment
- Other

## Common Issues

**Backend won't start:**
- Check MongoDB is running
- Verify `.env` file exists
- Check PORT 5000 is available

**Frontend can't connect:**
- Ensure backend is running
- Check browser console for errors
- Verify CORS settings

**Database errors:**
- Verify MongoDB connection string
- Check network connectivity
- Ensure database exists

## Environment Variables

**Backend `.env`:**
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/spendsmart
JWT_SECRET=change_this_to_a_random_secret
```

**Frontend `.env` (optional):**
```env
VITE_API_URL=http://localhost:5000/api
```

## Next Steps

- ✅ Add your first expense
- ✅ Add your first income
- ✅ Check the dashboard charts
- ✅ Create custom categories
- ✅ Filter transactions by date/type

Happy tracking! 💰

