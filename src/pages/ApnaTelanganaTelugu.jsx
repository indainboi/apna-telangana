import React from 'react'
import { MdVerified } from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'
import { PiShareFatBold } from 'react-icons/pi'
import BreakLine from '../components/BreakLine'
import ApnaTelanganaHeader from '../components/ApnaTelanganaHeader'

const SocialFeedPosts = [
    {
        name: "దుద్దిళ్ల శ్రీధర్ బాబు",
        role: "IT మినిస్టర్ • కాంగ్రెస్ • తెలంగాణ",
        position: "government",
        image: "/images/apna-telangana/duddilla.png",
        day: "1d",
        postImage1: "/images/apna-telangana/it-1.png",
        postImage2: "/images/apna-telangana/it-2.png",
        caption: "హైదరాబాదులోని వ్యవసాయ శిక్షణా కేంద్రాన్ని సందర్శించారు, అక్కడ రాబోయే తరం రైతులకు ఆధునిక వ్యవసాయ పద్ధతులను నేర్పించారు",
        like: "2137",
        comments: "675",
        shares: "307"
    },
    {
        name: "రాహుల్ వెంగెటి",
        role: "బిజినెస్ లీడ్ • సోలార్ ఫ్లో ఇరిగేషన్ సోలుషన్స్...",
        position: "NA",
        image: "/images/apna-telangana/rahul.png",
        day: "4d",
        postImage1: "/images/apna-telangana/rahul-1.png",
        postImage2: "/images/apna-telangana/rahul-2.png",
        caption: "తెలంగాణ రైతుల ప్రత్యేక అవసరాల కోసం ప్రత్యేకంగా రూపొందించిన మా సౌరశక్తితో నడిచే నీటిపారుదల వ్యవస్థను పరిచయం చేస్తున్నాము. మనం",
        like: "290",
        comments: "5",
        shares: "11"
    },
    {
        name: "మల్లేష్ కట్ట",
        role: "తెలంగాణ రైతు ",
        position: "farmer",
        image: "/images/apna-telangana/mallesh.png",
        day: "6d • 10km • మర్లపేట్, బోయిన్పల్లి, కరీంనగర్...",
        postImage1: "/images/apna-telangana/mallesh-1.png",
        postImage2: "/images/apna-telangana/mallesh-2.png",
        caption: "గత వారం వర్క్‌షాప్‌లో నేను నేర్చుకున్న కొత్త సేంద్రీయ పెస్ట్ కంట్రోల్ పద్ధతిని ప్రయత్నించాను. ఇది ప్రభావవంతంగా ఉండటమే కాకుండా సురక్షితమైనది కూడా",
        like: "542",
        comments: "239",
        shares: "99"
    },
    {
        name: "తెలంగాణ గవర్నమెంట్",
        role: "తెలంగాణ రాష్ట్ర ఆఫిసిఅల్ వ్యవసాయపు అకౌంట్",
        position: "government",
        image: "/images/apna-telangana/telangana-government.png",
        day: "1w",
        postImage1: "/images/apna-telangana/tg-1.png",
        postImage2: "/images/apna-telangana/tg-2.png",
        caption: "అప్నా తెలంగాణ ఉద్యమం కింద తెలంగాణ అంతటా “స్మార్ట్ ఫార్మింగ్ ఇనీషియేటివ్” ప్రారంభిస్తున్నట్లు ప్రకటించారు",
        like: "940",
        comments: "487",
        shares: "220"
    },
    {
        name: "అంజలి గుప్త",
        role: "డైరెక్టర్ • ఆర్గానిక్ హోప్ ఫౌండేషన్",
        position: "NA",
        image: "/images/apna-telangana/anjali.png",
        day: "4d",
        caption: "అప్నా తెలంగాణకు మా సహకారంగా సిద్దిపేట జిల్లాలో 500 మంది రైతులకు సేంద్రియ వ్యవసాయ పద్ధతుల్లో శిక్షణ ఇవ్వడానికి మా స్వచ్ఛంద సంస్థ ప్రయత్నిస్తోందని పంచుకోవడం",
        like: "416",
        comments: "70",
        shares: "51"
    },
    {
        name: "మహేష్ చంద్ర",
        role: "డిస్ట్రిక్ట్ కలెక్టర్",
        position: "government",
        image: "/images/apna-telangana/mahesh.png",
        day: "1w",
        postImage1: "/images/apna-telangana/mahesh-1.png",
        postImage2: "/images/apna-telangana/mahesh-2.png",
        caption: "ఈరోజు కరీంనగర్ జిల్లాలో చురుగ్గా పంచుకుంటున్న అభ్యుదయ రైతు శ్రీ రవికుమార్ గారి పొలాన్ని సందర్శించడం నా అదృష్టం",
        like: "864",
        comments: "366",
        shares: "108"
    },
    {
        name: "సత్తయ్య మాదెట్టి",
        role: "తెలంగాణ రైతు ",
        position: "farmer",
        image: "/images/apna-telangana/sattayya.png",
        day: "6d • 27km • Marlapet, పత్తిపాక, ధర్మారం, కరీంనగర్...",
        caption: "అనుకోకుండా కురిసిన వర్షాల వల్ల వరి పంటకు కొన్ని సమస్యలు ఎదురవుతున్నాయి. ఎవరైనా తోటి రైతుల దగ్గర డ్రైనేజీ పరిష్కారాలపై చిట్కాలు ఉన్నాయా? ఏదైనా మెచ్చుకోండి",
        like: "583",
        comments: "45",
        shares: "89"
    },
    {
        name: "ప్రసాద్ యాదవ్",
        role: "వైస్ ప్రెసిడెంట్ • మహావీర్ ఇరిగేషన్ సిస్టమ్స్",
        position: "NA",
        image: "/images/apna-telangana/prasad.png",
        day: "5d",
        postImage1: "/images/apna-telangana/prasad-1.png",
        postImage2: "/images/apna-telangana/prasad-2.png",
        caption: "మా బృందం ఈరోజు సిద్దిపేటలో ఆధునిక నీటిపారుదల పద్ధతులపై ఉచిత శిక్షణా కార్యక్రమాన్ని నిర్వహించింది #ApnaTelanganaAgriculture",
        like: "542",
        comments: "67",
        shares: "29"
    },
    {
        name: "సాహితి ముడ్డిల",
        role: "లీడ్ సైంటిస్ట్ • తెలంగాణ అగ్రి యూనివర్సిటీ",
        position: "NA",
        image: "/images/apna-telangana/sahithi.png",
        day: "5d",
        postImage1: "/images/apna-telangana/sahithi-1.png",
        postImage2: "/images/apna-telangana/sahithi-2.png",
        caption: "తెలంగాణ వ్యవసాయ విశ్వవిద్యాలయం తెలంగాణకు సరిపోయే అధిక దిగుబడినిచ్చే కొత్త రకాన్ని అభివృద్ధి చేసిందని ప్రకటించడానికి గర్వంగా ఉంది",
        like: "287",
        comments: "15",
        shares: "26"
    },
    {
        name: "సాయి రమేష్",
        role: "తెలంగాణ రైతు",
        position: "farmer",
        image: "/images/apna-telangana/sai.png",
        day: "6d • గండిపల్లి, అక్కన్నపేట, సిద్దిపేట...",
        postImage1: "/images/apna-telangana/sai-1.png",
        postImage2: "/images/apna-telangana/sai-2.png",
        caption: "ఈ రోజు నా మొదటి బ్యాచ్ స్ట్రాబెర్రీలను పండించాను! పండ్ల పెంపకానికి మారడం చాలా పెద్ద నిర్ణయం, కానీ ఈ ఫలితాలను చూడటం వల్ల ఇది జరుగుతుంది",
        like: "731",
        comments: "310",
        shares: "170"
    },
    {
        name: "సురేష్ వర్మ",
        role: "ప్రొఫెసర్ • అగ్రికల్చరల్ రీసెర్చ్ స్టేషన్",
        position: "NA",
        image: "/images/apna-telangana/suresh.png",
        day: "5d",
        caption: "రసాయనాలపై ఎక్కువగా ఆధారపడకుండా పెస్ట్ మేనేజ్‌మెంట్‌పై ఈ శనివారం లైవ్ ప్రశ్నోత్తరాల సెషన్‌ను నిర్వహిస్తోంది. మీ ప్రశ్నలను తీసుకురండి మరియు చూద్దాం",
        like: "675",
        comments: "181",
        shares: "129"
    },
]

const ApnaTelanganaTelugu = () => {
    return (
        <div>
            <ApnaTelanganaHeader title={"అప్నా తెలంగాణ"} to={"/homepage-telugu"} />
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

export default ApnaTelanganaTelugu

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