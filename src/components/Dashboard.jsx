function Dashboard({ transactions }) {
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  const fmt = (n) =>
    n.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-5 text-white shadow-lg">
        <p className="text-sm font-medium opacity-80">Total Balance</p>
        <p className="text-3xl font-bold mt-1">{fmt(balance)}</p>
        <p className="text-xs opacity-70 mt-1">All time</p>
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 p-5 text-white shadow-lg">
        <p className="text-sm font-medium opacity-80">Total Income</p>
        <p className="text-3xl font-bold mt-1">{fmt(totalIncome)}</p>
        <p className="text-xs opacity-70 mt-1">{transactions.filter((t) => t.type === 'income').length} transactions</p>
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 p-5 text-white shadow-lg">
        <p className="text-sm font-medium opacity-80">Total Expenses</p>
        <p className="text-3xl font-bold mt-1">{fmt(totalExpenses)}</p>
        <p className="text-xs opacity-70 mt-1">{transactions.filter((t) => t.type === 'expense').length} transactions</p>
      </div>
    </div>
  );
}

export default Dashboard;
