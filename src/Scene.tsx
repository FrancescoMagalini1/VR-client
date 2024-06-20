import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

type inputProps = { scene?: "iceland" | "mountain" | "warehouse" };

function Scene({ scene = "iceland" }: inputProps) {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <Environment
        background={true}
        files={`./environments/${scene}/${scene}.hdr`}
      />
      <OrbitControls />
    </Canvas>
  );
}

export default Scene;
