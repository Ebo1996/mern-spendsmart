# SpendSmart - Expense Tracker with Analytics

A full-stack MERN application for tracking income and expenses with advanced analytics and visualization.

## Features

- 🔐 **Authentication**: Secure JWT-based authentication with register/login
- 💰 **Transaction Management**: Add, edit, delete income and expense transactions
- 📊 **Analytics Dashboard**: Visual charts showing monthly trends and category breakdowns
- 🏷️ **Category System**: Default categories with ability to create custom ones
- 📅 **Filtering**: Filter transactions by type, date range, and category
- 📱 **Responsive Design**: Mobile-friendly UI with Tailwind CSS



## Tech Stack
### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing
- Helmet for security
- Rate limiting
### Frontend
- React with Vite
- React Router for navigation
- Axios for API calls
- Chart.js for data visualization
- Tailwind CSS for styling
- Lucide React for icons

## Project Structure

```
spendsmart/
├── backend/
│   ├── src/
│   │   ├── models/          # Database models
│   │   ├── routes/          # API routes
│   │   ├── middlewares/     # Auth middleware
│   │   └── app.js          # Express app setup
│   ├── server.js           # Server entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── api/          # API configuration
│   │   ├── hooks/        # Custom hooks
│   │   └── styles/       # CSS files
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/spendsmart
JWT_SECRET=your_super_secret_jwt_key_here
```

4. Start the development server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Transactions
- `GET /api/transactions` - Get all transactions (with pagination and filters)
- `POST /api/transactions` - Create a new transaction
- `PUT /api/transactions/:id` - Update a transaction
- `DELETE /api/transactions/:id` - Delete a transaction

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create a custom category
- `PUT /api/categories/:id` - Update a category
- `DELETE /api/categories/:id` - Delete a category

### Analytics
- `GET /api/analytics/summary` - Get income/expense summary
- `GET /api/analytics/monthly-trend` - Get monthly trend data
- `GET /api/analytics/category-breakdown` - Get category breakdown

## Database Models

### User
- name, email, passwordHash, createdAt

### Category
- name, color, user (optional - null for global categories)

### Transaction
- user, amount, type (income/expense), category, date, notes

## Environment Variables

### Backend (.env)
- `PORT` - Server port (default: 5000)
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens

## Deployment

### Backend
Recommended platforms: Render, Railway, or Heroku

1. Push code to GitHub
2. Create a new web service on your chosen platform
3. Connect your GitHub repository
4. Set environment variables
5. Deploy

### Frontend
Recommended platforms: Vercel or Netlify

1. Push code to GitHub
2. Import project on Vercel/Netlify
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Add environment variable: `VITE_API_URL` (your backend URL)
6. Deploy

## Development

### Backend
```bash
cd backend
npm run dev    # Development mode with nodemon
npm start      # Production mode
```

### Frontend
```bash
cd frontend
npm run dev    # Development mode
npm run build  # Production build
```

## Features in Detail

### Dashboard
- Summary cards showing total income, expense, and balance
- Line chart displaying monthly financial trends
- Pie chart showing category-wise expense distribution

### Transaction List
- Pagination for better performance
- Filters: type, date range
- Search functionality
- Delete transactions with confirmation

### Add Transaction
- Support for income and expense
- Date selection
- Category selection
- Optional notes field


