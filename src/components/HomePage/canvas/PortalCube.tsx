import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const PortalCube = ({ isMobile }: { isMobile: boolean }) => {
  const portalCube = useGLTF("./assets/portal_cube/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <primitive
        object={portalCube.scene}
        scale={isMobile ? 1.5 : 2}
        position={[0, 0, 0]}
        rotation={[0, 1.25, 0]}
      />
    </mesh>
  );
};

const PortalCubeCanvas = () => {
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
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], near: 0.1, far: 200, fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <PortalCube isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default PortalCubeCanvas;
