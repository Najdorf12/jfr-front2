import imgPlay01 from "/images2025/compressed/play01.jpeg";
import imgPlay02 from "/images2025/compressed/play02.jpeg";
import imgPlay03 from "/images2025/compressed/play03.jpeg";
import imgPlay04 from "/images2025/compressed/play04.jpeg";

const spotify = [
  {
    name: "Anjunadeep Explorations 20",
    spotifyLink:
      "https://open.spotify.com/embed/track/08hChte4DVoHO7H9u5cDLB?nd=1&dlsi=2242ecaf98a44a7f",
  },
  {
    name: "All Day I Dream",
    spotifyLink:
      "https://open.spotify.com/embed/track/7elGwykWArKObG4fyztkw5?utm_source=oembed",
  },
];

/* https://www.beatport.com/artist/jfr/600619 */

const PlayList = () => {
  return (
    <section className="w-full flex flex-col gap-24 px-3 py-20 justify-center items-center lg:flex-row lg:pt-24 lg:pb-36 2xl:gap-28">
      {spotify?.map((disk, i) => (
        <div
          key={i}
          className="border border-stone-400 rounded-xl w-full h-[270px] md:w-[600px] md:h-[310px] flex flex-col justify-between relative 2xl:w-[650px] 2xl:h-[320px]"
        >
          <article className="font-title2 text-stone-400 pr-3 pt-1 flex flex-col items-end z-40 xl:pr-4">
            <p className="text-6xl lg:text-8xl text-stone-500">0{i + 1}</p>
            <p className="mt-2 text-base"> {disk?.name} </p>
            <a
              href="https://www.beatport.com/artist/jfr/600619"
              target="_blank"
            >
              <button className=" flex justify-center items-center gap-1 text-stone-300 duration-300 group ">
                Buy on beatport <i className="bx bx-chevron-right font-semibold  text-lg lg:mt-[3px] text-red-500"></i>
              </button>
            </a>
          </article>

          <div className="w-full absolute -bottom-12 flex justify-center z-[500]">
            <div className="w-[95%] relative h-[160px] mt-12 flex items-center overflow-hidden ">
              <iframe
                src={disk?.spotifyLink}
                className="w-full h-[160px] absolute inset-0 2xl:h-[180px]"
                allowFullScreen
                allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture;"
                loading="lazy"
                /* style={{ pointerEvents: "none" }} */
              ></iframe>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PlayList;
