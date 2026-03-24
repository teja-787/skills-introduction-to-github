# 💰 Personal Finance Tracker

A clean, responsive personal finance tracker web app built with **React**, **Tailwind CSS**, and **Chart.js**.

## Features

- ➕ **Add Income & Expenses** — Quickly log transactions with amount, category, description, and date
- 🏷️ **Categorize Transactions** — Choose from categories like Food, Rent, Transport, Entertainment, Healthcare, Shopping, Utilities, Salary, Freelance, and more
- 📊 **Monthly Overview Chart** — Bar chart showing income vs. expenses for the last 6 months
- 🍩 **Expense Breakdown** — Doughnut chart with a legend showing spending per category
- 📋 **Dashboard Summary** — Total balance, total income, and total expenses at a glance
- 💾 **localStorage Persistence** — All data is saved in your browser automatically
- 🗑️ **Delete Transactions** — Hover over a transaction to reveal the delete button
- 🔄 **Demo Data** — Pre-loaded with realistic sample transactions across 3 months

## Tech Stack

| Technology | Purpose |
|---|---|
| [React](https://react.dev/) | UI component framework |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Chart.js](https://www.chartjs.org/) + [react-chartjs-2](https://react-chartjs-2.js.org/) | Data visualizations |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/teja-787/skills-introduction-to-github.git
cd skills-introduction-to-github

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Dashboard.jsx        # Balance, income & expense summary cards
│   ├── TransactionForm.jsx  # Form to add new transactions
│   ├── TransactionList.jsx  # Scrollable list of all transactions
│   ├── MonthlyChart.jsx     # Bar chart: monthly income vs expenses
│   └── CategoryBreakdown.jsx # Doughnut chart: expense categories
├── data/
│   └── dummyData.js         # Category definitions & sample transactions
├── App.jsx                  # Root component with state & localStorage logic
├── main.jsx                 # React entry point
└── index.css                # Tailwind CSS import
```

## Usage

1. **View your dashboard** — The top cards show your total balance, income, and expenses across all time.
2. **Add a transaction** — Fill in the form on the right: choose Income or Expense, enter an amount, pick a category, add a description, and select a date.
3. **Browse transactions** — The transaction list shows all entries sorted by date (newest first). Hover a row to reveal the delete (✕) button.
4. **Analyze spending** — The monthly bar chart and category doughnut chart update in real time as you add or delete transactions.
5. **Reset demo data** — Click "Reset to demo data" in the header to restore the sample transactions.

## License

MIT
