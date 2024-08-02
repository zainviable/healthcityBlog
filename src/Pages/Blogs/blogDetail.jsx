import React, { useState, useEffect } from "react";
import "./blog.css";
import DetailPageAvatar from "../../assets/img/Avatar.png";
import Shuttle from "../../assets/img/shuttle.svg";
import ArticleFeatured from "../../assets/img/article-featured.png";
import DetailFeatured from "../../assets/img/detail-featured.png";
import { useLocation } from "react-router-dom";
import Counter from "../../components/CounterBanner/CounterBanner";
import axios from "axios";
import { BASE_URL, POPULATE_QUERY } from "../../utils/constant";
import Markdown from "react-markdown";

const cleanPathname = (pathname) => {
  // Remove trailing slash if present
  return pathname.replace(/\/$/, "");
};

const BlogDetail = () => {
  const [blogData, setBlogData] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();

  // Clean up the pathname to remove the trailing slash
  const cleanedPathname = cleanPathname(location.pathname);
  const slugs = cleanedPathname.split("/");
  const blogId = slugs[slugs.length - 1];

  useEffect(() => {
    document.documentElement.scrollTop = 0;

    // Fetch blog details
    const fetchBlogData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/blogs/${blogId}?populate=*`);
        setBlogData(res.data.data);

        // Fetch related blogs based on category
        // const categoryId = res.data.data.attributes.category.data.id;
        // const relatedRes = await axios.get(
        //   `${BASE_URL}/blogs?filters[category][id][$eq]=${categoryId}&populate=*`
        // );

        const view = await axios.put(`${BASE_URL}/blogs/${blogId}`, {
          data: {
            viewCount: res.data?.data.attributes?.viewCount
              ? res.data?.data.attributes?.viewCount + 1
              : 1,
            author: {
              disconnect: [],
              connect: [],
            },
            categories: {
              disconnect: [],
              connect: [],
            },
            blogImg: 1,
            tags: {
              disconnect: [],
              connect: [],
            },
          },
        });

        const categories =
          res.data?.data.attributes?.categories?.data?.map(
            (item, index) =>
              `filters[categories][id][$in][${index}]=${item?.id}`
          ) || [];

        const categoryFilterString = categories?.join("&");

        const myAPIPath = `${BASE_URL}/blogs?${categoryFilterString}&filters[id][$ne]=${res.data?.data?.id}&pagination[pageSize]=3&sort[0]=viewCount:desc&${POPULATE_QUERY}`;
        const relatedRes = await axios.get(myAPIPath);
        setRelatedBlogs(relatedRes.data.data);
      } catch (error) {
        console.error("Error fetching blog details", error);
      }
    };

    fetchBlogData();
  }, [blogId]);

  if (!blogData) {
    return <div>Loading...</div>;
  }

  const { title, blogDescription, author, blogImg, categories, createdAt } =
    blogData.attributes;

  const extractImageUrl = (img, defaultImg) => {
    return img?.data?.attributes?.url || defaultImg;
  };

  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <section className="blog-detail-section">
        <div className="custom-container">
          <div className="detail-upper-wrapper">
            <div className="detail-author-wrapper">
              <div className="detail-author-image">
                <img
                  src={extractImageUrl(
                    author?.data?.attributes?.authorImg,
                    DetailPageAvatar
                  )}
                  alt={author?.data?.attributes?.authorName}
                />
              </div>
              <div className="detail-author-content">
                <h4>{author?.data?.attributes?.authorName}</h4>
                <h5>Posted on {formattedDate}</h5>
              </div>
            </div>
            <div className="detail-title">
              <h1>{title}</h1>
            </div>
            <div className="detail-blog-category">
              <img src={Shuttle} alt="Category" />
              {categories.data?.length > 0 &&
                categories.data.map((category) => (
                  <h4>{category?.attributes?.name}</h4>
                ))}
            </div>
          </div>
          <div className="detail-featured-image">
            <img src={extractImageUrl(blogImg, DetailFeatured)} alt={title} />
          </div>
          <div className="detail-blog-content">
            {/* <div dangerouslySetInnerHTML={{ __html: blogDescription }} /> */}

            <Markdown>{blogDescription}</Markdown>
          </div>
          <div className="detail-related-blogs">
            <h2>What to read next</h2>
            <div className="related-blogs-wrapper">
              {relatedBlogs.map((relatedBlog) => {
                const { id, attributes } = relatedBlog;
                const relatedTitle = attributes.title;
                const relatedAuthor =
                  attributes.author.data.attributes.authorName;
                const relatedDate = new Date(
                  attributes.createdAt
                ).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                });
                const relatedImg = extractImageUrl(
                  attributes.blogImg,
                  ArticleFeatured
                );

                return (
                  <div className="related-blog-box" key={id}>
                    <div className="related-blog-img">
                      <img src={relatedImg} alt={relatedTitle} />
                    </div>
                    <div className="related-blog-content">
                      <div className="related-blog-author">
                        <h4>
                          By <span className="author">{relatedAuthor}</span> |
                          <span className="date-publish"> {relatedDate}</span>
                        </h4>
                      </div>
                      <div className="related-blog-title">
                        <h3>{relatedTitle}</h3>
                      </div>
                      <div className="related-blog-excerpt">
                        <p>{attributes.blogDescription.slice(0, 100)}...</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Counter />
    </>
  );
};

export default BlogDetail;

//  router.push('/blogs.replace(":blogs","Dasdasda")');

// const params = useParams();
