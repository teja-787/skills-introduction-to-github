import { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import MonthlyChart from './components/MonthlyChart';
import CategoryBreakdown from './components/CategoryBreakdown';
import { dummyTransactions } from './data/dummyData';

const STORAGE_KEY = 'finance-tracker-transactions';

function App() {
  const [transactions, setTransactions] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : dummyTransactions;
    } catch {
      return dummyTransactions;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (t) => setTransactions((prev) => [t, ...prev]);

  const deleteTransaction = (id) =>
    setTransactions((prev) => prev.filter((t) => t.id !== id));

  const resetToDemo = () => {
    setTransactions(dummyTransactions);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">💰</span>
            <h1 className="text-xl font-bold text-gray-800">Finance Tracker</h1>
          </div>
          <button
            onClick={resetToDemo}
            className="text-xs text-gray-400 hover:text-indigo-500 transition-colors"
          >
            Reset to demo data
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Dashboard summary cards */}
        <Dashboard transactions={transactions} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6">
            <MonthlyChart transactions={transactions} />
            <CategoryBreakdown transactions={transactions} />
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <TransactionForm onAdd={addTransaction} />
            <TransactionList transactions={transactions} onDelete={deleteTransaction} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
