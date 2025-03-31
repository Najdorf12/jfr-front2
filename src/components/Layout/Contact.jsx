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
        <section className="w-full">
          <div className="w-full flex flex-col text-center text-pretty mt-20 justify-center items-center px-3 md:px-6 lg:flex-col xl:mt-24">
            <p className="text-2xl md:text-3xl lg:text-5xl font-title2 text-stone-700 max-w-[1000px] 2xl:text-[3.3rem] 2xl:max-w-[1100px]">
              JFR has become a crowd favorite, known for his{" "}
              <span className="text-red-500">sonic vitality and infectious energy</span> behind the decks
            </p>
            <p className="relative mt-6 text-sm font-title text-balance flex justify-center items-center max-w-[400px] text-stone-700 md:max-w-[900px] lg:mt-9 lg:text-lg 2xl:text-xl 2xl:mt-10">
              He is also a professor of electronic music production, Label
              Manager of Musique de Lune and founder of his own label and the
              popular radio series Secret Feelings
            </p>
            <div className="w-[50%] h-[1px] mt-6 bg-zinc-700 md:w-[20%] lg:mt-10 2xl:mt-12"></div>
          </div>
        </section>
        <section
          id="contact_section"
          className="w-full lg:flex lg:flex-row mt-12 xl:mt-16 "
        >
          <div className="w-full relative font-title h-screen flex flex-col justify-start items-center md:justify-center lg:w-1/2 lg:self-start ">
            <article className="flex flex-col pt-16 justify-center items-center text-balance text-center gap-6 lg:pt-0 xl:gap-6">
              <h6 className="font-text2 font-semibold text-6xl text-whiteCustom lg:text-7xl 2xl:text-8xl">
                LET'S TALK
              </h6>
              <p className="text-stone-700 text-base px-3 max-w-[500px] xl:text-lg ">
                For bookings, collaborations, or just to share your thoughts,
                drop me a message
              </p>
            </article>
            <div className="w-full max-w-md  mt-12 font-title text-sm flex flex-col justify-center lg:mt-6 xl:max-w-[490px]">
              <div className="w-full max-w-md bg-gray-800 rounded-lg p-6 xl:max-w-[900px]">
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
            <ul className="flex justify-center items-center gap-8 pt-8 text-stone-600 text-4xl lg:text-[2.8rem] lg:gap-10">
              <a href="https://www.instagram.com/jfrmusic">
                <li>
                  <i className="bx bxl-instagram hover:text-whiteCustom duration-500 hover:scale-105 hover:cursor-pointer"></i>
                </li>
              </a>
              <a href="https://www.facebook.com/jfrmusicokk">
                <li>
                  <i className="bx bxl-facebook-circle hover:text-whiteCustom duration-500 hover:scale-105 hover:cursor-pointer"></i>
                </li>
              </a>
              <a href="https://open.spotify.com/intl-es/artist/3EHPs3dPCgtxAywJxZWNRY">
                <li>
                  <i className="bx bxl-spotify hover:text-whiteCustom duration-500 hover:scale-105 hover:cursor-pointer"></i>
                </li>
              </a>
              <a href="https://www.youtube.com/channel/UCtj3hTN3YeLg3wyO6-Ay7bw?view_as=subscriber">
                <li>
                  <i className="bx bxl-youtube hover:text-whiteCustom duration-500 hover:scale-105 hover:cursor-pointer"></i>
                </li>
              </a>
              <a href="https://soundcloud.com/jfrmusicok">
                <li>
                  <i className="bx bxl-soundcloud hover:text-whiteCustom duration-500 hover:scale-105 hover:cursor-pointer"></i>
                </li>
              </a>
            </ul>
          </div>
          <div className="hidden lg:w-1/2 lg:flex items-center justify-center relative mt-12 ">
            <div className="w-[200px] h-[200px] border border-red-500 z-50  absolute group hover:rotate-180 duration-700 2xl:w-[220px] 2xl:h-[220px]"></div>
            <div className="w-[200px] h-[200px] border border-stone-600 z-40 absolute  left-[50%] bottom-[50%] hover:rotate-180 duration-700 2xl:w-[220px] 2xl:h-[220px]"></div>
            <div className="w-[200px] h-[200px] border border-stone-700 z-50 absolute right-[50%] top-[50%] hover:rotate-180 duration-700 2xl:w-[220px] 2xl:h-[220px]"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
