import { BoxCollaider } from "../utils/Collaiders";

export default function Base() {
  return (
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
  );
}
