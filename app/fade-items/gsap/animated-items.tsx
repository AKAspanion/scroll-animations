"use client";

import { useMemo, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { IS_DEV } from "@/constants/app";
import { fadeItemCards } from "@/constants/cards";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const AnimatedItems = () => {
  const ref = useRef(null);
  useGSAP(() => {
    if (ref.current) {
      const bottom = "200";
      gsap.timeline({
        scrollTrigger: {
          pin: true,
          trigger: ref.current,
          start: "top top",
          end: `bottom+=${bottom}% bottom`,
          // markers: IS_DEV,
        },
      });
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          id: "main",
          start: "top top",
          end: `bottom+=${bottom}% bottom`,
          scrub: true,
          // markers: IS_DEV,
          fastScrollEnd: true,
        },
      });

      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          id: "intro",
          start: "top-=100% top",
          end: `bottom+=50% bottom`,
          // markers: IS_DEV,
          scrub: true,
        },
      });
      introTl.fromTo(
        `#intro-title`,
        { opacity: 0, translateY: 200 },
        { opacity: 1, translateY: 0 }
      );

      fadeItemCards.forEach((id) => {
        tl.fromTo(
          `#item-card-${id}`,
          { opacity: 0, translateY: 50 },
          { opacity: 1, translateY: 0 }
        );
      });
    }
  });

  return (
    <section
      id="animated-texts"
      ref={ref}
      className="h-screen relative p-8 flex flex-col justify-between"
    >
      <div className="text-center text-4xl" id="intro-title">
        Our Plans
      </div>
      <div className="flex items-center justify-center h-full w-full">
        <div className="flex gap-12 justify-center w-full">
          {fadeItemCards.map((id) => (
            <ItemCard id={`item-card-${id}`} key={id} mode={id} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ItemCard = ({ id, mode }: { id: string; mode: number }) => {
  const meta = useMemo(() => {
    switch (mode) {
      case 2:
        return {
          title: "Standard plan",
          price: "4900",
          team: "10",
          store: "20",
        };
      case 3:
        return {
          title: "Enterprise plan",
          price: "Custom",
          team: "Custom",
          store: "Custom",
        };
      default:
        return { title: "Free plan", price: "0", team: "2", store: "20" };
    }
  }, [mode]);

  const handleClick = (id: string) => {
    console.log(id);
    // let targetElem: HTMLDivElement = document.querySelector(`#${id}`)!;
    // let targetElem: HTMLDivElement = document.querySelector(`#section-2`)!;
    // const y = targetElem.offsetTop;
    // console.log(y);
    // gsap.to(window, {
    //   scrollTo: {
    //     y: y,
    //     autoKill: false,
    //   },
    //   duration: 2,
    // });
  };

  return (
    <div
      id={id}
      className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
        {meta.title}
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">₹</span>
        <span className="text-5xl font-extrabold tracking-tight">
          {meta.price}
        </span>
        <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
          /month
        </span>
      </div>
      <ul role="list" className="space-y-5 my-7">
        <li className="flex items-center">
          <svg
            className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            {meta.team} team members
          </span>
        </li>
        <li className="flex">
          <svg
            className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            {meta.store} GB Cloud storage
          </span>
        </li>
        <li className="flex">
          <svg
            className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Integration help
          </span>
        </li>
        <li
          className={
            "flex decoration-gray-500 " + (mode > 1 ? "" : "line-through")
          }
        >
          <svg
            className={
              "flex-shrink-0 w-4 h-4 " +
              (mode > 1
                ? "text-blue-700 dark:text-blue-500"
                : "text-gray-400 dark:text-gray-500")
            }
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span
            className={
              "text-base font-normal leading-tight ms-3 " +
              (mode > 1 ? "text-gray-500 dark:text-gray-400" : "text-gray-500")
            }
          >
            Sketch Files
          </span>
        </li>
        <li
          className={
            "flex decoration-gray-500 " + (mode > 1 ? "" : "line-through")
          }
        >
          <svg
            className={
              "flex-shrink-0 w-4 h-4 " +
              (mode > 1
                ? "text-blue-700 dark:text-blue-500"
                : "text-gray-400 dark:text-gray-500")
            }
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span
            className={
              "text-base font-normal leading-tight ms-3 " +
              (mode > 1 ? "text-gray-500 dark:text-gray-400" : "text-gray-500")
            }
          >
            API Access
          </span>
        </li>
        <li
          className={
            "flex decoration-gray-500 " + (mode > 2 ? "" : "line-through")
          }
        >
          <svg
            className={
              "flex-shrink-0 w-4 h-4 " +
              (mode > 2
                ? "text-blue-700 dark:text-blue-500"
                : "text-gray-400 dark:text-gray-500")
            }
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span
            className={
              "text-base font-normal leading-tight ms-3 " +
              (mode > 2 ? "text-gray-500 dark:text-gray-400" : "text-gray-500")
            }
          >
            Complete documentation
          </span>
        </li>
        <li
          className={
            "flex decoration-gray-500 " + (mode > 2 ? "" : "line-through")
          }
        >
          <svg
            className={
              "flex-shrink-0 w-4 h-4 " +
              (mode > 2
                ? "text-blue-700 dark:text-blue-500"
                : "text-gray-400 dark:text-gray-500")
            }
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span
            className={
              "text-base font-normal leading-tight ms-3 " +
              (mode > 2 ? "text-gray-500 dark:text-gray-400" : "text-gray-500")
            }
          >
            24x7 phone & email support
          </span>
        </li>
      </ul>
      <button
        type="button"
        onClick={() => handleClick(id)}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
      >
        Choose plan
      </button>
    </div>
  );
};

export default AnimatedItems;
