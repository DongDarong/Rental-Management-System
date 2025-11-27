import { useState } from "react";
import Header from "../components/properties/Header";
import Drawer from "../components/Drawer";
import SearchBar from "../components/properties/SearchBar";
import Table from "../components/properties/Table";
import PropertyForm from "../components/properties/PropertyForm";
import Pagination from "../components/paginations/Pagination";

function Properties() {
  const [properties, setProperties] = useState([
    { id: 1,  name: "House A", type: "House", size: 120, price: 50000, status: "Available" },
    { id: 2,  name: "Villa B", type: "Villa", size: 300, price: 150000, status: "Rented" },
    { id: 3,  name: "Apartment C", type: "Apartment", size: 80, price: 30000, status: "Maintenance" },
  ]);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingProperty, setEditingProperty] = useState(null);

  // Search/filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setEditingProperty(null);
  };

  const handleSaveProperty = (property) => {
    if (editingProperty) {
      setProperties((prev) =>
        prev.map((p) => (p.id === editingProperty.id ? { ...p, ...property } : p))
      );
    } else {
      const newProperty = { id: Date.now(), ...property };
      setProperties((prev) => [...prev, newProperty]);
    }
    closeDrawer();
  };

  const handleDeleteProperty = (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      setProperties((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const handleEditProperty = (property) => {
    setEditingProperty(property);
    setIsDrawerOpen(true);
  };

  // Filter properties based on search and status
  const filteredProperties = properties.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus ? p.status === filterStatus : true;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-4">
      <Header onOpenDrawer={openDrawer} />

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        filterStatus={filterStatus}
        onFilterChange={(e) => setFilterStatus(e.target.value)}
      />

      <Table
        properties={filteredProperties}
        onEdit={handleEditProperty}
        onDelete={handleDeleteProperty}
      />

      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={(page) => console.log("Change to page:", page)}
      />

      <Drawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        title={editingProperty ? "Edit Property" : "Add Property"}
      >
        <PropertyForm property={editingProperty} onSave={handleSaveProperty} />
      </Drawer>
    </div>
  );
}

export default Properties;
