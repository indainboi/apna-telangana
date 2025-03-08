/* eslint-disable react/prop-types */
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { TbReport, TbVirusSearch } from "react-icons/tb";
import { Link } from "react-router-dom";

const SoilReport = () => {
  const soilReportButtons = [
    { id: 1, name: "Area Soil Report" },
    { id: 2, name: "Book Soil Test" },
  ];

  const districts = ["Hyderabad", "Karimnagar", "Siddipet", "Nizambad"];
  const mandals = ["Mandal A", "Mandal B", "Mandal C"];
  const villages = ["Village X", "Village Y", "Village Z"];

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedMandal, setSelectedMandal] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");
  const [noField] = useState(false);
  const [labs, setLabs] = useState([]);

  const handleSearch = () => {
    setLabs([
      {
        name: "Soil Testing Laboratory, Karimnagar",
        address: "F4M2+9PX Kothapalli(Haveli), Telangana, India",
        email: "knradastl@gmail.com",
        phone: "9533565252"
      },
      {
        name: "Soil Testing Laboratory, Siddipet",
        address: "G3M4+7FX Siddipet, Telangana, India",
        email: "siddipetstl@gmail.com",
        phone: "9848022334"
      },
      {
        name: "Soil Testing Laboratory, Nizambad",
        address: "H5J2+3QP Nizambad, Telangana, India",
        email: "nizambadstl@gmail.com",
        phone: "9876543210"
      }
    ]);    
  };

  const SoilTestingCard = ({ lab }) => {
    return (
      <div>
        <div className='w-full px-5 py-4 flex items-center bg-[#EAFFFB] gap-2'>
            <p className="text-lg font-semibold text-[#333]">{lab.name}</p>
        </div>
      <div className="border p-4 shadow-md bg-white mb-4 flex flex-col gap-2">
        <p className="text-sm text-black-600"><strong>Address:</strong> {lab.address}</p>
        <p className="text-sm text-black-600"><strong>Email:</strong> <a href={`mailto:${lab.email}`} className="text-blue-600">{lab.email}</a></p>
        <p className="text-sm text-black-600"><strong>Phone:</strong> <a href={`tel:${lab.phone}`} className="text-blue-600">{lab.phone}</a></p>
      </div>
      </div>
    );
  };
  
  const SoilTestingList = ({ labs }) => {
    return (
      <div className="mt-4">
        {labs.map((lab, index) => (
          <SoilTestingCard key={index} lab={lab} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <PageHeader title={"Soil Report"} to={"/crop-advisory"} />

      <div className="px-5 my-6 flex flex-col gap-5">
        
        <div className="flex gap-3">
          <Link
            to={"/crop-advisory/soil-report"}
            className="w-[50%] bg-[url('/images/crops/soil-report.png')] bg-cover bg-center px-6 py-9 text-white rounded-2xl"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <span className="text-lg">Mandal Report</span>
              </div>
            </div>
          </Link>

          <Link
            to={"/crop-advisory/soil-report/book-test"}
            className="w-[50%] bg-[url('/images/crops/crop-protection.png')] bg-cover bg-center px-6 py-9 text-white rounded-2xl"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <span className="text-lg">Book Soil Test</span>
              </div>
            </div>
          </Link>

        </div>

        <div className="h-[8px] bg-slate-200"></div>
        <div className="flex flex-col gap-3">
          <span className="text-md font-semibold mb-1">Soil testing labs near me</span>
          {/* Search Form */}
          <div className="flex flex-row gap-5">
            <div className="flex flex-col">
              {/* <span>District</span> */}
              <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} disabled={noField} className="w-full border border-gray-300 rounded-lg p-2">
                <option value="" disabled>State</option>
                {districts.map((district, index) => (<option key={index} value={district}>{district}</option>))}
              </select>
            </div>
            <div className="flex flex-col">
              {/* <span>Mandal</span> */}
              <select value={selectedMandal} onChange={(e) => setSelectedMandal(e.target.value)} disabled={noField} className="w-full border border-gray-300 rounded-lg p-2">
                <option value="" disabled>District</option>
                {mandals.map((mandal, index) => (<option key={index} value={mandal}>{mandal}</option>))}
              </select>
            </div>
            <div className="flex flex-col">
              {/* <span>Village</span> */}
              <select value={selectedVillage} onChange={(e) => setSelectedVillage(e.target.value)} disabled={noField} className="w-full border border-gray-300 rounded-lg p-2">
                <option value="" disabled>Mandal</option>
                {villages.map((village, index) => (<option key={index} value={village}>{village}</option>))}
              </select>
            </div>
          </div>
          {/* Search Button */}
          <button onClick={handleSearch} className="mt-2 px-6 py-3 bg-[#039667] text-white rounded-lg">Search</button>
        </div>
        {/* Soil Testing List */}
        <SoilTestingList labs={labs} />
      </div>
    </div>
  );
};

export default SoilReport;
