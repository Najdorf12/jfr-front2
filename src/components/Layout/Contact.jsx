import { useForm } from "react-hook-form";
import axios from "../../config/axios";
import PlayList from "./Playlist";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post("/send-email", data);
      console.log("Correo enviado:", response.data);
      reset();
    } catch (err) {
      console.error(
        "Error al enviar el correo:",
        err.response?.data || err.message
      );
    }
  };

  return (
    <>
      <div className="section after bg-zinc-800">
        <section className="w-full">
          <PlayList />
          <div className="w-full flex flex-col mt-12 justify-center items-center px-4 lg:flex-row xl:mt-20 ">
            <p className="text-3xl lg:text-5xl font-title2 text-red-500 max-w-[700px] ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <p className="relative mt-12 py-4 text-sm font-title  text-stone-700 max-w-[400px] lg:text-base">
              <div className="h-[1px] w-[60%] bg-stone-600 absolute top-0 right-0 lg:-left-5 lg:h-full lg:w-[1px]"></div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              praesentium, odio commodi fugiat dolores quas quis ipsam,
              reprehenderit voluptates voluptate vero, perspiciatis recusandae
              quasi labore eius aliquam illum. Praesentium, laboriosam?
            </p>
          </div>
        </section>
        <div className="w-[30%] h-[5vh] rounded-r-sm self-start mt-12"></div>
        <section className="w-full lg:flex lg:flex-row">
          <div className="w-full relative font-title h-screen flex flex-col justify-start items-center md:justify-center lg:w-1/2 lg:self-start ">
            <article className="flex flex-col pt-16 justify-center items-center text-balance text-center gap-4 lg:pt-0 xl:gap-6">
              <h6 className="font-text2 font-semibold text-6xl text-whiteCustom xl:text-7xl">
                LET'S TALK
              </h6>
              <p className="text-stone-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Sapiente, et aspernatur? Accusantium fuga nulla
              </p>
            </article>
            <div className="w-full max-w-md  mt-12 font-title text-sm flex flex-col justify-center lg:mt-6">
              <div className="w-full max-w-md bg-gray-800 rounded-lg p-6">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col w-full"
                >
                  <input
                    placeholder="Email address "
                    className=" text-stone-600 border border-stone-700 rounded-md p-2 mb-4 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500 transition ease-in-out duration-150 placeholder:text-stone-600"
                    type="email"
                    autoComplete="off"
                    {...register("email")}
                  />
                  <input
                    placeholder="WhatsApp"
                    autoComplete="off"
                    className="text-stone-600 border border-stone-700 rounded-md p-2 mb-4 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500 transition ease-in-out duration-150 placeholder:text-stone-600"
                    {...register("wttp")}
                  />
                  <textarea
                    placeholder="Message"
                    autoComplete="off"
                    className=" text-stone-600 h-[120px] border border-stone-700 rounded-md p-2 mb-4 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500 transition ease-in-out duration-150 placeholder:text-stone-600"
                    {...register("message")}
                  />
                  <button
                    className="bg-gradient-to-tl border border-red-500 font-text2 text-red-500  py-2 px-4 rounded-md mt-4 transition ease-in-out duration-300 hover:bg-red-500 hover:text-whiteCustom"
                    type="submit"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
            <ul className="flex justify-center items-center gap-9 pt-8 text-stone-600 text-4xl lg:gap-16">
              <li>
                <i className="bx bxl-instagram hover:text-red-500 duration-500 hover:scale-105 hover:cursor-pointer"></i>
              </li>
              <li>
                <i className="bx bxl-facebook hover:text-red-500 duration-500 hover:scale-105 hover:cursor-pointer"></i>
              </li>
              <li>
                <i className="bx bxl-twitter hover:text-red-500 duration-500 hover:scale-105 hover:cursor-pointer"></i>
              </li>
            </ul>
          </div>
          <div className="hidden lg:w-1/2 lg:flex items-start justify-end relative mt-12 ">
            <div className="w-[300px] h-[300px]  bg-stone-700 z-50 absolute mr-32 mt-12"></div>
            <div className="w-[300px] h-[300px] bg-stone-600 z-40 absolute mr-44 mt-32"></div>
            <div className="w-[300px] h-[300px] bg-red-500 z-50 absolute"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
