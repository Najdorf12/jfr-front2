import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "../../config/axios";
import logo from "/jfr-black.png";

const Login = () => {
  const [loginError, setLoginError] = useState([]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (loginError?.length > 0) {
      const timer = setTimeout(() => {
        setLoginError([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [loginError]);

  useEffect(() => {
    axios.post("/auth/logout").catch((error) => console.error(error));
  }, []);

  const submit = (data) => {
    axios
      .post("/auth/login", data)
      .then(() => {
        navigate("/admin");
      })
      .catch((error) => {
        setLoginError(error.response?.data);
      });
  };

  return (
    <>
      <section className="bg-whiteCustom h-screen w-full flex flex-col px-4 gap-14 items-center xl:px-10 2xl:gap-24 2xl:px-12">
        <nav className="font-title text-xl  relative flex justify-between items-center w-full  mt-2 px-5 xl:mt-3 xl:px-16 xl:text-2xl  2xl:px-20 ">
          <picture className="w-12 h-12 flex items-center justify-center rounded-full xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 ">
            <img className="rounded-full" src={logo} alt="logo" />
          </picture>
          <ul className="flex gap-6 xl:gap-10 2xl:gap-12">
            <li className="text-rose-600 font-title2 border-l-2 border-zinc-400 pl-2 xl:pl-3 py-1 hover:scale-105 hover:text-rose-600 duration-500 ">
              <Link to={"/"}>Home </Link>
            </li>
          </ul>
        </nav>

        <div className="max-w-md w-full  rounded-xl shadow-2xl shadow-gray-900 overflow-hidden py-8 px-4 space-y-8 ">
          <h2 className="text-center font-title2 text-6xl font-semibold text-rose-600">
            Welcome
          </h2>
          {loginError?.map((error, i) => (
            <div
              key={i}
              className="absolute right-0 left-0 flex justify-center items-center top-[10rem] bg-red-400 text-white  p-2  mr-1 rounded-md mt-12 font-semibold text-lg max-w-[300px]"
            >
              <p> {error} </p>
            </div>
          ))}
          <p className="font-title text-center text-zinc-400">
            Sign in to your account
          </p>
          <form onSubmit={handleSubmit(submit)} className="space-y-6">
            <div className="relative font-text2">
              <input
                autoComplete="off"
                placeholder="john@example.com"
                className="peer h-10 w-full border-b-2 border-white text-zinc-500 bg-transparent placeholder-transparent focus:outline-none focus:border-white"
                required=""
                name="email"
                type="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
              />
              <label
                className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-rose-600 peer-focus:text-sm"
                htmlFor="email"
              >
                Email
                <p className="error absolute left-32  -top-2 m-2 text-base font-semibold text-[#da8e88] w-64">
                  {errors.email?.message}
                </p>
              </label>
            </div>
            <div className="relative font-text2">
              <input
                autoComplete="off"
                placeholder="Password"
                className="peer h-10 w-full border-b-2 border-white text-zinc-500 bg-transparent placeholder-transparent focus:outline-none focus:border-white"
                required=""
                id="password"
                name="password"
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                })}
              />
              <label
                className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-rose-600 peer-focus:text-sm"
                htmlFor="password"
              >
                Password
                <p className="error absolute left-32  -top-2 m-2 text-base font-semibold text-[#da8e88] w-64">
                  {errors.password?.message}
                </p>
              </label>
            </div>

            <button
              className="w-full font-title py-2 px-4 border-[1px] border-slate-300 bg-rose-600 rounded-md shadow-lg text-white font-semibold hover:bg-zinc-600 transition duration-500"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <div className="text-center text-zinc-400 font-title">
            Don't have an account?
            <Link
              to={"/register"}
              className="text-rose-600 ml-2 hover:underline"
            >
              <strong>Register</strong>{" "}
            </Link>
          </div>
        </div>
        <div className="absolute bottom-2"></div>
      </section>
    </>
  );
};

export default Login;
