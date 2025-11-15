
import { useState } from 'react';
import Header from '../components/Header';

 function Units() {
  // const [stats, setStats] = useState({
  //   properties: 0,
  //   tenants: 0,
  //   vacancies: 0,
  //   monthlyIncome: 0,
  // });



  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-4 sm:py-4">
      <Header title="Units" username="Dong Darong" lastLogin="Oct 16, 2025" />
      <hr className="border-gray-700 mt-4 mb-10" />
      <h1>hello Units</h1>
    </div>
  );
}

export default Units;