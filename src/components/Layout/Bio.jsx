import Experience from "../Experience";
import { Canvas } from "@react-three/fiber";
const Bio = () => {
  return (
    <section
      id="second_section"
      className="relative w-full h-screen flex flex-col items-center justify-between px-[2%] py-12 lg:py-9 "
    >
      <div className="w-full h-screen absolute z-30 overflow-hidden lg:block">
        <Canvas>
          <Experience />
        </Canvas>
      </div>

      <article className="z-50 text-6xl lg:text-9xl text-stone-300 flex flex-col font-title2 self-center ">
        <h4 className="relative z-50">
          ABOUT ME
          <div
            style={{ WebkitTextStroke: "2px  #d6d3d1", color: "transparent" }}
            className="text-stone-200 absolute inset-0 z-30"
            id="text-about"
          >
            ABOUT ME
          </div>
          <div
            style={{ WebkitTextStroke: "2px #e7e5e4", color: "transparent" }}
            className="text-stone-300 absolute inset-0 z-30"
            id="text-about2"
          >
            ABOUT ME
          </div>
        </h4>
      </article>

      <article className="flex flex-col items-center justify-center gap-12 self-center ">
        <div id="line-about" className="w-[30%] lg:w-[40%] h-[1px] bg-stone-300"></div>
        <p className="text-stone-400 text-center max-w-[600px] text-balance font-title text-sm  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          praesentium, tempore animi eveniet accusamus et reprehenderit neque
          molestiae asperiores in impedit architecto explicabo ipsa, minus fugit
          itaque facilis vitae quo
        </p>
      </article>
    </section>
    
  );
};

export default Bio;
