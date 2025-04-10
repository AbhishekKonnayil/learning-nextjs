import React from "react";

const NotificationSettings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="bg-white max-w-4xl mx-auto p-8 shadow-xl rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Notification Settings</h1>
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Notification Preferences
          </h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm block font-medium text-gray-600">
              Email notifications
            </label>
            <select className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500">
              <option>Enable</option>
              <option>Disable</option>
            </select>
          </div>
          <div>
            <label className="text-sm block font-medium text-gray-600">
              SMS notifications
            </label>
            <select className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500">
              <option>Enable</option>
              <option>Disable</option>
            </select>
          </div>
          <div>
            <label className="text-sm block font-medium text-gray-600">
              Push notifications
            </label>
            <select className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500">
              <option>Enable</option>
              <option>Disable</option>
            </select>
          </div>
        </div>
        {/* Action setting */}
        <div className="flex justify-end space-x-4 mt-6">
          <button className="bg-gray-100 px-6 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors">
            cancel
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
