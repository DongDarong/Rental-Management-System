import React from "react";
import UserRow from "./UserRow";

function UsersTable({ users, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-blue-900 text-white">
            <tr>
              {["USER ID", "NAME", "EMAIL", "ROLE", "ACCESS RIGHTS", "ACTIONS"].map((header) => (
                <th key={header} className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {users.length > 0 ? (
              users.map((user) => (
                <UserRow
                  key={user.id}
                  user={user}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-8 text-center text-gray-500 italic">
                  No users found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 text-center text-sm text-gray-500 font-medium">
        Note: Super Admin permissions cannot be modified or deleted.
      </div>
    </div>
  );
}

export default UsersTable;