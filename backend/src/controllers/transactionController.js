const Transaction = require('../models/Transaction');

async function createTransaction(req, res) {
  try {
    const data = { ...req.body, user: req.userId };
    const tx = await Transaction.create(data);
    const populatedTx = await Transaction.findById(tx._id).populate('category');
    return res.json(populatedTx);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
}




async function listTransactions(req, res) {
  try {
    const { page = 1, limit = 20, type, category, startDate, endDate } = req.query;
    const filter = { user: req.userId };
    if (type) filter.type = type;
    if (category) filter.category = category;
    if (startDate || endDate) {
      filter.date = {};
      if (startDate) filter.date.$gte = new Date(startDate);
      if (endDate) filter.date.$lte = new Date(endDate);
    }
    const transactions = await Transaction.find(filter)
      .sort({ date: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .populate('category');
    const total = await Transaction.countDocuments(filter);
    return res.json({ transactions, total, page: Number(page), limit: Number(limit) });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
}

async function getTransaction(req, res) {
  try {
    const tx = await Transaction.findOne({ _id: req.params.id, user: req.userId }).populate('category');
    if (!tx) {
      return res.status(404).json({ msg: 'Transaction not found' });
    }
    return res.json(tx);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
}

async function updateTransaction(req, res) {
  try {
    const tx = await Transaction.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      req.body,
      { new: true }
    ).populate('category');
    if (!tx) {
      return res.status(404).json({ msg: 'Transaction not found' });
    }
    return res.json(tx);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
}

async function deleteTransaction(req, res) {
  try {
    const result = await Transaction.deleteOne({ _id: req.params.id, user: req.userId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ msg: 'Transaction not found' });
    }
    return res.json({ ok: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
}

module.exports = {
  createTransaction,
  listTransactions,
  getTransaction,
  updateTransaction,
  deleteTransaction,
};
