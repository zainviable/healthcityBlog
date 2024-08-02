import React, { useEffect, useState } from "react";
import "./blog.css";
import { useLocation } from "react-router-dom";

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

  // const handleSelectTag = (id) => {
  //   let findTagIndex = isTagSelected.indexOf(id);
  //   if (findTagIndex == -1) {
  //     setTagSelectd([...isTagSelected, id]);
  //   } else {
  //     let clone = isTagSelected.slice(0);
  //     clone.splice(findTagIndex, 1);
  //     setTagSelectd(clone);
  //   }
  // };

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
      {/* Meet The Team */}
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
      {/* Meet The Team */}
    </div>
  );
};

export default Blogs;
