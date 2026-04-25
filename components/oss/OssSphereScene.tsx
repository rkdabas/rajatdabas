"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import type { Group } from "three";

const POINTS = 24000;
const R = 0.95;
const LX = 0.45;
const LY = 0.45;
const LZ = 0.5;

function fibonacciSphere(
  n: number,
  radius: number,
): { positions: Float32Array; colors: Float32Array } {
  const positions = new Float32Array(n * 3);
  const colors = new Float32Array(n * 3);
  const l = new THREE.Vector3(LX, LY, LZ).normalize();
  const golden = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < n; i++) {
    const t = (i + 0.5) / n;
    const y = 1 - 2 * t;
    const r0 = Math.sqrt(Math.max(0, 1 - y * y));
    const th = i * golden;
    const x = Math.cos(th) * r0;
    const z = Math.sin(th) * r0;
    const ix = i * 3;
    positions[ix] = x * radius;
    positions[ix + 1] = y * radius;
    positions[ix + 2] = z * radius;
    const shade = Math.max(0, new THREE.Vector3(x, y, z).dot(l));
    const ink = 0.03 + (1 - shade) * 0.95;
    colors[ix] = ink;
    colors[ix + 1] = ink;
    colors[ix + 2] = ink;
  }
  return { positions, colors };
}

/** Radial falloff for GL_POINTS — round dots, not squares. */
function createPointMap(): THREE.CanvasTexture {
  const c = 64;
  const canvas = document.createElement("canvas");
  canvas.width = c;
  canvas.height = c;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);
  const g = ctx.createRadialGradient(
    c / 2,
    c / 2,
    0,
    c / 2,
    c / 2,
    c / 2,
  );
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.3, "rgba(255,255,255,0.95)");
  g.addColorStop(0.55, "rgba(255,255,255,0.2)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, c, c);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function PointCloudSphere() {
  const group = useRef<Group>(null);
  const { geometry, material } = useMemo(() => {
    const { positions, colors } = fibonacciSphere(POINTS, R);
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    g.computeBoundingSphere();
    const m = new THREE.PointsMaterial({
      size: 0.11,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      depthWrite: true,
      alphaTest: 0.05,
    });
    if (typeof document !== "undefined") {
      m.map = createPointMap();
    }
    return { geometry: g, material: m };
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    /* Always rotating (no user orbit) */
    group.current.rotation.y = t * 0.42;
    group.current.rotation.x = 0.1 * Math.sin(t * 0.28);
  });

  return (
    <group ref={group} rotation={[0.2, 0, 0]}>
      <points frustumCulled={false} geometry={geometry} material={material} />
    </group>
  );
}

function ViewfinderFrame() {
  return (
    <div
      className="pointer-events-none absolute inset-2 sm:inset-3 md:inset-4"
      aria-hidden
    >
      <span className="border-hex-foreground/55 absolute -left-px -top-px h-3.5 w-3.5 sm:h-4 sm:w-4 border-l-2 border-t-2 md:h-5 md:w-5" />
      <span className="border-hex-foreground/55 absolute -right-px -top-px h-3.5 w-3.5 sm:h-4 sm:w-4 border-r-2 border-t-2 md:h-5 md:w-5" />
      <span className="border-hex-foreground/55 absolute -bottom-px -left-px h-3.5 w-3.5 sm:h-4 sm:w-4 border-b-2 border-l-2 md:h-5 md:w-5" />
      <span className="border-hex-foreground/55 absolute -right-px -bottom-px h-3.5 w-3.5 sm:h-4 sm:w-4 border-b-2 border-r-2 md:h-5 md:w-5" />
    </div>
  );
}

export default function OssSphereScene() {
  return (
    <div className="relative h-[min(70vh,620px)] w-full min-w-0 max-w-3xl">
      <ViewfinderFrame />
      <Canvas
        className="!h-full !w-full touch-none"
        style={{ width: "100%", height: "100%" }}
        camera={{ fov: 42, position: [0, 0, 3.2], near: 0.1, far: 32 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        aria-label="Dotted point-cloud sphere, always rotating"
      >
        <color args={["#f7f7f7"]} attach="background" />
        <ambientLight intensity={0.65} />
        <PointCloudSphere />
      </Canvas>
    </div>
  );
}
