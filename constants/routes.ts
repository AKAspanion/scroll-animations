export const routes = [
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
        disabled: true,
      },
      {
        name: "ScrollMagic",
        link: "/scrub-video/scrollmagic",
        disabled: true,
      },
    ],
  },
  {
    name: "Fade Items",
    link: "/fade-items",
    children: [
      {
        name: "GSAP",
        link: "/fade-items/gsap",
      },
      {
        name: "Motion",
        link: "/fade-items/motion",
        disabled: true,
      },
      {
        name: "ScrollMagic",
        link: "/fade-items/scrollmagic",
        disabled: true,
      },
    ],
  },
];
