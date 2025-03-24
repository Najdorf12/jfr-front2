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

      <article className="z-50 text-6xl lg:text-9xl text-stone-300 flex flex-col font-title2 self-center ">
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
        <p className="text-stone-400 px-3 text-center max-w-[600px] lg:max-w-[750px] text-balance font-title text-sm z-50">
          JFR has an impressive catalog of productions on labels such as All Day
          I Dream, Anjunadeep, Musique de Lune, Clubsonica and more. After
          living for 5 years in Europe, where he played in the best clubs of the
          continent, JFR has returned to live in Mendoza, Argentina, and has
          resumed his tour of the best clubs in South America. JFR's soulful
          sounds have received the support of industry icons such as Tony
          McGuinness, Lee Burridge, Hernan Cattaneo and Nick Warren, among
          others.
        </p>
        
      </article>
    </section>
  );
};

export default Bio;
