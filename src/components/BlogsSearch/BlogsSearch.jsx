import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BlogsSearch.css";
import searchIcon from "../../assets/img/search.svg";
import closeIcon from "../../assets/img/close-search.png";
import { BASE_URL } from "../../utils/constant";

const BlogsSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery.trim()) {
      getSearchArticleReq();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const getSearchArticleReq = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/blogs?filters[title][$containsi]=${searchQuery}&populate=*`
      );
      setSearchResults(res.data.data); // Adjust based on the actual response structure
      console.log("blogs data ==>>>", res.data);
    } catch (error) {
      console.error("Error fetching search articles", error);
    }
  };

  const extractImageUrl = (blogImg) => {
    return blogImg?.data?.attributes?.url;
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <>
      <div
        className={`search-banner ${
          searchResults.length === 0 && searchQuery.trim() ? "no-results" : ""
        } ${searchResults.length > 0 ? "has-results" : ""}`}
      >
        <div className="image">
          <img src={searchIcon} alt="Search Icon" />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Search article"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {searchQuery && (
            <div className="clear-icon" onClick={handleClearSearch}>
              <img src={closeIcon} alt="Clear Icon" />
            </div>
          )}
        </div>
      </div>
      <div
        className={`search-results ${
          searchResults.length === 0 && searchQuery.trim() ? "no-results" : ""
        } ${searchResults.length > 0 ? "has-results" : ""}`}
      >
        {searchResults.length > 0
          ? searchResults.map((result) => {
              const { id, attributes } = result;
              const blogImg = extractImageUrl(attributes.blogImg);
              const title = attributes.title;

              return (
                <div key={id} className="search-result-item">
                  <div className="result-image">
                    <img src={blogImg} alt={title} />
                  </div>
                  <div className="result-content">
                    <h4>
                      <a href={`/blogs/${id}`}>{title}</a>
                    </h4>
                  </div>
                </div>
              );
            })
          : searchQuery.trim() && (
              <div className="search-result-item">
                <h4>No results found</h4>
              </div>
            )}
      </div>
    </>
  );
};

export default BlogsSearch;
