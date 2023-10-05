import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { CylinderCollaier } from "../utils/Collaiders";

type GLTFResult = GLTF & {
  nodes: {
    key: string;
    value: THREE.Mesh;
  };
  materials: {
    Atlas_Material: THREE.MeshStandardMaterial;
  };
};

export function CoffeCups(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/CoffeCups.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      {Object.values(nodes).map((node, index) => {
        if (node instanceof THREE.Mesh) {
          const box = new THREE.Box3().setFromObject(node);
          const size = new THREE.Vector3();
          box.getSize(size);

          return (
            <CylinderCollaier
              key={`coffe-cup-${index}`}
              args={[size.x / 2, size.z / 2, size.y]}
              type='Dynamic'
              mass={1}
              position={[node.position.x, node.position.y, node.position.z]}
              rotation={[node.rotation.x, node.rotation.y, node.rotation.z]}
              scale={[node.scale.x, node.scale.y, node.scale.z]}>
              <mesh castShadow receiveShadow geometry={node.geometry} material={node.material} />
            </CylinderCollaier>
          );
        }
      })}
    </group>
  );
}

useGLTF.preload("/CoffeCups.glb");
