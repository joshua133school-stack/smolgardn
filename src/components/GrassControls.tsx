"use client";

import { useCallback } from "react";

/* ─── Types ─────────────────────────────────────────────────── */
export interface GrassParams {
  sunAzimuth: number;
  sunElevation: number;
  windSpeed: number;
  turbulence: number;
  density: number;
  bladeWidth: number;
  rootColor: string;
  tipColor: string;
}

export const DEFAULT_PARAMS: GrassParams = {
  sunAzimuth: 135,
  sunElevation: 55,
  windSpeed: 0.15,
  turbulence: 0.3,
  density: 50000,
  bladeWidth: 0.012,
  rootColor: "#1a3a0a",
  tipColor: "#6db33f",
};

/* ─── Slider row ────────────────────────────────────────────── */
function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  displayValue,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  displayValue?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between text-[11px]">
        <span className="text-neutral-400 uppercase tracking-wider">{label}</span>
        <span className="text-neutral-500 font-mono">
          {displayValue ?? value.toFixed(step < 1 ? (step < 0.01 ? 3 : 2) : 0)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="slider"
      />
    </div>
  );
}

/* ─── Color picker row ──────────────────────────────────────── */
function ColorRow({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[11px] text-neutral-400 uppercase tracking-wider">
        {label}
      </span>
      <div className="flex items-center gap-2">
        <span className="text-[11px] text-neutral-500 font-mono uppercase">
          {value}
        </span>
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-6 h-6 rounded border border-neutral-700 cursor-pointer bg-transparent"
        />
      </div>
    </div>
  );
}

/* ─── Section header ────────────────────────────────────────── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.2em] border-b border-neutral-800 pb-1.5">
        {title}
      </h3>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

/* ─── Main controls panel ───────────────────────────────────── */
export default function GrassControls({
  params,
  onChange,
}: {
  params: GrassParams;
  onChange: (p: GrassParams) => void;
}) {
  const set = useCallback(
    <K extends keyof GrassParams>(key: K, value: GrassParams[K]) => {
      onChange({ ...params, [key]: value });
    },
    [params, onChange]
  );

  return (
    <div className="absolute top-0 left-0 bottom-0 w-56 z-10 flex flex-col pointer-events-none">
      <div className="m-3 p-4 rounded-lg bg-black/70 backdrop-blur-md border border-neutral-800/60 flex flex-col gap-5 overflow-y-auto pointer-events-auto">
        {/* Panel title */}
        <div className="text-center">
          <div className="text-[10px] text-neutral-600 uppercase tracking-[0.3em]">
            Controls
          </div>
        </div>

        <Section title="Solar Dynamics">
          <Slider
            label="Azimuth"
            value={params.sunAzimuth}
            min={0}
            max={360}
            step={1}
            onChange={(v) => set("sunAzimuth", v)}
            displayValue={`${params.sunAzimuth}°`}
          />
          <Slider
            label="Elevation"
            value={params.sunElevation}
            min={5}
            max={90}
            step={1}
            onChange={(v) => set("sunElevation", v)}
            displayValue={`${params.sunElevation}°`}
          />
        </Section>

        <Section title="Atmosphere">
          <Slider
            label="Wind Speed"
            value={params.windSpeed}
            min={0}
            max={0.5}
            step={0.01}
            onChange={(v) => set("windSpeed", v)}
          />
          <Slider
            label="Turbulence"
            value={params.turbulence}
            min={0}
            max={1}
            step={0.01}
            onChange={(v) => set("turbulence", v)}
          />
        </Section>

        <Section title="Vegetation">
          <Slider
            label="Density"
            value={params.density}
            min={5000}
            max={120000}
            step={1000}
            onChange={(v) => set("density", v)}
            displayValue={params.density.toLocaleString()}
          />
          <Slider
            label="Blade Width"
            value={params.bladeWidth}
            min={0.004}
            max={0.03}
            step={0.001}
            onChange={(v) => set("bladeWidth", v)}
          />
        </Section>

        <Section title="Pigmentation">
          <ColorRow
            label="Root"
            value={params.rootColor}
            onChange={(v) => set("rootColor", v)}
          />
          <ColorRow
            label="Tip"
            value={params.tipColor}
            onChange={(v) => set("tipColor", v)}
          />
        </Section>
      </div>
    </div>
  );
}
