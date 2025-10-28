# SpendSmart Setup Guide

## Quick Start

### 1. Clone or Download the Project

```bash
# If you have Git
git clone <repository-url>
cd Spend-smart
```

### 2. Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file (copy from .env.example)
# On Windows (PowerShell)
Copy-Item .env.example .env

# On Mac/Linux
cp .env.example .env

# Edit .env and update the values:
# - MONGO_URI: Your MongoDB connection string
# - JWT_SECRET: A random secret string

# Start MongoDB (if running locally)
# Make sure MongoDB is running on your system

# Seed default categories
npm run seed

# Start the server
npm run dev
```

### 3. Frontend Setup

```bash
# Open a new terminal
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

### 4. Access the Application

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## MongoDB Setup Options

### Option 1: Local MongoDB

1. Install MongoDB on your system
2. Start MongoDB service
3. Update `.env` with: `MONGO_URI=mongodb://localhost:27017/spendsmart`

### Option 2: MongoDB Atlas (Cloud)

1. Create a free account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Get your connection string
4. Update `.env` with your Atlas connection string
5. Replace `<password>` with your database password
6. Replace `<dbname>` with `spendsmart` if needed

Example:
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/spendsmart?retryWrites=true&w=majority
```

## Environment Variables

### Backend (.env)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_random_secret_key_here_use_something_long_and_random
```

### Frontend

Create `frontend/.env` (optional):

```env
VITE_API_URL=http://localhost:5000/api
```

## Troubleshooting

### Backend won't start
- Make sure MongoDB is running
- Check that `.env` file exists in backend folder
- Verify all environment variables are set

### Frontend can't connect to backend
- Ensure backend is running on port 5000
- Check CORS settings in backend
- Verify API URL in frontend

### Database connection issues
- Verify MongoDB is running
- Check connection string in `.env`
- Ensure network allows connections to MongoDB

### Module not found errors
- Run `npm install` in both backend and frontend
- Delete `node_modules` and `package-lock.json`, then reinstall

## Default Categories

The seed script will create these default categories:
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

## Building for Production

### Backend

```bash
cd backend
npm install
# Set production environment variables
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run build
# The build files will be in the 'dist' folder
```

## Deployment

See the main README.md for detailed deployment instructions.

## Features to Test

1. Register a new account
2. Login with your credentials
3. Add a transaction (expense)
4. View transactions list
5. Check dashboard analytics
6. Filter transactions by type or date
7. Add custom categories

## Next Steps

- Customize categories
- Add more transactions
- Explore the analytics dashboard
- Try filtering and searching

## Support

For issues or questions, please refer to the main README or create an issue on the repository.

