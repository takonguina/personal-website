import Header from "@/components/header";
import Feed from "@/components/feed";

export default function Home() {
  return (
    <div className="max-w-[1080px] mx-auto h-[3000px] flex flex-col lg:flex-row">
      <Header />
      <Feed />
    </div>
  );
}
