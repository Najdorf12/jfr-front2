import {  useState, useEffect } from "react";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
  Float,
} from "@react-three/drei";
import { Sphere } from "./Scene";

const Experience = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [groupPosition, setGroupPosition] = useState([0, 0, 0]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      if (window.innerWidth > 700) {
        setGroupPosition([0, 0, 0]);
      } else {
        setGroupPosition([0, 1.6, 0]);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <ambientLight intensity={2} />
      <spotLight
        /* position={[1.2, 20, 0]} */ angle={2}
        penumbra={1}
        intensity={6}
      />
      <Environment background={false} preset={"city"} />
      <PerspectiveCamera makeDefault position={[23, 5, 2]} />
      <OrbitControls
         enableZoom={false}
         dampingFactor={0.1}
         rotateSpeed={0.5}
         autoRotate={true} // Habilita la rotación automática
         autoRotateSpeed={1.0}
      />
      <group position={groupPosition} castShadow={true}>
        <Sphere windowWidth={windowWidth} scale={2} />
      </group>
    </>
  );
};

export default Experience;
