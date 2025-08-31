import CreatePost from "@/components/CreatePost";
import Iridescence from '@/backgrounds/Iridescence';
import Navbar from "@/components/Navbar";
import Silk from '@/backgrounds/Silk';

export default function Page() {
  return (
    <div className="relative flex flex-col min-h-screen text-white h-full">
      <div className="absolute inset-0 -z-10">
        <Silk
          speed={5}
          scale={1}
          color="#a78bfa"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      {/* <Iridescence
        className="absolute inset-0 z-0"
        color={[0.37, 0.08, 0.39]}
        mouseReact={true}
        amplitude={0.05}
        speed={0.50}
      /> */}
      <div className="relative z-10 flex flex-col min-h-screen h-full">
        <Navbar />
        <CreatePost />
      </div>
    </div>
  );
}
