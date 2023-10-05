import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Physics, Debug } from "@react-three/cannon";

// import { CoffeCup } from "./CoffeCup";
import { CoffeCups } from "./CoffeCups";
import { Ball } from "./Ball";
import Base from "./Base";

export default function Scene() {
  return (
    <Canvas camera={{ position: [-10, 10, 20] }}>
      <Physics
        broadphase='SAP'
        gravity={[0, -9.8, 0]}
        frictionGravity={[1, 1, 1]}
        defaultContactMaterial={{ restitution: 0.3 }}
        iterations={30}
        maxSubSteps={50}>
        <Debug color='red'>
          <CoffeCups />
          <Base />
          <Ball />
        </Debug>
      </Physics>

      <OrbitControls />
      <Environment preset='apartment' />
    </Canvas>
  );
}
