import Image from "next/image";
import Banner from "./components/home/Banner";
import About from "./components/home/About";

export default function Home() {
  return (
    <div className="font-sans">
      <Banner />
      <About />
    </div>
  );
}
