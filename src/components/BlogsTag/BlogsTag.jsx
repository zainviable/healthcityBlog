import React, { useEffect, useState } from "react";
import "./BlogsTag.css";
import searchIcon from "../../assets/img/search.svg";
import axios from "axios";
import { BASE_URL } from "../../utils/constant";

const BlogsTag = ({ isTagSelected, handleTagSelected, handleSelectTag }) => {
  const [topTags, setTopTags] = useState([]);
  const [isTagActive, setTagActive] = useState([]);

  useEffect(() => {
    getTopTags();
    console.log({ hhhhh: isTagActive });
  }, []);

  const handleTagState = () => {
    if (isTagActive.length < 1) {
      handleTagSelected(true);
    } else {
      handleTagSelected(false);
    }
  };

  const getTopTags = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/tags?filters[blogs][viewCount][$gt]=0`
      );
      const tags = res.data.data;
      const tagCounts = {};
      console.log({ tags });
      let allTags = tags?.map((val) => {
        return {
          ...val.attributes,
          id: val?.id,
        };
      });
      setTopTags(allTags);
      // Count the occurrences of each tag
      // let taags=
      // blogs.forEach((blog) => {
      //   blog.attributes.tags.data.forEach((tag) => {
      //     const tagName = tag.attributes.name;
      //     if (tagCounts[tagName]) {
      //       tagCounts[tagName]++;
      //     } else {
      //       tagCounts[tagName] = 1;
      //     }
      //   });
      // });

      // // Convert tagCounts to an array and sort by count descending
      // const sortedTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);

      // // Get the top tags (up to 3)
      // const topTags = sortedTags.slice(0, 3).map((tag) => tag[0]);

      // setTopTags(topTags);
    } catch (error) {
      console.error("Error fetching popular articles", error);
    }
  };

  // const handleSelectTag = (id) => {
  //   let findTagIndex = isTagActive.indexOf(id);
  //   if (findTagIndex == -1) {
  //     setTagActive([...isTagActive, id]);
  //   } else {
  //     let clone = isTagActive.slice(0);
  //     clone.splice(findTagIndex);
  //     setTagActive(clone);
  //   }
  // };
  console.log({ isTagSelected });
  return (
    <div className="blog-tags">
      <h3>Popular Tags :</h3>
      <div className="tags-wrapper">
        {topTags.map((tag) => (
          <h5
            key={tag}
            className={
              "tags " +
              `${isTagSelected?.includes(tag.id) ? "active" : "not-active"}`
            }
            onClick={() => {
              handleSelectTag(tag.id);
              // handleTagSelected(!isTagSelected);
              // handleTagState();
            }}
          >
            {tag.name}
          </h5>
        ))}
      </div>
    </div>
  );
};

export default BlogsTag;
