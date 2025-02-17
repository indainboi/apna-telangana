import React from 'react'
import PageHeader from '../components/PageHeader'
import { MdVerified } from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'
import { PiShareFatBold } from 'react-icons/pi'
import BreakLine from '../components/BreakLine'
import ApnaTelanganaHeader from '../components/ApnaTelanganaHeader'

const SocialFeedPosts = [
    {
        name: "Duddilla Sridhar Babu",
        role: "IT Minister • INC • Telangana",
        position: "government",
        image: "/images/apna-telangana/duddilla.png",
        day: "1d",
        postImage1: "/images/apna-telangana/it-1.png",
        postImage2: "/images/apna-telangana/it-2.png",
        caption: "Visited the agricultural training centre in Hyderabad, where modern farming techniques are being taught to the next generation of farmers",
        like: "2137",
        comments: "675",
        shares: "307"
    },
    {
        name: "Rahul Vengeti",
        role: "Business Lead • Solar Flow Irrigation...",
        position: "NA",
        image: "/images/apna-telangana/rahul.png",
        day: "4d",
        postImage1: "/images/apna-telangana/rahul-1.png",
        postImage2: "/images/apna-telangana/rahul-2.png",
        caption: "Introducing our solar-powered irrigation system designed specifically for the unique needs of Telangana’s farmers. Let’s",
        like: "290",
        comments: "5",
        shares: "11"
    },
    {
        name: "Mahesh Katta",
        role: "Proud Telangana Farmer",
        position: "farmer",
        image: "/images/apna-telangana/mallesh.png",
        day: "6d • 10km • Marlapet, Boinpally...",
        postImage1: "/images/apna-telangana/mallesh-1.png",
        postImage2: "/images/apna-telangana/mallesh-2.png",
        caption: "Just tried the new organic pest control method I learned at the workshop last week. Not only is it effective, but it's also safe",
        like: "542",
        comments: "239",
        shares: "99"
    },
    {
        name: "Telangana Government",
        role: "Official Agricultural Account of Telangana State",
        position: "government",
        image: "/images/apna-telangana/telangana-government.png",
        day: "1w",
        postImage1: "/images/apna-telangana/tg-1.png",
        postImage2: "/images/apna-telangana/tg-2.png",
        caption: "Announcing the launch of “Smart Farming Initiative” across Telangana under the Apna Telangana movement.",
        like: "940",
        comments: "487",
        shares: "220"
    },
    {
        name: "Anjali Gupta",
        role: "Director • Organic Hope Foundation",
        position: "NA",
        image: "/images/apna-telangana/anjali.png",
        day: "4d",
        caption: "Delighted to share that our NGO is looking to train 500 farmers in organic farming practices in Siddipet District as our contribution to Apna Telangana movement",
        like: "416",
        comments: "70",
        shares: "51"
    },
    {
        name: "Mahesh Chadra",
        role: "District Collector",
        position: "government",
        image: "/images/apna-telangana/mahesh.png",
        day: "1w",
        postImage1: "/images/apna-telangana/mahesh-1.png",
        postImage2: "/images/apna-telangana/mahesh-2.png",
        caption: "Today, I had the privilege of visiting the farm of Mr. Ravi Kumar in Karimnagar District, a progressive farmer who has been actively sharing",
        like: "864",
        comments: "366",
        shares: "108"
    },
    {
        name: "Sattayya Madetti",
        role: "Proud Telangana Farmer",
        position: "farmer",
        image: "/images/apna-telangana/sattayya.png",
        day: "6d • 27km • Marlapet, Pathipaka...",
        caption: "Facing some issues with my paddy crop due to unexpected rains. Any fellow farmers have tips on drainage solutions? Appreciate any",
        like: "583",
        comments: "45",
        shares: "89"
    },
    {
        name: "Prasad Yadav",
        role: "Vice President • Mahavir Irrigation...",
        position: "NA",
        image: "/images/apna-telangana/prasad.png",
        day: "5d",
        postImage1: "/images/apna-telangana/prasad-1.png",
        postImage2: "/images/apna-telangana/prasad-2.png",
        caption: "Our team conducted a free training session on modern irrigation techiques in Siddipet today #ApnaTelanganaAgriculture",
        like: "542",
        comments: "67",
        shares: "29"
    },
    {
        name: "Sahithi Muddila",
        role: "Lead Scientist • Telangana Agri University",
        position: "NA",
        image: "/images/apna-telangana/sahithi.png",
        day: "5d",
        postImage1: "/images/apna-telangana/sahithi-1.png",
        postImage2: "/images/apna-telangana/sahithi-2.png",
        caption: "Proud to announce that Telangana Agricultural University has developed a new high-yielding variety of millet suited for Telangana's",
        like: "287",
        comments: "15",
        shares: "26"
    },
    {
        name: "Sai Ramesh",
        role: "Proud Telangana Farmer",
        position: "farmer",
        image: "/images/apna-telangana/sai.png",
        day: "5d",
        postImage1: "/images/apna-telangana/sai-1.png",
        postImage2: "/images/apna-telangana/sai-2.png",
        caption: "Harvested my first batch of strawberries today! Switching to fruit cultivation was a big decision, but seeing these results makes it",
        like: "731",
        comments: "310",
        shares: "170"
    },
    {
        name: "Suresh Verma",
        role: "Professor • Agricultural Research...",
        position: "NA",
        image: "/images/apna-telangana/suresh.png",
        day: "5d",
        caption: "Hosting a live Q&A session this Saturday on pest management without heavy reliance on chemicals. Bring your questions and let’s",
        like: "675",
        comments: "181",
        shares: "129"
    },
]

const ApnaTelangana = () => {
    return (
        <div>
            <ApnaTelanganaHeader title={"Apna Telangana"} to={"/"} />
            <div className='flex flex-col'>
                {SocialFeedPosts.map(post => <SocialMediaPost
                    name={post.name}
                    role={post.role}
                    position={post.position}
                    image={post.image}
                    day={post.day}
                    postImage1={post.postImage1}
                    postImage2={post.postImage2}
                    caption={post.caption}
                    like={post.like}
                    comments={post.comments}
                    shares={post.shares}
                />)}
            </div>
        </div>
    )
}

export default ApnaTelangana

const SocialMediaPost = ({ name, role, position, image, day, postImage1, postImage2, caption, like, comments, shares }) => {

    const verifiedColor = (position) => {
        switch (position) {
            case "farmer":
                return "#039667";
            case "government":
                return "#FFD700";
        }
    }

    return (
        <div className='mb-4'>
            <div className='w-full flex flex-col gap-3 px-2 mb-4'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <img className='w-[50px] h-[50px] rounded-full' src={image} />
                        <div className='flex flex-col'>
                            <div className='flex items-center gap-1'>
                                <span className='font-semibold'>{name}</span>
                                <MdVerified className={ position === "NA"? "hidden": "" } color={verifiedColor(position)} />
                            </div>
                            <span className='text-sm text-[#666666] leading-4'>{role}</span>
                            <span className='text-sm text-[#666666]'>{day}</span>
                        </div>
                    </div>
                    <div>&#8226;&#8226;&#8226;</div>
                </div>
                <p className='text-sm'>{caption}<span className='text-[#666666]'>...see more</span></p>
                <div className='flex gap-2 overflow-auto'>
                    <img className='w-[250px]' src={postImage1} />
                    <img className='w-[250px]' src={postImage2} />
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <img className='h-5' src="/images/users/like-comment-share.png" />
                        <span className='text-sm text-[#666666]'>{like}</span>
                    </div>
                    <span className='text-sm text-[#666666]'>{comments} comments &#8226; {shares} shares</span>
                </div>
                <div className='bg-[#E2E5E9] w-full h-[1px]'></div>
                <div className='flex justify-between'>
                    <div className='flex gap-1 items-center text-sm font-semibold text-[#666666]'>
                        <AiOutlineLike size={17} />
                        <span>Like</span>
                    </div>
                    <div className='flex gap-1 items-center text-sm font-semibold text-[#666666]'>
                        <BiComment size={16} />
                        <span>Comment</span>
                    </div>
                    <div className='flex gap-1 items-center text-sm font-semibold text-[#666666]'>
                        <PiShareFatBold size={17} />
                        <span>share</span>
                    </div>
                </div>
            </div>
            <BreakLine />
        </div>
    )
}