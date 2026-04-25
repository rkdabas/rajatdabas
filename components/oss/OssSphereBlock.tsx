"use client";

import dynamic from "next/dynamic";
import { LOADING_CLASS } from "@/components/oss/sphere-constants";

const OssSphereScene = dynamic(
  () => import("@/components/oss/OssSphereScene"),
  {
    ssr: false,
    loading: () => (
      <div className={LOADING_CLASS}>
        Loading 3D…
      </div>
    ),
  },
);

export function OssSphereBlock() {
  return <OssSphereScene />;
}
