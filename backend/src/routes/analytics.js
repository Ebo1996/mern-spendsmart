const express = require('express');
const auth = require('../middlewares/auth');
const {
  getSummary,
  getMonthlyTrend,
  getCategoryBreakdown,
} = require('../controllers/analyticsController');

const router = express.Router();

router.use(auth);

router.get('/summary', getSummary);
router.get('/monthly-trend', getMonthlyTrend);
router.get('/category-breakdown', getCategoryBreakdown);

module.exports = router;

