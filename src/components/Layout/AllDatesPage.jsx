import { useEffect, useState, useLayoutEffect, useRef } from "react";
import { getEvents } from "../../config/handlers";
import navimg from "../../assets/images/jfr-white.png";
import flayer from "/flayer.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AllDatesPage = () => {
  const [events, setEvents] = useState([]);
  const containersRef = useRef([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    gsap.registerPlugin(ScrollTrigger);

    containersRef.current.forEach((container, index) => {
      const image = container.querySelector(".image-dates");
      const article = container.querySelector(".article_dates");

      gsap.to(image, {
        y: windowWidth < 700 ? "-180" : "-180",
        opacity: 1,
        scale: windowWidth < 700 ? 1.3 : 1.3,
        ease: "power1",
        scrollTrigger: {
          trigger: container,
          start: windowWidth < 700 ? "10% bottom" : "20% bottom",
          end: windowWidth < 700 ? "40% 40%" : "50% 50%",
          scrub: true,
          immediateRender: false,
          /* markers: true,
          id: `image-anim-${index}`, */
        },
      });
      gsap.to(article, {
        y: windowWidth < 700 ? "-120" : "150",
        x: windowWidth < 700 ? "100" : "",
        scale: windowWidth < 700 ? 1 : 1.1,

        opacity: 1,
        ease: "power1",
        scrollTrigger: {
          trigger: container,
          start: windowWidth < 700 ? "60% bottom" : "10% bottom",
          end: windowWidth < 700 ? "50% 50%" : "50% 50%",
          scrub: true,
          immediateRender: false,
          /*    markers: true,
          id: `article-anim-${index}`, */
        },
      });
    });

    // Limpieza
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [events]); // Dependencia de events para que se ejecute cuando cambien

  const addToRefs = (el) => {
    if (el && !containersRef.current.includes(el)) {
      containersRef.current.push(el);
    }
  };

  return (
    <section className="w-full min-h-screen pb-[20vh] bg-zinc-800 flex flex-col items-center justify-center text-white overflow-hidden">
      <nav className="w-full px-6 py-4 flex flex-row justify-between items-center z-50 lg:px-[10%] xl:pt-7">
        <div className="flex items-center gap-4">
          <div className="loader">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <img src={navimg} alt="" className="w-14 object-contain " />
        </div>
        <ul className="flex gap-6 font-title2 text-base lg:text-lg xl:gap-10 2xl:gap-12">
          <li className="text-whiteCustom border-l-2 border-zinc-600 pl-2 xl:pl-3 py-1 hover:scale-105 hover:text-white duration-500 ">
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
      <div className="w-full flex flex-col items-center justify-center mt-12 px-4 lg:px-0 lg:mt-20">
        <article className="text-balance w-full flex flex-col gap-28  lg:flex-row lg:justify-evenly">
          <h6 className="text-5xl px-2 font-title2 mb-4 max-w-[400px] lg:text-[6rem] lg:max-w-[640px] relative 2xl:text-[6.5rem] 2xl:max-w-[680px]">
            <span className="absolute w-[120px] right-7 top-7 md:w-[200px] h-[1px] bg-red-500 lg:right-3 lg:top-14"></span>
            Follow <br /> the journey
          </h6>
          <p className="text-stone-600 max-w-[200px] text-sm font-title self-end lg:mt-44 lg:text-base 2xl:text-lg 2xl:max-w-[250px] ">
            Some shows fade, others stick to the ribs. Here’s where we’ve left
            pieces of the music and taken some with us
          </p>
        </article>

        <div className="w-full flex flex-col gap-40 rounded-lg p-2 mt-96 lg:mt-72 lg:gap-60">
          {events?.length > 0 ? (
            [...events].reverse()?.map((event, index) => (
              <div
                ref={addToRefs}
                key={event?._id}
                className={`w-full flex flex-col justify-center items-center lg:flex-row gap-4 lg:gap-24 lg:items-start  ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                } `}
              >
                <figure
                  className={`max-w-[400px] w-[80%] self-center flex justify-start items-center md:w-[50%] md:max-w-none ${
                    index % 2 !== 0 ? "justify-start" : "justify-end "
                  } `}
                >
                  <img
                    className="image-dates rounded-md opacity-0 z-50 w-full h-full max-w-[450px] object-cover object-center md:max-w-[300px] 2xl:max-w-[350px]"
                    src={event?.images?.length < 0 ? flayer : event?.images[0]?.secure_url}
                    alt="img-flayer"
                  />
                </figure>
                <div
                  className={`w-full md:w-[50%] flex rounded-md ${
                    index % 2 !== 0 ? "justify-end" : "justify-start"
                  } `}
                >
                  <article
                    className={`article_dates text-sm w-full opacity-0 py-2 pl-3 rounded-md font-title flex flex-col gap-1 text-stone-600 border max-w-md 2xl:text-base 2xl:mt-12 ${
                      index % 2 !== 0
                        ? "items-start"
                        : "items-start justify-start"
                    } `}
                  >
                    <h2 className="text-base font-title2 text-stone-500 2xl:text-lg ">
                      {event?.title}
                    </h2>
                    <p className="mt-1 lg:mt-3">{event?.date}</p>
                    <p>{event?.description}</p>
                  </article>
                </div>
              </div>
            ))
          ) : (
            <p>No events found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllDatesPage;
