import React, { useEffect, useState } from "react";
import "./Reviews.css";
import { Link } from "react-router-dom";
import { RiDoubleQuotesR } from "../../utils/Icons";
import ClientReviewModal from "../../components/ModalComponent/ReviewModal";
import reviews from "../../DataConfig/ReviewData";

const Reviews = () => {
  const [selectedReview, setSelectedReview] = useState({});
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const closeReviewModal = () => setIsReviewModalOpen(false);

  const inviteOptions = [
    {
      id: 1,
      title: "TrustPilot",
      url: "https://uk.trustpilot.com/review/www.healthcity.org.uk",
    },
    {
      id: 2,
      title: "Care Opinion",
      url: "https://www.careopinion.org.uk/tellyourstory",
    },
    {
      id: 3,
      title: "Google",
      url: "https://g.page/r/CcZ6DcjkXqUAEB0/review",
    },
    {
      id: 4,
      title: "LinkedIn",
      url: "https://uk.linkedin.com/in/health-city-811349108",
    },
    {
      id: 5,
      title: "Upwork",
      url: "https://www.upwork.com/nx/wm/client/contracts?selectedSortBy=Start%20date&orderIsAsc=false&contractStatus=ended",
    },
    {
      id: 6,
      title: "Facebook",
      url: "https://www.facebook.com/healthcity.org.uk1/",
    },
  ];

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div>
      {/* Banner */}
      <section className="reviews-banner bg-[#01143a90]">
        <div className="h-[300px]  px-5 lg:px-24 flex items-center">
          <h2 className="off-white-text text-[16px] md:text-[24px]">
            Have a look at what other people have said about our services. We
            take your feedback serious and shall celebrate the good ones and
            shall act to improve on the areas of gap you identified.
          </h2>
        </div>
      </section>
      {/* Banner */}

      {/* We invite */}
      <section className="deep-green-bg off-white-text px-5 lg:px-24">
        <div className="py-6 flex flex-col lg:flex-row items-center justify-center gap-5">
          <p className="font-semibold">
            {" "}
            We invite you to give us your views on
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {inviteOptions?.map((inviteOption) => (
              <a
                href={inviteOption.url}
                target="_blank"
                key={inviteOption.id}
                className="btn common-btn"
              >
                {inviteOption.title}
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* We invite */}

      {/* Statisfy */}
      <section className="bg-[#F0F0F0]">
        <div className="px-5 lg:px-24 py-10">
          <h2 className="common-title text-center">If you are not satisfied</h2>
          <p className="font-medium">
            If you are not happy with or if things did not go right with your
            first Counselling or therapy session, we are here to support you to
            access another of our professionals or to signpost you to another
            service. It is wonderful that you have taken a major step to access
            health support, therefore, do not give up looking for the right
            professional who is able to give you what you need to cope or
            recover. See our{" "}
            <Link to="/terms-conditions" className="text-[#84c440]">
              Terms and Conditions
            </Link>
          </p>
        </div>
      </section>
      {/* Statisfy */}

      {/* Customers Say */}
      <section>
        <div className="my-14 px-5 lg:px-24">
          <h2 className="common-title text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5">
            {reviews?.map((review) => (
              <div
                className="card w-full bg-white drop-shadow-lg"
                key={review.id}
              >
                <div className="card-body">
                  <p className="font-medium">
                    {review.comment.length <= 200
                      ? `"${review.comment}"`
                      : `"${review.comment.slice(0, 200)}..."`}
                  </p>
                  {review.comment.length > 200 && (
                    <p>
                      {" "}
                      <button
                        className="btn btn-sm common-btn"
                        onClick={() => {
                          setIsReviewModalOpen(true);
                          setSelectedReview(review);
                        }}
                      >
                        see more
                      </button>
                    </p>
                  )}
                  <div className="flex justify-between">
                    <p className="font-medium text-[#84c440]">
                      {review.reviewer}
                    </p>
                    <RiDoubleQuotesR className="text-[36px] text-[#84c440]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Customers Say */}

      {isReviewModalOpen && (
        <ClientReviewModal
          closeReviewModal={closeReviewModal}
          selectedReview={selectedReview}
        />
      )}
    </div>
  );
};

export default Reviews;
