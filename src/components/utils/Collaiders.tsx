import { useBox, useSphere, useCylinder, useConvexPolyhedron, ConvexPolyhedronArgs } from "@react-three/cannon";
import CannonUtils from "./CannonUtils";
import { IcosahedronGeometry } from "three";

import React, { RefObject } from "react";

interface CollaiderProps {
  children: React.ReactNode;
  type: "Dynamic" | "Static";
  mass: number;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
}

interface SphereCollaiderProps extends CollaiderProps {
  // radious
  args: [number];
}
interface BoxCollaiderProps extends CollaiderProps {
  // Width, Height and Depth
  args: [number, number, number];
}

interface CylinderCollaiderProps extends CollaiderProps {
  // Top radious, bottom radious, height
  args: [number, number, number];
}

interface IcosahedronCollaiderProps extends CollaiderProps {
  // radious & subdivisions
  args: number;
  detail: number;
}

/* Custom Hooks */
export interface useSphereCollaiderProps {
  args: [number];
  type: "Dynamic" | "Static";
  mass: number;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
}

export function BoxCollaider({ children, type, args, mass, position, rotation, scale }: BoxCollaiderProps) {
  const [boxCollaider, boxCollaiderAPI] = useBox<any>(() => ({
    type: type,
    args: [...args],
    mass: mass,
    position: [...position],
    scale: [...scale],
    rotation: [...rotation],
  }));

  return <group ref={boxCollaider}>{children}</group>;
}

export function SphereCollaider({ children, type, args, mass, position, rotation, scale }: SphereCollaiderProps) {
  const [sphereCollaider, sphereCollaiderAPI] = useSphere<any>(() => ({
    type: type,
    args: [...args],
    mass: mass,
    position: [...position],
    scale: [...scale],
    rotation: [...rotation],
  }));

  return <group ref={sphereCollaider}>{children}</group>;
}

export function CylinderCollaier({ children, type, args, mass, position, rotation, scale }: CylinderCollaiderProps) {
  const [sphereCollaider, sphereCollaiderAPI] = useCylinder<any>(() => ({
    type: type,
    args: [...args],
    mass: mass,
    position: [...position],
    scale: [...scale],
    rotation: [...rotation],
  }));

  return <group ref={sphereCollaider}>{children}</group>;
}

export function IcosphereCollider({
  args,
  detail,
  scale,
  position,
  rotation,
  mass,
  type,
  children,
}: IcosahedronCollaiderProps) {
  const geometry = React.useMemo(() => new IcosahedronGeometry(args, detail), []);
  const argss = React.useMemo(() => CannonUtils.toConvexPolyhedronProps(geometry), [geometry]);

  const [icosphere, icosphereAPI] = useConvexPolyhedron<any>(() => ({
    type: type,
    position: [...position],
    args: argss as ConvexPolyhedronArgs,
    rotation: [...rotation],
    mass: mass,
    scale: [...scale],
  }));

  return (
    <group rotation={[-1.03, 1.57, 0]} ref={icosphere}>
      {children}
    </group>
  );
}

/* Custom hooks */
export function useSphereCollaider({ type, args, mass, position, rotation, scale }: useSphereCollaiderProps) {
  const [sphereCollaider, sphereCollaiderAPI] = useSphere<any>(() => ({
    type: type,
    args: [...args],
    mass: mass,
    position: [...position],
    scale: [...scale],
    rotation: [...rotation],
  }));

  return {
    sphereCollaiderRef: sphereCollaider as any,
    sphereCollaiderAPI,
  };
}
