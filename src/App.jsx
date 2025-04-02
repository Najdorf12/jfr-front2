import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllDatesPage from "./components/Layout/AllDatesPage";

import JFR from "./components/JFR";
import AdminPage from "./components/Admin/AdminPage";
import Login from "./components/Admin/Login";
import Register from "./components/Admin/Register";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
function App() {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 600);
    }
    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);
  return (
    <>
      <BrowserRouter>
        <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
          <Routes>
            <Route path="/" element={<JFR />} />
            <Route path="/dates" element={<AllDatesPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </ReactLenis>
      </BrowserRouter>
    </>
  );
}

export default App;
