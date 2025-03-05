import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import { useNavigate } from "react-router-dom";

const FieldLocation = () => {
  const navigate = useNavigate();
  const districts = ["Hyderabad", "Karimnagar", "Siddipet", "Nizambad"];
  const mandals = ["Mandal A", "Mandal B", "Mandal C"];
  const villages = ["Village X", "Village Y", "Village Z"];

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedMandal, setSelectedMandal] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");
  const [noField, setNoField] = useState(false);

  const handleNext = () => {
    navigate("/crop-details");
  };
  const handleSkip = () => {
    navigate("/homepage");
  };
  return (
    <div className="w-full h-[100vh]">
      <PageHeader to={"/allow-location"} />

      <div className="w-full flex flex-col gap-6 p-4 mt-[20%]">
        <span className="text-lg font-medium">Select Your Field Location</span>

        {/* District Dropdown */}
        <div className="flex flex-col">
          <span>District</span>
          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            disabled={noField}
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option value="" disabled>
              Select District
            </option>
            {districts.map((district, index) => (
              <option key={index} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>

        {/* Mandal Dropdown */}
        <div className="flex flex-col">
          <span>Mandal</span>
          <select
            value={selectedMandal}
            onChange={(e) => setSelectedMandal(e.target.value)}
            disabled={noField}
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option value="" disabled>
              Select Mandal
            </option>
            {mandals.map((mandal, index) => (
              <option key={index} value={mandal}>
                {mandal}
              </option>
            ))}
          </select>
        </div>

        {/* Village Dropdown */}
        <div className="flex flex-col">
          <span>Village</span>
          <select
            value={selectedVillage}
            onChange={(e) => setSelectedVillage(e.target.value)}
            disabled={noField}
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option value="" disabled>
              Select Village
            </option>
            {villages.map((village, index) => (
              <option key={index} value={village}>
                {village}
              </option>
            ))}
          </select>
        </div>

        {/* Checkbox for "I don't have any field" */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={noField}
            onChange={() => {
              setNoField(!noField);
              setSelectedDistrict("");
              setSelectedMandal("");
              setSelectedVillage("");
            }}
            className="w-4 h-4"
          />
          <label>I don't have any field</label>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button
            onClick={handleSkip}
            className="px-6 py-2 bg-gray-300 rounded-lg"
          >
            Skip
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-[#039667] text-white rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FieldLocation;
