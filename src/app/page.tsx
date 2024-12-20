import Header from "@/components/header";
import Feed from "@/components/feed";
import Cursor from "./cursor";

export default function Home() {
  return (
    <div className="max-w-[1080px] mx-auto flex flex-col lg:flex-row max-lg:py-12">
      <Cursor />
      <Header />
      <Feed />
    </div>
  );
}
