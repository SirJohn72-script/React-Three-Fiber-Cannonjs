import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics, Debug } from "@react-three/cannon";
import { BoxCollaider, CylinderCollaier, IcosphereCollider, SphereCollaider } from "../utils/Collaiders";

export default function Scene() {
  return (
    <Canvas camera={{ position: [5, 5, 5] }}>
      <Physics
        broadphase='SAP'
        gravity={[0, -9.8, 0]}
        frictionGravity={[0, 1, 0]}
        defaultContactMaterial={{ restitution: 0.3 }}>
        <Debug color='red'>
          <BoxCollaider
            args={[1, 1, 1]}
            mass={1}
            type={"Dynamic"}
            position={[0, 10, 0]}
            rotation={[0, 0, 0]}
            scale={[0, 0, 0]}>
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshNormalMaterial />
            </mesh>
          </BoxCollaider>

          <BoxCollaider
            args={[120, 1, 120]}
            mass={1}
            type={"Static"}
            position={[0, -0.5, 0]}
            rotation={[0, 0, 0]}
            scale={[0, 0, 0]}>
            <mesh>
              <boxGeometry args={[120, 1, 120]} />
              <meshBasicMaterial />
            </mesh>
          </BoxCollaider>

          <SphereCollaider
            args={[2]}
            mass={1}
            type={"Dynamic"}
            position={[10, 2, 0]}
            rotation={[0, 0, 0]}
            scale={[0, 0, 0]}>
            <mesh>
              <sphereGeometry args={[2, 16, 15]} />
              <meshNormalMaterial />
            </mesh>
          </SphereCollaider>

          <CylinderCollaier
            args={[3, 3, 5]}
            mass={1}
            type={"Dynamic"}
            position={[-10, 2.6, 0]}
            rotation={[0, 0, 0]}
            scale={[0, 0, 0]}>
            <mesh>
              <cylinderGeometry args={[3, 3, 5]} />
              <meshNormalMaterial />
            </mesh>
          </CylinderCollaier>

          <IcosphereCollider
            args={1}
            detail={0}
            mass={1}
            type='Dynamic'
            position={[10, 5, -10]}
            rotation={[0, 0, 0]}
            scale={[1, 1, 1]}>
            <mesh>
              <icosahedronGeometry args={[1, 0]} />
              <meshNormalMaterial />
            </mesh>
          </IcosphereCollider>
        </Debug>
      </Physics>

      <OrbitControls />
    </Canvas>
  );
}
