import Scene from "@/components/Scene";
import { DEFAULT_PARAMS } from "@/components/GrassControls";

export default function Home() {
  return (
    <main className="h-screen w-full overflow-hidden">
      <Scene params={DEFAULT_PARAMS} />
    </main>
  );
}
