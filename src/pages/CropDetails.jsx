import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link, useNavigate } from "react-router-dom";

const CropDetails = () => {
  const navigate = useNavigate();

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
    <div className="w-full h-[100vh]">
      <PageHeader to={"/field-location"} />

      <div className="w-full flex flex-col gap-6 p-4 mt-[20%]">
        <span className="text-lg font-medium">Crop Details</span>

        {/* Total Field Area */}
        <div className="flex flex-col">
          <span>Total Area of Field (in acres)</span>
          <input
            type="number"
            value={totalArea}
            onChange={(e) => setTotalArea(e.target.value)}
            placeholder="Enter field area"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Add Crop Button */}
        <button
          onClick={() => setShowPopup(true)}
          className="px-6 py-2 bg-[#039667] text-white rounded-lg"
        >
          + Add Crop
        </button>

        {/* Crop List */}
        {cropList.length > 0 && (
          <div className="mt-4">
            <span className="text-lg font-medium">Added Crops</span>
            <ul className="mt-2 space-y-2">
              {cropList.map((crop, index) => (
                <li
                  key={index}
                  className="p-3 bg-gray-100 rounded-lg border border-gray-300"
                >
                  <strong>{crop.crop}</strong> - {crop.seedType} |{" "}
                  {crop.dateSown} | {crop.cropArea} {crop.areaType}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <Link to={"/homepage"} className="px-6 py-2 bg-gray-300 rounded-lg">
            Skip
          </Link>
          <Link
            to={"/homepage"}
            className="px-6 py-2 bg-[#039667] text-white rounded-lg"
          >
            Finish
          </Link>
        </div>
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

export default CropDetails;
