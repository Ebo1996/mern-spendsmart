# SpendSmart Frontend

React frontend for the SpendSmart expense tracking application.

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The app will be available at http://localhost:3000

## Build for Production

```bash
npm run build
```

Build output will be in the `dist/` folder.

## Features

- 🔐 Authentication (Login/Register)
- 📊 Dashboard with charts
- 💰 Transaction management
- 🏷️ Category management
- 📅 Filtering and search

## Tech Stack

- React 18
- Vite
- React Router
- Axios
- Chart.js
- Tailwind CSS
- Lucide Icons

## Project Structure

```
frontend/
├── src/
│   ├── components/    # Reusable components
│   ├── pages/         # Page components
│   ├── api/          # API configuration
│   ├── hooks/        # Custom React hooks
│   ├── styles/       # CSS files
│   ├── App.jsx       # Main app component
│   └── main.jsx      # Entry point
├── index.html
└── package.json
```

## Environment Variables

Create `frontend/.env` (optional):

```env
VITE_API_URL=http://localhost:5000/api
```

## Pages

- `/login` - Login page
- `/register` - Registration page
- `/dashboard` - Analytics dashboard
- `/transactions` - Transaction list
- `/add-transaction` - Add new transaction

## Development

The frontend uses Vite for fast development with HMR (Hot Module Replacement).

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)

