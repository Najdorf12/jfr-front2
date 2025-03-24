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
        <div className="w-full relative pt-14 pb-20 flex flex-col items-center gap-14 lg:pt-28 xl:gap-20">
          <article className="z-50 text-6xl lg:text-[6rem] text-stone-300 flex flex-col font-title2 self-center 2xl:text-[6.5rem] ">
            <h4 className="relative z-50">
              DATES
              <div
                style={{
                  WebkitTextStroke: "2px  #d6d3d1",
                  color: "transparent",
                }}
                className="text-stone-200 absolute inset-0 z-30"
                id="text-dates"
              >
                DATES
              </div>
              <div
                style={{
                  WebkitTextStroke: "2px #e7e5e4",
                  color: "transparent",
                }}
                className="text-stone-300 absolute inset-0 z-10"
                id="text-dates2"
              >
                DATES
              </div>
            </h4>
          </article>
          <div className="w-full flex flex-col gap-7 lg:gap-5 ">
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
              <img src={imgJfr6} alt="" loading="lazy" />
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
