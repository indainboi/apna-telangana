import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaMicrophone } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

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

export default function SoilTestBooking() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header + Search */}
      <div className="sticky top-0 z-50 bg-white">
        {/* Header */}
        <div className="flex items-center p-4 bg-gradient-to-b from-green-100 to-white">
          <button onClick={() => navigate(-1)}>
            <FaChevronLeft className="text-xl mr-2" />
          </button>
          <h1 className="text-lg font-semibold">Apna Apps</h1>
        </div>

        {/* Search */}
        <div className="flex items-center px-4 py-2 border border-gray-300 rounded-full shadow-sm mx-4 mb-2">
          <input
            type="text"
            placeholder="Search here"
            className="flex-grow outline-none"
          />
          <FaMicrophone className="text-orange-500" />
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-6 px-4 pb-20">
        {appsData.map((section, idx) => (
          <div
            key={idx}
            className="p-4 bg-white rounded-xl shadow-md"
          >
            <h2 className="text-md font-semibold mb-6">{section.section}</h2>
            <div className="grid grid-cols-4 gap-4">
              {section.apps.map((app, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-sm"
                >
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
    </div>
  );
}
