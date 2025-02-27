import React from "react";

const CardAdminEvent = ({ event, onDelete, onEdit }) => {
  const { title, description, date, time, location, image } = event;
  return (
    <div className="text-base  font-title text-balance w-full border border-zinc-700 pb-1 rounded-lg max-w-[500px] xl:pb-2">
      <article className="flex flex-col gap-2 text-zinc-400">
        <h6 className="px-2 text-lg bg-zinc-700 text-whiteCustom rounded-t-lg py-2 lg:px-3 lg:py-3">{title}</h6>
        <div className="px-2 flex justify-between lg:px-3">
          <p>{location}</p>
          <p>{date}</p>
        </div>
        <p className="px-2 text-zinc-500 lg:px-3">{description}</p>
      </article>
      <div className="flex justify-evenly items-center text-zinc-500 mt-4">
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
