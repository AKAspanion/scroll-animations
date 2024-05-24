"use client";

import { useEffect, useRef } from "react";
import { animate, scroll } from "motion";

const AnimatedVideo = () => {
  const ref = useRef(null);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (video.current) {
      scroll(
        ({ y }) => {
          if (video.current) {
            console.log(y);
            if (!video.current.readyState) return;
            video.current.currentTime = video.current.duration * y.progress;
          }
        },
        {
          target: video.current,
          offset: [200],
        }
      );
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
          ref={video}
        ></video>
      </div>
    </section>
  );
};

export default AnimatedVideo;
