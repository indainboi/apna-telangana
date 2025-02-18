import React from 'react'
import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'
import { FiPhone } from 'react-icons/fi'
import BreakLine from '../components/BreakLine'
import { GrLocation } from 'react-icons/gr'
import { PiFarm } from 'react-icons/pi'
import { BsPeople } from 'react-icons/bs'

const locations = [
    { name: "Ellanthakunta", area: "1500", number: "500"},
    { name: "Miriyalaguda", area: "2523", number: "734"},
    { name: "Mulugu", area: "1670", number: "621"},
]

const TraderCalender = () => {
    return (
        <div>
            <PageHeader title={"Market Place"} to={"/market-place"} />
            <div className='px-5 flex gap-2 mb-3'>
                <Link to={"/market-place/farmer-calender"} className='w-full flex justify-center items-center text-sm rounded-md p-2 font-semibold border border-[#50C878]'>Farmer Calender</Link>
                <Link to={"/market-place/trader-calender"} className='w-full flex justify-center items-center text-sm rounded-md p-2 font-semibold bg-[#50C878]'>Trader Calender</Link>
            </div>
            <div className='px-4 mb-4'>
                <img src="/images/market-place/calender.png" alt="" />
            </div>
            <div>
                <span className='font-semibold mb-3 px-5'>Locations</span>
                {locations.map(location => <LocationCard key={location.name} name={location.name} area={location.area} number={location.number} />)}
            </div>
        </div>
    )
}

export default TraderCalender

const LocationCard = ({ name, area, number }) => {
    return (
        <div>
            <div className='flex justify-between items-center px-5 py-5'>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 items-center text-sm'>
                        <GrLocation />
                        <span>Location: {name}</span>
                    </div>
                    <div className='flex gap-2 items-center text-sm'>
                        <PiFarm />
                        <span>Area: {area}</span>
                    </div>
                    <div className='flex gap-2 items-center text-sm'>
                        <BsPeople />
                        <span>Number of farmers: {number}</span>
                    </div>
                </div>
                <div className='flex items-center gap-2 px-2 py-1 text-white bg-[#3EDC00] rounded-md'>
                    <FiPhone />
                    <span>Contact</span>
                </div>
            </div>
            <BreakLine />
        </div>
    )
}