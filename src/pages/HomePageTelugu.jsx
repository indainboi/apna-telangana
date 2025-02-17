import { Link } from 'react-router-dom'
import MenuCard from '../components/MenuCard'
import HomeHeaderTelugu from '../components/HomeHeaderTelugu'

const menus = [
  { name: "పంట సలహాలు", url: "/images/crop_advisory.png", to: "/crop-advisory-telugu" },
  { name: "కమ్యూనిటీ", url: "/images/community.png", to: "/community-telugu" },
  { name: "మార్కెట్", url: "/images/market_place.png", to: "/market-place-telugu" },
  { name: "అప్నా తెలంగాణ సోషల్", url: "/images/social.png", to: "/apna-telangana-telugu" }
]

const HomePageTelugu = () => {
  return (
    <div>
      <HomeHeaderTelugu />

      {/* Weather Card */}
      <Link to={"/weather-telugu"}>
        <div className="px-5 py-4">
          <div className="bg-[url('/images/weather.png')] bg-cover bg-no-repeat bg-center px-5 py-5 text-white rounded-lg flex flex-col">
            <p className='font-semibold text-2xl'>24&deg;C</p>
            <p className='text-md font-medium'>మేఘావృతం</p>
            <p className='text-sm'>మర్లపేట &#8226; 3:00 pm</p>
          </div>
        </div>
      </Link>

      {/* Menus */}
      <div className='px-5 py-4'>
        <div className='grid grid-cols-2 gap-4'>
          {menus.map((menu, index) => (
            <Link to={menu.to}>
            <MenuCard key={index} name={menu.name} url={menu.url} />
            </Link>
          ))}
        </div>
      </div>

      {/* support */}
      <div className='px-5 py-4'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='invisible'></div>
          <div className='py-3 bg-[#049E6A] rounded-lg text-center text-white text-lg'>సపోర్ట్</div>
        </div>
      </div>
    </div>
  )
}

export default HomePageTelugu