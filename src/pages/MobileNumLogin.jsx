import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const MobileNumLogin = () => {
  return (
    <div className="w-full h-[100vh]">
      <PageHeader to={"/"} />
      <div className="w-full flex flex-col gap-[24px] p-4 mt-[50%]">
        <div>
          <span className="text-2xl font-medium">
            Enter your mobile number:
          </span>
          <p className="mt-2 text-gray-600">
            Please confirm your country code and enter your phone number
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col flex-shrink gap-2">
            <span className="text-gray-600">country code</span>
            <select className="border border-gray-300 rounded-lg p-2 h-full">
              <option value="english">+91</option>
              <option value="hindi">+92</option>
              <option value="telugu">+11</option>
            </select>
          </div>
          <div className="flex flex-col flex-grow gap-2">
            <span className="text-[#039667]">Mobile Number</span>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
        </div>
        <Link
          to={"/login-otp"}
          className="w-full flex justify-center p-3 bg-[#039667] border border-solid border-gray-300 rounded-lg"
        >
          <span>CONTINUE</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileNumLogin;
