import React from "react";
import "./CommonBanner.css";

const CommonBanner = ({ bannerContent }) => {
  return (
    <>
      <section className="common-banner">
        <div className="px-5 lg:px-24 flex items-center py-[80px] md:py-[100px]">
          <div>
            <h2 className="off-white-text common-title">
              {bannerContent?.title}
            </h2>
            <p className="off-white-text">{bannerContent?.description}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonBanner;
