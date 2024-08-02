import React from "react";
import "./BlogsBanner.css";

const BlogsBanner = ({ bannerContent }) => {
  return (
    <>
      <section className="blogs-banner">
        <div className="px-5 lg:px-24 flex items-center py-[80px] md:py-[100px] custom-container">
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

export default BlogsBanner;
