"use client"
import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import PostTitle from "./PostTitle";
import PostImage from "./PostImage";
import PostInstructions from "./PostInstructions";


const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("instructions", instructions);
      if (image) formData.append("image", image);

      const res = await fetch("/api/create-post", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setResponse({ error: "Failed to create post." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen text-white z-10 py-4">
      <div className="flex flex-col md:flex-row w-[90%] lg:w-[80%] h-[600px] lg:h-[600px] rounded-3xl bg-white/10 backdrop-blur-md shadow-2xl border border-white/20">
        <div className="flex-[0.6] w-full flex ">
          <form className="p-6 w-full" onSubmit={handleSubmit}>
            <PostTitle title={title} setTitle={setTitle} />
            <div className="my-2" />
            <div className="flex flex-col gap-2 font-sans">
              <label htmlFor="instructions" className="font-semibold text-xl">Post instructions</label>
              <textarea
                name="instructions"
                id="instructions"
                placeholder="write specifications for your post (optional)."
                className="bg-white outline-green-300 font-sans p-2 rounded-lg text-black"
                value={instructions}
                onChange={e => setInstructions(e.target.value)}
              />
            </div>
            <div className="my-2" />
            <div className="flex flex-col gap-2 font-sans">
              <label htmlFor="image" className="font-semibold text-xl">Image</label>
              <input
                type="file"
                accept="image/*"
                name="image"
                id="image"
                className="bg-white outline-green-300 font-sans p-2 rounded-lg text-black"
                onChange={e => setImage(e.target.files[0])}
              />
            </div>
            <div className="flex w-full justify-center p-2 flex-row">
              <button
                type="submit"
                className="group flex items-center gap-2 p-2 bg-black text-white rounded-2xl hover:bg-white hover:text-black transition-all ease-in-out"
                disabled={loading}
              >
                <span>{loading ? "Posting..." : "Post On"}</span>
                <FaLinkedin className="w-5 h-5 group-hover:text-blue-500 transition-all ease-in-out " />
              </button>
            </div>
            {response && (
              <div className="mt-2 text-sm text-gray-800 bg-white/80 rounded p-2">
                {response.error ? response.error : JSON.stringify(response)}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
