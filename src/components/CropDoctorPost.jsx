import React from "react";
import { MdVerified } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { PiShareFatBold } from "react-icons/pi";

const SocialFeedPosts = [
  {
    name: "Raja Narendra",
    role: "Proud Telangana Farmer",
    position: "farmer",
    image: "/images/apna-telangana/raja.png",
    day: "1d",
    postImage1: "/images/apna-telangana/chilli1.png",
    postImage2: "/images/apna-telangana/chilli2.png",
    caption:
      "I have a chili farm and some of the plants like this are getting damaged. Can someone please help with this issue?",
    like: "6",
    comments: "3",
    shares: "0",
  },
];

const comments = [
  {
    name: "Pavan Sharma",
    image: "/images/apna-telangana/commenter1.png",
    position: "doctor",
    role: "Crop Doctor",
    comment:
      "Apply xxx fertilizer and water 3 times a week to see a difference",
    time: "6 hr",
  },
  {
    name: "Prakash Reddy",
    image: "/images/apna-telangana/commenter2.png",
    position: "farmer",
    role: "Apna Social",
    comment: "I have the same issue. Hopefully this gets answered quickly",
    time: "9 hr",
  },
  {
    name: "Pavan Sharma",
    image: "/images/apna-telangana/commenter3.png",
    position: "farmer",
    role: "Apna Social",
    comment:
      "Ramesh recommended me to apply organic bio product. He faced this issue before",
    time: "9 hr",
  },
];

const CropDoctorPost = () => {
  return (
    <div>
      <div className="flex flex-col">
        {SocialFeedPosts.map((post) => (
          <SocialMediaPost key={post.name} {...post} />
        ))}
      </div>

      <div className="flex flex-col gap-3 px-2">
        {comments.map((item, index) => (
          <Comments key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CropDoctorPost;

const SocialMediaPost = ({
  name,
  role,
  position,
  image,
  day,
  postImage1,
  postImage2,
  caption,
  like,
  comments,
  shares,
}) => {
  const verifiedColor = (position) => {
    switch (position) {
      case "farmer":
        return "#039667";
      case "government":
        return "#FFD700";
      default:
        return "#ccc";
    }
  };

  return (
    <div className="mb-4">
      <div className="w-full flex flex-col gap-3 px-2 mb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img className="w-[50px] h-[50px] rounded-full" src={image} />
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-semibold">{name}</span>
                {position !== "NA" && (
                  <MdVerified color={verifiedColor(position)} />
                )}
              </div>
              <span className="text-sm text-[#666666] leading-4">{role}</span>
              <span className="text-sm text-[#666666]">{day}</span>
            </div>
          </div>
          <div>&#8226;&#8226;&#8226;</div>
        </div>
        <p className="text-sm">
          {caption}
          <span className="text-[#666666]">...see more</span>
        </p>
        <div className="flex gap-2 overflow-auto">
          <img className="w-[250px]" src={postImage1} />
          <img className="w-[250px]" src={postImage2} />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img className="h-5" src="/images/users/like-comment-share.png" />
            <span className="text-sm text-[#666666]">{like}</span>
          </div>
          <span className="text-sm text-[#666666]">
            {comments} comments &#8226; {shares} shares
          </span>
        </div>
        <div className="bg-[#E2E5E9] w-full h-[1px]"></div>
        <div className="flex justify-between">
          <div className="flex gap-1 items-center text-sm font-semibold text-[#666666]">
            <AiOutlineLike size={17} />
            <span>Like</span>
          </div>
          <div className="flex gap-1 items-center text-sm font-semibold text-[#666666]">
            <BiComment size={16} />
            <span>Comment</span>
          </div>
          <div className="flex gap-1 items-center text-sm font-semibold text-[#666666]">
            <PiShareFatBold size={17} />
            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Comments = ({ name, image, role, comment, time, position }) => {
  const verifiedColor = (role) => {
    switch (role.toLowerCase()) {
      case "farmer":
        return "#039667";
      case "government":
        return "#FFD700";
      case "crop doctor":
        return "#0091F0";
      case "doctor":
        return "#0091F0";
      default:
        return "#ccc";
    }
  };

  return (
    <div className="w-full flex gap-4 px-2">
      <div className="flex-shrink-0">
        <img src={image} alt="commenter" className="w-[50px] h-[50px]" />
      </div>
      <div>
        <div className="flex gap-2 justify-start items-center">
          <span className="text-sm font-medium">{name}</span>
          <MdVerified color={verifiedColor(position)} />
          <div className="flex items-center px-2 py-1 bg-[#039667] rounded">
            <span className="text-white text-xs">{role}</span>
          </div>
        </div>
        <div className="p-2 bg-[#f2f2f2] rounded text-xs">{comment}</div>
        <span className="text-xs text-[#666666]">{time}</span>
      </div>
    </div>
  );
};
