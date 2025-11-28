// src/pages/Payments.jsx
import { useState } from 'react';
import PaymentHeader from '../components/payments/PaymentHeader';
import FiltersSection from '../components/payments/FiltersSection';

function Payments() {
  // 1. Define State
  const [searchTerm, setSearchTerm] = useState("");
  const [monthFilter, setMonthFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // 2. Define Clear Function
  const handleClearFilters = () => {
    setSearchTerm("");
    setMonthFilter("");
    setStatusFilter("");
  };

  return (
    <div className="p-4">
      <PaymentHeader onOpenDrawer={() => {}} />
      {/* 3. Pass Props to Child */}
      <FiltersSection 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        monthFilter={monthFilter}
        onMonthChange={setMonthFilter}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        onClear={handleClearFilters}
      />
      
      {/* Table goes here... */}
    </div>
  );
}

export default Payments;