import imgPlay01 from "/images2025/compressed/play01.jpeg";
import imgPlay02 from "/images2025/compressed/play02.jpeg";
import imgPlay03 from "/images2025/compressed/play03.jpeg";
import imgPlay04 from "/images2025/compressed/play04.jpeg";
const PlayList = () => {
  return (
    <section className="w-full h-[70vh] flex px-20 justify-center items-center gap-20">
      <div className="border border-stone-400 rounded-xl w-[50%] h-[65%] flex flex-col justify-between relative">
        <article className="font-title2 text-stone-400 pr-3 flex flex-col items-end z-50">
          <p className="text-8xl text-stone-600">01</p>
          <p className="mt-2">Lorem Ipsum</p>
          <button className="">Play</button>
        </article>

        <div className="w-full flex justify-center">
          <div className="w-[95%] relative h-[270px] mt-12 flex items-center overflow-hidden z-40">
            <iframe
              src="https://open.spotify.com/embed/track/7elGwykWArKObG4fyztkw5?utm_source=oembed"
              className="w-full h-[300px] absolute inset-0"
              allowFullScreen
              allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture;"
            ></iframe>
          </div>
        </div>
        <figure className="absolute inset-0 w-full h-full z-30">
          {/* <img src={imgPlay03} alt="" className="w-full h-full object-cover" /> */}
        </figure>
      </div>
      <div className="border border-stone-400 rounded-xl w-[50%] h-[65%] flex flex-col justify-between relative">
        <article className="font-title2 text-stone-400 pr-3 flex flex-col items-end z-50">
          <p className="text-8xl text-stone-600">02</p>
          <p className="mt-2">Lorem Ipsum</p>
          <button className="">Play</button>
        </article>

        <div className="w-full flex justify-center">
          <div className="w-[95%] relative h-[270px] mt-12 flex items-center overflow-hidden z-40">
            <iframe
              src="https://open.spotify.com/embed/track/08hChte4DVoHO7H9u5cDLB?nd=1&dlsi=2242ecaf98a44a7f"
              className="w-full h-[300px] absolute inset-0"
              allowFullScreen
              allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture;"
            ></iframe>
          </div>
        </div>
        <figure className="absolute inset-0 w-full h-full z-30">
          {/* <img src={imgPlay02} alt="" className="w-full h-full object-cover" /> */}
        </figure>
      </div>
    </section>
  );
};

export default PlayList;
