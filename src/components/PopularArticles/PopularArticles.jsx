import React, { useEffect, useState } from "react";
import "./PopularArticles.css";
import AuthorImg from "../../assets/img/Avatar.png";
import VerifiedImage from "../../assets/img/verified.svg";
import Slider from "react-slick";
import axios from "axios";
import { BASE_URL, POPULATE_QUERY } from "../../utils/constant";

const PopularArticlesSlider = {
  dots: true,
  infinite: false,
  autoplay: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
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

const PopularArticles = () => {
  const [popularArticles, setPopularArticles] = useState([]);

  useEffect(() => {
    getPopularArticleReq();
  }, []);

  const getPopularArticleReq = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/blogs?pagination[pageSize]=5&sort[0]=viewCount:desc&${POPULATE_QUERY}`
      );
      setPopularArticles(res.data.data); // Adjust based on the actual response structure
      console.log("blogs data ==>>>", res.data);
    } catch (error) {
      console.error("Error fetching popular articles", error);
    }
  };

  const extractImageUrl = (blogImg) => {
    return blogImg?.data?.attributes?.url;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    return `${day} ${month}`;
  };

  console.log(popularArticles);

  return (
    <>
      <section className="popular-articles">
        <div className="custom-container">
          <div className="article-banner">
            <div className="article-heading">
              <h2>Popular Articles</h2>
              <h5>
                We share common trends, strategies ideas, opinions, short & long
                stories from the team behind company.
              </h5>
            </div>
            <div className="article-button">
              <button>
                <a href="#all-articles-section">View All</a>
              </button>
            </div>
          </div>
        </div>
        <Slider {...PopularArticlesSlider}>
          {popularArticles.length > 0 ? (
            popularArticles.map((article) => (
              <div key={article.id}>
                <a
                  href={`/blogs/${article.id}`} // Change this URL based on your routing
                  className="articles-slider"
                  style={{
                    backgroundImage: `url(${extractImageUrl(
                      article.attributes.blogImg
                    )})`,
                  }}
                >
                  <div className="article-title">
                    <h4>{article.attributes.title}</h4>
                  </div>
                  <div className="featured-author-box">
                    <div className="author-box">
                      <div className="author-image">
                        <img
                          src={
                            article.attributes.author.data.attributes.authorImg
                              ?.data?.attributes?.url ||
                            "/path-to-default-author-image.png"
                          }
                          alt="Author"
                        />
                      </div>
                      <div className="author-content">
                        <h5 className="author-name">
                          {article.attributes.author.data.attributes.authorName}
                        </h5>
                        <div className="verified">
                          <img src={VerifiedImage} alt="Verified" />
                          <h6>Verified writer</h6>
                        </div>
                      </div>
                    </div>
                    <div className="date-publish">
                      <p>{formatDate(article.attributes.createdAt)}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))
          ) : (
            <p>No popular articles found</p>
          )}
        </Slider>
      </section>
    </>
  );
};

export default PopularArticles;
