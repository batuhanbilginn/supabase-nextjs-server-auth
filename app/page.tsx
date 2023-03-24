import Navbar from "@/components/navigation/navbar";

export default function Home() {
  return (
    <div className="px-8 xl:px-0">
      <Navbar />
      <div className="w-full  mx-auto my-10 rounded-md max-w-7xl bg-neutral-100 flex items-center justify-center h-[80vh]">
        Homepage
      </div>
      <footer className="flex items-center justify-between w-full mx-auto max-w-7xl">
        {/* Logo */}
        <div className="text-lg font-bold"> LOGO</div>
        <div className="text-sm">All rights reserved.</div>
      </footer>
    </div>
  );
}
