const mongoose = require('mongoose');
const Category = require('../models/Category');
require('dotenv').config();

const defaultCategories = [
  { name: 'Food & Dining', color: '#ef4444' },
  { name: 'Shopping', color: '#f59e0b' },
  { name: 'Transportation', color: '#6366f1' },
  { name: 'Bills & Utilities', color: '#8b5cf6' },
  { name: 'Entertainment', color: '#ec4899' },
  { name: 'Health & Fitness', color: '#06b6d4' },
  { name: 'Education', color: '#10b981' },
  { name: 'Travel', color: '#f97316' },
  { name: 'Groceries', color: '#84cc16' },
  { name: 'Salary', color: '#22c55e' },
  { name: 'Investment', color: '#14b8a6' },
  { name: 'Other', color: '#6b7280' },
];

async function seedCategories() {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/spendsmart');
    console.log('Connected to MongoDB');

    // Clear existing default categories
    await Category.deleteMany({ user: null });
    console.log('Cleared existing default categories');

    // Insert default categories
    await Category.insertMany(defaultCategories);
    console.log('Seeded default categories successfully');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding categories:', error);
    process.exit(1);
  }
}

seedCategories();

