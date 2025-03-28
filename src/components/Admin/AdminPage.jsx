import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "../../config/axios";
import EventsForm from "./EventsForm";
import logo from "/jfr-white.png";

const AdminPage = () => {
  const navigate = useNavigate();

  const verifyAuth = async () => {
    try {
      const res = await axios.get("/auth/verify").catch((error) => {
        if (error) {
          navigate("/login");
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
  const logout = () => {
    axios
      .post("/auth/logout")
      .then((res) => {
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    verifyAuth();
  }, []);

  return (
    <section className="relative w-full bg-zinc-800 min-h-[140vh] flex flex-col items-center  pb-10 overflow-hidden">
      <nav className="font-title text-xl  relative flex justify-between items-center w-full  mt-2 px-5 xl:mt-3 xl:px-16 xl:text-xl 2xl:text-2xl 2xl:px-20 ">
        <picture className="w-12 h-12 flex items-center justify-center rounded-full xl:h-16 xl:w-16 2xl:w-20 2xl:h-20 ">
          <img className="rounded-full w-full" src={logo} alt="logo" />
        </picture>
        <ul className="flex gap-6 font-title2 text-sm md:text-base xl:gap-10 2xl:gap-12">
          <li className="text-whiteCustom border-l-2 border-zinc-600 pl-2 xl:pl-3 py-1 hover:scale-105 hover:text-white duration-500 ">
            <Link to={"/"}>Home </Link>
          </li>
          <li
            onClick={() => logout()}
            className="text-zinc-600 border-l-2 pl-2 xl:pl-3 py-1 border-zinc-600 cursor-pointer  hover:scale-105 hover:text-white duration-500"
          >
            Logout
          </li>
        </ul>
      </nav>

      <div className="mt-12 w-full flex flex-col items-center px-4 xl:mt-14 ">
        <EventsForm />
      </div>
    </section>
  );
};
export default AdminPage;
