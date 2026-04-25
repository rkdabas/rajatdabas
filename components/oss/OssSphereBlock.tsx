"use client";

import dynamic from "next/dynamic";

const OssSphereScene = dynamic(
  () => import("@/components/oss/OssSphereScene"),
  {
    ssr: false,
    loading: () => (
      <div className="from-hex-bg flex h-[min(70vh,620px)] w-full max-w-3xl items-center justify-center bg-gradient-to-b to-[#e8e8e8] text-sm text-hex-muted">
        Loading 3D…
      </div>
    ),
  },
);

export function OssSphereBlock() {
  return <OssSphereScene />;
}
