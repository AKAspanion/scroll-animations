"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IS_DEV } from "@/constants/app";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const AnimatedVideo = () => {
  const ref = useRef(null);
  const video = useRef<HTMLVideoElement>(null);

  function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }

  useGSAP(() => {
    if (video.current) {
      // const bottom = "600";
      // gsap.timeline({
      //   scrollTrigger: {
      //     pin: true,
      //     trigger: ref.current,
      //     start: "top top",
      //     end: `bottom+=${bottom}% bottom`,
      //     markers: IS_DEV,
      //   },
      // });
      // let tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ref.current,
      //     start: "top-=20% top",
      //     end: `bottom+=${bottom}% bottom`,
      //     scrub: true,
      //     markers: IS_DEV,
      //     fastScrollEnd: true,
      //   },
      // });

      // video.current.onloadedmetadata = function () {
      //   tl.fromTo(
      //     video.current,
      //     {
      //       currentTime: 0,
      //     },
      //     { currentTime: video.current?.duration || 1 }
      //   );
      // };

      if (isTouchDevice()) {
        video.current.play();
        video.current.pause();
      }
    }
  }); // <-- scope is for selector text (optional)

  return (
    <section
      id="animated-video"
      ref={ref}
      className="h-screen relative bg-[#B45114]"
    >
      <h1 className="whitespace-nowrap absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 uppercase font-semibold text-7xl pb-12 drop-shadow-md">
        Trigger Video
      </h1>
      <div className="h-full flex">
        <video
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
          src="https://assets.codepen.io/39255/output_960.mp4"
          // src="/landscape.mp4"
          ref={video}
        ></video>
      </div>
    </section>
  );
};

export default AnimatedVideo;
