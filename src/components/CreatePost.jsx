import React from "react";
import { FaLinkedin } from "react-icons/fa";
import PostTitle from "./PostTitle";
import PostImage from "./PostImage";
import PostInstructions from "./PostInstructions";

const CreatePost = () => {
  return (
    <div className="flex flex-col items-center min-h-screen text-white z-10 py-40">
      <div className="flex flex-col md:flex-row w-[90%] lg:w-[70%] h-[600px] lg:h-[600px] rounded-3xl bg-white/10 backdrop-blur-md shadow-2xl border border-white/20">
        <div className="flex-[0.6] w-full flex items-center justify-center">
          <form className="p-6 w-full">
            <PostTitle />
            <PostImage />
            <PostInstructions />
            <div className="flex w-full justify-center p-2 flex-row">
              <button className="group flex items-center gap-2 p-2 bg-black text-white rounded-2xl hover:bg-white hover:text-black transition-all ease-in-out">
                <span>Post On</span>
                <FaLinkedin className="w-5 h-5 group-hover:text-blue-500 transition-all ease-in-out " />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
