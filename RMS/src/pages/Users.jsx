
import { useState } from 'react';
import Header from '../components/Header';
import TableListUser from '../components/TableListUser';
import Pagination from '../components/Pagination';
 function Users() {
  // const [stats, setStats] = useState({
  //   properties: 0,
  //   tenants: 0,
  //   vacancies: 0,
  //   monthlyIncome: 0,
  // });



  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-4 sm:py-4">
      <Header title="Users" username="Dong Darong" lastLogin="Oct 16, 2025" />
      <hr className="border-gray-700 mt-4 mb-10" />

      <div className="mt-6">
        <TableListUser />
      </div>
      <Pagination totalPages={10} initialPage={1} onPageChange={(page) => console.log('Page changed to:', page)} />
    </div>
  );
}

export default Users;