import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { VRButton, XR } from "@react-three/xr";

type inputProps = { scene?: "iceland" | "mountain" | "warehouse" };

function Scene({ scene = "iceland" }: inputProps) {
  return (
    <>
      <VRButton />
      <Canvas>
        <XR>
          <ambientLight intensity={Math.PI / 2} />
          <Environment
            background={true}
            files={`./environments/${scene}/${scene}.hdr`}
          />
        </XR>
      </Canvas>
    </>
  );
}

export default Scene;
