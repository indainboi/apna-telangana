import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaMicrophone } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const appsData = [
  {
    section: "Inputs",
    apps: [
      { name: "Bharat Agri", image: "/images/apna-apps/bharat-agri.png" },
      { name: "Farm Market", image: "/images/apna-apps/farm-market.png" },
      { name: "Eq Rental", image: "/images/apna-apps/eq-rental.png" },
      { name: "Soil Health", image: "/images/apna-apps/soil-health.png" },
    ],
  },
  {
    section: "Rental",
    apps: [
      { name: "Bharat Agri", image: "/images/apna-apps/bharat-agri.png" },
      { name: "Farm Market", image: "/images/apna-apps/farm-market.png" },
      { name: "Eq Rental", image: "/images/apna-apps/eq-rental.png" },
    ],
  },
  {
    section: "Drone Spraying",
    apps: [
      { name: "Bharat Agri", image: "/images/apna-apps/bharat-agri.png" },
      { name: "Farm Market", image: "/images/apna-apps/farm-market.png" },
      { name: "Soil Health", image: "/images/apna-apps/soil-health.png" },
    ],
  },
  {
    section: "Drone Spraying",
    apps: [
      { name: "Bharat Agri", image: "/images/apna-apps/bharat-agri.png" },
      { name: "Farm Market", image: "/images/apna-apps/farm-market.png" },
      { name: "Soil Health", image: "/images/apna-apps/soil-health.png" },
    ],
  },
];

const suggestions = ["Buy 20-20", "Rent Tractor", "Drone Spray"];

export default function SoilTestBooking() {
  const navigate = useNavigate();
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleCloseSearch = () => {
    setSearchFocused(false);
  };

  const handleSuggestionClick = (text) => {
    setSearchValue(text);
    setSearchFocused(false);
  };

  const handleClear = () => {
    setSearchValue("");
    setSearchFocused(false);
  };

  return (
    <div className="relative min-h-screen bg-white" onClick={handleCloseSearch}>
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center p-4 bg-gradient-to-b from-green-100 to-white">
          <button onClick={() => navigate(-1)}>
            <FaChevronLeft className="text-xl mr-2" />
          </button>
          <h1 className="text-lg font-semibold">Apna Apps</h1>
        </div>

        {/* Search Bar */}
        <div className="px-4">
          <div className="flex items-center px-4 py-2 border border-gray-300 rounded-full shadow-sm bg-white relative">
            <input
              type="text"
              placeholder="Search here"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              className="flex-grow outline-none bg-white pr-8"
            />
            {searchValue && (
              <IoClose
                className="absolute right-10 text-gray-400 text-lg cursor-pointer"
                onClick={handleClear}
              />
            )}
            <FaMicrophone className="text-orange-500 ml-2" />
          </div>
        </div>
      </div>

      {/* Dim background */}
      {searchFocused && (
        <div
          className="fixed inset-0 bg-transparent z-40"
          onClick={handleCloseSearch}
        />
      )}

      {/* Floating Suggestions Panel (rounded only at bottom) */}
      {searchFocused && (
        <div
          className="fixed z-50 top-[106px]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white px-[26.7px] py-3 shadow-sm w-full rounded-b-lg animate-slideDown">
            <p className="text-xs text-gray-500 font-semibold mb-2">
              SEARCH SUGGESTIONS
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((text, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(text)}
                  className="px-4 py-1 text-sm border border-black rounded-full"
                >
                  {text}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* App Sections - faded when search is focused */}
      <div
        className={`space-y-6 px-4 pb-20 relative z-30 transition-opacity duration-200 ${
          searchFocused ? "opacity-30" : "opacity-100"
        }`}
      >
        {appsData.map((section, idx) => (
          <div
            key={idx}
            className="p-4 bg-white rounded-xl shadow-md"
          >
            <h2 className="text-md font-semibold mb-6">{section.section}</h2>
            <div className="grid grid-cols-4 gap-4">
              {section.apps.map((app, i) => (
                <div key={i} className="flex flex-col items-center text-sm">
                  <img
                    src={app.image}
                    alt={app.name}
                    className="w-14 h-14 rounded-xl"
                  />
                  <span className="mt-1 text-center">{app.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Animation styles */}
      <style jsx="true">{`
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
