import React from 'react';

function Header({ title = '', username = '', lastLogin = '' }) {
  return (
    <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 bg-gray-700 p-4 sm:p-8 rounded-lg">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-100">{title}</h1>
      </div>

      <div className="w-full sm:w-auto text-center sm:text-right mt-3 sm:mt-0">
        <p className="text-base sm:text-lg text-gray-100 font-medium">Welcome Back, {username}!</p>
        <p className="text-sm text-gray-300 mt-1">Last Login: {lastLogin}</p>
      </div>
    </header>
  );
}

export default Header;
