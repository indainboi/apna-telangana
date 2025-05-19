// // File: /src/pages/BharatAgri.js
// import { useState } from "react";
// import PageHeader from "../components/PageHeader";
// import { FaMicrophone } from "react-icons/fa";
// import { IoChevronDown, IoChevronUp } from "react-icons/io5";

// export default function BharatAgri() {
//   const [showInsecticide, setShowInsecticide] = useState(false);
//   const [showTraps, setShowTraps] = useState(false);

//   return (
//     <div>
//       <PageHeader title={"Bharat Agri"} to={"/apna-apps"} />

//       {/* Header with logo */}
//       <div className="flex items-center justify-between px-4 mt-2">
//         <h2 className="text-lg font-medium">Bharat Agri</h2>
//         <img
//           src="/images/apna-apps/bharat-agri.png"
//           alt="Bharat Agri Logo"
//           className="w-12 h-12 rounded-lg"
//         />
//       </div>

//       {/* Search Bar */}
//       <div className="flex items-center m-4 px-4 py-2 border border-gray-300 rounded-xl shadow-sm">
//         <input
//           type="text"
//           placeholder="Search here"
//           className="flex-grow outline-none bg-white"
//         />
//         <FaMicrophone className="text-orange-500" />
//       </div>

//       {/* Insecticide Section Toggle */}
//       <div className="px-4">
//         <div
//           className="flex items-center justify-between cursor-pointer"
//           onClick={() => setShowInsecticide(!showInsecticide)}
//         >
//           <h3 className="text-md font-semibold">Insecticide</h3>
//           {showInsecticide ? (
//             <IoChevronUp className="text-lg" />
//           ) : (
//             <IoChevronDown className="text-lg" />
//           )}
//         </div>

//         {showInsecticide && (
//           <div className="mt-4 space-y-4">
//             {[...Array(3)].map((_, index) => (
//               <div key={index} className="flex justify-between items-center border-b pb-2">
//                 <div>
//                   <h4 className="font-semibold">FMC Coragen</h4>
//                   <p className="text-sm text-gray-600">Chlorantraniliprole 18.5% SC</p>
//                   <p className="text-sm font-medium">₹1449</p>
//                   <p className="text-sm text-green-600">⭐ 4.5 Very Good (78 Reviews)</p>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <img src="/images/apna-apps/bharat-agri/insecticide.png" alt="Product" className="w-12 h-20" />
//                   <button className="mt-1 text-xs px-3 py-1 border rounded-full">ADD</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Traps Section Toggle */}
//       <div className="px-4 mt-6">
//         <div
//           className="flex items-center justify-between cursor-pointer"
//           onClick={() => setShowTraps(!showTraps)}
//         >
//           <h3 className="text-md font-semibold">Traps</h3>
//           {showTraps ? (
//             <IoChevronUp className="text-lg" />
//           ) : (
//             <IoChevronDown className="text-lg" />
//           )}
//         </div>

//         {showTraps && (
//           <div className="mt-4 space-y-4">
//             {[...Array(3)].map((_, index) => (
//               <div key={index} className="flex justify-between items-center border-b pb-2">
//                 <div>
//                   <h4 className="font-semibold">FMC Coragen</h4>
//                   <p className="text-sm text-gray-600">Chlorantraniliprole 18.5% SC</p>
//                   <p className="text-sm font-medium">₹1449</p>
//                   <p className="text-sm text-green-600">⭐ 4.5 Very Good (78 Reviews)</p>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <img src="/images/apna-apps/bharat-agri/insecticide.png" alt="Product" className="w-12 h-20" />
//                   <button className="mt-1 text-xs px-3 py-1 border rounded-full">ADD</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// } 

// File: /src/pages/BharatAgri.js
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { FaMicrophone } from "react-icons/fa";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

export default function BharatAgri() {
  const [showInsecticide, setShowInsecticide] = useState(false);
  const [showTraps, setShowTraps] = useState(false);

  return (
    <div>
      <PageHeader title={"భారత్ అగ్రి"} to={"/apna-apps"} />

      {/* Header with logo */}
      <div className="flex items-center justify-between px-4 mt-2">
        <h2 className="text-lg font-medium">భారత్ అగ్రి</h2>
        <img
          src="/images/apna-apps/bharat-agri.png"
          alt="Bharat Agri Logo"
          className="w-12 h-12 rounded-lg"
        />
      </div>

      {/* Search Bar */}
      <div className="flex items-center m-4 px-4 py-2 border border-gray-300 rounded-xl shadow-sm">
        <input
          type="text"
          placeholder="ఇక్కడ శోధించండి"
          className="flex-grow outline-none bg-white"
        />
        <FaMicrophone className="text-orange-500" />
      </div>

      {/* Insecticide Section Toggle */}
      <div className="px-4">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setShowInsecticide(!showInsecticide)}
        >
          <h3 className="text-md font-semibold">ఇన్సెక్టిసైడ్</h3>
          {showInsecticide ? (
            <IoChevronUp className="text-lg" />
          ) : (
            <IoChevronDown className="text-lg" />
          )}
        </div>

        {showInsecticide && (
          <div className="mt-4 space-y-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-2">
                <div>
                  <h4 className="font-semibold">FMC Coragen</h4>
                  <p className="text-sm text-gray-600">క్లోరాన్‌ట్రానిలిప్రోల్ 18.5% SC</p>
                  <p className="text-sm font-medium">₹1449</p>
                  <p className="text-sm text-green-600">⭐ 4.5 చాలా మంచిది (78 సమీక్షలు)</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src="/images/apna-apps/bharat-agri/insecticide.png" alt="Product" className="w-12 h-20" />
                  <button className="mt-1 text-xs px-3 py-1 border rounded-full">జోడించండి</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Traps Section Toggle */}
      <div className="px-4 mt-6">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setShowTraps(!showTraps)}
        >
          <h3 className="text-md font-semibold">ట్రాప్స్</h3>
          {showTraps ? (
            <IoChevronUp className="text-lg" />
          ) : (
            <IoChevronDown className="text-lg" />
          )}
        </div>

        {showTraps && (
          <div className="mt-4 space-y-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-2">
                <div>
                  <h4 className="font-semibold">FMC Coragen</h4>
                  <p className="text-sm text-gray-600">క్లోరాన్‌ట్రానిలిప్రోల్ 18.5% SC</p>
                  <p className="text-sm font-medium">₹1449</p>
                  <p className="text-sm text-green-600">⭐ 4.5 చాలా మంచిది (78 సమీక్షలు)</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src="/images/apna-apps/bharat-agri/insecticide.png" alt="Product" className="w-12 h-20" />
                  <button className="mt-1 text-xs px-3 py-1 border rounded-full">జోడించండి</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 
