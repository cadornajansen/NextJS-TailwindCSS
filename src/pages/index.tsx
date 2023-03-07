import HeaderContent from "components/HeaderContent";
import HeroContent from "components/HeroContent";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col relative h-screen ">
        <header className="sticky top-0 w-full bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 px-10 py-4 shadow">
          <HeaderContent />
        </header>
        <main className="h-full px-10 py-7">
          <HeroContent/>
        </main>
      </div>
    </div>
  );
}
