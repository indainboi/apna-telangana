import React from 'react'
import PageHeader from '../components/PageHeader'
import { TbReport, TbVirusSearch } from 'react-icons/tb'
import { FaArrowRight } from 'react-icons/fa6'

const crops = [
    { name: "Add Crop", image: "/images/crops/plus.png" },
    { name: "మొక్కజొన్న", image: "/images/crops/maize.png" },
    { name: "వరి", image: "/images/crops/paddy.png" },
    { name: "పత్తి", image: "/images/crops/cotton.png" },
    { name: "వేరుశనగ", image: "/images/crops/groundnut.png" },
    { name: "పెసర పప్పు", image: "/images/crops/greengram.png" },
    { name: "కంది పప్పు", image: "/images/crops/redgram.png" },
    { name: "చెరకు", image: "/images/crops/sugarcane.png" },
]

const CropAdvisoryTelugu = () => {
    return (
        <div>
            <PageHeader title={"పంట సలహాలు"} to={"/homepage-telugu"} />

            <h3 className='font-semibold mb-4 px-5'>నా పంటలు</h3>
            <div className='px-5 overflow-auto'>
                <div className='flex gap-5'>
                    {crops.map(crop => <CropCard name={crop.name} image={crop.image} />)}
                </div>
            </div>

            <div className='px-5 my-6 flex flex-col gap-5'>
                <div className='bg-[url("/images/crops/crop-advice.png")] h-[250px] bg-cover bg-center p-5'>
                    <div className='flex flex-col gap-1 mb-4'>
                        <span className='text-xl font-semibold'>37వ రోజు</span>
                        <span className='text-md'>ఇరిగేషన్</span>
                    </div>
                    <div className='flex flex-col text-[#374151] mb-4'>
                        <span className='text-sm'>50వ రోజు</span>
                        <span className='text-[12px]'>ఎరువులు స్ప్రే</span>
                    </div>
                    <div className='flex flex-col text-[#374151]'>
                        <span className='text-sm'>60వ రోజు</span>
                        <span className='text-[12px]'>కోత</span>
                    </div>
                </div>

                <div className="w-full bg-[url('/images/crops/soil-report.png')] bg-cover px-6 py-9 text-white">
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-3 items-center'>
                            <span className='text-lg'>మట్టి రిపోర్టు</span>
                            <TbReport size={20} />
                        </div>
                        <FaArrowRight size={20} />
                    </div>
                </div>

                <div className="w-full bg-[url('/images/crops/crop-protection.png')] bg-cover px-6 py-9 text-white">
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-3 items-center'>
                            <span className='text-lg'>పంట రక్షణ</span>
                            <TbVirusSearch size={20} />
                        </div>
                        <FaArrowRight size={20} />
                    </div>
                </div>

                <button className='w-full text-center text-white p-3 bg-[#049E6A] rounded-lg'>హెల్ప్</button>
            </div>
        </div>
    )
}

export default CropAdvisoryTelugu

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