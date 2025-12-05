import React from "react";

function ReportTable({ data }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-bold text-blue-900">Monthly Financial Summary (2025)</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Income</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Expenses</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Profit</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">New Tenants</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Occupancy Rate</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.month}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">{row.income}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-500">({row.expenses})</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">{row.profit}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.newTenants}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.occupancy}</td>
              </tr>
            ))}
          </tbody>
          
          {/* Footer Row (YTD Total) */}
          <tfoot className="bg-gray-100 font-bold">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">YTD Total (Jan-Oct)</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-700">$175,000</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">($32,300)</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-900">$142,700</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">33</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">~93.3% Avg</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default ReportTable;