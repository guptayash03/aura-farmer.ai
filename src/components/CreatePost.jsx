"use client";
import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import PostTitle from "./PostTitle";
import PostImage from "./PostImage";
import PostInstructions from "./PostInstructions";
import PostPreview from "./PostPreview";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [imageOption, setImageOption] = useState("none");
  const [image, setImage] = useState(null);
  const [genPrompt, setGenPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);
    try {
      let imageField = "No";
      if (imageOption === "generate") {
        imageField = "Yes";
      } else if (imageOption === "upload" && image) {
        // If you want to upload the image file, you need to upload it somewhere and get a link first.
        // For now, we'll just use the file name as a placeholder (replace with actual upload logic if needed)
        imageField = image.name || "UploadedImage";
      }

      const payload = {
        description: title,
        instructions: instructions,
        image: imageField,
      };

      const res = await fetch("https://n8n.larc.ai/webhook-test/76d3b8d7-4c24-46c8-a578-86e571d0acd6", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({
        executionId : data.executionId
      }));
      setResponse(data);
      if (data && data.executionId) {
        // You can handle the executionId here (e.g., display, poll, etc.)
        console.log('Execution ID:', data.executionId);
      }
    } catch (err) {
      setResponse({ error: "Failed to create post." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen text-white z-10 py-4 mb-6">
      <div className="flex flex-col md:flex-row w-[90%] lg:w-[80%] h-[600px] lg:h-[600px] rounded-3xl bg-white/10 backdrop-blur-md shadow-2xl shadow-black border border-white/20">
        <div className="flex-[0.6] w-full flex ">
          <form className="p-6 w-full" onSubmit={handleSubmit}>
            <PostTitle title={title} setTitle={setTitle} />
            <div className="my-2" />
            <PostInstructions instructions={instructions} setInstructions={setInstructions} />
            <div className="my-2" />
            <PostImage
              imageOption={imageOption}
              setImageOption={setImageOption}
              image={image}
              setImage={setImage}
              genPrompt={genPrompt}
              setGenPrompt={setGenPrompt}
            />
            <div className="flex w-full justify-center p-2 flex-row">
              <button
                type="submit"
                disabled={loading}
                className="w-full relative group flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold bg-black text-white overflow-hidden border-2 border-transparent transition-all duration-300 ease-in-out focus:outline-none"
              >
                <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-400 via-green-300 to-pink-400 animate-gradient-move z-0" aria-hidden="true"></span>
                <span className="absolute inset-[2px] rounded-full bg-black z-0" aria-hidden="true"></span>
                <span className="relative z-10 transition-all duration-300">
                  {loading ? "Posting..." : "Generate Post for"}
                </span>
                <FaLinkedin className="w-5 h-5 relative z-10 group-hover:text-blue-500 transition-all duration-300" />
              </button>
            </div>
            {response && (
              <div className="mt-2 text-sm text-gray-800 bg-white/80 rounded p-2">
                {response.error ? response.error : JSON.stringify(response)}
              </div>
            )}
          </form>
        </div>

        <PostPreview />
      </div>
    </div>
  );
};

export default CreatePost;
