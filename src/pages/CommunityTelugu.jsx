import { Link } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import BreakLine from "../components/BreakLine"

const items = [
    { name: "మైక్రో ఇరిగేషన్", image: "/images/communities-images/microirrigation.jpg" },
    { name: "కూరగాయలు", image: "/images/communities-images/vegetables.webp" },
    { name: "వరి DSR పద్దతిలో", image: "/images/communities-images/paddy-dsr.jpg" },
    { name: "ప్రకృతి వ్యవసాయం", image: "/images/communities-images/natural-farming.png" },
    { name: "సేంద్రీయ వ్యవసాయం", image: "/images/communities-images/organic-farming.jpeg" },
    { name: "డైరీ వ్యవసాయం", image: "/images/communities-images/dairy-farming.jpg" },
    { name: "వేరుశనగ వ్యవసాయం", image: "/images/communities-images/groundnut-farming.jpg" },
    { name: "పొద్దుతిరుగుడు పువ్వు వ్యవసాయం", image: "/images/communities-images/sunflower-farming.jpg" },
    { name: "నిలువు వ్యవసాయం", image: "/images/communities-images/vertical-farming.jpeg" },
    { name: "సమగ్ర వ్యవసాయం", image: "/images/communities-images/integrated-farming.jpg" },
    { name: "టెర్రస్ వ్యవసాయం", image: "/images/communities-images/terrace-farming.webp" },
    { name: "పునరుత్పత్తి వ్యవసాయం", image: "/images/communities-images/regenerative-agriculture.jpeg" },
    { name: "తోటల పెంపకం", image: "/images/communities-images/plantation-farming.jpeg" },
    { name: "అర్బన్ వ్యవసాయం", image: "/images/communities-images/urban-agriculture.jpg" },
    { name: "ఆగ్రో ఫారెస్ట్రీ", image: "/images/communities-images/agro-forestry.jpg" },
    { name: "హైడ్రోపోనిక్స్", image: "/images/communities-images/hydroponics.jpg" },
]

const CommunityTelugu = () => {
    return (
        <div>
            <PageHeader title={"కమ్యూనిటీ"} to={"/homepage-telugu"} />
            <div className="px-5 mb-5">
                <h4 className="font-semibold mb-3">రిజిస్టర్ ఐన కమ్యూనిటీలు</h4>
                <div className="flex justify-between">
                    <Link to={"/community/micro-irrigation-telugu"}>
                        <div className="flex flex-col text-center w-[100px]">
                            <img className="w-[100px] h-[100px] object-cover rounded-lg mb-2 shadow-lg" src="/images/communities-images/microirrigation.jpg" />
                            <span className="text-sm">మైక్రో ఇరిగేషన్</span>
                        </div>
                    </Link>
                    <div className="flex flex-col text-center">
                        <img className="w-[100px] h-[100px] object-cover rounded-lg mb-2 shadow-lg" src="/images/communities-images/vegetables.webp" />
                        <span className="text-sm">కూరగాయలు</span>
                    </div>
                    <div className="flex flex-col text-center w-[100px]">
                        <img className="w-[100px] h-[100px] object-cover rounded-lg mb-2 shadow-lg" src="/images/communities-images/integrated-farming.jpg" />
                        <span className="text-sm">సమగ్ర వ్యవసాయం</span>
                    </div>
                </div>
            </div>

            {/* break */}
            <BreakLine />

            <div className="px-5 mt-4">
                <h4 className="font-semibold mb-3">అన్ని కమ్యూనిటీలు</h4>
                <div className="grid grid-cols-3 gap-3">
                    {items.map(item => (
                        <CommunityCard key={item.name} name={item.name} image={item.image} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CommunityTelugu

const CommunityCard = ({ name, image }) => {
    return (
        <div className="flex flex-col text-center w-[100px]">
            <img className="w-[100px] h-[100px] object-cover rounded-lg mb-2 shadow-lg" src={`${image}`} />
            <span className="text-sm">{name}</span>
        </div>
    )
}