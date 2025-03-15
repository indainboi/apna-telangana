import React from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import BreakLine from "../components/BreakLine";
import { GrLocation } from "react-icons/gr";
import { PiFarm } from "react-icons/pi";
import { BsPeople } from "react-icons/bs";
import group1 from "./marketplace/group-1.png";
import image97 from "./marketplace/image-97.png";
import image98 from "./marketplace/image-98.png";
import image from "./marketplace/image.svg";

const locations = [
  {
    name: "Ellanthakunta",
    area: "1500",
    number: "500",
    to: "/market-place/trader-calender/traders",
  },
  { name: "Miriyalaguda", area: "2523", number: "734" },
  // { name: "Mulugu", area: "1670", number: "621" },
];

const TraderCalender = () => {
  return (
    <div>
      <PageHeader title={"Market Place"} to={"/market-place"} />
      <div className="px-5 flex gap-2 mb-3">
        <Link
          to={"/market-place/farmer-calender"}
          className="w-full flex justify-center items-center text-sm rounded-md p-2 font-semibold border border-[#50C878]"
        >
          Traders
        </Link>
        <Link
          to={"/market-place/trader-calender"}
          className="w-full flex justify-center items-center text-sm rounded-md p-2 font-semibold bg-[#50C878]"
        >
          Farmers
        </Link>
      </div>

      <div className="px-4 mb-4">
      <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col w-[72.75px] items-center gap-2.5 relative border-b [border-bottom-style:solid] border-[#039667]">
              <div className="relative w-16 h-16 bg-gray-50 rounded-[32px] border border-solid border-[#039667]">
                <img
                  className="absolute w-8 h-8 top-[15px] left-[15px]"
                  alt="Frame"
                  src={image}
                />
              </div>

              <div className="text-[#039667] text-sm leading-6 whitespace-nowrap relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal tracking-[0]">
                Paddy
              </div>
            </div>

            <div className="flex flex-col w-[72.75px] items-center gap-2.5 relative">
              <div className="relative w-16 h-16 bg-gray-50 rounded-[32px] border border-solid border-[#f3f4f6]">
                <img
                  className="absolute w-10 h-[19px] top-[21px] left-[11px] object-cover"
                  alt="Image"
                  src={image98}
                />
              </div>

              <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-gray-700 text-sm tracking-[0] leading-6 whitespace-nowrap">
                Chili
              </div>
            </div>

            <div className="flex flex-col w-[72.75px] items-center gap-2.5 relative">
              <div className="relative w-16 h-16 bg-gray-50 rounded-[32px] border border-solid border-[#f3f4f6]">
                <img
                  className="absolute w-[33px] h-[33px] top-[15px] left-3.5"
                  alt="Image"
                  src={image97}
                />
              </div>

              <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-gray-700 text-sm tracking-[0] leading-6 whitespace-nowrap">
                Tomato
              </div>
            </div>

            <div className="flex flex-col w-[72.75px] items-center gap-2.5 relative">
              <div className="relative w-16 h-16 bg-gray-50 rounded-[32px] border border-solid border-[#f3f4f6]">
                <img
                  className="absolute w-4 h-4 top-[23px] left-[22px]"
                  alt="Group"
                  src={group1}
                />
              </div>

              <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-gray-700 text-sm tracking-[0] leading-6 whitespace-nowrap">
                Other
              </div>
            </div>
          </div>

          <div className="relative self-stretch w-full h-2 bg-[#f3f4f6]" />

      
        <img src="/images/market-place/calender.png" alt="" />
      </div>
      <div>
        <span className="font-semibold mb-3 px-5">Locations</span>
        {locations.map((location) => (
          <LocationCard
            key={location?.name}
            name={location?.name}
            area={location?.area}
            number={location?.number}
            to={location?.to}
          />
        ))}
      </div>
    </div>
  );
};

export default TraderCalender;

const LocationCard = ({ name, area, number, to }) => {
  return (
    <div>
      <div className="flex justify-between items-center px-5 py-5">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center text-sm">
            <GrLocation />
            <span>Location: {name}</span>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <PiFarm />
            <span>Area: {area}</span>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <BsPeople />
            <span>Number of farmers: {number}</span>
          </div>
        </div>
        <Link
          to={to || ""}
          className="flex items-center gap-2 px-2 py-1 text-white bg-[#3EDC00] rounded-md"
        >
          <FiPhone />
          <span>Contact</span>
        </Link>
      </div>
      <BreakLine />
    </div>
  );
};
