import imgAlternative from "/images2025/compressed/play02.jpeg";

const CardAdminEvent = ({ event, onDelete, onEdit }) => {
  const { title, description, date, time, location, images } = event;
  return (
    <div className="text-base  font-title text-balance w-full border border-zinc-700 pb-1 rounded-lg max-w-[500px] xl:pb-2">
      <figure className="w-full h-[400px] overflow-hidden rounded-t-lg">
         <img src={images.length > 0 ? images[0].secure_url : imgAlternative} alt="" className="w-full h-[400px] object-cover object-center rounded-t-lg" />
      </figure>
      <article className="flex  flex-col gap-2 text-zinc-400 font-title ">
        <h6 className="text-lg px-3 bg-zinc-700 text-whiteCustom py-2 lg:px-3 lg:py-3">
          {title}
        </h6>
        <div className="px-4 mt-1 flex justify-between lg:px-3">
          <p>{location}</p>
          <p className="font-text">{date}</p>
        </div>
        <p className="text-zinc-500 px-4">{description}</p>
      </article>
      <div className="flex justify-evenly items-center text-zinc-500 mt-6">
        <div
          onClick={onEdit}
          className="flex items-center gap-2 text-[1rem] cursor-pointer hover:scale-105 hover:text-whiteCustom duration-500"
        >
          <i className="bx bxs-edit-alt text-3xl text-rose-600"></i>
          Editar
        </div>
        <div
          onClick={onDelete}
          className="flex items-center gap-2 text-[1rem] cursor-pointer hover:scale-105 hover:text-rose-600 duration-500 group"
        >
          <i className="bx bxs-trash-alt text-3xl text-rose-600 "></i>
          Eliminar
        </div>
      </div>
    </div>
  );
};

export default CardAdminEvent;
