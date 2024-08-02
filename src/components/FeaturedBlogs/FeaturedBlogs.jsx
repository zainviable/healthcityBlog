import React, { useState, useEffect } from "react";
import "./FeaturedBlogs.css";
import FeaturedBlogImage from "../../assets/img/featured-blog.png";
import AuthorImg from "../../assets/img/Avatar.png";
import VerifiedImage from "../../assets/img/verified.svg";
import Slider from "react-slick";
import axios from "axios";
import { BASE_URL, POPULATE_QUERY } from "../../utils/constant";

const FeaturedBlogsSlider = {
  dots: true,
  infinite: true,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const FeaturedArticles = () => {
  const [allFeaturedArticles, setFeaturedArticles] = useState([]);

  useEffect(() => {
    getFeaturedArticleReq();
  }, []);

  const getFeaturedArticleReq = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/blogs?filters[featured]=true&sort[]=createdAt:asc&${POPULATE_QUERY}`
      );
      setFeaturedArticles(res.data.data);
      console.log("blogs data ==>>>", res.data);
    } catch (error) {
      console.error("Error fetching all articles", error);
    }
  };

  const extractImageUrl = (imageData) => {
    return (
      imageData?.data?.attributes?.url || "/src/assets/img/popular-image.png"
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    return `${day} ${month}`;
  };

  console.log("featured", allFeaturedArticles);

  return (
    <>
      <section className="featured">
        <div className="custom-container">
          <div className="featured-blogs-wrapper">
            <Slider {...FeaturedBlogsSlider}>
              {allFeaturedArticles.map((article) => (
                <a
                  href={`/blogs/${article.id}`}
                  className="featured-wrapper"
                  key={article.id}
                >
                  <div className="featured-blog-image">
                    <img
                      src={extractImageUrl(article.attributes.blogImg)}
                      alt="featured-blog"
                    />
                  </div>
                  <div className="featured-blog-content">
                    <h5 className="featured-tag">FEATURED</h5>
                    <h2 className="featured-title">
                      {article.attributes.title}
                    </h2>
                    <p className="featured-content">
                      {article.attributes.blogDescription}
                    </p>
                    <div className="featured-author-box">
                      <div className="author-box">
                        <div className="author-image">
                          <img
                            src={extractImageUrl(article.attributes.authorImg)}
                            alt="author"
                          />
                        </div>
                        <div className="author-content">
                          <h5 className="author-name">
                            {
                              article?.attributes?.author?.data?.attributes
                                ?.authorName
                            }
                          </h5>
                          <div className="verified">
                            <img src={VerifiedImage} alt="verified" />
                            <h6>Verified writer</h6>
                          </div>
                        </div>
                      </div>
                      <div className="date-publish">
                        <p>{formatDate(article.attributes.createdAt)}</p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedArticles;
