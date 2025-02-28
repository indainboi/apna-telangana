import React from "react";
import PageHeader from "../components/PageHeader";
import { FaArrowRight } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import BreakLine from "../components/BreakLine";
import { Link } from "react-router-dom";

const dealers = [
  { name: "పంట డీలర్లు", image: "/images/produce.png" },
  { name: "మందుల డీలర్లు", image: "/images/pesticides.png" },
  { name: "విత్తనాల డీలర్లు", image: "/images/seeds.png" },
  { name: "ఎరువుల డీలర్లు", image: "/images/fertilizer.png" },
  { name: "వ్యవసాయ గోదాములు", image: "/images/agriwarehouses.png" },
  { name: "పరికరాల డీలర్లు", image: "/images/equipment.png" },
];

const MarketPlaceTelugu = () => {
  console.log("rendering");
  return (
    <div>
      <PageHeader title={"మార్కెట్"} to={"/homepage-telugu"} />
      <div className="px-5 py-4">
        <div className="bg-[url('/images/market-price.png')] bg-cover px-6 py-9 text-white mb-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <span className="text-lg">మార్కెట్ రేట్</span>
              <img src="/images/pricetag.svg" width={25} />
            </div>
            <FaArrowRight size={20} />
          </div>
        </div>
        <Link to={"/market-place-telugu/trader-calender-telugu"}>
          <div className="bg-[url('/images/trader-calender.png')] bg-cover px-6 py-9 text-white">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <span className="text-lg">ట్రేడర్ క్యాలెండర్</span>
                <SlCalender size={20} />
              </div>
              <FaArrowRight size={20} />
            </div>
          </div>
        </Link>
      </div>

      {/* break */}
      <BreakLine />

      <div className="p-5">
        <h4 className="font-semibold mb-4">డీలర్ల సమాచారం</h4>
        <div className="grid grid-cols-3 gap-3">
          {dealers.map((dealer) => (
            <DealerCard
              key={dealer.name}
              name={dealer.name}
              image={dealer.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketPlaceTelugu;

const DealerCard = ({ name, image }) => {
  return (
    <div className="flex flex-col justify-between gap-2 items-center text-center border rounded-lg p-4">
      <img src={image} />
      <span className="text-sm">{name}</span>
    </div>
  );
};
