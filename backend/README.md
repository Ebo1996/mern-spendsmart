# SpendSmart Backend

Express.js backend for the SpendSmart expense tracking application.

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/spendsmart
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
```

3. Seed default categories:
```bash
npm run seed
```

4. Start the server:
```bash
npm run dev    # Development with auto-reload
npm start      # Production
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Transactions
- `GET /api/transactions` - Get transactions (with filters and pagination)
- `POST /api/transactions` - Create transaction
- `PUT /api/transactions/:id` - Update transaction
- `DELETE /api/transactions/:id` - Delete transaction

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create custom category
- `PUT /api/categories/:id` - Update category
- `DELETE /api/categories/:id` - Delete category

### Analytics
- `GET /api/analytics/summary` - Get income/expense summary
- `GET /api/analytics/monthly-trend` - Get 12-month trend data
- `GET /api/analytics/category-breakdown` - Get expense breakdown by category

## Project Structure

```
backend/
├── src/
│   ├── models/        # Mongoose schemas
│   ├── routes/        # Express routes
│   ├── middlewares/   # Auth middleware
│   ├── utils/         # Helper scripts
│   └── app.js         # Express app setup
├── server.js          # Entry point
└── package.json
```

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Rate limiting (100 requests/minute)
- Helmet for secure headers
- CORS enabled
- User-scoped data queries

## Development

Uses nodemon for auto-reloading during development.

## Deployment

Set environment variables on your hosting platform:
- `PORT` (optional, defaults to 5000)
- `MONGO_URI` (required)
- `JWT_SECRET` (required, use a strong random string)

