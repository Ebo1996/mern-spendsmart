const mongoose = require('mongoose');
const Transaction = require('../models/Transaction');

async function getSummary(req, res) {
  try {
    const { startDate, endDate } = req.query;
    const matchFilter = { user: new mongoose.Types.ObjectId(req.userId) };
    if (startDate || endDate) {

      matchFilter.date = {};
      if (startDate) matchFilter.date.$gte = new Date(startDate);
      if (endDate) matchFilter.date.$lte = new Date(endDate);
    }

    const [income, expense] = await Promise.all([
      Transaction.aggregate([
        { $match: { ...matchFilter, type: 'income' } },
        { $group: { _id: null, total: { $sum: '$amount' } } },
      ]),
      Transaction.aggregate([
        { $match: { ...matchFilter, type: 'expense' } },
        { $group: { _id: null, total: { $sum: '$amount' } } },
      ]),





    ]);

    const incomeTotal = income[0]?.total || 0;
    const expenseTotal = expense[0]?.total || 0;
    const balance = incomeTotal - expenseTotal;
    return res.json({ income: incomeTotal, expense: expenseTotal, balance });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
}

async function getMonthlyTrend(req, res) {
  try {
    const userId = new mongoose.Types.ObjectId(req.userId);
    const elevenMonthsAgo = new Date();
    elevenMonthsAgo.setMonth(elevenMonthsAgo.getMonth() - 11);
    elevenMonthsAgo.setDate(1);
    elevenMonthsAgo.setHours(0, 0, 0, 0);

    const pipeline = [
      { $match: { user: userId, date: { $gte: elevenMonthsAgo } } },
      {
        $project: {
          year: { $year: '$date' },
          month: { $month: '$date' },
          amount: { $cond: [{ $eq: ['$type', 'expense'] }, { $multiply: ['$amount', -1] }, '$amount'] },
        },
      },
      { $group: { _id: { year: '$year', month: '$month' }, total: { $sum: '$amount' } } },
      { $sort: { '_id.year': 1, '_id.month': 1 } },
    ];

    const result = await Transaction.aggregate(pipeline);
    return res.json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
}

async function getCategoryBreakdown(req, res) {
  try {
    const userId = new mongoose.Types.ObjectId(req.userId);
    const { startDate, endDate } = req.query;
    const matchFilter = { user: userId, type: 'expense' };
    if (startDate || endDate) {
      matchFilter.date = {};
      if (startDate) matchFilter.date.$gte = new Date(startDate);
      if (endDate) matchFilter.date.$lte = new Date(endDate);
    }

    const pipeline = [
      { $match: matchFilter },
      { $group: { _id: '$category', total: { $sum: '$amount' } } },
      { $lookup: { from: 'categories', localField: '_id', foreignField: '_id', as: 'category' } },
      { $unwind: { path: '$category', preserveNullAndEmptyArrays: true } },
      { $project: { total: 1, categoryName: '$category.name', categoryColor: '$category.color', categoryId: '$_id' } },
      { $sort: { total: -1 } },
    ];

    const breakdown = await Transaction.aggregate(pipeline);
    return res.json(breakdown);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
}

module.exports = { getSummary, getMonthlyTrend, getCategoryBreakdown };
