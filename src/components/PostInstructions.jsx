// Enhancements to PostInstructions to match PostTitle style
const PostInstructions = ({ instructions, setInstructions }) => {
  return (
  <div className="flex flex-col gap-1 font-sans p-2 rounded-2xl border border-green-300 bg-white/60 shadow-sm mb-2">
      <label htmlFor="title" className="font-bold text-xl text-green-800 mb-1">
        Post Instructions
      </label>
      <textarea
        name="instructions"
        id="instructions"
        placeholder="Write specifications for your post (optional)."
        className="bg-white/80 border border-green-200 focus:border-green-400 font-sans p-3 rounded-lg text-black outline-none transition-all duration-200 shadow focus:scale-[1.03] focus:ring-2 focus:ring-green-200"
        value={instructions}
        onChange={e => setInstructions(e.target.value)}
      />
      </div>
  );
};

export default PostInstructions;
