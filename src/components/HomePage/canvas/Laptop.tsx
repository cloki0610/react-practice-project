import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Laptop = ({ isMobile }: { isMobile: boolean }) => {
  const laptop = useGLTF("./assets/laptop/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-25, 50, 50]}
        angle={0.24}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={laptop.scene}
        scale={isMobile ? 0.1 : 0.15}
        position={isMobile ? [0, -2, 0.5] : [0, -3, 0]}
        rotation={[0, 1.25, 0]}
      />
    </mesh>
  );
};

const LaptopCanvas = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    // Add a listener for changes of the screen size
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);
    // Define a callback function to handle changes of the media query
    const handleMediaQueryChange = (event: { matches: boolean }) => {
      setIsMobile(event.matches);
    };
    // Add callback function as listener for changes of the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    // Remove listener when component unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Laptop isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default LaptopCanvas;
