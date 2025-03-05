import React from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const AllowNotifications = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/select-role");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <PageHeader />

      {/* Notification Content */}
      <div className="text-center mt-[50%] px-2">
        <h2 className="text-xl font-semibold">Enable Notifications</h2>
        <p className="text-gray-600 mt-2">
          Stay updated with important alerts and updates. Would you like to
          allow notifications?
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={handleClick}
          className="px-6 py-2 bg-[#039667] text-white rounded-lg"
        >
          Allow
        </button>
        <button
          onClick={handleClick}
          className="px-6 py-2 bg-gray-300 rounded-lg"
        >
          Don't Allow
        </button>
      </div>
    </div>
  );
};

export default AllowNotifications;
