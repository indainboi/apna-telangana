import React from "react";
import PageHeader from "../components/PageHeader";
import { Link, useNavigate } from "react-router-dom";

const AllowLocation = () => {
  const navigate = useNavigate();
  const allow = ["Allow", "Don't Allow"];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <PageHeader />

      {/* Notification Content */}
      <div className="text-center mt-[50%] px-2">
        <h2 className="text-xl font-semibold">Enable Location</h2>
        <p className="text-gray-600 mt-2">
          Allow access to your location to get personalized results based on
          your area.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <Link
          to={"/allow-notifications"}
          className="px-6 py-2 bg-[#039667] text-white rounded-lg"
        >
          Allow
        </Link>
        <Link
          to={"/allow-notifications"}
          className="px-6 py-2 bg-gray-300 rounded-lg"
        >
          Don't Allow
        </Link>
      </div>
    </div>
  );
};

export default AllowLocation;
