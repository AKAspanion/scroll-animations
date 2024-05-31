"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IS_DEV } from "@/constants/app";
import { useDisableScroll } from "@/hooks/use-disable-scroll";
import { wildernessCards } from "@/constants/cards";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

let prevNum = -1;

const AnimatedVideo = () => {
  const ref = useRef(null);
  const video = useRef<HTMLVideoElement>(null);
  const videoContainer = useRef<HTMLDivElement>(null);

  const { enableScroll, disableScroll } = useDisableScroll();

  function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }

  useGSAP(() => {
    if (video.current) {
      const bottom = 300;
      gsap.timeline({
        scrollTrigger: {
          pin: true,
          trigger: ref.current,
          start: "top top",
          end: `bottom+=${bottom}% bottom`,
          // markers: IS_DEV,
        },
      });

      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: `bottom+=${bottom - 20}% bottom`,
          scrub: true,
          // markers: IS_DEV,
        },
      });

      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top-=20% top",
          end: `bottom+=20% bottom`,
          markers: IS_DEV,
          scrub: true,
        },
      });
      introTl.fromTo(
        `#intro-title`,
        { opacity: 1, translateY: 0, duration: 5 },
        { opacity: 0, translateY: -100, duration: 5 }
      );

      wildernessCards.forEach(({ id: num }) => {
        mainTl.fromTo(
          `#item-card-${num}`,
          {
            "will-change": "opacity",
            opacity: 0,
            translateY: 100,
            stagger: 0.3,
          },
          {
            opacity: 1,
            translateY: 0,
            onComplete: () => {
              let scrollPos = 0;
              const factor = 3 - (num + 1);
              const totalScroll = mainTl.scrollTrigger?.end;
              // TODO find offset here
              const docHeight = document.documentElement.clientHeight;
              if (totalScroll) {
                scrollPos = totalScroll - factor * docHeight;
              }
              if (videoContainer.current && prevNum < num) {
                if (scrollPos && mainTl.scrollTrigger) {
                  mainTl.scrollTrigger?.scroll(scrollPos);
                }
                disableScroll();
                prevNum = num;
                const newVid = document.createElement("video");
                newVid.src = `/landscape00${num}.mp4`;
                newVid.muted = true;
                newVid.preload = "auto";
                newVid.playsInline = true;
                newVid.className = "h-full w-full object-cover";

                newVid.onloadeddata = function () {
                  if (videoContainer.current) {
                    videoContainer.current.replaceChildren(newVid);
                    newVid.play();
                    setTimeout(() => {
                      enableScroll();
                    }, 5000);
                  }
                };
              }
            },
          }
        );
      });

      if (isTouchDevice()) {
        video.current.play();
        video.current.pause();
      }
    }
  }); // <-- scope is for selector text (optional)

  return (
    <section
      ref={ref}
      id="animated-video"
      className="h-screen relative bg-black"
    >
      <h1
        id="intro-title"
        className="whitespace-nowrap absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 uppercase font-semibold text-7xl pb-12 drop-shadow-md"
      >
        come to wilderness
      </h1>
      <div ref={videoContainer} className="h-full flex">
        <video
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
          // src="https://assets.codepen.io/39255/output_960.mp4"
          src="/landscape000.mp4"
          ref={video}
        />
      </div>
      <div className="flex gap-12 justify-center w-full absolute left-0 bottom-0 p-12">
        {wildernessCards.map(({ id, title, subtitle }) => (
          <ItemCard
            id={`item-card-${id}`}
            key={id}
            title={title}
            subtitle={subtitle}
          />
        ))}
      </div>
      {wildernessCards.map(({ id }) => (
        <video
          key={id}
          muted
          preload="auto"
          className="d-none fixed -z-10"
          src={`/landscape00${id}.mp4`}
        />
      ))}
    </section>
  );
};

const ItemCard = ({
  id,
  title,
  subtitle,
}: {
  id: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div
      id={id}
      className="block max-w-sm p-6  rounded-lg bg-opacity-20 bg-black"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-200">{subtitle}</p>
    </div>
  );
};

export default AnimatedVideo;
