import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { CylinderCollaier } from "../utils/Collaiders";

type GLTFResult = GLTF & {
  nodes: {
    Coffe_cup_1: THREE.Mesh;
  };
  materials: {
    Atlas_Material: THREE.MeshStandardMaterial;
  };
};

export function CoffeCup(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/CoffeCup.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <CylinderCollaier
        args={[1.29 / 2, 0.933 / 2, 1.98]}
        mass={1}
        type='Dynamic'
        position={[0, 1.13, 0]}
        rotation={[0, 0, 0]}
        scale={[0, 0, 0]}>
        <mesh
          name='Coffe_cup_1'
          castShadow
          receiveShadow
          geometry={nodes.Coffe_cup_1.geometry}
          material={materials.Atlas_Material}
        />
      </CylinderCollaier>
    </group>
  );
}

useGLTF.preload("/CoffeCup.glb");
