"use client";
/* Three.js ShaderMaterial: uniforms are mutated in useFrame (normal for R3F) */
/* eslint-disable react-hooks/immutability -- three.js */

import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";
import { useCallback, useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import type { Group, Points } from "three";
import { SCENE_H } from "@/components/oss/sphere-constants";

/* Fewer samples → more space between + marks on the same radius */
const POINTS = 2000;
const R = 0.95;
const LX = 0.45;
const LY = 0.45;
const LZ = 0.5;
const ROTATION_Y = 0.78;
const ROTATION_X_AMP = 0.22;
const ROTATION_X_TIME = 0.4;
const ROTATION_Z_AMP = 0.1;
const ROTATION_Z_TIME = 0.19;

const vertexShader = /* glsl */ `
attribute vec3 color;
uniform float uHover;
uniform vec3 uHoverPos;
uniform float uPoint;
uniform float uViewScale;
varying vec3 vColor;

void main() {
  vColor = color;
  vec3 pos = position;
  if (uHover > 0.01) {
    float d = distance(pos, uHoverPos);
    float w = (1.0 - smoothstep(0.0, 0.42, d)) * uHover;
    pos += normalize(pos) * 0.22 * w;
  }
  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = uPoint * uViewScale * (1.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
}
`;

/* Procedural + in point space: crisp bars, little edge fade (not dot-style falloff) */
const fragmentShader = /* glsl */ `
varying vec3 vColor;

void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  /* Thinner bars = less bold; barH is half-stroke in [-1,1] space */
  float barH = 0.045;
  float barL = 0.62;
  float aa = 0.032;
  float vert = (1.0 - smoothstep(barH, barH + aa, abs(p.x))) * (1.0 - smoothstep(barL, barL + aa, abs(p.y)));
  float horz = (1.0 - smoothstep(barH, barH + aa, abs(p.y))) * (1.0 - smoothstep(barL, barL + aa, abs(p.x)));
  float a = max(vert, horz);
  if (a < 0.02) discard;
  gl_FragColor = vec4(vColor, 1.0) * a;
}
`;

type InteractionState = { target: number; p: THREE.Vector3 };

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
    /* Subtle variation only — was heavy 0.03‥0.98 and read as "too much fade" */
    const ink = 0.5 + (1.0 - shade) * 0.22;
    colors[ix] = ink;
    colors[ix + 1] = ink;
    colors[ix + 2] = ink;
  }
  return { positions, colors };
}

function StippleSphereRig({
  onRegisterClear,
}: {
  onRegisterClear: (fn: () => void) => void;
}) {
  const interaction = useRef<InteractionState>({
    target: 0,
    p: new THREE.Vector3(0, 1, 0),
  });
  const group = useRef<Group>(null);
  const scratch = useRef(new THREE.Vector3());

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          uHover: { value: 0 },
          uHoverPos: { value: new THREE.Vector3(0, 1, 0) },
          uPoint: { value: 0.2 },
          uViewScale: { value: 400 },
        },
        vertexShader,
        fragmentShader,
        transparent: true,
        depthWrite: true,
        depthTest: true,
      }),
    [],
  );

  const geometry = useMemo(() => {
    const { positions, colors } = fibonacciSphere(POINTS, R);
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    g.computeBoundingSphere();
    return g;
  }, []);

  useLayoutEffect(() => {
    onRegisterClear(() => {
      interaction.current.target = 0;
    });
    return () => {
      onRegisterClear(() => {});
    };
  }, [onRegisterClear]);

  const onPointerMove = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    if (!group.current) return;
    const local = scratch.current;
    local.copy(e.point);
    group.current.worldToLocal(local);
    interaction.current.p.copy(local);
    interaction.current.target = 1;
  };

  const onPointerOut = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    interaction.current.target = 0;
  };

  const bindPoints = (n: Points | null) => {
    if (n) n.raycast = function () {};
  };

  useFrame((state, delta) => {
    if (group.current) {
      const t = state.clock.getElapsedTime();
      const g = group.current;
      g.rotation.y = t * ROTATION_Y;
      g.rotation.x = ROTATION_X_AMP * Math.sin(t * ROTATION_X_TIME);
      g.rotation.z = ROTATION_Z_AMP * Math.sin(t * ROTATION_Z_TIME);
    }
    const a = 1 - Math.exp(-9 * Math.min(1, delta * 60));
    material.uniforms.uHover.value = THREE.MathUtils.lerp(
      material.uniforms.uHover.value,
      interaction.current.target,
      a,
    );
    material.uniforms.uHoverPos.value.lerp(
      interaction.current.p,
      1 - Math.exp(-14 * delta),
    );
    material.uniforms.uViewScale.value = 0.5 * state.size.height;
  });

  return (
    <group ref={group} rotation={[0.2, 0, 0]}>
      <mesh
        onPointerMove={onPointerMove}
        onPointerOut={onPointerOut}
        onPointerOver={onPointerMove}
      >
        <sphereGeometry args={[R, 64, 64]} />
        <meshBasicMaterial
          transparent
          opacity={0}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
      <points
        ref={bindPoints}
        frustumCulled={false}
        geometry={geometry}
        material={material}
      />
    </group>
  );
}

function ViewfinderFrame() {
  return (
    <div
      className="border-hex-foreground/50 pointer-events-none absolute inset-2 sm:inset-3 md:inset-4 lg:inset-5"
      aria-hidden
    >
      <span className="border-hex-foreground/55 absolute -left-px -top-px h-3.5 w-3.5 sm:h-4 sm:w-4 border-l-2 border-t-2 md:h-5 md:w-5" />
      <span className="border-hex-foreground/55 absolute -right-px -top-px h-3.5 w-3.5 sm:h-4 sm:w-4 border-r-2 border-t-2 md:h-5 md:w-5" />
      <span className="border-hex-foreground/55 absolute -bottom-px -left-px h-3.5 w-3.5 sm:h-4 sm:w-4 border-b-2 border-l-2 md:h-5 md:w-5" />
      <span className="border-hex-foreground/55 absolute -right-px -bottom-px h-3.5 w-3.5 sm:h-4 sm:w-4 border-b-2 border-r-2 md:h-5 md:w-5" />
    </div>
  );
}

function Scene3D() {
  const clearHoverRef = useRef<() => void>(() => {});
  const registerClear = useCallback((fn: () => void) => {
    clearHoverRef.current = fn;
  }, []);

  return (
    <div
      className={`relative ${SCENE_H}`}
      onPointerLeave={() => {
        clearHoverRef.current();
      }}
    >
      <ViewfinderFrame />
      <Canvas
        className="!h-full !w-full touch-none"
        style={{ width: "100%", height: "100%" }}
        camera={{ fov: 40, position: [0, 0, 3.35], near: 0.1, far: 32 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        aria-label="Interactive stippled point-cloud sphere"
      >
        <color args={["#f7f7f7"]} attach="background" />
        <ambientLight intensity={0.65} />
        <StippleSphereRig onRegisterClear={registerClear} />
      </Canvas>
    </div>
  );
}

export default function OssSphereScene() {
  return <Scene3D />;
}
