import { Link } from "react-router-dom";
import BreakLine from "./BreakLine";
import ContactButton from "./ContactButton";
import { FiPhone } from "react-icons/fi";

const TraderCard = ({
  name,
  image,
  location1,
  location2,
  distance,
  postTitle,
}) => {
  return (
    <Link>
      <div className="flex justify-between items-center px-5 py-4">
        <div className="flex items-center gap-3">
          <img className="w-[60px]" src={image} />
          <div className="flex flex-col">
            <span className="text-[#374151]">{name}</span>
            <span className="text-sm text-[#4B5563]">
              {location1} &#8226; {location2}
            </span>
            <span className="text-sm text-[#4B5563]">{postTitle}</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <ContactButton name={"Request"} logo={<FiPhone />} />
        </div>
      </div>
      <BreakLine />
    </Link>
  );
};

export default TraderCard;
