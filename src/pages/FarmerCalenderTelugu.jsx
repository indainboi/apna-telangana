import React from 'react'
import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'
import { FiPhone } from 'react-icons/fi'
import BreakLine from '../components/BreakLine'

const traders = [
    { name: "సాయి ప్రభాకర్", image: "/images/market-place/sai.png"},
    { name: "కిరణ్ రెడ్డి", image: "/images/market-place/kiran.png"},
    { name: "అక్షయ్ బాలాజీ", image: "/images/market-place/akshay.png"},
    { name: "శశి శేఖర్", image: "/images/market-place/sashi.png"}
]

const FarmerCalenderTelugu = () => {
    return (
        <div>
            <PageHeader title={"మార్కెట్"} to={"/market-place-telugu"} />
            <div className='px-5 flex gap-2 mb-3'>
                <Link to={"/market-place/farmer-calender-telugu"} className='w-full flex justify-center items-center text-sm bg-[#50C878] rounded-md p-2 font-semibold'>రైతు క్యాలెండర్</Link>
                <Link to={"/market-place/trader-calender-telugu"} className='w-full flex justify-center items-center text-sm rounded-md p-2 font-semibold border border-[#50C878]'>ట్రేడర్ క్యాలెండర్</Link>
            </div>
            <div className='px-4 mb-4'>
                <img src="/images/market-place/calender-telugu.png" alt="" />
            </div>
            <div>
                <span className='font-semibold mb-3 px-5'>Traders</span>
                {traders.map(trader => <TraderCard name={trader.name} image={trader.image} />)}
            </div>
        </div>
    )
}

export default FarmerCalenderTelugu

const TraderCard = ({ name, image }) => {
    return (
        <div>
            <div className='flex justify-between items-center px-5 py-5'>
                <div className='flex items-center gap-2'>
                    <img className='w-10' src={image} />
                    <span>{name}</span>
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