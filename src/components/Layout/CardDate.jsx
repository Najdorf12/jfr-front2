const CardDate = () => {
  return (
    <div className="font-title relative text-balance text-sm lg:text-base flex w-full text-stone-500 border-b border-stone-400 pb-4 lg:pb-5">
      <div
        id="card-mask"
        className="w-full h-full bg-stone-300 absolute inset-0 z-50"
      ></div>
      <span className="text-stone-400 self-center w-[10%] pl-2 md:pl-[3%]">
        Lorem
      </span>
      <div className="flex flex-col w-[70%] justify-center gap-3 pl-9 md:pl-[5%]">
        <h6 className=" text-2xl xl:text-5xl">AZURE</h6>
        <p className="text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="flex absolute right-6 gap-2 z-20 w-[20%] text-stone-400 text-nowrap justify-center items-center md:relative lg:gap-3">
        <i className="bx bxs-cube-alt text-2xl xl:text-3xl text-red-500"></i>
        <p className="">20/04/2025</p>
      </div>
    </div>
  );
};

export default CardDate;
