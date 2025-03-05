import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const SelectRole = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const roles = ["Farmer", "Trader", "Other"];

  const handleNext = () => {
    // if (!name || !role) {
    //   alert("Please enter your name and select a role.");
    //   return;
    // }
    navigate("/field-location");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <PageHeader />

      {/* Name Input */}
      <div className="w-full max-w-md px-4 mt-[10%]">
        <h2 className="text-xl font-semibold mb-4">Enter Your Name</h2>
        <input
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3"
        />
      </div>

      {/* Role Selection */}
      <div className="w-full max-w-md mt-6 px-4">
        <h2 className="text-xl font-semibold mb-3">Select Your Role</h2>
        <div className="flex flex-col gap-3">
          {roles.map((item) => (
            <label key={item} className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                value={item}
                checked={role === item}
                onChange={() => setRole(item)}
                className="h-5 w-5"
              />
              <span className="text-lg">{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="mt-6 px-6 py-3 bg-[#039667] text-white rounded-lg"
      >
        Next
      </button>
    </div>
  );
};

export default SelectRole;
