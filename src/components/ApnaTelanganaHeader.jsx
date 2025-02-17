import { IoSearchSharp } from "react-icons/io5"
import { LuMessageCircleMore } from "react-icons/lu"
import { MdArrowBackIos } from "react-icons/md"
import { Link } from "react-router-dom"

const ApnaTelanganaHeader = ({ title, to }) => {
    return (
        <div className="flex justify-between items-center px-5 py-4 sticky w-full top-0 bg-gradient-to-b from-[#CEFFF5] to-[#ffffff]">
            <Link to={to}>
                <div className='w-full text-[#039667] flex items-center gap-2'>
                    <MdArrowBackIos />
                    <h4 className='font-semibold text-xl'>{title}</h4>
                </div>
            </Link>
            <div className="flex gap-1.5">
                <div className="w-7 h-7 flex justify-center items-center rounded-full bg-[#E2E5EA]"><IoSearchSharp size={18} /></div>
                <div className="w-7 h-7 flex justify-center items-center rounded-full bg-[#E2E5EA]">AI</div>
                <div className="w-7 h-7 flex justify-center items-center rounded-full bg-[#E2E5EA]"><LuMessageCircleMore /></div>
            </div>
        </div>
    )
}

export default ApnaTelanganaHeader