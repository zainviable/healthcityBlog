import React from "react";
import { RxCross2 } from "../../utils/Icons";

const ReviewModal = ({ closeReviewModal, selectedReview }) => {
  //   console.log("selectedReview===",selectedReview);
  return (
    <>
      <div className="model-wrapper" onClick={closeReviewModal}></div>
      <div className="model-container w-4/5 md:w-3/4 lg:w-2/5">
        <div className="deep-green-bg off-white-text px-3 md:px-6 py-3 rounded-t-[10px] relative">
          <h2 className="modal-title text-center">
            {selectedReview?.reviewer}
          </h2>
          <div
            className="light-green-bg w-fit p-1 rounded-full hover:scale-95 hover:cursor-pointer absolute -top-2 -right-2"
            onClick={closeReviewModal}
          >
            <RxCross2 className="text-[20px] font-bold" />
          </div>
        </div>
        <div className="blue-bg off-white-text  rounded-b-[10px]">
          <div className="px-3 md:px-6 pt-3 pb-6 ">
            <p className="modal-desc">{`"${selectedReview?.comment}"`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewModal;
