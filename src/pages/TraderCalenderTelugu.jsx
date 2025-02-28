import React from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import BreakLine from "../components/BreakLine";
import { GrLocation } from "react-icons/gr";
import { PiFarm } from "react-icons/pi";
import { BsPeople } from "react-icons/bs";

const locations = [
  {
    name: "ఇల్లంతకుంట",
    area: "1500 ఎకరాలు",
    number: "500",
    to: "/market-place-telugu/trader-calender-telugu/traders-telugu",
  },
  { name: "మిరియాలగూడ", area: "2523 ఎకరాలు", number: "734" },
  { name: "ములుగు", area: "1670 ఎకరాలు", number: "621" },
];

const TraderCalenderTelugu = () => {
  return (
    <div>
      <PageHeader title={"మార్కెట్"} to={"/market-place-telugu"} />
      <div className="px-5 flex gap-2 mb-3">
        <Link
          to={"/market-place-telugu/farmer-calender-telugu"}
          className="w-full flex justify-center items-center text-sm rounded-md p-2 font-semibold border border-[#50C878]"
        >
          రైతు క్యాలెండర్
        </Link>
        <Link
          to={"/market-place-telugu/trader-calender-telugu"}
          className="w-full flex justify-center items-center text-sm rounded-md p-2 font-semibold bg-[#50C878]"
        >
          ట్రేడర్ క్యాలెండర్
        </Link>
      </div>
      <div className="px-4 mb-4">
        <img src="/images/market-place/calender-telugu.png" alt="" />
      </div>
      <div>
        <span className="font-semibold mb-3 px-5">లొకేషన్లు</span>
        {locations.map((location) => (
          <LocationCard
            key={location.name}
            name={location.name}
            area={location.area}
            number={location.number}
            to={location.to}
          />
        ))}
      </div>
    </div>
  );
};

export default TraderCalenderTelugu;

const LocationCard = ({ name, area, number, to }) => {
  return (
    <div>
      <div className="flex justify-between items-center px-5 py-5">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center text-sm">
            <GrLocation />
            <span>లొకేషన్: {name}</span>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <PiFarm />
            <span>విస్తీర్ణం: {area}</span>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <BsPeople />
            <span>రైతుల: {number}</span>
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
