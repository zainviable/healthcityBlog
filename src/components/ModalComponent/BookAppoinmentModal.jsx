import React from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "../../utils/Icons";

const BookAppoinmentModal = ({ closeBookAppoinmentModal }) => {
  return (
    <>
      <div className="model-wrapper" onClick={closeBookAppoinmentModal}></div>
      <div className="model-container w-4/5 md:w-3/4 lg:w-1/2">
        <div className="deep-green-bg off-white-text px-3 md:px-5 py-3 rounded-t-[10px] relative">
          <h2 className="modal-title text-center">
            WHAT SERVICE ARE YOU LOOKING FOR OR TRYING TO BOOK?
          </h2>
          <div
            className="light-green-bg w-fit p-1 rounded-full hover:scale-95 hover:cursor-pointer absolute -top-2 -right-2"
            onClick={closeBookAppoinmentModal}
          >
            <RxCross2 className="text-[20px] font-bold " />
          </div>
        </div>
        <div className="blue-bg off-white-text rounded-b-[10px]">
          <div className="px-3 md:px-5 py-3">
            <p className="modal-desc">
              I know what I am looking for, show me your list of services.
            </p>

            <Link to="/#service-section" className="btn btn-sm common-btn my-3">
              Go to Services
            </Link>
            <p className="modal-desc">
              <span className="text-[#61A518] font-bold">Note:</span> By
              clicking this option, you will skip our Quiz page and you will be
              taking to our list of Services on the Landing Page.
            </p>
          </div>
          <hr />
          <div className="px-3 md:px-5 py-3">
            <p className="modal-desc">
              I do not know what I am looking for, give me a bit of guidance. Go
              to the Quiz to obtain a suggested service that may meet your
              needs. Once booked, we will assess your needs and think with you
              the best way forward. If another service is suited for your needs,
              we will refer/signpost you to them.
            </p>
            <Link to="/quiz" className="btn btn-sm common-btn my-3">
              Go to Quiz
            </Link>
            <p className="modal-desc">
              <span className="text-[#61A518] font-bold">Note:</span> By
              clicking this option, you will skip our Landing Page and you will
              be taking to our Quiz Page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppoinmentModal;
