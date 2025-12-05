import React from "react";

function UserRow({ user, onEdit, onDelete }) {
  const isSuperAdmin = user.role === "Super Admin";

  // Determine Access Rights content based on role
  let accessRightsContent;
  if (isSuperAdmin) {
    accessRightsContent = <span className="text-red-500 font-medium">Full Control</span>;
  } else if (user.role === "Admin") {
    accessRightsContent = <button className="text-blue-600 hover:underline font-medium">Set Access</button>;
  } else {
    accessRightsContent = <button className="text-blue-600 hover:underline font-medium">View Access</button>;
  }

  return (
    <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{user.id}</td>
      <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 ${isSuperAdmin ? "font-bold" : "font-medium"}`}>
        {user.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
      <td className={`px-6 py-4 whitespace-nowrap text-sm font-bold ${isSuperAdmin ? "text-gray-900" : "text-gray-700"}`}>
        {user.role}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">{accessRightsContent}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
        <button
          onClick={() => onEdit(user)}
          className="text-blue-600 hover:text-blue-800 transition-colors font-semibold"
        >
          Edit
        </button>
        <button
          onClick={() => !isSuperAdmin && onDelete(user.id)}
          className={`font-semibold transition-colors ${
            isSuperAdmin
              ? "text-gray-400 cursor-not-allowed"
              : "text-red-500 hover:text-red-700"
          }`}
          disabled={isSuperAdmin}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default UserRow;