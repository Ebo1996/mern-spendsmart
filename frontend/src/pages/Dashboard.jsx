import { useEffect, useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import api from '../api';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const [summary, setSummary] = useState({ income: 0, expense: 0, balance: 0 });
  const [monthlyData, setMonthlyData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [summaryRes, monthlyRes, categoryRes] = await Promise.all([
        api.get('/analytics/summary'),
        api.get('/analytics/monthly-trend'),
        api.get('/analytics/category-breakdown'),
      ]);

      setSummary(summaryRes.data);

      // Prepare monthly trend data
      const labels = monthlyRes.data.map((item) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${months[item._id.month - 1]} ${item._id.year}`;
      });
      const values = monthlyRes.data.map((item) => item.total);

      setMonthlyData({ labels, values });

      // Prepare category data
      const catLabels = categoryRes.data.map((item) => item.categoryName || 'Uncategorized');
      const catValues = categoryRes.data.map((item) => item.total);

      setCategoryData({ labels: catLabels, values: catValues });
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    }
  };

  const lineData = {
    labels: monthlyData.labels || [],
    datasets: [
      {
        label: 'Balance',
        data: monthlyData.values || [],
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const pieData = {
    labels: categoryData.labels || [],
    datasets: [
      {
        data: categoryData.values || [],
        backgroundColor: [
          '#6366f1', '#8b5cf6', '#ec4899', '#f59e0b',
          '#10b981', '#06b6d4', '#f97316', '#84cc16',
        ],
      },
    ],
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Total Income</h3>
          <p className="text-3xl font-bold text-green-600">${summary.income.toFixed(2)}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Total Expense</h3>
          <p className="text-3xl font-bold text-red-600">${summary.expense.toFixed(2)}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Balance</h3>
          <p className={`text-3xl font-bold ${summary.balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            ${summary.balance.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Monthly Trend</h2>
          {monthlyData.labels?.length > 0 ? (
            <Line data={lineData} options={{ responsive: true, maintainAspectRatio: true }} />
          ) : (
            <p className="text-gray-500">No data available</p>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Category Breakdown</h2>
          {categoryData.labels?.length > 0 ? (
            <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: true }} />
          ) : (
            <p className="text-gray-500">No data available</p>
          )}
        </div>
      </div>
    </div>
  );
}

