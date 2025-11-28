// src/components/payments/FiltersSection.jsx
import React from 'react';

function FiltersSection({ 
  searchTerm, 
  onSearchChange, 
  monthFilter, 
  onMonthChange, 
  statusFilter, 
  onStatusChange, 
  onClear 
}) {
  return (
    <div className="filter-controls bg-white p-6 rounded-xl shadow-md mb-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Filter by Tenant Name"
        className="col-span-2 md:col-span-1 p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 transition duration-150 outline-none"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {/* Month Filter */}
      <select
        className="p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 transition duration-150 outline-none"
        value={monthFilter}
        onChange={(e) => onMonthChange(e.target.value)}
      >
        <option value="">Filter by Month</option>
        <option value="Oct 2023">October 2023</option>
        <option value="Sep 2023">September 2023</option>
        <option value="Aug 2023">August 2023</option>
        <option value="Jul 2023">July 2023</option>
      </select>

      {/* Status Filter */}
      <select
        className="p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 transition duration-150 outline-none"
        value={statusFilter}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <option value="">Filter by Status</option>
        <option value="Paid">Paid</option>
        <option value="Pending">Pending</option>
        <option value="Overdue">Overdue</option>
      </select>

      {/* Clear Button */}
      <button
        onClick={onClear}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-200"
      >
        Clear Filters
      </button>
    </div>
  );
}

export default FiltersSection;