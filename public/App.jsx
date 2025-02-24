import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { Suspense } from "react";
import Home from "./components/Home";
const App = () => {
  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-white">
      <div className="w-full h-screen fixed z-30 overflow-hidden lg:block">
        <Canvas>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </Canvas>
      </div>
      <Home />
    </main>
  );
};

export default App;
