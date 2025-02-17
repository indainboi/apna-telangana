import PageHeader from '../components/PageHeader'
import UserCard from '../components/UserCard'

const users = [
    {
        name: "Ramu Naik",
        location1: "Pedda Gudem",
        location2: "Kodad",
        distance: "2",
        image: "/images/users/ramu.png",
        cropName: "Tomato",
        cropImage: "/images/crops/tomato.png",
    },
    {
        name: "Suresh Yadav",
        location1: "Venkatapur",
        location2: "Nizambad",
        distance: "3",
        image: "/images/users/suresh.png",
        cropName: "Paddy",
        cropImage: "/images/crops/paddy.png",
        to: "/community/micro-irrigation/registered-users2"
    },
    {
        name: "Gopal Patel",
        location1: "Chintapalle",
        location2: "Peddapuram",
        distance: "4",
        image: "/images/users/gopal.png",
        cropName: "Chilli",
        cropImage: "/images/crops/chilli.png",
    },
    {
        name: "Lakshmi Reddy",
        location1: "Anantapuram",
        location2: "Tadipatri",
        distance: "4",
        image: "/images/users/lakshmi.png",
        cropName: "Cotton",
        cropImage: "/images/crops/cotton.png",
    },
    {
        name: "Rajesh Gowda",
        location1: "Tumkur Palle",
        location2: "Muddur",
        distance: "5",
        image: "/images/users/rajesh.png",
        cropName: "Groundnut",
        cropImage: "/images/crops/groundnut.png",
    },
    {
        name: "Kamla Devi",
        location1: "Nallavelli",
        location2: "Kalwakuthy",
        distance: "5",
        image: "/images/users/kamla.png",
        cropName: "Sugarcane",
        cropImage: "/images/crops/sugarcane.png",
    },
]

const RegisteredUsers1 = () => {
  return (
    <div>
        <PageHeader title={"Micro Irrigation"} to={"/community/micro-irrigation"}  />
        <div className='flex flex-col'>
            {users.map(user => <UserCard
                name={user.name}
                image={user.image}
                location1={user.location1}
                location2={user.location2}
                distance={user.distance}
                cropName={user.cropName}
                cropImage={user.cropImage}
                to={user.to}
            />)}
        </div>
    </div>
  )
}

export default RegisteredUsers1