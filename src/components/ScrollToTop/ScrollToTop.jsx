import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTop = () => {
  const pathname = useLocation();

  useEffect(() => {
    // scroll.scrollToTop();
    document.documentElement.scrollTop = 0;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
