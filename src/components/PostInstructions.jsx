import React from "react";

const PostInstructions = () => {
  return (
    <div className="flex flex-col gap-2 font-sans ">
      <label htmlFor="other" className=" font-semibold text-xl">
        {" "}
        Post instructions
      </label>{" "}
      <textarea
        name="other"
        id="other"
        placeholder="write specifications for your post (optional)."
        className="bg-white outline-green-300 font-sans p-2 rounded-lg text-black "
      ></textarea>
    </div>
  );
};

export default PostInstructions;
