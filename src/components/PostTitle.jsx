"use client"
import React from "react";

export default function PostTitle({ title, setTitle }) {
  return (
    <div className="flex flex-col gap-2 font-sans">
      <label htmlFor="title" className="font-semibold text-xl">
        Post Title
      </label>
      <input
        type="text"
        name="title"
        id="title"
        required
        placeholder="Enter title for post.."
        className="bg-white outline-green-300 font-sans p-2 rounded-lg text-black"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
}
