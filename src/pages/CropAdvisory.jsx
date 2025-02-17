import React from 'react'
import PageHeader from '../components/PageHeader'
import { TbReport, TbVirusSearch } from 'react-icons/tb'
import { FaArrowRight } from 'react-icons/fa6'

const crops = [
    { name: "Add Crop", image: "/images/crops/plus.png" },
    { name: "Maize", image: "/images/crops/maize.png" },
    { name: "Paddy", image: "/images/crops/paddy.png" },
    { name: "Cotton", image: "/images/crops/cotton.png" },
    { name: "Groundnut", image: "/images/crops/groundnut.png" },
    { name: "Greengram", image: "/images/crops/greengram.png" },
    { name: "Redgram", image: "/images/crops/redgram.png" },
    { name: "Sugarcane", image: "/images/crops/sugarcane.png" },
]

const CropAdvisory = () => {
    return (
        <div>
            <PageHeader title={"Crop Advisory"} to={"/"} />

            <h3 className='font-semibold mb-4 px-5'>My Crops</h3>
            <div className='px-5 overflow-auto'>
                <div className='flex gap-5'>
                    {crops.map(crop => <CropCard name={crop.name} image={crop.image} />)}
                </div>
            </div>

            <div className='px-5 my-6 flex flex-col gap-5'>
                <div className='bg-[url("/images/crops/crop-advice.png")] h-[250px] bg-cover bg-center p-5'>
                    <div className='flex flex-col gap-1 mb-4'>
                        <span className='text-xl font-semibold'>Day 37</span>
                        <span className='text-md'>Irrigation</span>
                    </div>
                    <div className='flex flex-col text-[#374151] mb-4'>
                        <span className='text-sm'>Day 50</span>
                        <span className='text-[12px]'>Spray Fertilizers</span>
                    </div>
                    <div className='flex flex-col text-[#374151]'>
                        <span className='text-sm'>Day 60</span>
                        <span className='text-[12px]'>Harvesting</span>
                    </div>
                </div>

                <div className="w-full bg-[url('/images/crops/soil-report.png')] bg-cover px-6 py-9 text-white">
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-3 items-center'>
                            <span className='text-lg'>Soil Report</span>
                            <TbReport size={20} />
                        </div>
                        <FaArrowRight size={20} />
                    </div>
                </div>

                <div className="w-full bg-[url('/images/crops/crop-protection.png')] bg-cover px-6 py-9 text-white">
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-3 items-center'>
                            <span className='text-lg'>Crop Protection</span>
                            <TbVirusSearch size={20} />
                        </div>
                        <FaArrowRight size={20} />
                    </div>
                </div>

                <button className='w-full text-center text-white p-3 bg-[#049E6A] rounded-lg'>Reach Out/Help</button>
            </div>
        </div>
    )
}

export default CropAdvisory

const CropCard = ({ name, image }) => {

    return (
        <div className='flex flex-col gap-2 items-center'>
            <div className={`flex items-center justify-center ${ name == "Maize" ? "border-[#049E6A] border-2": "border" } bg-[#F3F4F6] rounded-full border w-[60px] h-[60px]`}>
                <img className='w-[30px] object-cover' src={image} />
            </div>
            <span className={`text-[13px] text-center ${ name == "Maize" ? "text-[#049E6A]" : "text-[#374151]" }`}>{name}</span>
        </div>
    )
}