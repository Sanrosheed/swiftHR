import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
}
