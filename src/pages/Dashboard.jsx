
import { useState } from 'react';
import Header from '../components/dashboard/Header';
import Card from '../components/dashboard/Card-PTIM';
import Layout from '../components/Layout';
// import ChartsGrid from '../components/dashboard/ChartsGrid';
// import ChartCard from '../components/dashboard/ChartCard';
 function Dashboard() {
  // const [stats, setStats] = useState({
  //   properties: 0,
  //   tenants: 0,
  //   vacancies: 0,
  //   monthlyIncome: 0,
  // });



  return (
    <div>
      <Layout>
      <Header title="Dashboard Overview" username="Admin User" lastLogin="2024-06-01" />
      <Card />
      {/* <ChartCard /> */}
      {/* <ChartsGrid /> */}
      </Layout>
    </div>
  );
}

export default Dashboard;