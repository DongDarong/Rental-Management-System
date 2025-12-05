import React, { useState } from 'react';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';

import ReportHeader from '../components/reports/ReportHeader';
import SummaryCards from '../components/reports/SummaryCards';
import ReportTable from '../components/reports/ReportTable';
import LoadingModal from '../components/modals/LoadingModal'; // 1. Import LoadingModal

function Reports() {
  // 1. STATE FOR LOADING
  const [isLoading, setIsLoading] = useState(false);

  // 2. MOCK DATA
  const annualSummary = {
    income: "$220,500",
    expenses: "$40,800",
    netProfit: "$179,700",
    occupancyRate: "94.5%"
  };

  const monthlyData = [
    { month: "October", income: "$22,000", expenses: "$3,500", profit: "$18,500", newTenants: 6, occupancy: "98%" },
    { month: "September", income: "$21,000", expenses: "$3,000", profit: "$18,000", newTenants: 3, occupancy: "95%" },
    { month: "August", income: "$19,000", expenses: "$2,800", profit: "$16,200", newTenants: 2, occupancy: "94%" },
    { month: "July", income: "$17,000", expenses: "$4,000", profit: "$13,000", newTenants: 4, occupancy: "92%" },
    { month: "June", income: "$16,000", expenses: "$2,500", profit: "$13,500", newTenants: 3, occupancy: "90%" },
    { month: "May", income: "$20,500", expenses: "$3,200", profit: "$17,300", newTenants: 5, occupancy: "95%" },
    { month: "April", income: "$18,000", expenses: "$3,000", profit: "$15,000", newTenants: 4, occupancy: "94%" },
    { month: "March", income: "$14,000", expenses: "$2,800", profit: "$11,200", newTenants: 1, occupancy: "92%" },
    { month: "February", income: "$15,500", expenses: "$4,000", profit: "$11,500", newTenants: 3, occupancy: "93%" },
    { month: "January", income: "$12,000", expenses: "$3,500", profit: "$8,500", newTenants: 2, occupancy: "90%" },
  ];

  // 3. UPDATED PDF GENERATION LOGIC
  const handleDownloadPDF = () => {
    setIsLoading(true); // <--- START LOADING

    // Use setTimeout to allow the UI to update and show the modal before heavy processing starts
    setTimeout(() => {
      try {
        const doc = new jsPDF();

        // Title
        doc.setFontSize(18);
        doc.text("Annual Financial Report 2025", 14, 20);
        
        // Summary Text
        doc.setFontSize(12);
        doc.text(`Total Annual Income: ${annualSummary.income}`, 14, 30);
        doc.text(`Total Annual Expenses: (${annualSummary.expenses})`, 14, 38);
        doc.text(`Net Profit: ${annualSummary.netProfit}`, 14, 46);

        // Prepare Table Data
        const tableColumn = ["Month", "Income", "Expenses", "Net Profit", "New Tenants", "Occupancy"];
        const tableRows = [];

        monthlyData.forEach(row => {
          const rowData = [
            row.month,
            row.income,
            `(${row.expenses})`,
            row.profit,
            row.newTenants,
            row.occupancy
          ];
          tableRows.push(rowData);
        });

        tableRows.push(["YTD Total", "$175,000", "($32,300)", "$142,700", "33", "~93.3%"]);

        // Generate Table
        autoTable(doc, {
          head: [tableColumn],
          body: tableRows,
          startY: 55,
          theme: 'grid',
          headStyles: { fillColor: [30, 64, 175] },
        });

        // Save File
        doc.save("Financial_Report_2025.pdf");
        console.log("PDF Download Successful");

      } catch (error) {
        console.error("Error generating PDF:", error);
        alert("Failed to generate PDF.");
      } finally {
        setIsLoading(false); // <--- STOP LOADING
      }
    }, 500); // 0.5 second delay makes the loading feel smoother
  };

  return (
    <div className="p-4 space-y-6">
      <ReportHeader onDownload={handleDownloadPDF} />

      <div>
        <h2 className="text-xl font-bold text-blue-900 mb-4 px-1">Annual Summary (2025)</h2>
        <SummaryCards summary={annualSummary} />
      </div>

      <ReportTable data={monthlyData} />

      {/* 4. RENDER LOADING COMPONENT */}
      <LoadingModal 
        isOpen={isLoading} 
        message="Generating Report..." 
      />
    </div>
  );
}

export default Reports;