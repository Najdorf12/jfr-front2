import navimg from "../assets/images/jfr-white.png";
import Home from "./Layout/Home";
import Bio from "./Layout/Bio";
import Dates from "./Layout/Dates";
import Contact from "./Layout/Contact";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";

function JFR() {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 600);
    }
    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <main className="w-full bg-whiteCustom ">
        <nav className="absolute w-screen px-10 py-4 flex flex-row-reverse justify-between items-center z-50 lg:px-[6%] xl:pt-6">
          <img src={navimg} alt="" className="w-14 h-14 object-contain" />
          <div class="loader">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </nav>
        <Home />
        <Bio />
        <div className="w-full h-[6vh] md:h-[20vh]"></div>
        <Dates />
        <Contact />
      </main>
    </ReactLenis>
  );
}

export default JFR;
