import React from "react";

const UserList = () => {
  const users = [
    {
      id: 1,
      name: "Abhishek K",
      email: "abhishek.konnayil@gmail.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Abhijith K",
      email: "abhijithk2012@gmail.com",
      role: "Editor",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Parvathy M S",
      email: "parvathysaji084@gmail.com",
      role: "User",
      status: "Suspended",
    },
    {
      id: 4,
      name: "Rekha Krishnan",
      email: "rekha1976@gmail.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 5,
      name: "K.K.Pillai",
      email: "kkpillai1970@gmail.com",
      role: "Editor",
      status: "Inactive",
    },
    {
      id: 6,
      name: "Kavya Krishnan B",
      email: "kavyakrishnanb@gmail.com",
      role: "User",
      status: "Suspended",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="bg-white max-w-7xl mx-auto p-8 shadow-xl rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Users List</h1>
        {/* users table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-blue-600 text-white">
              <tr className="text-left">
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Role</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t hover:bg-gray-50">
                  <td className="py-4 px-4">{user.name}</td>
                  <td className="py-4 px-4">{user.email}</td>
                  <td className="py-4 px-4">{user.role}</td>
                  <td
                    className={`py-4 px-4 ${
                      user.status == "Active"
                        ? "text-green-500"
                        : user.status == "Inactive"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                  >
                    {user.status}
                  </td>
                  <td className="py-4 px-4 items-center">
                    <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                      Edit
                    </button>
                    <button className="ml-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
