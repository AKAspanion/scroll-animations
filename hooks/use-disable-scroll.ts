import { useLenis } from "@studio-freight/react-lenis";

export const useDisableScroll = () => {
  const Lenis = useLenis();
  // call this to Disable
  function disableScroll() {
    Lenis?.stop();
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "hidden";
  }

  // call this to Enable
  function enableScroll() {
    Lenis?.start();
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "auto";
  }

  return { enableScroll, disableScroll };
};
