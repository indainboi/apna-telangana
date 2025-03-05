import PageHeader from "../components/PageHeader";
import { TbReport, TbVirusSearch } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const crops = [
  { name: "Add Crop", image: "/images/crops/plus.png" },
  { name: "Chilli", image: "/images/crops/chilli.png" },
  { name: "Tomato", image: "/images/crops/tomato.png" },
  { name: "Cotton", image: "/images/crops/cotton.png" },
  { name: "Groundnut", image: "/images/crops/groundnut.png" },
  { name: "Greengram", image: "/images/crops/greengram.png" },
  { name: "Redgram", image: "/images/crops/redgram.png" },
  { name: "Sugarcane", image: "/images/crops/sugarcane.png" },
];

const CropPage = () => {
  const farmCrops = [
    {
      id: 1,
      cropName: "Chilli",
      cropColor: "bg-green-50",
      width: "100px",
      height: "100px",
    },
    {
      id: 2,
      cropName: "Tomato",
      cropColor: "bg-red-50",
      width: "100px",
      height: "100px",
    },
    {
      id: 3,
      cropName: "Bitter Gourd",
      cropColor: "bg-orange-50",
      width: "100px",
      height: "100px",
    },
    {
      id: 4,
      cropName: "Onion",
      cropColor: "bg-pink-50",
      width: "100px",
      height: "150px",
    },
    {
      id: 5,
      cropName: "Garlic",
      cropColor: "bg-green-50",
      width: "100px",
      height: "150px",
    },
    {
      id: 6,
      cropName: "Tomato",
      cropColor: "bg-orange-50",
      width: "100px",
      height: "150px",
    },
    {
      id: 7,
      cropName: "Chilli",
      cropColor: "bg-purple-50",
      width: "100px",
      height: "150px",
    },
    {
      id: 8,
      cropName: "Paddy",
      cropColor: "bg-yellow-50",
      width: "250px",
      height: "250px",
    },
  ];
  return (
    <div>
      <PageHeader title={"Chilli"} to={"/crop-advisory"} />

      <div className="px-5 my-6 flex flex-col gap-5">
        <div className='bg-[url("/images/crops/crop-advice.png")] h-[250px] bg-cover bg-center p-5'>
          <div className="flex flex-col gap-1 mb-4">
            <span className="text-xl font-semibold">Day 37</span>
            <span className="text-md">Irrigation</span>
          </div>
          <div className="flex flex-col text-[#374151] mb-4">
            <span className="text-sm">Day 50</span>
            <span className="text-[12px]">Spray Fertilizers</span>
          </div>
          <div className="flex flex-col text-[#374151]">
            <span className="text-sm">Day 60</span>
            <span className="text-[12px]">Harvesting</span>
          </div>
        </div>

        {/* <div className="w-full bg-[url('/images/crops/crop-protection.png')] bg-cover px-6 py-9 text-white">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <span className="text-lg">Crop Protection</span>
              <TbVirusSearch size={20} />
            </div>
            <FaArrowRight size={20} />
          </div>
        </div> */}

        {/* <button className="w-full text-center text-white p-3 bg-[#049E6A] rounded-lg">
          Reach Out/Help
        </button> */}

        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Crop Protection</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">Crop Care</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">Fertilizer Calculator</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default CropPage;

const CropCard = ({ name, image }) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div
        className={`flex items-center justify-center ${
          name == "Maize" ? "border-[#049E6A] border-2" : "border"
        } bg-[#F3F4F6] rounded-full border w-[60px] h-[60px]`}
      >
        <img className="w-[30px] object-cover" src={image} />
      </div>
      <span
        className={`text-[13px] text-center ${
          name == "Maize" ? "text-[#049E6A]" : "text-[#374151]"
        }`}
      >
        {name}
      </span>
    </div>
  );
};

const CropFarm = ({ cropName, cropColor, width, height }) => {
  return (
    <div
      className={`w-[${width}] h-[${height}] ${cropColor} border border-solid flex items-center justify-center text-sm`}
    >
      <span>{cropName}</span>
    </div>
  );
};
