const Category = require('../models/Category');

async function listCategories(req, res) {
  try {
    const categories = await Category.find({
      $or: [{ user: null }, { user: req.userId }],
    });
    return res.json(categories);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
}

async function createCategory(req, res) {
  try {
    const { name, color } = req.body;
    const category = await Category.create({ name, color, user: req.userId });
    return res.json(category);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
}

async function updateCategory(req, res) {
  try {
    const category = await Category.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      req.body,
      { new: true }
    );
    if (!category) {
      return res.status(404).json({ msg: 'Category not found or not authorized' });
    }
    return res.json(category);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
}

async function deleteCategory(req, res) {
  try {
    const result = await Category.deleteOne({ _id: req.params.id, user: req.userId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ msg: 'Category not found or not authorized' });
    }
    return res.json({ ok: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
}

module.exports = { listCategories, createCategory, updateCategory, deleteCategory };
