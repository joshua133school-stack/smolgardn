"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import GrassControls, { DEFAULT_PARAMS } from "./GrassControls";
import type { GrassParams } from "./GrassControls";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

export default function SceneLoader() {
  const [params, setParams] = useState<GrassParams>(DEFAULT_PARAMS);

  const handleChange = useCallback((p: GrassParams) => {
    setParams(p);
  }, []);

  return (
    <div className="relative w-full h-full">
      <Scene params={params} />
      <GrassControls params={params} onChange={handleChange} />
    </div>
  );
}
