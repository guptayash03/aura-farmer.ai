import React from "react";

const PostImage = () => {
  return (
    <div className="flex flex-col gap-2 font-sans ">
      <label htmlFor="image" className=" font-semibold text-xl">
        {" "}
        Image
      </label>{" "}
      <input
        type="file"
        accept="image/*"
        name="image"
        id="image"
        required
        placeholder="Enter title for post.."
        className="bg-white outline-green-300 font-sans p-2 rounded-lg text-black "
      ></input>
    </div>
  );
};

export default PostImage;
