import React, { useState } from "react";
import CropDoctorPost from "../components/CropDoctorPost";
import { MdArrowBackIos } from "react-icons/md";
import { BiMicrophone, BiPlus } from "react-icons/bi";

const cropOptions = [
  { name: "Chili", emoji: "🌶️" },
  { name: "Tomato", emoji: "🍅" },
  { name: "Paddy", emoji: "🌾" },
  { name: "Other", emoji: "🍃" },
];

const CropDoctor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPostModalOpen, setIsNewPostModalOpen] = useState(false);
  const [createPost, setCreatePost] = useState(false);
  return (
    <div className="relative">
      <div className="flex justify-between align-middle px-5 py-4 sticky top-0 bg-white w-full border-b mb-2">
        <div className="flex gap-2 items-center">
          <MdArrowBackIos />
          <span>Crop Doctor</span>
        </div>
        <div
          onClick={() => setIsModalOpen(true)}
          className="w-10 h-10 border border-black rounded-full flex items-center justify-center cursor-pointer"
        >
          <BiPlus />
        </div>
      </div>
      <CropDoctorPost />
      {!isModalOpen && newPostModalOpen && (
        <div className="absolute inset-0 flex justify-center items-center p-10 backdrop-blur-sm">
          <div className="p-4 bg-white rounded w-full flex items-center gap-4 flex-col shadow-md">
            <span>Choose Crop</span>
            <div className="flex gap-2">
              {cropOptions.map((crop, index) => (
                <Crop key={index} emoji={crop.emoji} name={crop.name} />
              ))}
            </div>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setIsNewPostModalOpen(false)}
                className="px-4 py-1 text-white bg-[#9CA2AE] flex justify-center items-center rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setCreatePost(true);
                  setIsNewPostModalOpen(false);
                }}
                className="px-4 py-1 text-white bg-[#039767] flex justify-center items-center rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && !newPostModalOpen && (
        <div className="absolute inset-0 flex justify-center items-center p-2 backdrop-blur-sm">
          <div className="w-[95%] h-[80%] bg-white overflow-auto rounded-2xl shadow-xl">
            <div className="p-2 font-semibold flex justify-center items-center sticky top-0 bg-white">
              Queries raised near you
            </div>
            <CropDoctorPost />
            <div
              onClick={() => {
                setIsNewPostModalOpen(true);
                setIsModalOpen(false);
              }}
              className="p-2 flex justify-center items-center sticky bottom-0 bg-[#039767] text-white"
            >
              Proceed to post
            </div>
          </div>
        </div>
      )}
      {createPost && (
        <div className="absolute inset-0 flex justify-center items-center p-10 backdrop-blur-sm">
          <div className="p-4 bg-white rounded w-full flex items-center gap-4 flex-col shadow-md">
            <div className="flex justify-center items-center text-xs text-slate-700 gap-3">
              <button className="py-2 px-4 border border-slate-200 rounded-md">
                Choose Image
              </button>
              <span>or</span>
              <button className="py-2 px-4 border border-slate-200 rounded-md">
                Take a Picture
              </button>
            </div>
            <div className="flex gap-2 items-center w-full">
              <textarea
                name="text"
                placeholder="write your description here"
                className="w-full bg-slate-200 rounded-xl text-sm p-2"
              ></textarea>
              <BiMicrophone size={25} />
            </div>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setCreatePost(false)}
                className="px-4 py-1 text-white bg-[#9CA2AE] flex justify-center items-center rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => setCreatePost(false)}
                className="px-4 py-1 text-white bg-[#039767] flex justify-center items-center rounded"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CropDoctor;

const Crop = ({ emoji, name }) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="flex justify-center items-center border border-[#F3F4F6] p-2 bg-[#F9FAFB] rounded-full w-[64px] h-[64px] flex-shrink-0">
        {emoji}
      </div>
      <span className="text-sm text-[#374151]">{name}</span>
    </div>
  );
};
