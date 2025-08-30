import CreatePost from "@/components/CreatePost";
import Iridescence from '@/backgrounds/Iridescence';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen text-white h-full">
      <Iridescence
        color={[1, 1, 1]}
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}
      />
      <CreatePost />
    </div>
  );
}
