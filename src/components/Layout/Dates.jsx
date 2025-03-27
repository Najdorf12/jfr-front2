import { useLayoutEffect, useRef, useState } from "react";
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
  const [video, setVideo] = useState(false);

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

  const handleShowVideo = () => {
    setVideo(!video);
  };

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
          <div className="el z-50">
            <div className="imageContainer relative">
              <div className="absolute inset-0  flex items-start mt-3  justify-center">
                <div
                  onClick={handleShowVideo}
                  id="box-glass"
                  className="flex items-center border-[0.1px] border-stone-500  justify-center  text-stone-400  gap-6 rounded-full font-title z-[100]  hover:text-whiteCustom cursor-pointer group duration-500 hover:border-whiteCustom"
                >
                  <span className="text-[5px] pl-1 pr-[1px] pt-[1.4px]">
                    Enjoy
                  </span>
                  <i className="bx bx-right-arrow text-[8px] pt-[1px] text-red-500 rounded-full group-hover: duration-500"></i>
                </div>
              </div>
              {video ? (
                <div className="w-full h-full relative overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/XbopdG7asHI?start=12&autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1" 
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <img src={imgDates} alt="" loading="lazy" />
              )}
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
