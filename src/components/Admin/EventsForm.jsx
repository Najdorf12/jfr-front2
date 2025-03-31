import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import CardAdminEvent from "./CardAdminEvent";
import { createEvent, updateEvent } from "../../config/handlers";
import { deleteEvent as deleteEventApi } from "../../config/handlers";
import imgAlternative from "/images2025/compressed/play02.jpeg";
import { getEvents } from "../../config/handlers";
import axios from "../../config/axios";

const EventsForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const [events, setEvents] = useState([]);
  const [eventSelected, setEventSelected] = useState(null);
  const [images, setImages] = useState([]);
  const [loadingImage, setLoadingImage] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await getEvents();
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (eventSelected) {
      reset({
        _id: eventSelected._id,
        title: eventSelected.title,
        description: eventSelected.description,
        location: eventSelected.location,
        date: eventSelected.date,
        isActive: eventSelected.isActive,
        images: eventSelected.images,
      });
      setImages(eventSelected.images || []);
    } else {
      reset({
        _id: "",
        title: "",
        description: "",
        location: "",
        date: "",
        isActive: false,
        images: "",
      });
      setImages([]);
    }
  }, [eventSelected]);

  async function handleImage(e) {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "jfr-images");
    data.append("folder", "JFR");

    setLoadingImage(true);
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/najdorf/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const file = await res.json();
      setImages([
        ...images,
        {
          public_id: file.public_id,
          secure_url: file.secure_url,
        },
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingImage(false);
    }
  }

  const submit = async (data) => {
    const eventData = {
      ...data,
      images: images.length > 0 ? images : eventSelected?.images || [], // Si no hay imágenes nuevas, conserva las anteriores
    };

    try {
      if (eventSelected) {
        const updatedEvent = await editEvent(eventData);
        setEvents((prevEvents) =>
          prevEvents.map((event) =>
            event._id === updatedEvent._id ? updatedEvent : event
          )
        );
      } else {
        const newEvent = await createEvent({
          ...eventData,
        });
        setEvents((prevEvents) => [...prevEvents, newEvent]);
      }
      setEventSelected(null);
      reset();
      setImages([]);
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
  const handleDeleteImage = (img) => {
    // 1. Actualizar estado local de imágenes
    const newImages = images.filter(
      (image) => image.public_id !== img.public_id
    );
    setImages(newImages);

    // 2. Si estamos editando un evento, actualizar también el evento seleccionado
    if (eventSelected) {
      setEventSelected({
        ...eventSelected,
        images: eventSelected.images.filter(
          (image) => image.public_id !== img.public_id
        ),
      });
    }

    // 3. Eliminar de Cloudinary y MongoDB
    axios
      .delete(`events/delete-image/${encodeURIComponent(img.public_id)}`)
      .then(() => {
        console.log("Imagen eliminada de Cloudinary");
        // 4. Actualizar la lista de eventos
        setEvents((prevEvents) =>
          prevEvents.map((event) => ({
            ...event,
            images: event.images.filter(
              (image) => image.public_id !== img.public_id
            ),
          }))
        ); // <-- Aquí faltaba este paréntesis
      })
      .catch((error) => {
        console.error("Error al eliminar imagen de Cloudinary", error);
        // Revertir cambios si falla
        setImages(images);
        if (eventSelected) {
          setEventSelected(eventSelected);
        }
      });
  };
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <section className="w-full relative rounded-xl border-zinc-700 border overflow-hidden py-6 px-4 space-y-6 md:space-y-7 md:w-[550px] xl:w-[830px] xl:space-y-14 xl:px-8 xl:py-9">
        <figure className="absolute inset-0 w-full">
          <img
            src={imgAlternative}
            alt=""
            className="w-full h-full z-20 object-cover object-center opacity-20"
          />
        </figure>
        <h2 className="text-center font-title2 relative text-5xl font-normal text-whiteCustom md:text-6xl xl:text-7xl 2xl:text-8xl">
          EVENTOS
        </h2>
        <p className="text-center relative text-zinc-500 font-title text-base  xl:text-xl 2xl:text-xl">
          Crea un nuevo evento
        </p>
        <form onSubmit={handleSubmit(submit)} className="space-y-7">
          <div className="flex flex-col gap-8 xl:flex xl:flex-row ">
            <div className="relative font-title xl:w-1/2">
              <input
                autoComplete="off"
                placeholder="Joe Doe"
                className="peer h-10 w-full border-b-2 border-zinc-600 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-red-600"
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
                className="peer h-10 w-full border-b-2 border-zinc-600 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-red-600"
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
                className="peer h-10 w-full border-b-2 border-zinc-600 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-red-600 "
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
                className="peer h-10 w-full border-b-2 border-zinc-600 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-red-600 "
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
          <div className="flex flex-col items-center gap-3 font-text py-3">
            <label
              htmlFor="imageUpload"
              className="font-light text-zinc-500 text-xl"
            >
              Imágenes
            </label>
            <div className="relative">
              <input
                id="imageUpload"
                type="file"
                name="image"
                accept=".jpg, .png, .jpeg"
                onChange={(e) => handleImage(e)}
                className="hidden"
              />
              <label
                htmlFor="imageUpload"
                className="rounded-lg flex-1 appearance-none w-full max-w-[400px] py-3 px-12 border border-zinc-600 text-whiteCustom placeholder-white text-sm focus:outline-none focus:border-transparent cursor-pointer "
              >
                Seleccionar archivo
              </label>
            </div>
            {loadingImage ? (
              <h3>Cargando imagen...</h3>
            ) : (
              <div className="lg:flex gap-5 xl:gap-10">
                {images?.map((img, i) => (
                  <div key={i} className="relative">
                    <button
                      type="button"
                      onClick={() => handleDeleteImage(img)}
                      className="absolute right-0 px-2 border-2 border-zinc-600  flex items-center rounded-sm font-bold text-white bg-red-700"
                    >
                      X
                    </button>
                    <img
                      className="w-32 h-32 object-cover 2xl:w-36 2xl:h-36"
                      src={img?.secure_url}
                      alt=""
                      width="300px"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="relative flex items-center justify-center ">
            <button
              id="box-glass"
              className="w-full font-title  py-2 px-4 border-[1px] border-zinc-600 rounded-md shadow-lg hover:border-red-500 hover:text-whiteCustom font-semibold transition duration-500 text-red-600 xl:w-[80%] xl:self-center"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </section>

      <section className="w-full flex flex-wrap items-center justify-center gap-8 mt-16 xl:mt-32 xl:gap-20 xl:px-[10%]">
        {events?.map((event, i) => (
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
