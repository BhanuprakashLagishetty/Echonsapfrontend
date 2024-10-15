import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { Box } from "@mui/material";

const Stars = (props) => {
  const ref = useRef();
  
  // Increase radius to spread out the stars
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 2.5 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.005} // Adjust size if needed
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh', // Ensure it covers the entire viewport height
        position: 'fixed', 
        top: 0,
        left: 0,
        zIndex: 0,
        background: "transparent", // Set background to transparent
      }}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </Box>
  );
};

export default StarsCanvas;
