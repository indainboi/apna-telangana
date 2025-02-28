import PageHeader from "../components/PageHeader";
import TraderCard from "../components/TraderCard";

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
    name: "Ramu Naik",
    location1: "Pedda Gudem",
    location2: "Kodad",
    distance: "2 km",
    image: "/images/users/ramu.png",
    cropName: "Tomato",
    cropImage: "/images/crops/tomato.png",
    postTitle: "Farmer",
  },
  {
    name: "Suresh Yadav",
    location1: "Venkatapur",
    location2: "Nizambad",
    distance: "3 km",
    image: "/images/users/suresh.png",
    cropName: "Paddy",
    cropImage: "/images/crops/paddy.png",
    postTitle: "Farmer",
  },
  {
    name: "Gopal Patel",
    location1: "Chintapalle",
    location2: "Peddapuram",
    distance: "4 km",
    image: "/images/users/gopal.png",
    cropName: "Chilli",
    cropImage: "/images/crops/chilli.png",
    postTitle: "Farmer",
  },
  {
    name: "Lakshmi Reddy",
    location1: "Anantapuram",
    location2: "Tadipatri",
    distance: "4 km",
    image: "/images/users/lakshmi.png",
    cropName: "Cotton",
    cropImage: "/images/crops/cotton.png",
    postTitle: "Farmer",
  },
  {
    name: "Rajesh Gowda",
    location1: "Tumkur Palle",
    location2: "Muddur",
    distance: "5 km",
    image: "/images/users/rajesh.png",
    cropName: "Groundnut",
    cropImage: "/images/crops/groundnut.png",
    postTitle: "Farmer",
  },
  {
    name: "Kamla Devi",
    location1: "Nallavelli",
    location2: "Kalwakuthy",
    distance: "5 km",
    image: "/images/users/kamla.png",
    cropName: "Sugarcane",
    cropImage: "/images/crops/sugarcane.png",
    postTitle: "Farmer",
  },
];

const Traders = () => {
  return (
    <div>
      <PageHeader title={"Market Place"} to={"/market-place/trader-calender"} />
      <div className="flex flex-col">
        {users.map((user) => (
          <TraderCard
            key={user.name}
            name={user.name}
            image={user.image}
            location1={user.location1}
            location2={user.location2}
            postTitle={user.postTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default Traders;
