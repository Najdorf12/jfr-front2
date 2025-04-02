import flayer from "/flayer.jpg";

const CardDate = ({ event }) => {
  const { title, location, description, date, images } = event;
  return (
    <div className="font-title relative  text-balance text-sm pl-[6px] pb-2 md:pl-6 flex w-full text-stone-500 border-b border-stone-300 lg:text-base  xl:pl-[9%] xl:pr-[3%]">
      <div
        className="card-mask w-full h-full bg-zinc-700 absolute inset-0 z-50"
      ></div>
      <figure className="text-stone-400 self-center w-[20%] md:w-[12%]">
        <img
          src={images.length > 0 ? images[0]?.secure_url : flayer}
          alt="img-flayer"
          className="w-full object-cover rounded-md"
        />
      </figure>
      <div className="flex flex-col w-[60%] justify-center gap-2 pl-6 md:pl-[6%]">
        <h6 className=" text-2xl xl:text-4xl">{title}</h6>
        <p className="text-sm xl:text-sm">{description}</p>
      </div>

      <div className="flex absolute right-6 top-7 gap-2 z-20 w-[20%] text-stone-500 text-nowrap justify-center items-center md:relative lg:gap-4 md:top-2 lg:text-lg lg:pb-12">
        <i className="bx bxs-cube-alt text-xl xl:text-4xl text-stone-300"></i>
        <p className="">{date}</p>
      </div>
    </div>
  );
};

export default CardDate;
