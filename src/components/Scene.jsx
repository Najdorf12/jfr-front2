import React, { useRef, useL, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Float } from "@react-three/drei";

export function Sphere({ windowWidth, ...restprops }) {
  const { nodes, materials } = useGLTF("/scene-transformed.glb");
  const sphere = useRef();
  const tl = gsap.timeline();
  useLayoutEffect(() => {
    new ScrollTrigger({});
    tl.to(sphere.current?.rotation, {
      y: 6.0,
      ease: "power1",
      scrollTrigger: {
        trigger: "#second_section",
        start: "top bottom",
        end: "60% top",
        scrub: true,
        immediateRender: false,
      },
    })
      .to("#text-about", {
        y: windowWidth < 700 ? "25px" : "45px",
        ease: "power1",
        scrollTrigger: {
          trigger: "#second_section",
          start: "5% bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to("#text-about2", {
        y: windowWidth < 700 ? "60px" : "95px",
        ease: "power1",
        scrollTrigger: {
          trigger: "#second_section",
          start: "5% bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to("#card-mask", {
        width: windowWidth < 700 ? "0px" : "0px",
        ease: "power1",
        duration: 2.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: "#card-mask",
          start: "12px bottom",
          end: "12px top",
          scrub: true,
          immediateRender: false,
        },
      });
  }, []);

  return (
    <group ref={sphere} {...restprops} dispose={null}>
      <Float speed={1.3} floatIntensity={1.3}>
        <mesh
          geometry={nodes.Icosphere002_0.geometry}
          material={materials["ballz2.002"]}
          rotation={[-1.49, 1.315, 0.904]}
          scale={1.251}
        />
        <mesh
          geometry={nodes.Icosphere003_0.geometry}
          material={materials["Lightballz.002"]}
          rotation={[-1.49, 1.315, 0.904]}
          scale={1.251}
        />
        <mesh
          geometry={nodes.Cube002_0.geometry}
          material={materials["Wireframy.002"]}
          rotation={[2.161, 0.868, -3.138]}
          scale={1.251}
        />
        <mesh
          geometry={nodes.Cube003_0.geometry}
          material={materials["Ballz.002"]}
          rotation={[-2.139, 0.997, 1.709]}
          scale={1.251}
        />
      </Float>
    </group>
  );
}

useGLTF.preload("/scene-transformed.glb");
