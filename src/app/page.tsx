import SceneLoader from "@/components/SceneLoader";

export default function Home() {
  return (
    <>
      {/* Progress bar */}
      <div
        id="progress"
        className="fixed top-0 left-0 h-px bg-white/15 z-30 transition-[width] duration-75"
      />

      {/* Brand */}
      <div className="fixed top-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-center">
        <h1 className="text-[1.1rem] font-light tracking-[0.35em] lowercase text-white opacity-90">
          smolgardn
        </h1>
      </div>

      {/* Scroll hint */}
      <div
        id="scroll-hint"
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-center transition-opacity duration-600"
      >
        <p className="text-[0.7rem] font-light tracking-[0.2em] uppercase text-neutral-600">
          scroll
        </p>
        <span
          className="block mx-auto mt-2.5 w-px h-[30px]"
          style={{
            background: "linear-gradient(to bottom, #555, transparent)",
            animation: "pulse-arrow 2s ease-in-out infinite",
          }}
        />
      </div>

      {/* 3D Scene */}
      <SceneLoader />

      {/* Scroll space */}
      <div className="relative z-0 h-[400vh] pointer-events-none" />

      {/* Progress bar scroll sync */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var hint = document.getElementById('scroll-hint');
              var bar = document.getElementById('progress');
              window.addEventListener('scroll', function() {
                var scrollable = document.documentElement.scrollHeight - window.innerHeight;
                var t = scrollable > 0 ? window.scrollY / scrollable : 0;
                if (hint) hint.style.opacity = Math.max(0, 1 - t * 5);
                if (bar) bar.style.width = (t * 100) + '%';
              }, { passive: true });
            })();
          `,
        }}
      />
    </>
  );
}
