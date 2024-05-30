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
    name: "Trigger Video",
    link: "/trigger-video",
    children: [
      {
        name: "GSAP",
        link: "/trigger-video/gsap",
      },
      {
        name: "Motion",
        link: "/trigger-video/motion",
        disabled: true,
      },
      {
        name: "ScrollMagic",
        link: "/trigger-video/scrollmagic",
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
