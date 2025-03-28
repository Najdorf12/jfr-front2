import imgHomeDesktop from "/images2025/compressed/img-home.jpg";
import imgHomeMobile from "/images2025/compressed/img-home2.jpg";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import imgTitle from "../../assets/images/jfr-white.png";
import { Link } from "react-router-dom";

const Home = () => {
  const titleRef = useRef(null);
  const btnHome1 = useRef(null);
  const btnHome2 = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1.2, ease: "power1.out" },
    });

    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.1 },
      "< .7"
    );

    tl.fromTo(
      descriptionRef.current,
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1 },
      "< .2"
    );
    tl.fromTo(
      btnHome1.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1 },
      "< .3"
    );
    tl.fromTo(
      btnHome2.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1 },
      "< .2"
    );
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-end w-full h-[92vh] md:h-screen lg:justify-center z-40 overflow-hidden">
      <figure className="absolute inset-0 w-full flex justify-center items-center">
        <img
          src={imgHomeDesktop}
          className="hidden lg:block w-full h-full object-cover object-center lg:object-[0,-35px]"
          alt="img-home"
        />
        <img
          src={imgHomeMobile}
          className="block lg:hidden w-full h-full object-cover object-center"
          alt="img-mobile"
        />
      </figure>

      <article className="z-50 -ml-2 flex flex-col pb-14 lg:ml-[1.5%] xl:pb-0">
        <figure className="">
          <img
            ref={titleRef}
            src={imgTitle}
            alt="img-title"
            className="w-[65%] md:w-[35%]"
          />
        </figure>

        <p
          ref={descriptionRef}
          className="ml-6 mt-1 font-title text-sm text-stone-400 text-balance max-w-[600px] md:text-base lg:mt-0 xl:ml-12 xl:text-lg 2xl:text-xl"
        >
          Argentine DJ and producer, crafting soulful <br />
          sounds for the world’s most iconic labels and stages.
        </p>
        <div className="flex items-center gap-6 md:gap-8 text-stone-500 font-title ml-5 mt-6 lg:mt-9 xl:ml-12 text-lg lg:gap-10 2xl:text-xl">
          <a ref={btnHome1} href="#third_section">
            <button className="border border-red-600 rounded-full py-[2px] w-44 pl-4 pr-2 flex items-center justify-between md:shadow-md shadow-zinc-800 relative xl:w-52 2xl:w-56 hover:text-whiteCustom duration-500 hover:border-whiteCustom">
              Dates
              <i className="bx bx-chevron-right text-2xl text-red-500 absolute right-1"></i>
            </button>
          </a>

          <a ref={btnHome2} href="#contact_section">
            <button className="border border-stone-500 rounded-full py-[2px] w-44 pl-4 pr-2 flex items-center justify-between md:shadow-md shadow-zinc-800 relative xl:w-52 2xl:w-56 hover:text-whiteCustom duration-500 hover:border-whiteCustom">
              Contact
              <i className="bx bx-chevron-right text-2xl text-red-500 absolute right-1"></i>
            </button>
          </a>
        </div>
      </article>
    </section>
  );
};

export default Home;
