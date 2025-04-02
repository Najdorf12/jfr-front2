import navimg from "../assets/images/jfr-white.png";
import Home from "./Layout/Home";
import Bio from "./Layout/Bio";
import Dates from "./Layout/Dates";
import Contact from "./Layout/Contact";
import PlayList from "./Layout/Playlist";

function JFR() {
  return (
    <main className="w-full bg-whiteCustom ">
      <nav className="absolute w-screen px-10  py-4 flex flex-row-reverse justify-between items-center z-50 lg:px-[6%] xl:pt-7">
        <img src={navimg} alt="" className="w-16 object-contain lg:w-20" />
        <div class="loader">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
      <Home />
      <PlayList />
      <Bio />
      <Dates />
      <Contact />
    </main>
  );
}

export default JFR;
