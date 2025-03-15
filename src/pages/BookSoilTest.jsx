import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const BookSoilTest = () => {

  const handleBook = () => {
    navigate("/crop-details");
  };
  
  return (
    <div>
      <PageHeader title={"Book Soil test"} to={"/crop-advisory/soil-report"} />

        <div className="flex flex-col gap-0 py-20">
        
        <div className="w-full px-5 py-4 flex flex-col items-start bg-[#EAFFFB] gap-1 -mb-4">
          <p className="text-lg text-[#333]">Advanced Package (12 Parameters)</p>
          <p className="text-lg font-semibold text-[#333]">499/-</p>
        </div>

        <div className="flex flex-col px-5 py-2 gap-0">
          <div className="bg-[url('/images/soilTestParameters.jpeg')] w-70 h-80 bg-contain bg-no-repeat bg-center"></div>
          <button onClick={handleBook} className="-mt-2 px-6 py-3 bg-[#039667] text-white rounded-lg">Book Now</button>
        </div>

        </div>
    </div>
  );
};

export default BookSoilTest;

