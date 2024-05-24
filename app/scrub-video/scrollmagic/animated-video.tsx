"use client";

import { useEffect, useRef } from "react";
import ScrollMagic from "scrollmagic";
const controller = new ScrollMagic.Controller();

const AnimatedVideo = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      const scene = new ScrollMagic.Scene({
        triggerElement: "#animated-video",
        duration: "2000",
        offset: 0,
        triggerHook: 0,
        loglevel: 0,
      })
        .setPin("#animated-video", { spacerClass: "hey" })
        .addTo(controller);

      // if (scene?.addIndicators) {
      //   scene.addIndicators();
      // }
    }
  }, []);

  return (
    <section
      id="animated-video"
      ref={ref}
      className="h-screen w-screen relative"
    >
      <h1 className="whitespace-nowrap absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 uppercase font-semibold text-7xl pb-12">
        Animated Video
      </h1>
      <div className="h-full flex">
        <video
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
          src="https://assets.codepen.io/39255/output_960.mp4"
        ></video>
      </div>
    </section>
  );
};

export default AnimatedVideo;
