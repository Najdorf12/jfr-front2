import imgDates from "/images2025/17.jpg";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgJfr1 from "/images2025/17.jpg";
import imgJfr2 from "/images2025/compressed/07.webp";
import imgJfr3 from "/images2025/compressed/02.webp";
import imgJfr6 from "/images2025/compressed/03.webp";
import imgJfr4 from "/images2025/compressed/04.webp";
import imgJfr5 from "/images2025/01.jpg";
import imgJfr7 from "/images2025/compressed/05.webp";
import CardDate from "./CardDate";

gsap.registerPlugin(ScrollTrigger);

const Dates = () => {
  useLayoutEffect(() => {
    const scales = [4, 5, 6, 8, 9, 7, 5];

    gsap.utils.toArray(".el").forEach((el, index) => {
      gsap.to(el, {
        scale: scales[index],
        scrollTrigger: {
          trigger: ".container-images",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          markers: false,
        },
      });
    });
  }, []);
  return (
    <>
      <section id="third_section" className="section before">
        <div className="w-full relative h-screen flex flex-col items-center gap-20 xl:gap-20">
          <h6 className="font-title2 text-5xl lg:text-6xl text-stone-300 xl:text-7xl ">
            DATES
          </h6>
          <div className="w-full flex flex-col gap-7 lg:gap-6 md:px-[3%]">
            <CardDate />
            <CardDate />
            <CardDate />
            <CardDate />
          </div>
        </div>
      </section>
      <div className="w-full md:h-[9vh]"></div>
      <div className="container-images">
        <div className="sticky">
          <div className="el">
            <div className="imageContainer">
              <img src={imgJfr1} alt="" />
            </div>
          </div>
          <div className="el">
            <div className="imageContainer">
              <img src={imgJfr2} alt="" />
            </div>
          </div>
           <div className="el">
            <div className="imageContainer">
              <img src={imgJfr5} alt="" />
            </div>
          </div>
          <div className="el">
            <div className="imageContainer">
              <img src={imgJfr4} alt="" />
            </div>
          </div>
          <div className="el">
            <div className="imageContainer">
              <img src={imgJfr3} alt="" />
            </div>
          </div>
          <div className="el">
            <div className="imageContainer">
              <img src={imgJfr6} alt="" />
            </div>
          </div>
          <div className="el">
            <div className="imageContainer">
              <img src={imgJfr7} alt="" />
            </div>
          </div> 
        </div>
      </div>
    </>
  );
};

export default Dates;
