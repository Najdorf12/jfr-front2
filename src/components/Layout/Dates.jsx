import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgDates from "/images2025/compressed/img-dates.jpg";
import imgJfr2 from "/images2025/compressed/07.webp";
import imgJfr3 from "/images2025/compressed/02.webp";
import imgJfr6 from "/images2025/compressed/03.webp";
import imgJfr4 from "/images2025/compressed/08.jpg";
import PlayList from "./Playlist";
/* import imgJfr5 from "/images2025/compressed/07.webp";
import imgJfr7 from "/images2025/compressed/05.webp"; */
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
          <h6 className="font-title2 text-5xl lg:text-6xl text-stone-300 xl:text-8xl ">
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
              <img src={imgDates} alt="" loading="lazy" />
            </div>
          </div>
          <div className="el">
            <div className="imageContainer">
              <img src={imgJfr2} alt="" loading="lazy" />
            </div>
          </div>
          <div className="el">
            <div className="imageContainer bg-zinc-800">
              <p className="font-title2 flex items-center justify-center w-full h-full text-whiteCustom text-3xl lg:text-5xl">
                JFR
              </p>
            </div>
          </div>
          <div className="el">
            <div className="imageContainer">
              <img src={imgJfr4} alt="" loading="lazy" />
            </div>
          </div>
          <div className="el">
            <div className="imageContainer">
              <img src={imgJfr3} alt="" loading="lazy" />
            </div>
          </div>
          <div className="el">
            <div className="imageContainer">
              <img src={imgJfr6} alt="" loading="lazy"
               />
            </div>
          </div>
          <div className="el">
            <div className="imageContainer bg-red-500">
              <p className="font-title2 flex items-center justify-center w-full h-full text-whiteCustom text-xl md:text-2xl">
                JFR
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dates;
