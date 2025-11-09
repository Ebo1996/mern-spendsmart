const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:3000',
];

const corsOptions = {
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }



  },
  credentials: true,
};




module.exports = corsOptions;
