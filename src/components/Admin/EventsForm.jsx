import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import CardAdminEvent from "./CardAdminEvent";
import { createEvent, updateEvent } from "../../config/handlers";
import { deleteEvent as deleteEventApi } from "../../config/handlers";

const EventsForm = ({ events, setEvents }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const [eventSelected, setEventSelected] = useState(null);

  useEffect(() => {
    if (eventSelected) {
      reset({
        _id: eventSelected._id,
        title: eventSelected.title,
        description: eventSelected.description,
        location: eventSelected.location,
        date: eventSelected.date,
        isActive: eventSelected.isActive,
      });
    } else {
      reset({
        _id: "",
        title: "",
        description: "",
        location: "",
        date: "",
        isActive: false,
      });
    }
  }, [eventSelected]);

  const submit = async (data) => {
    try {
      if (eventSelected) {
        const updatedEvent = await editEvent(data);
        setEvents((prevEvents) =>
          prevEvents.map((event) =>
            event._id === updatedEvent._id ? updatedEvent : event
          )
        );
      } else {
        const newEvent = await createEvent({
          title: data.title,
          description: data.description,
          location: data.location,
          date: data.date,
          isActive: data.isActive,
        });
        setEvents((prevEvents) => [...prevEvents, newEvent]);
      }
      setEventSelected(null);
      reset();
      alert("Evento guardado exitosamente");
    } catch (error) {
      console.error("Error al guardar el evento:", error);
    }
  };

  const editEvent = async (event) => {
    const updatedEvent = await updateEvent(event);
    return updatedEvent;
  };

  const deleteEvent = async (id) => {
    try {
      await deleteEventApi(id);
      setEvents((prevEvents) => prevEvents.filter((event) => event._id !== id));
      alert("Evento eliminado exitosamente");
    } catch (error) {
      console.error("Error al eliminar el evento:", error);
    }
  };


  return (
    <div className="w-full flex flex-col items-center justify-center">
      <section className="w-full rounded-xl border-zinc-700 border overflow-hidden py-6 px-4 space-y-6 md:space-y-7 md:w-[550px] xl:w-[830px] xl:space-y-14 xl:px-8 xl:py-9">
        <h2 className="text-center font-title2 text-5xl font-normal text-whiteCustom md:text-6xl xl:text-7xl 2xl:text-8xl">
          EVENTOS
        </h2>
        <p className="text-center text-zinc-500 font-title text-base  xl:text-xl 2xl:text-xl">
          Crea un nuevo evento
        </p>
        <form onSubmit={handleSubmit(submit)} className="space-y-7">
          <div className="flex flex-col gap-8 xl:flex xl:flex-row ">
            <div className="relative font-title xl:w-1/2">
              <input
                autoComplete="off"
                placeholder="Joe Doe"
                className="peer h-10 w-full border-b-2 border-zinc-600 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-rose-600"
                name="title"
                {...register("title", {
                  required: {
                    value: true,
                    message: "Title is required",
                  },
                })}
              />
              <label className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">
                Title
              </label>
            </div>
            <div className="relative font-title xl:w-1/2">
              <input
                autoComplete="off"
                placeholder="description"
                className="peer h-10 w-full border-b-2 border-zinc-600 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-rose-600"
                name="description"
                {...register("description", {
                  required: {
                    value: false,
                  },
                })}
              />
              <label className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">
                Description
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-6 xl:flex xl:flex-row  ">
            <div className="relative font-title xl:w-1/2">
              <input
                autoComplete="off"
                placeholder="john@example.com"
                className="peer h-10 w-full border-b-2 border-zinc-600 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-rose-600 "
                name="location"
                {...register("location", {
                  required: {
                    value: true,
                    message: "Location is required",
                  },
                })}
              />
              <label className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">
                Location
              </label>
            </div>
            <div className="relative font-title xl:w-1/2">
              <input
                autoComplete="off"
                placeholder="john@example.com"
                className="peer h-10 w-full border-b-2 border-zinc-600 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-rose-600 "
                name="date"
                {...register("date", {
                  required: {
                    value: true,
                    message: "Date is required",
                  },
                })}
              />
              <label className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">
                Date
              </label>
            </div>
          </div>
          <div className="relative font-title flex gap-6 items-center">
            <p className="text-zinc-500">Is Active?</p>
            <label className="container-checkbox">
              <input
                autoComplete="off"
                type="checkbox"
                {...register("isActive")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex items-center justify-center ">
            <button
              className="w-full font-title  py-2 px-4 border-[1px] border-zinc-600 rounded-md shadow-lg hover:bg-rose-600 hover:text-whiteCustom font-semibold transition duration-500 text-rose-600 xl:w-[80%] xl:self-center"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </section>

      <section className="w-full flex flex-wrap items-center justify-center gap-8 mt-14 xl:mt-20">
        {events.map((event, i) => (
          <CardAdminEvent
            key={i}
            event={event}
            onEdit={() => setEventSelected(event)}
            onDelete={() => deleteEvent(event._id)}
          />
        ))}
      </section>
    </div>
  );
};

export default EventsForm;
