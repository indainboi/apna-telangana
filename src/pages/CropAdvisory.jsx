import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import { TbReport, TbVirusSearch } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const crops = [
  // { name: "Add Crop", image: "/images/crops/plus.png" },
  {
    name: "Chilli",
    image: "/images/crops/chilli.png",
    to: "/crop-advisory/crop",
  },
  { name: "Tomato", image: "/images/crops/tomato.png" },
  { name: "Paddy", image: "/images/crops/paddy.png" },
  { name: "Groundnut", image: "/images/crops/groundnut.png" },
  { name: "Greengram", image: "/images/crops/greengram.png" },
  { name: "Redgram", image: "/images/crops/redgram.png" },
  { name: "Sugarcane", image: "/images/crops/sugarcane.png" },
];

const CropAdvisory = () => {
  return (
    <div>
      <PageHeader title={"Crop Advisory"} to={"/homepage"} />

      {/* <div className="w-full h-[1px] bg-slate-300 mt-5"></div> */}

      <div className="px-5 my-6 flex flex-col gap-5">
        {/* <div className='bg-[url("/images/crops/crop-advice.png")] h-[250px] bg-cover bg-center p-5'>
          <div className="flex flex-col gap-1 mb-4">
            <span className="text-xl font-semibold">Day 37</span>
            <span className="text-md">Irrigation</span>
          </div>
          <div className="flex flex-col text-[#374151] mb-4">
            <span className="text-sm">Day 50</span>
            <span className="text-[12px]">Spray Fertilizers</span>
          </div>
          <div className="flex flex-col text-[#374151]">
            <span className="text-sm">Day 60</span>
            <span className="text-[12px]">Harvesting</span>
          </div>
        </div> */}

        <div className="flex gap-3">
          <Link
            to={"/crop-advisory/soil-report"}
            className="w-[50%] bg-[url('/images/crops/soil-report.png')] bg-cover bg-center px-6 py-9 text-white rounded-2xl"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <span className="text-lg">Soil Report</span>
                <TbReport size={22} />
              </div>
              {/* <FaArrowRight size={20} /> */}
            </div>
          </Link>

          <div className="w-[50%] bg-[url('/images/crops/crop-protection.png')] bg-cover bg-center px-6 py-9 text-white rounded-2xl">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <span className="text-lg">Crop Protection</span>
                <TbVirusSearch size={30} />
              </div>
              {/* <FaArrowRight size={20} /> */}
            </div>
          </div>
        </div>

        <div className="h-[8px] bg-slate-200"></div>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-md font-semibold mb-4 px-5">My Crops</span>
          </div>
          <div className="bg-[#039667] text-sm text-white flex justify-between items-center p-2 rounded-lg">
            <span>+ Add Crop</span>
          </div>
        </div>

        <div className="px-5 overflow-auto">
          <div className="flex gap-6 flex-wrap">
            {crops.map((crop) => (
              <CropCard
                key={crop.name}
                name={crop.name}
                image={crop.image}
                to={crop.to}
              />
            ))}
          </div>
        </div>

        <button className="w-full text-center text-white p-3 bg-[#049E6A] rounded-lg">
          Reach Out/Help
        </button>
      </div>
    </div>
  );
};

export default CropAdvisory;

const CropCard = ({ name, image, to }) => {
  return (
    <Link to={to} className="flex flex-col gap-2 items-center">
      <div
        className={`flex items-center justify-center ${
          name == "Maize" ? "border-[#049E6A] border-2" : "border"
        } bg-[#F3F4F6] rounded-full border w-[60px] h-[60px]`}
      >
        <img className="w-[30px] object-cover" src={image} />
      </div>
      <span
        className={`text-[13px] text-center ${
          name == "Maize" ? "text-[#049E6A]" : "text-[#374151]"
        }`}
      >
        {name}
      </span>
    </Link>
  );
};

const CropFarm = ({ cropName, cropColor, width, height }) => {
  return (
    <div
      className={`w-[${width}] h-[${height}] ${cropColor} border border-solid flex items-center justify-center text-sm`}
    >
      <span>{cropName}</span>
    </div>
  );
};
