import dynamic from "next/dynamic";

const DynamicAnimatedItems = dynamic(() => import("./animated-items"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="">
      <section id="section-1" className="h-screen relative bg-green-500">
        <h1 className="whitespace-nowrap absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 uppercase font-semibold text-7xl pb-12">
          Hello
        </h1>
      </section>
      <DynamicAnimatedItems />
      <section id="section-2" className="h-screen relative bg-red-500">
        <h1 className="whitespace-nowrap absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 uppercase font-semibold text-7xl pb-12">
          Thanks
        </h1>
      </section>
    </main>
  );
}
