import PageHeader from "../components/PageHeader";
import TraderCard from "../components/TraderCard";
import UserCard from "../components/UserCard";

const users = [
  {
    name: "Bharat Sharma",
    location1: "Tumkur Palle",
    location2: "Muddur",
    distance: "5 km",
    image: "/images/traders/marketing-1.png",
    cropName: "Groundnut",
    cropImage: "/images/crops/groundnut.png",
    postTitle: "Prasidda FPO Marketing",
  },
  {
    name: "Anil kumar",
    location1: "Nallavelli",
    location2: "Kalwakuthy",
    distance: "5 km",
    image: "/images/traders/marketing-2.png",
    cropName: "Sugarcane",
    cropImage: "/images/crops/sugarcane.png",
    postTitle: "Praharsha FPO Marketing",
  },
  {
    name: " రాము నాయక్",
    location1: "పెద్ద గూడెం",
    location2: "కోదాడ",
    distance: "2 km",
    image: "/images/users/ramu.png",
    cropName: "టమాట",
    cropImage: "/images/crops/tomato.png",
  },
  {
    name: "సురేష్ యాదవ్",
    location1: "అనంతపురం",
    location2: "తాడిపత్రి",
    distance: "3 km",
    image: "/images/users/suresh.png",
    cropName: "వరి",
    cropImage: "/images/crops/paddy.png",
    to: "/community/micro-irrigation/registered-users2-telugu",
  },
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

const Traders1Telugu = () => {
  return (
    <div>
      <PageHeader
        title={"మైక్రో ఇరిగేషన్"}
        to={"/community/micro-irrigation-telugu"}
      />
      <div className="flex flex-col">
        {users.map((user) => (
          <TraderCard
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

export default Traders1Telugu;
