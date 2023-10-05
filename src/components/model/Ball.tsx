import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useSphereCollaider } from "../utils/Collaiders";
import { useLayoutEffect } from "react";

type GLTFResult = GLTF & {
  nodes: {
    Sphere: THREE.Mesh;
  };
  materials: {
    Atlas_Material: THREE.MeshStandardMaterial;
  };
};

export function Ball(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Ball.glb") as GLTFResult;
  const { sphereCollaiderRef, sphereCollaiderAPI } = useSphereCollaider({
    type: "Dynamic",
    mass: 50,
    args: [1],
    position: [-2.646, 1, 0],
    rotation: [0, 0, 0],
    scale: [0, 0, 0],
  });

  useLayoutEffect(() => {
    setTimeout(() => {
      sphereCollaiderAPI.applyForce([50000, 20000, 0], [0, 0, 0]);
    }, 5000);
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={sphereCollaiderRef}
        name='Sphere'
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials.Atlas_Material}
      />
    </group>
  );
}

useGLTF.preload("/Ball.glb");
