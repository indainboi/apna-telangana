import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import UserCard from '../components/UserCard'
import BreakLine from '../components/BreakLine'
import { MdOutlineEmail } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'

const users = [
    {
        name: "గోపాల్ పటేల్",
        location1: "చింతపల్లె",
        location2: "పెద్దాపురం",
        distance: "1.5",
        image: "/images/users/gopal.png",
        cropName: "మిరప",
        cropImage: "/images/crops/chilli.png",
    },
    {
        name: "లక్ష్మి రెడ్డి",
        location1: "వెంకటాపూర్",
        location2: "నిజామాబాద్",
        distance: "0.5",
        image: "/images/users/lakshmi.png",
        cropName: "పత్తి",
        cropImage: "/images/crops/cotton.png",
    },
    {
        name: "రాజేష్ గౌడ",
        location1: "తుంకూర్ పల్లె",
        location2: "మద్దూర్",
        distance: "1",
        image: "/images/users/rajesh.png",
        cropName: "వేరుశనగ",
        cropImage: "/images/crops/groundnut.png",
    },
    {
        name: "కమల దేవి",
        location1: "నల్లవెల్లి",
        location2: "కల్వకుర్తి",
        distance: "2",
        image: "/images/users/kamla.png",
        cropName: "చెరకు",
        cropImage: "/images/crops/sugarcane.png",
    },
]

const RegisteredUsers2Telugu = () => {
    return (
        <div>
            <PageHeader title={"మైక్రో ఇరిగేషన్"} to={"/community/micro-irrigation-telugu"} />
            <div className='flex flex-col'>
                <UserCard
                    name={" రాము నాయక్"}
                    image={"/images/users/ramu.png"}
                    location1={"పెద్ద గూడెం"}
                    location2={"కోదాడ"}
                    distance={"2"}
                    cropName={"టమాట"}
                    cropImage={"/images/crops/tomato.png"}
                />

                <ContactUser />

                {users.map(user => <UserCard key={user.name}
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

export default RegisteredUsers2Telugu

const ContactUser = () => {
    return (
        <Link className='bg-[#F0F3D5] px-5'>
            <div className='flex justify-between items-center py-4'>
                <div className='flex items-center gap-3'>
                    <img className='w-[60px]' src="/images/users/suresh.png" />
                    <div className='flex flex-col'>
                        <span className='text-[#374151]'>సురేష్ యాదవ్</span>
                        <span className='text-sm text-[#4B5563]'>అనంతపురం &#8226; తాడిపత్రి</span>
                        <span className='text-sm text-[#4B5563]'>Area: 2 acre</span>
                    </div>
                </div>
                <div className='flex justify-between gap-2 text-sm text-[#4B5563] mb-4'>
                    <ContactButton name={"రిక్వెస్ట్"} logo={<FiPhone />} />
                </div>
            </div>
            <BreakLine />
        </Link>
    )
}

const ContactButton = ({ name, logo }) => {
    return (
        <button className='w-full flex justify-center items-center gap-2 bg-white border border-[#222222] p-2 rounded-lg'>
            {logo}
            <span>{name}</span>
        </button>
    )
}