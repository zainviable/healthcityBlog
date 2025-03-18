import React, { useEffect, useState } from "react";
import "./blog.css";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import MemberCard from "../../components/MemberCard/MemberCard";
import BlogsBanner from "../../components/BlogsBanner/BlogsBanner";
import BlogsSearch from "../../components/BlogsSearch/BlogsSearch";
import FeaturedBlogs from "../../components/FeaturedBlogs/FeaturedBlogs";
import PopularArticles from "../../components/PopularArticles/PopularArticles";
import AllArticles from "../../components/AllArticles/AllArticles";
import Counter from "../../components/CounterBanner/CounterBanner";
import BlogsTag from "../../components/BlogsTag/BlogsTag";

import {
  clinicalteamList,
  nonClinicalteamList,
} from "../../DataConfig/TeamData";

const cleanPathname = (pathname) => {
  // Remove trailing slash if present
  return pathname.replace(/\/$/, "");
};

const Blogs = () => {
  const [isTagSelected, setTagSelectd] = useState([]);
  const [isTagActive, setTagActive] = useState([]);

  const location = useLocation();

  // Clean up the pathname to remove the trailing slash
  const cleanedPathname = cleanPathname(location.pathname);

  const slugs = cleanedPathname.split("/");
  const teamId = slugs[slugs.length - 1];
  // console.log("teamId===", teamId);

  const bannerContent = {
    title: "Welcome to the Health is Wealth Blog",
    image: "../../assets/img/banner-bg.png",
    description:
      "Discover a world of intriguing articles, insightful opinions, and engaging stories. Whether you're here for tips, news, or just a good read, our dummy blog has something for everyone. Dive in and explore our diverse content, crafted to entertain and inform. Happy reading!",
  };

  const handleTagSelected = (val) => {
    setTagSelectd(val);
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  const handleSelectTag = (id) => {
    let findTagIndex = isTagSelected.indexOf(id);
    if (findTagIndex == -1) {
      setTagSelectd([id]);
    } else {
      let clone = isTagSelected.slice(0);
      clone.splice(findTagIndex, 1);
      setTagSelectd(clone);
    }
  };

  return (
    <div>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Blog Title - Health is Wealth</title>
        <meta name="description" content="Explore insightful and engaging articles on health, wellness, and more." />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Tags for Social Media */}
        <meta property="og:title" content="Health is Wealth Blog - Explore Our Insights" />
        <meta property="og:description" content="Engaging articles on health, wellness, and lifestyle. Dive in for expert opinions, tips, and more." />
        <meta property="og:image" content="../../assets/img/banner-bg.png" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Health is Wealth Blog" />
        <meta name="twitter:description" content="Expert insights and engaging content on health and wellness." />
        <meta name="twitter:image" content="../../assets/img/banner-bg.png" />

        {/* Canonical URL Tag */}
        <link rel="canonical" href={window.location.href} />

        {/* Structured Data for Better SEO */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Blog",
              "name": "Health is Wealth Blog",
              "description": "A blog about health, wellness, and more.",
              "url": "${window.location.href}",
              "publisher": {
                "@type": "Organization",
                "name": "Health is Wealth",
                "logo": {
                  "@type": "ImageObject",
                  "url": "../../assets/img/logo.png"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${window.location.href}"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Blog Content */}
      <BlogsBanner bannerContent={bannerContent} />
      <BlogsSearch />
      <BlogsTag
        isTagSelected={isTagSelected}
        handleSelectTag={handleSelectTag}
        handleTagSelected={handleTagSelected}
      />
      {isTagSelected?.length < 1 && (
        <>
          <FeaturedBlogs />
          <PopularArticles />
        </>
      )}
      <AllArticles isTagSelected={isTagSelected} />
      <Counter />
    </div>
  );
};

export default Blogs;
