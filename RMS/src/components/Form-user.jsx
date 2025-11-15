import React, { useState } from 'react';

function FormUser({ initial = null, onSubmit = () => {}, onCancel = () => {} }) {
  const [form, setForm] = useState({
    fullName: initial?.fullName || '',
    username: initial?.username || '',
    email: initial?.email || '',
    phone: initial?.phone || '',
    role: initial?.role || 'User',
    status: initial?.status || 'Active',
  });

  function change(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function submit(e) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <h3 className="text-lg font-semibold">Add / Edit User</h3>

      <div>
        <label className="block text-sm text-gray-300">Full name</label>
        <input name="fullName" value={form.fullName} onChange={change} autoFocus className="mt-1 block w-full rounded-md bg-gray-600 text-gray-100 p-2" />
      </div>

      <div>
        <label className="block text-sm text-gray-300">Username</label>
        <input name="username" value={form.username} onChange={change} className="mt-1 block w-full rounded-md bg-gray-600 text-gray-100 p-2" />
      </div>

      <div>
        <label className="block text-sm text-gray-300">Email</label>
        <input name="email" value={form.email} onChange={change} type="email" className="mt-1 block w-full rounded-md bg-gray-600 text-gray-100 p-2" />
      </div>

      <div>
        <label className="block text-sm text-gray-300">Phone</label>
        <input name="phone" value={form.phone} onChange={change} className="mt-1 block w-full rounded-md bg-gray-600 text-gray-100 p-2" />
      </div>

      <div className="flex gap-2">
        <div className="flex-1">
          <label className="block text-sm text-gray-300">Role</label>
          <select name="role" value={form.role} onChange={change} className="mt-1 block w-full rounded-md bg-gray-600 text-gray-100 p-2 cursor-pointer">
            <option>Admin</option>
            <option>Manager</option>
            <option>User</option>
          </select>
        </div>
        <div className="w-32">
          <label className="block text-sm text-gray-300">Status</label>
          <select name="status" value={form.status} onChange={change} className="mt-1 block w-full rounded-md bg-gray-600 text-gray-100 p-2">
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      <div className="flex gap-2 pt-2">
        <button type="submit" className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded">Save</button>
        <button type="button" onClick={onCancel} className="bg-gray-600 hover:bg-gray-500 text-gray-100 px-4 py-2 rounded">Cancel</button>
      </div>
    </form>
  );
}

export default FormUser;
