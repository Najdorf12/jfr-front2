import flayer from "/images2025/compressed/play03.jpeg";

const CardDate = ({ event }) => {
  const { title, location, description, date, images } = event;
  return (
    <div className="font-title relative text-balance text-sm pl-[6px] pb-3 md:pl-6 flex w-full text-stone-500 border-b border-stone-300 lg:text-base  xl:pl-[9%] xl:pr-[3%] overflow-hidden">
      <div className="card-mask w-full h-full bg-zinc-700 absolute inset-0 z-50"></div>
      <figure className="text-stone-400 self-center w-[30%] md:w-[12%]">
        <img
          src={images.length > 0 ? images[0]?.secure_url : flayer}
          alt="img-flayer"
          className="w-full object-cover object-center rounded-md"
        />
      </figure>
      <div className="flex flex-col w-[60%] justify-center gap-2 pl-8 md:pl-[5%] ">
        <h6 className=" text-xl xl:text-2xl">{title}</h6>
        <p className="text-sm xl:text-sm">{location}</p>
        <p className="text-sm max-w-[500px] lg:mt-3 xl:text-sm">{description}</p>
        <p className="text-sm flex items-center gap-2  md:hidden">
          <i className="bx bxs-cube-alt text-xl xl:text-4xl text-stone-300"></i>
          {date}
        </p>
      </div>

      <div className="hidden md:flex  absolute right-4 text-sm bottom-1 gap-1 z-20 w-[20%] text-stone-500 text-nowrap justify-center items-center md:relative lg:gap-4 md:top-2 lg:text-base lg:-top-11">
        <i className="bx bxs-cube-alt text-xl xl:text-3xl text-stone-300"></i>
        <p className="">{date}</p>
      </div>
    </div>
  );
};

export default CardDate;
