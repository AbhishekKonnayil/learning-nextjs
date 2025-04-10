import React from "react";

const ProfileSettings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="bg-white max-w-4xl mx-auto p-8 shadow-xl rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Profile Settings
        </h1>
        {/* profile picture */}
        <section className="mb-8">
          <h1 className="text-xl font-semibold text-gray-700 mb-4">
            Profile Picture
          </h1>
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden">
              <img
                src="/images/mohanlal-e8ed3e45-3b4b-434b-9f4d-64ac26143e9-resize-750.webp"
                alt="profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <div>
            <button className="px-6 mt-5 py-2 text-white bg-blue-600 rounded-lg  hover:bg-blue-700 transition-colors">
              Change Picture
            </button>
          </div>
        </section>
        {/* Profile information section */}
        <section className="mb-4">
          <h1 className="text-xl font-semibold text-gray-700 mb-4">
            Profile Information
          </h1>
          <div className="space-y-6">
            <div>
              <label className="text-sm block font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                defaultValue={`Abhishek Konnayil`}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500"
              ></input>
            </div>
            <div>
              <label className="text-sm block font-medium text-gray-600">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter username"
                defaultValue={`i__abhishek_k`}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500"
              ></input>
            </div>
            <div>
              <label className="text-sm block font-medium text-gray-600">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your Email"
                defaultValue={`abhishek.konnayil@gmail.com`}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500"
              ></input>
            </div>
          </div>
        </section>
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

export default ProfileSettings;
