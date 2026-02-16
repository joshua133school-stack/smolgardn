import SceneLoader from "@/components/SceneLoader";

export default function Home() {
  return (
    <main className="h-screen bg-[#0a0a0a] flex flex-col items-center overflow-hidden">
      {/* Header */}
      <header className="w-full py-4 px-6 text-center shrink-0 z-10">
        <h1 className="text-sm font-light tracking-[0.4em] uppercase text-neutral-400">
          Smol Garden
        </h1>
        <p className="text-[10px] tracking-[0.2em] text-neutral-600 mt-0.5">
          GLSL Simulation
        </p>
      </header>

      {/* 3D scene — fills remaining space */}
      <div className="flex-1 w-full">
        <SceneLoader />
      </div>
    </main>
  );
}
