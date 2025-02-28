import React from "react";
import { Link } from "react-router-dom";

const SelectLanguage = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[#039667]">
      <div className="w-full flex flex-col gap-[80px] p-4">
        <div className="flex flex-col gap-5 justify-between items-center">
          <img src="/images/logo.png" alt="logo" className="w-[100px]" />
          <span className="text-4xl text-white font-semibold">
            KISAAN PRIDE
          </span>
        </div>
        <div>
          <div className="text-lg font-semibold mb-2">Select Language</div>
          <div className="flex justify-between items-center gap-2">
            <Link
              to={"/login"}
              className="w-full flex justify-center items-center bg-slate-200 px-4 py-2 border border-solid border-slate-900 rounded-lg"
            >
              <span>English</span>
            </Link>
            <Link className="w-full flex justify-center items-center bg-slate-200 px-4 py-2 border border-solid border-slate-900 rounded-lg">
              <span>Telugu</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectLanguage;
