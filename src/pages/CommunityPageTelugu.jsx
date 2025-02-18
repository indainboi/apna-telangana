import React from 'react'
import PageHeader from '../components/PageHeader'
import { HiUserGroup } from 'react-icons/hi'
import { FaCaretDown } from 'react-icons/fa6'
import { MdVerified } from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'
import { PiShareFatBold } from 'react-icons/pi'
import BreakLine from '../components/BreakLine'
import { Link } from 'react-router-dom'

const projects = [
    { title: "రవి కుమార్ ని కలవ", location: "రాంపూర్", image: "/images/projects/meet-ravi.png", to: "/community/micro-irrigation/ravi-kumar-telugu" },
    { title: "నిజామాబాద్ కలెక్టరే", location: "నిజామాబాదు", image: "/images/projects/nizambad-collector.png", to: "/community/micro-irrigation/nizambad-telugu" },
    { title: "స్ప్రింక్లర్ ఇరిగేషన్", location: "సిద్దిపేట", image: "/images/projects/sprinkler.png" },
    { title: "రాజయ్యని కల", location: "వికారాబాద్", image: "/images/projects/meet-rajya.png" },
    { title: "వరిలో డ్రిప్", location: "కరీంనగర్", image: "/images/projects/drip-paddy.png" },
]

const users = [
    { name: "రాము నాయక్", location: "కోదాడ", distance: "2", image: "/images/users/ramu.png" },
    { name: "సురేష్ యాదవ్", location: "నిజామాబాద్", distance: "3", image: "/images/users/suresh.png" },
    { name: "గోపాల్ పటేల్", location: "పెద్దాపురం", distance: "4", image: "/images/users/gopal.png" },
    { name: "లక్ష్మి రెడ్డి", location: "తాడిపత్రి", distance: "4", image: "/images/users/lakshmi.png" },
    { name: "రాజేష్ గౌడ", location: "మద్దూర్", distance: "5", image: "/images/users/rajesh.png" },
    { name: "కమల దేవి", location: "కల్వకుర్తి", distance: "5", image: "/images/users/kamla.png" }
]

const communityPosts = [
    {
        name: "సునీత కార్నెలి",
        role: "తెలంగాణ రైతు",
        image: "/images/users/haiya.png",
        location: "సిరిసీల్లా",
        distance: "2km",
        day: "1d",
        postImage: "/images/users/haiya-post.png",
        caption: "సిరిసిల్లలో మా కూరగాయల మైక్రో ఇరిగేషన్ పొలం",
        like: "37",
        comments: "5",
        shares: "3"
    },
    {
        name: "రమేష్ రెడ్డి",
        role: "తెలంగాణ రైతు",
        image: "/images/users/ramesh.png",
        location: "బెజ్జంకి",
        distance: "3km",
        day: "1d",
        postImage: "/images/users/ramesh-post.png",
        caption: "బెజ్జంకిలో వ్యవసాయ భూమి",
        like: "56",
        comments: "22",
        shares: "10"
    },
    {
        name: "స్వరూప్ పొట్ట",
        role: "తెలంగాణ రైతు",
        image: "/images/users/swaroop.png",
        location: "హైదరాబాద్",
        distance: "4km",
        day: "2d",
        postImage: "/images/users/swaroop-post.png",
        caption: "స్ప్రింకలేర్ వ్యవసాయం",
        like: "42",
        comments: "14",
        shares: "5"
    }
]

const CommunityPageTelugu = () => {
    return (
        <div>
            {/* Header */}
            <PageHeader title={"మైక్రో ఇరిగేషన్"} to={"/community-telugu"} />

            {/* Cover */}
            <img src="/images/communities-images/microirrigation.jpg" className='w-full h-[200px] object-cover' />

            {/* Community Detail */}
            <div className='px-4 py-2 flex flex-col gap-2 mb-2'>
                <div className='flex justify-between font-semibold text-xl'>
                    <h3>మైక్రో ఇరిగేషన్</h3>
                    <div>
                        <span>11.3k </span><span className='text-lg font-normal text-[#65686C]'>మెంబర్లు</span>
                    </div>
                </div>
                <div className='w-full p-1 flex gap-1 justify-center bg-[#E2E5E9] rounded-sm'>
                    <HiUserGroup size={20} />
                    <span>జాయిన్ అయ్యారు</span>
                    <FaCaretDown size={20} />
                </div>
            </div>

            <div className='bg-[#E2E5E9] w-full h-[1px]'></div>

            {/* Project & Stories */}
            <div className='px-4 py-4'>
                <div className='flex justify-between items-center'>
                    <span className='text-xl font-semibold'>ప్రాజెక్టులు మరియు స్టోరీలు</span>
                    <span className='text-sm hidden'>See more</span>
                </div>
                <div className='flex gap-3 mt-3 overflow-auto'>
                    {projects.map(project => <ProjectCard key={project.title} title={project.title} location={project.location} image={project.image} to={project.to} />)}
                </div>
            </div>

            <div className='bg-[#E2E5E9] w-full h-[1px]'></div>

            {/* Registered Users */}
            <div className='px-4 py-4'>
                <div className='flex justify-between items-center'>
                    <span className='text-xl font-semibold'>రిజిస్టర్ ఐన మెంబెర్లు</span>
                    <Link to={"/community/micro-irrigation/registered-users1-telugu"} className='text-sm'>See more</Link>
                </div>
                <div className='flex gap-4 mt-3 overflow-auto'>
                    {users.map(user => <UserDetail key={user.name} name={user.name} location={user.location} distance={user.distance} image={user.image} />)}
                </div>
            </div>

            <div className='bg-[#E2E5E9] w-full h-[1px]'></div>

            {/* Community Posts */}
            <div>
                <div className='px-4 py-4'>
                    <div className='flex justify-between items-center'>
                        <span className='text-xl font-semibold'>కమ్యూనిటీ పోస్టులు</span>
                        <span className='text-sm'>See more</span>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    {communityPosts.map(post => <SocialMediaPost key={post.name}
                        name={post.name}
                        role={post.role}
                        image={post.image}
                        location={post.location}
                        distance={post.distance}
                        day={post.day}
                        postImage={post.postImage}
                        caption={post.caption}
                        like={post.like}
                        comments={post.comments}
                        shares={post.shares}
                    />)}
                </div>
            </div>
        </div>
    )
}

export default CommunityPageTelugu

const ProjectCard = ({ title, location, image, to }) => {
    return (
        <Link to={to} className='flex-shrink-0'>
            <img src={image} className='w-[120px] mb-1' />
            <div className='flex flex-col'>
                <span className='font-semibold text-[13px] text-[#374151]'>{title}...</span>
                <span className='text-[11px] text-[#4B5563]'>లొకేషన్: {location}</span>
            </div>
        </Link>
    )
}

const UserDetail = ({ name, location, distance, image }) => {
    return (
        <div className='flex-shrink-0 flex flex-col items-center'>
            <img src={image} className='w-[70px] mb-1' />
            <div className='flex flex-col items-center'>
                <span className='font-semibold text-[12px] text-[#374151]'>{name}</span>
                <span className='text-[11px] text-[#4B5563]'>{location}</span>
                <span className='text-[11px] text-[#4B5563]'>{distance} km</span>
            </div>
        </div>
    )
}

const SocialMediaPost = ({ name, role, image, location, distance, day, postImage, caption, like, comments, shares }) => {
    return (
        <div>
            <div className='w-full flex flex-col gap-3 px-4 mb-4'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <img className='w-[50px] h-[50px] rounded-full' src={image} />
                        <div className='flex flex-col'>
                            <div className='flex items-center gap-1'>
                                <span className='font-semibold'>{name}</span>
                                <MdVerified color='#039667' />
                            </div>
                            <span className='text-sm text-[#666666] leading-4'>{role}</span>
                            <span className='text-sm text-[#666666]'>{day} &#8226; {distance} &#8226; {location}</span>
                        </div>
                    </div>
                    <div>&#8226;&#8226;&#8226;</div>
                </div>
                <p className='text-sm'>{caption}</p>
                <img src={postImage} />
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <img className='h-5' src="/images/users/like-comment-share.png" />
                        <span className='text-sm text-[#666666]'>{like}</span>
                    </div>
                    <span className='text-sm text-[#666666]'>{comments} కామెంట్లు &#8226; {shares} షేర్లు</span>
                </div>
                <div className='bg-[#E2E5E9] w-full h-[1px]'></div>
                <div className='flex justify-between'>
                    <div className='flex gap-1 items-center text-sm font-semibold text-[#666666]'>
                        <AiOutlineLike size={17} />
                        <span>లైకు</span>
                    </div>
                    <div className='flex gap-1 items-center text-sm font-semibold text-[#666666]'>
                        <BiComment size={16} />
                        <span>కామెంటు</span>
                    </div>
                    <div className='flex gap-1 items-center text-sm font-semibold text-[#666666]'>
                        <PiShareFatBold size={17} />
                        <span>శేరు</span>
                    </div>
                </div>
            </div>
            <BreakLine />
        </div>
    )
}