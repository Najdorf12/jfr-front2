import { useForm } from "react-hook-form";
import axios from "../../config/axios";

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
        <div
          id="third_section"
          className="w-full font-title h-screen flex flex-col justify-start items-center md:justify-center lg:w-1/2 lg:self-start"
        >
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
                  className="bg-gradient-to-tl border border-red-500 font-text2 text-red-500  py-2 px-4 rounded-md mt-4 transition ease-in-out duration-150"
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
      </div>
    </>
  );
};

export default Contact;
