import React from 'react'
import PageHeader from '../components/PageHeader'
import { FaArrowRight } from 'react-icons/fa6'
import { SlCalender } from 'react-icons/sl'
import BreakLine from '../components/BreakLine'
import { Link } from 'react-router-dom'

const dealers = [
    { name: "Produce Dealers", image: "/images/produce.png" },
    { name: "Pesticides Dealers", image: "/images/pesticides.png" },
    { name: "Seeds Dealers", image: "/images/seeds.png" },
    { name: "Fertilizer Dealers", image: "/images/fertilizer.png" },
    { name: "Agri Warehouses", image: "/images/agriwarehouses.png" },
    { name: "Equipment Dealers", image: "/images/equipment.png" },
]


const MarketPlace = () => {
    return (
        <div>
            <PageHeader title={"Market Place"} to={"/"} />
            <div className='px-5 py-4'>
                <div className="bg-[url('/images/market-price.png')] bg-cover px-6 py-9 text-white mb-4">
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-3'>
                            <span className='text-lg'>Market Price</span>
                            <img src="/images/pricetag.svg" width={25} />
                        </div>
                        <FaArrowRight size={20} />
                    </div>
                </div>
                <Link to={"/market-place/farmer-calender"}>
                    <div className="bg-[url('/images/trader-calender.png')] bg-cover px-6 py-9 text-white">
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-3 items-center'>
                                <span className='text-lg'>Trader Calender</span>
                                <SlCalender size={20} />
                            </div>
                            <FaArrowRight size={20} />
                        </div>
                    </div>
                </Link>
            </div>

            {/* break */}
            <BreakLine />

            <div className='p-5'>
                <h4 className='font-semibold mb-4'>Dealers Information</h4>
                <div className='grid grid-cols-3 gap-3'>
                    {dealers.map(dealer => <DealerCard name={dealer.name} image={dealer.image} />)}
                </div>
            </div>
        </div>
    )
}

export default MarketPlace

const DealerCard = ({ name, image }) => {
    return (
        <div className='flex flex-col justify-between gap-2 items-center text-center border rounded-lg p-4'>
            <img src={image} />
            <span className='text-sm'>{name}</span>
        </div>
    )
}