"use client"
import React from "react";

export default function PostTitle({ title, setTitle }) {
  return (
  <div className="flex flex-col gap-1 font-sans p-2 rounded-2xl border border-green-300 bg-white/60 shadow-sm mb-2">
      <label htmlFor="title" className="font-bold text-xl text-green-800 mb-1">
        Post Title
      </label>
      <input
        type="text"
        name="title"
        id="title"
        required
        placeholder="Enter title for post.."
        className="bg-white/80 border border-green-200 focus:border-green-400 outline-none font-sans p-3 rounded-lg text-black transition-all duration-200 shadow"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
}
