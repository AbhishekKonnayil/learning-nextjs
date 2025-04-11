import Link from "next/link";
import React from "react";

const User = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 p-8">
      <div className="bg-white max-w-4xl mx-auto p-8 shadow-xl rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Users</h1>
        <p className="text-lg text-gray-600 mb-8">
          Manage your users here. You can view detailed information or browse a
          list of users.
        </p>
        {/* User related sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <Link
            href="/dashboard/users/users_details"
            className="bg-teal-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
          >
            <h1 className="text-xl font-semibold text-teal-800 mb-2">
              Users Details
            </h1>
            <p className="text-gray-600">
              View your detailed information about each user in your system.
            </p>
          </Link>
          {/* User list cards */}
          <Link
            href="/dashboard/users/users_list"
            className="bg-orange-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
          >
            <h1 className="text-xl font-semibold text-orange-800 mb-2">
              Users List
            </h1>
            <p className="text-gray-600">
              Browse and manage all users in the system.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
