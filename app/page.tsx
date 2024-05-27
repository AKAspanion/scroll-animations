import Image from "next/image";

const routes = [
  {
    name: "Scrub Video",
    link: "/scrub-video",
    children: [
      {
        name: "GSAP",
        link: "/scrub-video/gsap",
      },
      {
        name: "Motion",
        link: "/scrub-video/motion",
      },
      {
        name: "ScrollMagic",
        link: "/scrub-video/scrollmagic",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      {routes.map(({ name, children }) => (
        <div key={name}>
          <div className="py-4 text-lg font-semibold">{name}</div>
          <div className="flex gap-6">
            {children.map(({ link, name }) => (
              <div
                className="hover:underline-offset-8 underline underline-offset-4 transition-all"
                key={link}
              >
                <a href={link}>{name}</a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
