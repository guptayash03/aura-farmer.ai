import CreatePost from "@/components/CreatePost";
import Iridescence from '@/backgrounds/Iridescence';
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <div className="relative flex flex-col min-h-screen text-white h-full">
      <Iridescence
        className="absolute inset-0 z-0"
        color={[0.8, 0.4, 0.9]}
        mouseReact={true}
        amplitude={0.1}
        speed={0.35}
      />
      <Navbar />
      <CreatePost />
    </div>
  );
}
