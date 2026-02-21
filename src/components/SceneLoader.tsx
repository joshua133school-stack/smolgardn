"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import GrassControls, { DEFAULT_PARAMS } from "./GrassControls";
import type { GrassParams } from "./GrassControls";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

export type VegetationMode = "grass" | "wheat";

/* ─── Dropdown menu ──────────────────────────────────────────── */
function TopMenu({ onSelectMode }: { onSelectMode: (mode: VegetationMode) => void }) {
  const [open, setOpen] = useState(false);

  const items: { label: string; action: () => void }[] = [
    { label: "Earth is a Garden", action: () => {} },
    { label: "Projects", action: () => {} },
    {
      label: "Smolgardn sierra",
      action: () => onSelectMode("wheat"),
    },
  ];

  return (
    <div
      className="absolute top-3 right-3 z-20 flex flex-col items-end"
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="bg-transparent border-none outline-none cursor-pointer px-5 py-2 text-[15px] text-neutral-500 hover:text-black transition-colors duration-200"
        style={{ fontFamily: '"Inter", sans-serif', letterSpacing: "0.05em" }}
      >
        Menu
      </button>

      {open && (
        <div className="mt-1 flex flex-col items-end animate-in fade-in slide-in-from-top-1 duration-150">
          {items.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                item.action();
                setOpen(false);
              }}
              className="bg-transparent border-none outline-none cursor-pointer py-1.5 px-0 text-[13px] text-neutral-400 hover:text-neutral-800 transition-colors duration-150 whitespace-nowrap"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Main loader ────────────────────────────────────────────── */
export default function SceneLoader() {
  const [params, setParams] = useState<GrassParams>(DEFAULT_PARAMS);
  const [vegetation, setVegetation] = useState<VegetationMode>("grass");

  const handleChange = useCallback((p: GrassParams) => {
    setParams(p);
  }, []);

  const handleSelectMode = useCallback((mode: VegetationMode) => {
    setVegetation(mode);
  }, []);

  return (
    <div className="relative w-full h-full">
      <Scene params={params} vegetation={vegetation} />
      <GrassControls params={params} onChange={handleChange} />
      <TopMenu onSelectMode={handleSelectMode} />
    </div>
  );
}
