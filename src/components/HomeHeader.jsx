import { IoLanguage, IoLocationOutline } from 'react-icons/io5'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { Link } from 'react-router-dom'

const HomeHeader = () => {
  return (
    <div className='w-full px-5 py-4 flex justify-between items-center bg-gradient-to-b from-[#CEFFF5]'>
      <div className="bg-[url('/images/farmer1.png')] rounded-full w-8 h-8 bg-cover"></div>
      <div className='flex flex-col justify-center'>
        <div className='flex justify-center items-center gap-2'>
          <IoLocationOutline />
          <p className='text-base'>Location</p>
        </div>
        <div className='text-sm text-[#6B7280]'>Marlapet, Boinpally, Karimnagar</div>
      </div>
      <div className='flex gap-2'>
        <MdOutlineNotificationsNone size={20} />
        <Link to={"/homepage-telugu"}>
          <IoLanguage size={20} />
        </Link>
      </div>
    </div>
  )
}

export default HomeHeader