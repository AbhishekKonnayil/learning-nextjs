import React from "react";

const UserDetails = () => {
  const user = {
    name: "Abhishek",
    email: "abhishel.konnayil@gmail.com",
    role: "Admin",
    status: "Active",
    bio: "Abhishek is a passionate digital marketer with over 5 years of experience in SEO and content strategy.He specializes in helping brands grow their online presence through data-driven campaigns. When he’s not optimizing websites, John enjoys hiking and writing about tech trends.",
    profilePicture:
      "/images/mohanlal-e8ed3e45-3b4b-434b-9f4d-64ac26143e9-resize-750.webp",
    activities: [
      { id: 1, description: "Update Password", timestamp: "10-02-2025" },
      { id: 2, description: "Changed email address", timestamp: "25-01-2025" },
      {
        id: 3,
        description: "Logged in from a new device",
        timestamp: "15-01-2025",
      },
    ],
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="bg-white max-w-4xl mx-auto p-8 shadow-xl rounded-lg">
        <div className="flex items-center mb-8">
          <img
            src={user.profilePicture}
            alt="profile"
            className="w-20 h-20 rounded-full object-cover mr-6"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-600">{user.role}</p>
            <p
              className={`text-sm ${
                user.status == "Active" ? "text-green-500" : "text-red-500"
              }`}
            >
              Status : {user.status}
            </p>
          </div>
        </div>
        {/* About section */}
        <div className="mb-8">
          <h1 className="text-xl font-semibold text-gray-700 mb-4">About</h1>
          <p className=" text-gray-600">{user.bio}</p>
        </div>
        {/* Activity section */}
        <div>
          <h1 className="text-xl font-semibold text-gray-700 mb-4">
            Recent activities
          </h1>
          <ul>
            {user.activities.map((activity) => (
              <li className="flex items-center space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  <span>A</span>
                </div>
                <div>
                  <p className="text-gray-700">{activity.description}</p>
                  <p className="text-sm text-gray-500">{activity.timestamp}</p>
                </div>
              </li>
            ))}
          </ul>
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

export default UserDetails;
