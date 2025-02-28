import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const OtpLogin = () => {
  const [otp, setOtp] = useState("");
  const [isOtpEmpty, setIsOtpEmpty] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const navigate = useNavigate();

  const notVerified = () => {
    setIsOtpVerified(true);

    setTimeout(() => setIsOtpVerified(false), 3000);
  };

  const handleClick = (otp) => {
    if (otp == "") {
      setIsOtpEmpty(true);
      setTimeout(() => setIsOtpEmpty(false), 3000);
    } else if (otp == "123") {
      navigate("/select-role");
    } else if (otp == "456") {
      navigate("/homepage");
    } else notVerified();
  };

  return (
    <div className="w-full h-[100vh]">
      <PageHeader to={"/login"} />
      <div className="w-full flex flex-col gap-[24px] p-4 mt-[50%]">
        <div>
          <span className="text-2xl font-medium">
            Verify your mobile number:
          </span>
          <p className="mt-2 text-gray-600">
            Please enter the otp received on your phone number
          </p>
        </div>

        <div className="flex flex-col flex-grow gap-2">
          <span className="text-[#039667]">Enter OTP:</span>
          <input
            type="text"
            onChange={(e) => {
              setOtp(e.target.value);
            }}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        <div
          onClick={() => handleClick(otp)}
          className="w-full flex justify-center p-3 bg-[#039667] border border-solid border-gray-300 rounded-lg cursor-pointer"
        >
          <span className="text-white">CONFIRM</span>
        </div>
        {/* Error Messages */}
        {isOtpEmpty && (
          <div className="text-sm text-red-400 -mt-2">
            Please enter the OTP.
          </div>
        )}
        {isOtpVerified && (
          <div className="text-sm text-red-400 -mt-2">
            This OTP is not valid.
          </div>
        )}
      </div>
    </div>
  );
};

export default OtpLogin;
