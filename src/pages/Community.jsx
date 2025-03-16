import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import BreakLine from "../components/BreakLine";

const items = [
  {
    name: "Micro Irrigation",
    image: "/images/communities-images/microirrigation.jpg",
  },
  { 
    name: "Chili",
    image: "/images/communities-images/chili.svg",
  },
  { 
    name: "Tomato",
    image: "/images/communities-images/tomato.svg",
  },
  { 
    name: "Ridge Gourd",
    image: "/images/communities-images/ridge-gourd.svg",
  },
  { 
    name: "Bitter Gourd",
    image: "/images/communities-images/bitter-gourd.svg",
  },
  { 
    name: "Capsicum",
    image: "/images/communities-images/capsicum.svg",
  },
  { 
    name: "Maize",
    image: "/images/communities-images/maize.svg",
  },
  {
    name: "Paddy",
    image: "/images/communities-images/paddy.svg",
  },
  { 
    name: "Groundnut",
    image: "/images/communities-images/groundnut.svg",
  },
  {
    name: "Natural Farming",
    image: "/images/communities-images/natural-farming.png",
  },
  {
    name: "Organic Farming",
    image: "/images/communities-images/organic-farming.jpeg",
  },
  {
    name: "Dairy Farming",
    image: "/images/communities-images/dairy-farming.jpg",
  },
  {
    name: "Groundnut Farming",
    image: "/images/communities-images/groundnut-farming.jpg",
  },
  {
    name: "Sunflower Farming",
    image: "/images/communities-images/sunflower-farming.jpg",
  },
  {
    name: "Vertical Farming",
    image: "/images/communities-images/vertical-farming.jpeg",
  },
  {
    name: "Integrated Farming",
    image: "/images/communities-images/integrated-farming.jpg",
  },
  {
    name: "Terrace Farming",
    image: "/images/communities-images/terrace-farming.webp",
  },
  {
    name: "Regenerative Agriculture",
    image: "/images/communities-images/regenerative-agriculture.jpeg",
  },
  {
    name: "Plantation Farming",
    image: "/images/communities-images/plantation-farming.jpeg",
  },
  {
    name: "Urban Agriculture",
    image: "/images/communities-images/urban-agriculture.jpg",
  },
  {
    name: "Agro Forestry",
    image: "/images/communities-images/agro-forestry.jpg",
  },
  { name: "Hydroponics", image: "/images/communities-images/hydroponics.jpg" },
];

const Community = () => {
  return (
    <div>
      <PageHeader title={"Community"} to={"/homepage"} />
      <div className="px-5 mb-5">
        <h4 className="font-semibold mb-3">Registered Communities</h4>
        <div className="grid grid-cols-3 gap-3">
          <Link to={"/community/micro-irrigation"}>
            <div className="flex flex-col text-center w-[100px]">
              <img
                className="w-[100px] h-[100px] object-cover rounded-lg mb-2 shadow-lg"
                src="/images/communities-images/microirrigation.jpg"
              />
              <span className="text-sm">Micro Irrigation</span>
            </div>
          </Link>
          <div className="flex flex-col text-center">
            <img
              className="w-[100px] h-[100px] object-cover rounded-lg mb-2 shadow-lg"
              src="/images/communities-images/chili.svg"
            />
            <span className="text-sm">Chili</span>
          </div>
          <div className="flex flex-col text-center w-[100px]">
            <img
              className="w-[100px] h-[100px] object-cover rounded-lg mb-2 shadow-lg"
              src="/images/communities-images/tomato.svg"
            />
            <span className="text-sm">Tomato</span>
          </div>
          <div className="flex flex-col text-center w-[100px]">
            <img
              className="w-[100px] h-[100px] object-cover rounded-lg mb-2 shadow-lg"
              src="/images/communities-images/paddy.svg"
            />
            <span className="text-sm">Paddy</span>
          </div>
        </div>
      </div>

      {/* break */}
      <BreakLine />

      <div className="px-5 mt-4">
        <h4 className="font-semibold mb-3">All Communities</h4>
        <div className="grid grid-cols-3 gap-3">
          {items.map((item) => (
            <CommunityCard
              key={item.name}
              name={item.name}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;

const CommunityCard = ({ name, image }) => {
  return (
    <div className="flex flex-col text-center w-[100px]">
      <img
        className="w-[100px] h-[100px] object-cover rounded-lg mb-2 shadow-lg"
        src={`${image}`}
      />
      <span className="text-sm">{name}</span>
    </div>
  );
};
