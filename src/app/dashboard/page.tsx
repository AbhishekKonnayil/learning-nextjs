import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-5">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8">
        <div className="flex flex-col">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 sm:mb-0">
            Dashboard
          </h1>
          <p className="text-lg text-gray-600 mt-3">
            Welcome back! Here you can manage your tasks, view analytics, and
            make adjustments
          </p>
        </div>
        {/* DASHBOARD GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* TASK CARD */}
          <Link
            className="bg-blue-100 hover:bg-blue-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
            href="/dashboard/tasks"
          >
            <div>
              <h2>Tasks</h2>
              <span>📋</span>
            </div>
            <p>View,Organise, and Manage your daily tasks </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
