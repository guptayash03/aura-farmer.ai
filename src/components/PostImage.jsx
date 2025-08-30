import React from "react";

const PostImage = ({ imageOption, setImageOption, image, setImage, genPrompt, setGenPrompt }) => {
  return (
  <div className="flex flex-col gap-1 font-sans p-2 rounded-2xl border border-green-300 bg-white/60 shadow-sm mb-2">
      <label htmlFor="image-option" className="font-bold text-xl text-green-800 mb-1">Image</label>
      <select
        id="image-option"
        className="bg-white/80 border border-green-200 focus:border-green-400 font-sans p-3 rounded-lg text-black outline-none transition-all duration-200 shadow"
        value={imageOption}
        onChange={e => setImageOption(e.target.value)}
      >
        <option value="generate">Generate Image using AI</option>
        <option value="none">No Image Needed</option>
        <option value="upload">Upload Image</option>
      </select>

      {imageOption === "generate" && (
        <div className="flex flex-col gap-2 mt-2">
          <label htmlFor="gen-prompt" className="text-base text-green-700">Post Image Description</label>
          <input
            type="text"
            id="gen-prompt"
            className="bg-white/80 border border-green-200 focus:border-green-400 font-sans p-3 rounded-lg text-black outline-none transition-all duration-200 shadow"
            placeholder="Describe the image to generate..."
            value={genPrompt}
            onChange={e => setGenPrompt(e.target.value)}
          />
        </div>
      )}

      {imageOption === "upload" && (
        <div className="flex flex-col gap-2 mt-2">
          <label htmlFor="image-upload" className="text-base text-green-700">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            id="image-upload"
            className="bg-white/80 border border-green-200 focus:border-green-400 font-sans p-3 rounded-lg text-black outline-none transition-all duration-200 shadow"
            onChange={e => setImage(e.target.files[0])}
          />
        </div>
      )}
    </div>
  );
};

export default PostImage;
