import React, { useEffect, useState } from "react";
import axios from "axios";

const ProfilePage = () => {
  const [user, setUser] = useState({});
  const [editData, setEditData] = useState({});
  const [activeTab, setActiveTab] = useState("view");
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
        setEditData(res.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };
    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        "http://localhost:5000/api/user/profile",
        editData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Profile updated successfully!");
      setUser(res.data);
      setActiveTab("view");
    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };

  const handleChangePassword = async () => {
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await axios.put(
        "http://localhost:5000/api/user/change-password",
        {
          oldPassword: passwords.oldPassword,
          newPassword: passwords.newPassword,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Password changed successfully!");
      setPasswords({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.error("Error changing password:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Student Profile
        </h1>

        {/* Tabs */}
        <div className="flex justify-around mb-6 border-b border-gray-300 pb-2">
          <button
            onClick={() => setActiveTab("view")}
            className={`px-4 py-1 rounded ${
              activeTab === "view"
                ? "font-bold border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            View Profile
          </button>
          <button
            onClick={() => setActiveTab("edit")}
            className={`px-4 py-1 rounded ${
              activeTab === "edit"
                ? "font-bold border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Edit Profile
          </button>
          <button
            onClick={() => setActiveTab("password")}
            className={`px-4 py-1 rounded ${
              activeTab === "password"
                ? "font-bold border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Change Password
          </button>
        </div>

        {/* View Profile */}
        {activeTab === "view" && (
          <div className="space-y-3 text-gray-700">
            <p>
              <b>Full Name:</b> {user.fullName}
            </p>
            <p>
              <b>College Name:</b> {user.collegeName}
            </p>
            <p>
              <b>Year of Study:</b> {user.yearOfStudy}
            </p>
            <p>
              <b>Branch:</b> {user.branch}
            </p>
            <p>
              <b>Email:</b> {user.email}
            </p>
          </div>
        )}

        {/* Edit Profile */}
        {activeTab === "edit" && (
          <div className="space-y-3">
            <input
              type="text"
              value={editData.fullName || ""}
              onChange={(e) =>
                setEditData({ ...editData, fullName: e.target.value })
              }
              placeholder="Full Name"
              className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <input
              type="text"
              value={editData.collegeName || ""}
              onChange={(e) =>
                setEditData({ ...editData, collegeName: e.target.value })
              }
              placeholder="College Name"
              className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <input
              type="text"
              value={editData.yearOfStudy || ""}
              onChange={(e) =>
                setEditData({ ...editData, yearOfStudy: e.target.value })
              }
              placeholder="Year of Study"
              className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <input
              type="text"
              value={editData.branch || ""}
              onChange={(e) =>
                setEditData({ ...editData, branch: e.target.value })
              }
              placeholder="Branch"
              className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <button
              onClick={handleUpdate}
              className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600 transition"
            >
              Save Changes
            </button>
          </div>
        )}

        {/* Change Password */}
        {activeTab === "password" && (
          <div className="space-y-3">
            <input
              type="password"
              placeholder="Old Password"
              value={passwords.oldPassword}
              onChange={(e) =>
                setPasswords({ ...passwords, oldPassword: e.target.value })
              }
              className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <input
              type="password"
              placeholder="New Password"
              value={passwords.newPassword}
              onChange={(e) =>
                setPasswords({ ...passwords, newPassword: e.target.value })
              }
              className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={passwords.confirmPassword}
              onChange={(e) =>
                setPasswords({ ...passwords, confirmPassword: e.target.value })
              }
              className="border p-2 w-full rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <button
              onClick={handleChangePassword}
              className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600 transition"
            >
              Change Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
