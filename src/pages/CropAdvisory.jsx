import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import { TbReport, TbVirusSearch } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const cropsList = [
  {
    name: "Chilli",
    image: "/images/crops/chilli.png",
    to: "/crop-advisory/crop",
  },
  { name: "Tomato", image: "/images/crops/tomato.png" },
  { name: "Paddy", image: "/images/crops/paddy.png" },
  // { name: "Groundnut", image: "/images/crops/groundnut.png" },
  // { name: "Greengram", image: "/images/crops/greengram.png" },
  // { name: "Redgram", image: "/images/crops/redgram.png" },
  // { name: "Sugarcane", image: "/images/crops/sugarcane.png" },
];

const CropAdvisory = () => {

  const crops = ["Wheat", "Rice", "Corn", "Sugarcane"];
    const seedTypes = ["Hybrid", "Organic", "Traditional"];
    const areaTypes = ["Acres", "Guntas", "Cents"];
  
    // State for form fields
    const [totalArea, setTotalArea] = useState("");
    const [cropList, setCropList] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
  
    // Form data for new crop
    const [cropData, setCropData] = useState({
      crop: "",
      seedType: "",
      dateSown: "",
      cropArea: "",
      areaType: "",
    });
  
    // Handle form field change
    const handleInputChange = (e) => {
      setCropData({ ...cropData, [e.target.name]: e.target.value });
    };
  
    // Save crop data
    const saveCrop = () => {
      setCropList([...cropList, cropData]);
      setCropData({
        crop: "",
        seedType: "",
        dateSown: "",
        cropArea: "",
        areaType: "",
      }); // Reset form
      setShowPopup(false); // Close popup
    };

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
                <TbReport size={15} />
              </div>
              {/* <FaArrowRight size={20} /> */}
            </div>
          </Link>

          <div className="w-[50%] bg-[url('/images/crops/crop-protection.png')] bg-cover bg-center px-6 py-9 text-white rounded-2xl">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <span className="text-lg">Crop Doctor</span>
                <TbVirusSearch size={15} />
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
            <button
          onClick={() => setShowPopup(true)}
          className="px-6 py-2 bg-[#039667] text-white rounded-lg"
        >
          + Add Crop
        </button>
          </div>

        </div>

        <div className="px-5 overflow-auto">
          <div className="flex gap-6 flex-wrap">
            {cropsList.map((crop) => (
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


      {/* Crop Form Popup */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <span className="text-lg font-medium">Add Crop</span>

            {/* Crop Selection */}
            <div className="flex flex-col mt-3">
              <span>Crop</span>
              <select
                name="crop"
                value={cropData.crop}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              >
                <option value="" disabled>
                  Select Crop
                </option>
                {crops.map((crop, index) => (
                  <option key={index} value={crop}>
                    {crop}
                  </option>
                ))}
              </select>
            </div>

            {/* Seed Type */}
            <div className="flex flex-col mt-3">
              <span>Seed Type</span>
              <select
                name="seedType"
                value={cropData.seedType}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              >
                <option value="" disabled>
                  Select Seed Type
                </option>
                {seedTypes.map((seed, index) => (
                  <option key={index} value={seed}>
                    {seed}
                  </option>
                ))}
              </select>
            </div>

            {/* Date Sown */}
            <div className="flex flex-col mt-3">
              <span>Date Sown</span>
              <input
                type="date"
                name="dateSown"
                value={cropData.dateSown}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            {/* Crop Area */}
            <div className="flex flex-col mt-3">
              <span>Crop Area</span>
              <div className="flex gap-1">
                <input
                  type="number"
                  name="cropArea"
                  value={cropData.cropArea}
                  onChange={handleInputChange}
                  placeholder="Enter crop area"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
                <select
                  name="areaType"
                  value={cropData.areaType}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  {areaTypes.map((area, index) => (
                    <option key={index} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Save & Cancel Buttons */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={saveCrop}
                className="px-4 py-2 bg-[#039667] text-white rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}      



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
