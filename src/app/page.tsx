import SceneLoader from "@/components/SceneLoader";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center">
      {/* Header */}
      <header className="w-full py-8 px-6 text-center">
        <h1 className="text-2xl font-light tracking-[0.3em] text-black">
          Smol Garden
        </h1>
      </header>

      {/* 3D Plant — inline, part of the page flow */}
      <div className="flex-1 flex items-center justify-center w-full max-w-3xl">
        <div className="w-full aspect-square max-w-[600px]">
          <SceneLoader />
        </div>
      </div>
    </main>
  );
}
