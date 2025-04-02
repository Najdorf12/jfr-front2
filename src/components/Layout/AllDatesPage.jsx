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
          start: windowWidth < 700 ? "10% bottom" : "40% bottom",
          end: windowWidth < 700 ? "30% 30%" : "40% 50%",
          scrub: true,
          immediateRender: false,
          /*  markers: true,
          id: `image-anim-${index}`,  */
        },
      });
      gsap.to(article, {
        y: windowWidth < 700 ? "-120" : "",
        x: windowWidth < 700 ? "100" : "",
        opacity: 1,
        ease: "power1",
        scrollTrigger: {
          trigger: container,
          start: windowWidth < 700 ? "60% bottom" : "70% bottom",
          end: windowWidth < 700 ? "50% 50%" : "bottom top",
          scrub: true,
          immediateRender: false,
          /* markers: true,
          id: `article-anim-${index}`,  */
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
    <section className="w-full min-h-screen pb-[60vh] bg-zinc-800 flex flex-col items-center justify-center text-white">
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
      <div className="w-full flex flex-col items-center justify-center mt-12 px-4  lg:px-0">
        <h1 className="text-6xl font-title2 mb-4 lg:text-[9rem]">DATES</h1>
        <div className="w-full flex flex-col  gap-36 rounded-lg mt-64 p-1  xl:mt-72 lg:gap-60">
          {events?.length > 0 ? (
            events?.map((event, index) => (
              <div
                ref={addToRefs}
                key={event?._id}
                className={`w-full flex flex-col justify-center items-center lg:flex-row gap-4 lg:gap-32  ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                } `}
              >
                <figure className={`max-w-[400px] w-[80%] self-center flex justify-start items-center md:w-[50%] md:max-w-none ${index % 2 !== 0 ? "justify-start" : "justify-end"} `}>
                  <img
                    className="image-dates rounded-md opacity-0 w-full h-full max-w-[450px] object-cover object-center md:max-w-[300px]"
                    src={flayer}
                    alt="img-flayer"
                  />
                </figure>
                <article className="article_dates text-sm w-full opacity-0 pl-2 font-title flex flex-col gap-1 text-stone-600 border md:w-[50%]">
                  <h2 className="text-base font-title2 text-stone-500">
                    {event?.title}
                  </h2>
                  <p className="mt-1 lg:mt-3">{event?.date}</p>
                  <p>{event?.description}</p>
                </article>
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
