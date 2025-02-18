import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import UserCard from '../components/UserCard'
import BreakLine from '../components/BreakLine'
import { MdOutlineEmail } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'

const users = [
    {
        name: "Gopal Patel",
        location1: "Chintapalle",
        location2: "Peddapuram",
        area: "1.5",
        image: "/images/users/gopal.png",
        cropName: "Chilli",
        cropImage: "/images/crops/chilli.png",
    },
    {
        name: "Lakshmi Reddy",
        location1: "Anantapuram",
        location2: "Tadipatri",
        area: "0.5",
        image: "/images/users/lakshmi.png",
        cropName: "Cotton",
        cropImage: "/images/crops/cotton.png",
    },
    {
        name: "Rajesh Gowda",
        location1: "Tumkur Palle",
        location2: "Muddur",
        area: "1",
        image: "/images/users/rajesh.png",
        cropName: "Groundnut",
        cropImage: "/images/crops/groundnut.png",
    },
    {
        name: "Kamla Devi",
        location1: "Nallavelli",
        location2: "Kalwakuthy",
        area: "2",
        image: "/images/users/kamla.png",
        cropName: "Sugarcane",
        cropImage: "/images/crops/sugarcane.png",
    },
]

const RegisteredUsers2 = () => {
    return (
        <div>
            <PageHeader title={"Micro Irrigation"} to={"/community/micro-irrigation"} />
            <div className='flex flex-col'>
                <UserCard
                    name={"Ramu Naik"}
                    image={"/images/users/ramu.png"}
                    location1={"Pedda Gudem"}
                    location2={"Kodad"}
                    area={"2"}
                    cropName={"Tomato"}
                    cropImage={"/images/crops/tomato.png"}
                />

                <ContactUser />

                {users.map(user => <UserCard key={user.name}
                    name={user.name}
                    image={user.image}
                    location1={user.location1}
                    location2={user.location2}
                    area={user.area}
                    cropName={user.cropName}
                    cropImage={user.cropImage}
                    to={user.to}
                />)}
            </div>
        </div>
    )
}

export default RegisteredUsers2

const ContactUser = () => {
    return (<>
        <Link className='bg-[#F0F3D5] px-5'>
            <div className='flex justify-between items-center py-4'>
                <div className='flex items-center gap-3'>
                    <img className='w-[60px]' src="/images/users/suresh.png" />
                    <div className='flex flex-col'>
                        <span className='text-[#374151]'>Suresh Yadav</span>
                        <span className='text-sm text-[#4B5563]'>Anantapuram &#8226; Tadipatri</span>
                        <span className='text-sm text-[#4B5563]'>Area: 2 acre</span>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <ContactButton name={"Num"} logo={<FiPhone />} />
                </div>
            </div>
        </Link>
            <BreakLine />
        </>
    )
}

const ContactButton = ({ name, logo }) => {
    return (
        <button className='flex justify-center text-sm items-center gap-2 bg-white border border-[#222222] p-2 rounded-lg'>
            {logo}
            <span>{name}</span>
        </button>
    )
}