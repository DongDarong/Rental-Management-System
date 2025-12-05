import React, { useState, useEffect } from 'react';
// IMPORT PDF LIBRARIES
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';

// IMPORT LAYOUT AND COMPONENTS
import UsersHeader from '../components/users/UserHeader';
import UsersSearchBar from '../components/users/UserSearchBar';
import UsersTable from '../components/users/UserTable';
import UserForm from '../components/users/UserForm';
import Layout from '../components/Layout';

// IMPORT PAGINATION AND MODALS
import Pagination from "../components/paginations/Pagination";
import Drawer from "../components/modals/Drawer";
import AlertModal from '../components/modals/AlertModal';
import SuccessModal from '../components/modals/SuccessModal';
import ErrorModal from '../components/modals/ErrorModal';
import LoadingModal from "../components/modals/LoadingModal";

function Users() {
  // 1. DATA STATE
  const [users, setUsers] = useState([
    { id: "UID-001", name: "Admin King (You)", email: "admin.king@mgmt.com", role: "Super Admin", status: "Active" },
    { id: "UID-002", name: "Sarah Manager", email: "sarah.m@mgmt.com", role: "Admin", status: "Active" },
    { id: "UID-T01", name: "John Doe", email: "john.doe@tenant.com", role: "Tenant", status: "Active" },
    { id: "UID-T02", name: "Jane Smith", email: "jane.smith@tenant.com", role: "Tenant", status: "Inactive" },
    { id: "UID-003", name: "Mike Lyne", email: "mike.lyne@mgmt.com", role: "Admin", status: "Active" },
    { id: "UID-T03", name: "Emily Clark", email: "emily.c@tenant.com", role: "Tenant", status: "Active" },
  ]);

  // 2. UI STATE
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // 3. DRAWER STATE
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // 4. MODAL STATES
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(""); // To differentiate saving vs downloading
  const [alertOpen, setAlertOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // --- HANDLERS ---

  const openDrawer = () => setIsDrawerOpen(true);
  
  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setEditingUser(null);
  };

  const handleAddUser = () => {
    setEditingUser(null);
    openDrawer();
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    openDrawer();
  };

  // --- SAVE LOGIC ---
  const handleSaveUser = (userData) => {
    if (!userData.name || !userData.email) {
      setErrorMessage("Name and Email are required.");
      setShowError(true);
      return;
    }

    setLoadingMessage("Saving User...");
    setIsLoading(true);

    setTimeout(() => {
      if (editingUser) {
        setUsers((prev) =>
          prev.map((u) => (u.id === editingUser.id ? { ...u, ...userData } : u))
        );
      } else {
        const newUser = { 
            id: `UID-${Date.now().toString().slice(-4)}`, 
            ...userData 
        };
        setUsers((prev) => [newUser, ...prev]);
      }

      setIsLoading(false);
      closeDrawer();
      setShowSuccess(true);
    }, 800);
  };

  // --- DELETE LOGIC ---
  const handleDeleteClick = (id) => {
    setIdToDelete(id);
    setAlertOpen(true);
  };

  const confirmDelete = () => {
    setUsers((prev) => prev.filter((u) => u.id !== idToDelete));
    if (currentItems.length === 1 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // --- 5. PDF DOWNLOAD LOGIC (NEW) ---
  const handleDownloadReport = () => {
    setLoadingMessage("Generating PDF Report...");
    setIsLoading(true);

    setTimeout(() => {
      try {
        const doc = new jsPDF();

        // 1. Add Title
        doc.setFontSize(18);
        doc.text("System Users Report", 14, 20);
        
        // 2. Add Timestamp
        doc.setFontSize(10);
        doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 28);

        // 3. Define Columns
        const tableColumn = ["User ID", "Name", "Email", "Role", "Status"];
        const tableRows = [];

        // 4. Map Data
        users.forEach(user => {
          const rowData = [
            user.id,
            user.name,
            user.email,
            user.role,
            user.status
          ];
          tableRows.push(rowData);
        });

        // 5. Generate Table
        autoTable(doc, {
          head: [tableColumn],
          body: tableRows,
          startY: 35,
          theme: 'grid',
          headStyles: { fillColor: [41, 128, 185] }, // Blue header
        });

        // 6. Save File
        doc.save("Users_Report.pdf");

      } catch (error) {
        console.error("PDF Error:", error);
        setErrorMessage("Failed to generate PDF report.");
        setShowError(true);
      } finally {
        setIsLoading(false);
      }
    }, 800);
  };

  // --- FILTERING & PAGINATION ---
  const filteredUsers = users.filter((user) => {
    const term = searchTerm.toLowerCase();
    return (
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      user.role.toLowerCase().includes(term)
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  return (
    <div>
      <Layout>
      <UsersHeader
        onAddUser={handleAddUser}
        onDownloadReport={handleDownloadReport}
      />

      <UsersSearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <UsersTable
        users={currentItems}
        onEdit={handleEditUser}
        onDelete={handleDeleteClick}
      />

      {filteredUsers.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      {/* --- DRAWERS & MODALS --- */}

      <Drawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        title={editingUser ? "Edit User Profile" : "Create New User"}
      >
        <UserForm user={editingUser} onSave={handleSaveUser} />
      </Drawer>

      <AlertModal
        isOpen={alertOpen}
        onClose={() => setAlertOpen(false)}
        onConfirm={confirmDelete}
        title="Remove User?"
        message="Are you sure you want to delete this user? This action cannot be undone."
        confirmText="Yes, Delete"
        type="danger"
      />

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Success"
        message="Operation completed successfully."
      />

      <ErrorModal
        isOpen={showError}
        onClose={() => setShowError(false)}
        title="Error"
        message={errorMessage}
        buttonText="Close"
      />

      <LoadingModal
        isOpen={isLoading}
        message={loadingMessage || "Processing..."}
      />
      </Layout>
    </div>
  );
}

export default Users;