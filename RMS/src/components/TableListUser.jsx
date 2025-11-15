
import { useState } from 'react';
import Drawer from './Drawer';
import FormUser from './Form-user';
import DeleteAlert from './delete-alert';

function TableListUser({ users: propUsers }) {
  // const [stats, setStats] = useState({
  //   properties: 0,
  //   tenants: 0,
  //   vacancies: 0,
  //   monthlyIncome: 0,
  // });



  // sample data if no prop provided
  const sampleUsers = [
    { id: 'U01', fullName: 'Dong Darong', username: 'dongdarong', email: 'dongdarong@gmail.com', phone: '09999999', role: 'Admin', status: 'Active' },
    { id: 'U02', fullName: 'Jane Doe', username: 'janed', email: 'jane@example.com', phone: '0911222333', role: 'Manager', status: 'Active' },
    { id: 'U03', fullName: 'Dong Darong', username: 'dongdarong', email: 'dongdarong@gmail.com', phone: '09999999', role: 'Admin', status: 'Active' },
    { id: 'U04', fullName: 'Dong Darong', username: 'dongdarong', email: 'dongdarong@gmail.com', phone: '09999999', role: 'Admin', status: 'Active' },
    { id: 'U05', fullName: 'Dong Darong', username: 'dongdarong', email: 'dongdarong@gmail.com', phone: '09999999', role: 'Admin', status: 'Active' },
    { id: 'U06', fullName: 'Dong Darong', username: 'dongdarong', email: 'dongdarong@gmail.com', phone: '09999999', role: 'Admin', status: 'Active' },
    { id: 'U07', fullName: 'Dong Darong', username: 'dongdarong', email: 'dongdarong@gmail.com', phone: '09999999', role: 'Admin', status: 'Active' },
    { id: 'U08', fullName: 'Dong Darong', username: 'dongdarong', email: 'dongdarong@gmail.com', phone: '09999999', role: 'Admin', status: 'Active' },
    { id: 'U09', fullName: 'Dong Darong', username: 'dongdarong', email: 'dongdarong@gmail.com', phone: '09999999', role: 'Admin', status: 'Active' },
    { id: 'U10', fullName: 'Dong Darong', username: 'dongdarong', email: 'dongdarong@gmail.com', phone: '09999999', role: 'Admin', status: 'Active' },
  ];

  const users = propUsers && Array.isArray(propUsers) && propUsers.length ? propUsers : sampleUsers;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const [deleteAlertOpen, setDeleteAlertOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  function openNew() {
    setEditingUser(null);
    setDrawerOpen(true);
  }

  function openEditUser(user) {
    setEditingUser(user);
    setDrawerOpen(true);
  }

  function openDeleteAlert(user) {
    setUserToDelete(user);
    setDeleteAlertOpen(true);
  }

  function handleConfirmDelete() {
    // For now just log; in real app you'd call DELETE API
    // eslint-disable-next-line no-console
    console.log('Delete user', userToDelete);
    setDeleteAlertOpen(false);
    setUserToDelete(null);
  }

  function handleSubmit(newUser) {
    // For now just log; in real app you'd post/put and refresh list
    // eslint-disable-next-line no-console
    if (editingUser) {
      console.log('Update user', editingUser.id, newUser);
    } else {
      console.log('Create user', newUser);
    }
    setDrawerOpen(false);
    setEditingUser(null);
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6 sm:flex-row flex-col">
        <button onClick={openNew} className="bg-cyan-600 hover:bg-cyan-500 text-gray-200 py-2 px-4 rounded font-semibold cursor-pointer">Add New User</button>
      </div>
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-4">All Users</h2>

        <div className="overflow-x-auto bg-gray-700 rounded-lg p-2">
          <table className="min-w-full divide-y divide-gray-600 text-sm">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">N.</th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider hidden sm:table-cell">ID</th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Full Name</th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider hidden md:table-cell">Username</th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Phone</th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider hidden lg:table-cell">Role</th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-gray-700 divide-y divide-gray-600">
              {users.map((u, idx) => (
                <tr key={u.id} className="hover:bg-gray-600">
                  <td className="px-3 sm:px-6 py-4 text-gray-200 text-center">{idx + 1}</td>
                  <td className="px-3 sm:px-6 py-4 text-gray-200 text-center hidden sm:table-cell">{u.id}</td>
                  <td className="px-3 sm:px-6 py-4 text-gray-200">{u.fullName}</td>
                  <td className="px-3 sm:px-6 py-4 text-gray-200 hidden md:table-cell">{u.username}</td>
                  <td className="px-3 sm:px-6 py-4 text-gray-200">{u.email}</td>
                  <td className="px-3 sm:px-6 py-4 text-gray-200">{u.phone}</td>
                  <td className="px-3 sm:px-6 py-4 text-gray-200 hidden lg:table-cell">{u.role}</td>
                  <td className="px-3 sm:px-6 py-4 text-gray-200">{u.status}</td>
                  <td className="px-3 sm:px-6 py-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <button className="bg-blue-600 hover:bg-blue-500 text-gray-200 py-1 px-2 sm:px-3 rounded text-xs sm:text-sm" onClick={() => openEditUser(u)}>Edit</button>
                      <button className="bg-red-600 hover:bg-red-500 text-gray-200 py-1 px-2 sm:px-3 rounded text-xs sm:text-sm" onClick={() => openDeleteAlert(u)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} side="right">
        <FormUser initial={editingUser} onSubmit={handleSubmit} onCancel={() => setDrawerOpen(false)} />
      </Drawer>

      <DeleteAlert
        isOpen={deleteAlertOpen}
        title="Delete User"
        message={userToDelete ? `Are you sure you want to delete ${userToDelete.fullName}?` : 'Are you sure?'}
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeleteAlertOpen(false)}
      />
    </div>
  );
}

export default TableListUser;