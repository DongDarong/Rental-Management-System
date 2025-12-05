import { useState, useEffect } from 'react';

// Import Components
import MaintenanceHeader from '../components/maintenance/MaintenanceHeader';
import FiltersSection from '../components/maintenance/FiltersSection';
import MaintenanceTable from '../components/maintenance/MaintenanceTable';
import MaintenanceForm from '../components/maintenance/MaintenanceForm'; 
import Layout from '../components/Layout';

// Import Modals and Pagination
import Pagination from '../components/paginations/Pagination';
import Drawer from '../components/modals/Drawer';
import AlertModal from '../components/modals/AlertModal';
import SuccessModal from '../components/modals/SuccessModal';
import ErrorModal from '../components/modals/ErrorModal';
import LoadingModal from '../components/modals/LoadingModal';
function Maintenance() {
  // 1. DATA STATE (Mock Data)
  const [requests, setRequests] = useState([
    { id: 1, property: "House A", tenantName: "John Doe", issue: "Leaking Faucet", priority: "Low", status: "Pending", dateReported: "2023-10-01" },
    { id: 2, property: "Villa B", tenantName: "Jane Smith", issue: "Broken AC", priority: "High", status: "In Progress", dateReported: "2023-10-02" },
    { id: 3, property: "Apt C", tenantName: "Alice Johnson", issue: "Paint Peeling", priority: "Medium", status: "Completed", dateReported: "2023-09-25" },
    { id: 4, property: "Condo D", tenantName: "Bob Brown", issue: "Heater malfunction", priority: "High", status: "Pending", dateReported: "2023-10-05" },
  ]);

  // ALERT MODAL STATE
  const [alertOpen, setAlertOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 2. FILTER & DRAWER STATE
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingRequest, setEditingRequest] = useState(null);
  
  // 3. PAGINATION STATE
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // --- HANDLERS ---
  const handleClearFilters = () => {
    setSearchTerm("");
    setStatusFilter("");
    setPriorityFilter("");
    setCurrentPage(1);
  };

  const handleEdit = (item) => {
    setEditingRequest(item);
    setIsDrawerOpen(true);
  };

  const handleAdd = () => {
    setEditingRequest(null);
    setIsDrawerOpen(true);
  };

const handleDeleteClick = (id) => {
    setIdToDelete(id); // Save the ID we want to delete
    setAlertOpen(true); // Open the modal
  };

  const confirmDelete = () => {
    setRequests(prev => prev.filter(r => r.id !== idToDelete));
    // The modal handles closing itself via the onClose prop, 
    // or you can setAlertOpen(false) here too.
  };

  const handleSave = (data) => {
  if (editingRequest) {
      setRequests(prev => prev.map(r => r.id === editingRequest.id ? { ...r, ...data } : r));
    } else {
      setRequests(prev => [{ id: Date.now(), ...data }, ...prev]);
    }
    if (!data.tenantName) {
      setErrorMessage("Tenant Name is required!");
      setShowError(true); 
      return;
    }
  setIsDrawerOpen(false);
  setShowSuccess(true);
      setIsLoading(true);

        setTimeout(() => {
        if (editingRequest) {
            // Update logic...
        } else {
            // Add logic...
        }
        
        setIsLoading(false); // <--- STOP LOADING
        closeDrawer();
        setShowSuccess(true);
    }, 1000);
};

  // --- FILTERING LOGIC ---
  const filteredRequests = requests.filter(item => {
    const matchesSearch = item.issue.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.property.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter ? item.status === statusFilter : true;
    const matchesPriority = priorityFilter ? item.priority === priorityFilter : true;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  // --- PAGINATION LOGIC ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRequests.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);

  return (
    <div>
      <Layout>
      <MaintenanceHeader onOpenDrawer={handleAdd} />
      
      <FiltersSection
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        priorityFilter={priorityFilter}
        onPriorityChange={setPriorityFilter}
        onClear={handleClearFilters}
      />
      
      <MaintenanceTable 
        requests={currentItems} 
        onEdit={handleEdit} 
        onDelete={handleDeleteClick}
      />
      
      {filteredRequests.length > 0 && (
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={setCurrentPage} 
        />
      )}

      {/* Placeholder for Form inside Drawer */}
      <Drawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        title={editingRequest ? "Edit Request" : "New Request"}
      >
       <MaintenanceForm request={editingRequest} onSave={handleSave} />
      </Drawer>
      {/* Alert Modal for Deletion Confirmation */}
      <AlertModal
        isOpen={alertOpen}
        onClose={() => setAlertOpen(false)}
        onConfirm={confirmDelete}
        title="Delete Request?"
        message="Are you sure you want to remove this maintenance request? This action cannot be undone."
        confirmText="Yes, Delete"
        type="danger"
      />
      {/* Success Modal for Save Confirmation */}
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Request Saved!"
        message="The maintenance request has been successfully updated."
      />
      {/* Error Modal for Operation Failures */}
      <ErrorModal
        isOpen={showError}
        onClose={() => setShowError(false)}
        title="Validation Error"
        message={errorMessage}
        buttonText="Fix It"
      />
      {/* Loading Modal */}
      <LoadingModal isOpen={isLoading} />
      </Layout>
    </div>
  );
}

export default Maintenance;