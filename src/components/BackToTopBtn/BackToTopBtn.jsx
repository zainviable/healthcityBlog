import React, { useEffect, useState } from "react";
import { MdArrowUpward } from "../../utils/Icons";
import { animateScroll as scroll } from "react-scroll";

const BackToTopBtn = () => {
  const [backToTop, setBackToTop] = useState(false);

  //   const handleScrollToTop = () => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //       easing: "ease-in-out",
  //     });
  //   };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  return (
    <div>
      {backToTop && (
        <button
          className="btn btn-sm common-btn fixed bottom-[50px] right-[30px]"
          onClick={scrollToTop}
        >
          <MdArrowUpward className="text-[26px]" />
        </button>
      )}
    </div>
  );
};

export default BackToTopBtn;
