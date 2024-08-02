import React, { useState, useEffect } from "react";
import "./AllArticles.css";
import ArticleFeatured from "../../assets/img/article-featured.png";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  BASE_URL,
  multiTagQueryById,
  POPULATE_QUERY,
} from "../../utils/constant";

const AllArticles = ({ isTagSelected }) => {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    getAllArticleReq();
  }, [isTagSelected]);

  const getAllArticleReq = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/blogs?filters[viewCount][$gt]=5&sort[0]=featured:desc&${POPULATE_QUERY}${multiTagQueryById(
          isTagSelected
        )}`
      );
      setAllArticles(res.data.data); // Adjust based on the actual response structure
      console.log("blogs data ==>>>", res.data);
    } catch (error) {
      console.error("Error fetching all articles", error);
    }
  };

  const extractImageUrl = (blogImg) => {
    const newBaseUrl = BASE_URL.replace("/api", "");
    // Assuming 'medium' format is preferred. Adjust if needed.
    return blogImg?.data?.attributes?.url;
    // (
    //   newBaseUrl + blogImg?.data?.attributes?.url ||
    //   "/src/assets/img/popular-image.png"
    // );
  };

  return (
    <section className="all-articles" id="all-articles-section">
      <div className="custom-container">
        <div className="article-banner">
          <div className="article-heading">
            <h2>All Articles</h2>
            <h5>
              We share common trends, strategies ideas, opinions, short & long
              stories from the team behind company.
            </h5>
          </div>
        </div>
        <div className="all-article-wrapper">
          {allArticles.length > 0 ? (
            allArticles.map((article) => (
              <div key={article.id} className="common-article-wrapper">
                <div className="common-article-img">
                  <Link to={`/blogs/${article.id}`}>
                    <img
                      src={extractImageUrl(article.attributes.blogImg)}
                      alt={article.attributes.title}
                    />
                  </Link>
                </div>
                <div className="common-article-content">
                  <h5 className="blog-category">
                    {article.attributes.tags.data[0]?.attributes.name}
                  </h5>

                  <h3 className="blog-title">{article.attributes.title}</h3>
                  <p className="blog-excerpt">
                    {article.attributes.blogDescription}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No articles found</p>
          )}
        </div>
      </div>
    </section>
  );
};
export default AllArticles;
