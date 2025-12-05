import { useState, useEffect } from "react";

function UserForm({ user, onSave }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Tenant");
  const [status, setStatus] = useState("Active");

  // Populate form if editing
  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setRole(user.role || "Tenant");
      setStatus(user.status || "Active");
    } else {
      clearFields();
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, email, role, status });
  };

  const clearFields = () => {
    setName("");
    setEmail("");
    setRole("Tenant");
    setStatus("Active");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. John Doe"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Email Address</label>
        <input
          type="email"
          className="w-full border border-gray-300 p-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e.g. john@example.com"
          required
        />
      </div>

      {/* Role */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Role</label>
        <select
          className="w-full border border-gray-300 p-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="Tenant">Tenant</option>
          <option value="Admin">Admin</option>
          <option value="Super Admin">Super Admin</option>
        </select>
      </div>

      {/* Status */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Account Status</label>
        <select
          className="w-full border border-gray-300 p-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Suspended">Suspended</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-6 pt-4 border-t border-gray-100">
        <button
          type="submit"
          className="flex-1 bg-blue-600 text-white p-2.5 rounded-lg hover:bg-blue-700 font-medium transition-colors shadow-sm"
        >
          Save User
        </button>
        <button
          type="button"
          className="flex-1 bg-gray-100 text-gray-700 p-2.5 rounded-lg hover:bg-gray-200 font-medium transition-colors"
          onClick={clearFields}
        >
          Clear
        </button>
      </div>
    </form>
  );
}

export default UserForm;