import React from "react";
import TiltedCard from "./TiltedCard";


const PostPreview = () => {
  return (
    <div className="flex flex-col flex-[0.4] w-full justify-center items-center gap-6">
      <TiltedCard
        imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
        altText="Kendrick Lamar - GNX Album Cover"
        captionText="Kendrick Lamar - GNX"
        containerHeight="450px"
        containerWidth="350px"
        imageHeight="450px"
        imageWidth="350px"
        rotateAmplitude={10}
        scaleOnHover={1.05}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
      />
      <button
        className="w-48 relative group flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold bg-black text-white overflow-hidden border-2 border-transparent transition-all duration-300 ease-in-out focus:outline-none"
      >
        <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-400 via-green-300 to-pink-400 animate-gradient-move z-0" aria-hidden="true"></span>
        <span className="absolute inset-[2px] rounded-full bg-black z-0" aria-hidden="true"></span>
        <span className="relative z-10 transition-all duration-300">
          Confirm Post
        </span>
      </button>
    </div>
  );
};

export default PostPreview;
