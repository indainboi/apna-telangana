import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import UserCard from "../components/UserCard";
import BreakLine from "../components/BreakLine";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import ContactButton from "../components/ContactButton";

const users = [
  {
    name: "గోపాల్ పటేల్",
    location1: "చింతపల్లె",
    location2: "పెద్దాపురం",
    distance: "4 km",
    image: "/images/users/gopal.png",
    cropName: "మిరప",
    cropImage: "/images/crops/chilli.png",
  },
  {
    name: "లక్ష్మి రెడ్డి",
    location1: "వెంకటాపూర్",
    location2: "నిజామాబాద్",
    distance: "4 km",
    image: "/images/users/lakshmi.png",
    cropName: "పత్తి",
    cropImage: "/images/crops/cotton.png",
  },
  {
    name: "రాజేష్ గౌడ",
    location1: "తుంకూర్ పల్లె",
    location2: "మద్దూర్",
    distance: "5 km",
    image: "/images/users/rajesh.png",
    cropName: "వేరుశనగ",
    cropImage: "/images/crops/groundnut.png",
  },
  {
    name: "కమల దేవి",
    location1: "నల్లవెల్లి",
    location2: "కల్వకుర్తి",
    distance: "5 km",
    image: "/images/users/kamla.png",
    cropName: "చెరకు",
    cropImage: "/images/crops/sugarcane.png",
  },
];

const RegisteredUsers2Telugu = () => {
  return (
    <div>
      <PageHeader
        title={"మైక్రో ఇరిగేషన్"}
        to={"/community/micro-irrigation-telugu"}
      />
      <div className="flex flex-col">
        <UserCard
          name={" రాము నాయక్"}
          image={"/images/users/ramu.png"}
          location1={"పెద్ద గూడెం"}
          location2={"కోదాడ"}
          distance={"2 km"}
          cropName={"టమాట"}
          cropImage={"/images/crops/tomato.png"}
        />

        <ContactUser />

        {users.map((user) => (
          <UserCard
            key={user.name}
            name={user.name}
            image={user.image}
            location1={user.location1}
            location2={user.location2}
            distance={user.distance}
            cropName={user.cropName}
            cropImage={user.cropImage}
            to={user.to}
          />
        ))}
      </div>
    </div>
  );
};

export default RegisteredUsers2Telugu;

const ContactUser = () => {
  return (
    <>
      <Link className="bg-[#F0F3D5] px-5">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <img className="w-[60px]" src="/images/users/suresh.png" />
            <div className="flex flex-col">
              <span className="text-[#374151]">సురేష్ యాదవ్</span>
              <span className="text-sm text-[#4B5563]">
                అనంతపురం &#8226; తాడిపత్రి
              </span>
              <span className="text-sm text-[#4B5563]">3 km</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="bg-[#F3F4F6] rounded-full border w-[60px] h-[60px] flex items-center justify-center">
              <img
                className="w-[25px] object-cover"
                src="/images/crops/paddy.png"
              />
            </div>
            <span className="text-[#4B5563] text-sm font-thin">వరి</span>
          </div>
        </div>
        <div className="flex w-full justify-center mb-2 items-center gap-2">
          <ContactButton name={"Send Message"} logo={<MdOutlineEmail />} />
          <ContactButton name={"Request Number"} logo={<FiPhone />} />
        </div>
      </Link>
      <BreakLine />
    </>
  );
};
