import { Link } from "react-router-dom";
import HomeHeader from "../components/HomeHeader";
import MenuCard from "../components/MenuCard";

const menus = [
  {
    name: "Crop Advisory",
    url: "/images/crop_advisory.png",
    to: "/crop-advisory",
  },
  { name: "Community", url: "/images/community.png", to: "/community" },
  { name: "Apna Apps", url: "/images/market_place.png", to: "/apna-apps" },
  // { name: "Marketplace", url: "/images/market_place.png", to: "/market-place" },
  {
    name: "Apna Telangana Social",
    url: "/images/social.png",
    to: "/apna-telangana",
  },
];

const Homepage = () => {
  return (
    <div>
      <HomeHeader />
      {/* Weather Card */}
      <Link to={"/weather"}>
        <div className="px-5 py-4">
          <div className="bg-[url('/images/weather.png')] bg-cover bg-no-repeat bg-center px-5 py-5 text-white rounded-lg flex flex-col">
            <p className="font-semibold text-2xl">24&deg;C</p>
            <p className="text-md font-medium">Partly Cloudy</p>
            <p className="text-sm">Marlapet &#8226; 3:00 pm</p>
          </div>
        </div>
      </Link>

      {/* Menus */}
      <div className="px-5 py-4">
        <div className="grid grid-cols-2 gap-4">
          {menus.map((menu, index) => (
            <Link key={menu.name} to={menu.to}>
              <MenuCard key={index} name={menu.name} url={menu.url} />
            </Link>
          ))}
        </div>
      </div>

      {/* support */}
      <div className="px-5 py-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="invisible"></div>
          <div className="py-3 bg-[#049E6A] rounded-lg text-center text-white text-lg">
            Support
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
