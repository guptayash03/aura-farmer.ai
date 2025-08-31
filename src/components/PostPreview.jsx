import React, { useEffect, useState } from "react";
import TiltedCard from "./TiltedCard";


const PostPreview = ({ imageUrl }) => {
  // Use fallback value if no imageUrl
  const baseImageUrl = imageUrl || "https://restaurant-agent-bucket-course.s3.ap-south-1.amazonaws.com/image.png";
  const captionText = "LinkedIn Post Preview";
  const [cacheBuster, setCacheBuster] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCacheBuster(Date.now());
    }, 5000); // refresh every 5 seconds
    return () => clearInterval(interval);
  }, [baseImageUrl]);

  // Append cache-busting param to force image refresh
  const imageSrc = `${baseImageUrl}${baseImageUrl.includes('?') ? '&' : '?'}cb=${cacheBuster}`;

  return (
    <div className="flex flex-col flex-[0.4] w-full justify-center items-center gap-6">
      <TiltedCard
        imageSrc={imageSrc}
        altText={captionText}
        captionText={captionText}
        containerHeight="400px"
        containerWidth="400x"
        imageHeight="400px"
        imageWidth="400px"
        rotateAmplitude={8}
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
