import flayer from "/flayer.jpg"

const CardDate = () => {
  return (
    <div className="font-title relative  text-balance text-sm pl-2 pb-2 md:pl-6 flex w-full text-stone-500 border-b border-stone-300 lg:text-base  xl:pl-[9%] xl:pr-[3%]">
      <div
        id="card-mask"
        className="w-full h-full bg-zinc-700 absolute inset-0 z-50"
      ></div>
      <figure className="text-stone-400 self-center w-[20%] md:w-[12%]">
          <img src={flayer} alt="img-flayer" className="w-full object-cover rounded-md" />
      </figure>
      <div className="flex flex-col w-[60%] justify-center gap-3 pl-9 md:pl-[6%]">
        <h6 className=" text-2xl xl:text-5xl">AZURE</h6>
        <p className="text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="flex absolute right-5 top-2 gap-2 z-20 w-[20%] text-stone-500 text-nowrap justify-center items-center md:relative lg:gap-4 lg:text-lg lg:pb-12">
        <i className="bx bxs-cube-alt text-2xl xl:text-4xl text-stone-300"></i>
        <p className="">20/04/2025</p>
      </div>
    </div>
  );
};

export default CardDate;
