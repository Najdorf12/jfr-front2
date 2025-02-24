import imgHome from "/images2025/16.jpg";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import navimg from "../../assets/images/jfr-white.png";
import imgArrow from "/arrow.png";

const Home = () => {
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const lineRef2 = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power1.out" },
    });

    tl.fromTo(
      lineRef.current,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, transformOrigin: "center" }
    );

    tl.fromTo(
      lineRef2.current,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, transformOrigin: "center" },
      "<"
    );

    tl.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.4 },
      "-=0.5"
    );

    tl.fromTo(
      descriptionRef.current,
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1 },
      "-=0.01"
    );

/*     gsap.fromTo(
      cardsRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        delay: 1.2,
        opacity: 1,
        duration: 1,
        stagger: 0.4,
        ease: "power1.out",
      }
    ); */
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-end w-full h-screen lg:justify-center z-40 overflow-hidden">
      <figure className="absolute inset-0 ">
        <img
          src={imgHome}
          className="w-full h-full  object-cover object-center lg:object-[0,-35px]"
          alt="img-home"
        />
      </figure>

      <article className="z-50 flex flex-col pb-9 lg:pl-[2%] xl:pb-0">
        <figure className="">
          <img
            src={navimg}
            alt="img-title"
            className="w-[65%] lg:w-[32%] ml-2"
          />
        </figure>

        <p className="ml-6 font-title text-sm text-stone-400 text-balance max-w-[600px] xl:ml-8 xl:text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, nemo
          id eaque quasi cum deleniti repudiandae sunt numquam.
        </p>
        <div className="flex items-center gap-6 md:gap-8 text-stone-500 font-title pl-5 mt-6 lg:mt-9 xl:pl-8 text-lg lg:gap-10 2xl:text-xl">
          <button className="border border-red-600 rounded-full py-[2px] w-44 pl-4 pr-2  flex items-center justify-between md:shadow-md shadow-zinc-800 relative xl:w-48">
            Dates
            <i className="bx bx-chevron-right text-2xl text-red-500 absolute right-1"></i>
          </button>
          <button className="border border-stone-500  rounded-full py-[2px]  w-44 pl-4 pr-2  flex items-center justify-between md:shadow-md shadow-zinc-800 relative xl:w-48">
            Contact
            <i className="bx bx-chevron-right text-2xl text-red-500 absolute right-1"></i>
          </button>
        </div>
      </article>
    </section>
  );
};

export default Home;
