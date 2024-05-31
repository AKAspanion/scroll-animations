"use client";
import gsap from "gsap";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef } from "react";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any | undefined>();

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <ReactLenis
      root
      ref={lenisRef}
      autoRaf={false}
      options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
