import React from 'react'
import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'
import { FiPhone } from 'react-icons/fi'
import BreakLine from '../components/BreakLine'

const traders = [
    { name: "Sai Prabhakar", image: "/images/market-place/sai.png", distance: "2km"},
    { name: "Kiran Reddy", image: "/images/market-place/kiran.png", distance: "3km"},
    { name: "Akshay Balaji", image: "/images/market-place/akshay.png", distance: "4km"},
    { name: "Sashi Shekhar", image: "/images/market-place/sashi.png", distance: "5km"}
]

const FarmerCalender = () => {
    return (
        <div>
            <PageHeader title={"Market Place"} to={"/market-place"} />
            <div className='px-5 flex gap-2 mb-3'>
                <Link to={"/market-place/farmer-calender"} className='w-full flex justify-center items-center text-sm bg-[#50C878] rounded-md p-2 font-semibold'>Traders</Link>
                <Link to={"/market-place/trader-calender"} className='w-full flex justify-center items-center text-sm rounded-md p-2 font-semibold border border-[#50C878]'>Farmers</Link>
            </div>
            {/* <div className='px-4 mb-4'>
                <img src="/images/market-place/calender.png" alt="" />
            </div> */}
            <div>
                <span className='font-semibold mb-3 px-5'>Traders</span>
                {traders.map(trader => <TraderCard key={trader.distance} name={trader.name} image={trader.image} distance={trader.distance} />)}
            </div>
        </div>
    )
}

export default FarmerCalender

const TraderCard = ({ name, image, distance }) => {
    return (
        <div>
            <div className='flex justify-between items-center px-5 py-5'>
                <div className='flex items-center gap-2'>
                    <img className='w-10' src={image} />
                    <div className='flex flex-col'>
                        <span>{name}</span>
                        <span className='text-sm text-[#4B5563]'>{distance}</span>
                    </div>
                </div>
                <div className='flex items-center gap-2 px-2 py-1 text-white bg-[#3EDC00] rounded-md'>
                    <FiPhone />
                    <span>Call</span>
                </div>
            </div>
            <BreakLine />
        </div>
    )
}