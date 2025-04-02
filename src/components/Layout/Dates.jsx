import { useLayoutEffect, useState, useEffect } from "react";
import { getEvents } from "../../config/handlers";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgDates from "/images2025/compressed/img-dates.jpg";
import imgJfr2 from "/images2025/compressed/07.webp";
import imgJfr3 from "/images2025/compressed/02.webp";
import imgJfr6 from "/images2025/compressed/03.webp";
import imgJfr4 from "/images2025/compressed/08.jpg";
import CardDate from "./CardDate";

gsap.registerPlugin(ScrollTrigger);

const Dates = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [video, setVideo] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await getEvents();
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);
  useLayoutEffect(() => {
    if (events.length === 0) return;
  
    const tl = gsap.timeline();
    // ... tus otras animaciones
  
    // Animación para cada máscara
    gsap.utils.toArray('.card-mask').forEach((mask, index) => {
      tl.to(mask, {
        width: "0px",
        ease: "power1",
        scrollTrigger: {
          trigger: mask,
          start:"top bottom",
          end: windowWidth < 700 ? "-100px top" :  "top top",
          scrub: true,
        }
      }, index * 0.3); // stagger
    });
  
    // Refrescar ScrollTrigger después de configurar todo
    ScrollTrigger.refresh();
  }, [events]);

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
            {events?.slice(-4).map((event, i) => (
              <CardDate key={i} event={event} />
            ))}
          </div>
          <a href="/dates">
            <button className="border border-stone-300 font-title text-stone-400 rounded-full py-[2px] w-44 pl-4 pr-2 flex items-center justify-between relative xl:w-56 xl:py-1 2xl:w-56  duration-500 hover:border-stone-500">
              See more
              <i className="bx bx-chevron-right text-2xl text-red-500 absolute right-1 xl:text-3xl"></i>
            </button>
          </a>
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
