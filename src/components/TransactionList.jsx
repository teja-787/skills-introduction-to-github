import { CATEGORIES } from '../data/dummyData';

function TransactionList({ transactions, onDelete }) {
  const getCategoryInfo = (value) =>
    CATEGORIES.find((c) => c.value === value) || { label: value, color: '#94a3b8' };

  const sorted = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));

  if (transactions.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6 text-center text-gray-400">
        <p className="text-4xl mb-2">💸</p>
        <p className="text-sm">No transactions yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Transactions
        <span className="ml-2 text-sm font-normal text-gray-400">({transactions.length})</span>
      </h2>
      <ul className="space-y-3 max-h-96 overflow-y-auto pr-1">
        {sorted.map((t) => {
          const cat = getCategoryInfo(t.category);
          return (
            <li
              key={t.id}
              className="flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: cat.color }}
                />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-700 truncate">
                    {t.description || cat.label}
                  </p>
                  <p className="text-xs text-gray-400">
                    {cat.label} · {new Date(t.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span
                  className={`text-sm font-semibold ${
                    t.type === 'income' ? 'text-emerald-500' : 'text-rose-500'
                  }`}
                >
                  {t.type === 'income' ? '+' : '-'}$
                  {t.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
                <button
                  onClick={() => onDelete(t.id)}
                  className="text-gray-300 hover:text-rose-400 transition-colors opacity-0 group-hover:opacity-100 text-xs"
                  title="Delete"
                >
                  ✕
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TransactionList;
