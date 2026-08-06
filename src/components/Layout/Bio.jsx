import Experience from "../Experience";
import { Canvas } from "@react-three/fiber";
const Bio = () => {
  return (
    <section
      id="second_section"
      className="relative w-full h-[115vh] flex flex-col items-center justify-between px-[2%] py-12 md:h-screen lg:py-7 "
    >
      <div className="w-full h-screen absolute z-30 overflow-hidden block">
        <Canvas>
          <Experience />
        </Canvas>
      </div>

      <article className="z-50 text-6xl lg:text-9xl text-stone-300 flex flex-col font-title2 self-center 2xl:text-[8.5rem]">
        <h4 className="relative z-50">
          ABOUT ME
          <div
            style={{ WebkitTextStroke: "2px  #d6d3d1", color: "transparent" }}
            className="text-stone-300 absolute inset-0 z-30"
            id="text-about"
          >
            ABOUT ME
          </div>
          <div
            style={{ WebkitTextStroke: "2px #e7e5e4", color: "transparent" }}
            className="absolute inset-0 z-20"
            id="text-about2"
          >
            ABOUT ME
          </div>
        </h4>
      </article>

      <article className="flex z-50 flex-col items-center justify-center gap-10 self-center ">
        <div
          id="line-about"
          className="w-[40%] lg:w-[40%] h-[1px] bg-stone-300"
        ></div>
        <p className="text-stone-400 px-3 text-center max-w-[600px] lg:max-w-[750px] text-balance font-title text-sm z-50 2xl:text-base 2xl:max-w-[1000px]">
          After more than a decade behind the decks, he has performed across
          nearly every major club circuit in Argentina as well as throughout
          Europe and internationally—from Miami to Pakistan. Never confined
          to a single genre, JFR seamlessly blends melodic house, progressive
          and techno, delivering dynamic, unpredictable sets built for the
          club.
        </p>
        
      </article>
    </section>
  );
};

export default Bio;
