import Image from "next/image";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Featured from "./components/Featured ";
import Stats from "./components/Stats";
import Faq from "./components/Faq";
import Crypto from "./components/Crypto";
import WhyMeme from "./components/WhyMeme";
import Coin from "./components/Coin";

export default function Home() {
  return (
    <div className=" bg-black font-sans ">
      <main className=" min-h-screen px-4">
        
       <Nav></Nav>
       <Banner></Banner>
       <WhyMeme></WhyMeme>
       <Coin></Coin>
       <Stats></Stats>
       <Crypto></Crypto>
       <Featured></Featured>
       <Faq></Faq>
       <Footer></Footer>
      </main>
    </div>
  );
}
