import { MdArrowBackIos } from "react-icons/md"
import { Link } from "react-router-dom"

const PageHeader = ({ title, to }) => {
    return (
        <div className='sticky w-full top-0'>
            <Link to={to}>
                <div className='w-full px-5 py-4 flex items-center bg-gradient-to-b from-[#CEFFF5] to-[#ffffff]  gap-2'>
                    <MdArrowBackIos />
                    <h4 className='font-medium'>{title}</h4>
                </div>
            </Link>
        </div>
    )
}

export default PageHeader