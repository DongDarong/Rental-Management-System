import React from "react";

function SummaryCards({ summary }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Total Annual Income */}
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
        <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Total Annual Income</h3>
        <p className="text-3xl font-bold text-green-600 mt-2">{summary.income}</p>
      </div>

      {/* Total Annual Expenses */}
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
        <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Total Annual Expenses</h3>
        <p className="text-3xl font-bold text-red-500 mt-2">({summary.expenses})</p>
      </div>

      {/* Annual Net Profit */}
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
        <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Annual Net Profit</h3>
        <p className="text-3xl font-bold text-blue-800 mt-2">{summary.netProfit}</p>
      </div>

      {/* Average Occupancy Rate */}
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500">
        <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Average Occupancy Rate</h3>
        <p className="text-3xl font-bold text-blue-600 mt-2">{summary.occupancyRate}</p>
      </div>
    </div>
  );
}

export default SummaryCards;