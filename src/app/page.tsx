import SceneLoader from "@/components/SceneLoader";

export default function Home() {
  return (
    <main className="h-screen bg-white flex flex-col items-center overflow-hidden">
      {/* Header */}
      <header className="w-full py-6 px-6 text-center shrink-0">
        <h1 className="text-2xl font-light tracking-[0.3em] text-black">
          Smol Garden
        </h1>
      </header>

      {/* 3D Farm scene — fills remaining space */}
      <div className="flex-1 w-full">
        <SceneLoader />
      </div>
    </main>
  );
}
