import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { CATEGORIES } from '../data/dummyData';

ChartJS.register(ArcElement, Tooltip, Legend);

function CategoryBreakdown({ transactions }) {
  const expenses = transactions.filter((t) => t.type === 'expense');

  const categoryTotals = {};
  expenses.forEach((t) => {
    categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
  });

  const sorted = Object.entries(categoryTotals).sort((a, b) => b[1] - a[1]);

  if (sorted.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6 text-center text-gray-400">
        <p className="text-sm">No expense data to show.</p>
      </div>
    );
  }

  const labels = sorted.map(([key]) => {
    const cat = CATEGORIES.find((c) => c.value === key);
    return cat ? cat.label : key;
  });
  const values = sorted.map(([, v]) => v);
  const colors = sorted.map(([key]) => {
    const cat = CATEGORIES.find((c) => c.value === key);
    return cat ? cat.color : '#94a3b8';
  });

  const total = values.reduce((s, v) => s + v, 0);

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        borderWidth: 2,
        borderColor: '#fff',
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '65%',
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) =>
            ` $${ctx.parsed.toLocaleString('en-US', { minimumFractionDigits: 2 })} (${((ctx.parsed / total) * 100).toFixed(1)}%)`,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Expense Breakdown</h2>
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="w-44 h-44 flex-shrink-0">
          <Doughnut data={data} options={options} />
        </div>
        <ul className="flex-1 space-y-2 w-full">
          {sorted.map(([key, val]) => {
            const cat = CATEGORIES.find((c) => c.value === key);
            const pct = ((val / total) * 100).toFixed(1);
            return (
              <li key={key} className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: cat ? cat.color : '#94a3b8' }}
                />
                <span className="text-sm text-gray-600 flex-1">{cat ? cat.label : key}</span>
                <span className="text-xs text-gray-400">{pct}%</span>
                <span className="text-sm font-medium text-gray-700">
                  ${val.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CategoryBreakdown;
