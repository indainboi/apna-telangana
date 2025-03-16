import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function SoilTestBooking() {
  const [showPopup, setShowPopup] = useState(false);

  const handleBook = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    
    <div>
      <PageHeader title={"Book Soil test"} to={"/crop-advisory/soil-report"} />
    <div className="flex flex-col gap-0 py-20">
      <div className="w-full px-5 py-2 flex flex-col items-start bg-[#EAFFFB] gap-1 -mb-2"> 
        <p className="text-lg text-[#333]">Advanced Package (12 Parameters)</p>
        <p className="text-lg font-semibold text-[#333]">499/-</p>
      </div>

      <div className="flex flex-col px-5 py-1 gap-0">
        <div className="bg-[url('/images/soilTestParameters.jpeg')] w-150 h-80 bg-contain bg-no-repeat bg-center"></div>
        <button onClick={handleBook} className="mt-0 px-6 py-3 bg-[#039667] text-white rounded-lg">
          Book Now
        </button>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
            <h2 className="text-xl font-semibold">Confirm Booking</h2>
            <p className="text-gray-600 my-2">You are booking a soil test for ₹499/-</p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={closePopup}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={closePopup}
                className="px-4 py-2 bg-[#039667] text-white rounded-lg"
              >
                Confirm
              </button>
              
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}