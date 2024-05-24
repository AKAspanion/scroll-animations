import dynamic from "next/dynamic";

const DynamicAnimatedVideo = dynamic(() => import("./animated-video"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="w-screen overflow-x-hidden">
      <section
        id="section-1"
        className="h-screen w-screen relative bg-yellow-500"
      >
        <h1 className="whitespace-nowrap absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 uppercase font-semibold text-7xl pb-12">
          Section 1
        </h1>
      </section>
      <DynamicAnimatedVideo />
      <section
        id="section-2"
        className="h-screen w-screen relative bg-yellow-500"
      >
        <h1 className="whitespace-nowrap absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 uppercase font-semibold text-7xl pb-12">
          Section 2
        </h1>
      </section>
    </main>
  );
}
