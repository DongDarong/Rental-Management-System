
import { useState } from 'react';
import Header from '../components/Header';


 function Dashboard() {
  // const [stats, setStats] = useState({
  //   properties: 0,
  //   tenants: 0,
  //   vacancies: 0,
  //   monthlyIncome: 0,
  // });



  return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
    
    <Header title="Dashboard" username="[User Name]" lastLogin="Oct 16, 2025"/>
    <hr className="border-gray-700 mt-4 mb-10" />

    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

      
      <div className="bg-gray-800 rounded-xl shadow p-4 sm:p-6">
        <h2 className="flex items-center text-teal-400 font-bold text-lg sm:text-xl mb-3 sm:mb-4">
          <span className="material-icons mr-2">home</span> Rented Unit
        </h2>
        <div className="space-y-2">
          <p className="text-gray-100"><span className="font-semibold text-gray-100">Property:</span> 123 Green St, Apt 4B</p>
          <p className="text-gray-100"><span className="font-semibold text-gray-100">Type:</span> Apartment</p>
          <p className="text-gray-100"><span className="font-semibold text-gray-100">Bed/Bath:</span> 2 Bed / 1 Bath</p>
        </div>
        <button className="mt-3 sm:mt-4 w-full bg-gray-700 hover:bg-gray-600 py-2 rounded text-gray-300 cursor-pointer">
          View Unit Details
        </button>
      </div>

      
      <div className="bg-gray-800 rounded-xl shadow p-4 sm:p-6">
        <h2 className="flex items-center text-teal-400 font-bold text-lg sm:text-xl mb-3 sm:mb-4">
          <span className="material-icons mr-2">description</span> Contract Details
        </h2>
        <div className="space-y-2">
          <p className="text-gray-100"><span className="font-semibold text-gray-100">Start Date:</span> 2024-08-01</p>
          <p className="text-gray-100"><span className="font-semibold text-gray-100">End Date:</span> 2025-07-31</p>
          <p className="text-gray-100"><span className="font-semibold text-gray-100">Rent Amount:</span> $1,500.00 / mo</p>
          <p className="flex items-center">
            <span className="font-semibold mr-2 text-gray-100">Lease Status:</span>
            <span className="bg-teal-700 text-white px-2 py-1 rounded-full text-sm">Active</span>
          </p>
        </div>
        <button className="mt-3 sm:mt-4 w-full bg-gray-700 hover:bg-gray-600 py-2 rounded text-gray-300 cursor-pointer">
          Download Contract PDF
        </button>
      </div>

      
      <div className="bg-gray-800 rounded-xl shadow p-4 sm:p-6">
        <h2 className="flex items-center text-teal-400 font-bold text-lg sm:text-xl mb-3 sm:mb-4">
          <span className="material-icons mr-2">attach_money</span> Payment Status
        </h2>
        <div className="space-y-2">
          <p className="text-gray-100"><span className="font-semibold text-gray-100">Next Payment Due:</span> November 1, 2025</p>
          <p className="text-gray-100"><span className="font-semibold text-gray-100">Amount Due:</span> $1,500.00</p>
          <p className="text-gray-100"><span className="font-semibold text-gray-100">Last Payment:</span> Paid Oct 1, 2025</p>
          <p className="flex items-center">
            <span className="font-semibold mr-2 text-gray-100">Overall Status:</span>
            <span className="bg-green-700 text-white px-2 py-1 rounded-full text-sm">UP TO DATE</span>
          </p>
        </div>
        <button className="mt-3 sm:mt-4 w-full bg-cyan-400 hover:bg-cyan-500 text-gray-900 py-2 rounded font-semibold cursor-pointer">
          Make a Payment
        </button>
      </div>

    </div>
  </div>

  );
}

export default Dashboard;