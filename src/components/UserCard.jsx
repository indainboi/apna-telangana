import { Link } from "react-router-dom"
import BreakLine from "./BreakLine"

const UserCard = ({ name, image, location1, location2, distance, cropName, cropImage, to}) => {
    return (
        <Link to={to}>
            <div className='flex justify-between items-center px-5 py-4'>
                <div className='flex items-center gap-3'>
                    <img className='w-[60px]' src={image} />
                    <div className='flex flex-col'>
                        <span className='text-[#374151]'>{name}</span>
                        <span className='text-sm text-[#4B5563]'>{location1} &#8226; {location2}</span>
                        <span className='text-sm text-[#4B5563]'>{distance} km</span>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <div className='bg-[#F3F4F6] rounded-full border w-[60px] h-[60px] flex items-center justify-center'>
                        <img className='w-[25px] object-cover' src={cropImage} />
                    </div>
                    <span className='text-[#4B5563] text-sm font-thin'>{cropName}</span>
                </div>
            </div>
            <BreakLine />
        </Link>
    )
}

export default UserCard