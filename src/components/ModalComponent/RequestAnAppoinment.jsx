import React, { useRef, useState } from "react";
import { RxCross2 } from "../../utils/Icons";

import toast from "react-hot-toast";
import { appointmentRequest } from "../../utils/apiRequest";

const RequestAnAppoinment = ({ closeRequestAnAppoinmentModal }) => {
  const [requestAppoinmentFormDetails, setRequestAppoinmentFormDetails] =
    useState({
      name: "",
      email: "",
      reason: "",
      website: "",
    });

  const [isBtnActive, setIsBtnActive] = useState(false);
  const form = useRef();

  //   console.log("requestAppoinmentFormDetails", requestAppoinmentFormDetails);

  const handleRequestAppoinment = async (e) => {
    e.preventDefault();
    const appointmentRes = await appointmentRequest(
      requestAppoinmentFormDetails
    );
    // console.log("appointmentRes===", appointmentRes);
    if (appointmentRes?.status === 200) {
      // toast.success(appointmentRes?.data?.message);
      toast.success("Your appointment request has been sent.");
      setRequestAppoinmentFormDetails({
        name: "",
        email: "",
        reason: "",
        website: "",
      });
      closeRequestAnAppoinmentModal();
    } else {
      toast.error("Your appointment request failed to send. Please try again.");
    }
  };

  return (
    <>
      <div className="model-wrapper"></div>
      <div className="model-container  w-4/5 md:w-3/4 lg:w-2/5">
        <div className="deep-green-bg off-white-text px-3 md:px-5 py-3 rounded-t-[10px] relative">
          <h2 className="modal-title text-center">Request An Appointment</h2>
          <div
            className="light-green-bg  w-fit p-1 rounded-full hover:scale-95 hover:cursor-pointer absolute -top-2 -right-2"
            onClick={closeRequestAnAppoinmentModal}
          >
            <RxCross2 className="text-[20px] font-bold " />
          </div>
        </div>
        <div className="blue-bg rounded-b-[10px]">
          <div className="px-3 md:px-5 py-3">
            <form onSubmit={handleRequestAppoinment} ref={form}>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text off-white-text font-semibold">
                    Name <span className="text-red-500">*</span>
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full bg-[#f1f1f1]"
                  required
                  name="name"
                  value={requestAppoinmentFormDetails?.name}
                  onChange={(e) =>
                    setRequestAppoinmentFormDetails({
                      ...requestAppoinmentFormDetails,
                      name: e.target.value,
                    })
                  }
                />
              </label>
              <label className="form-control w- my-2">
                <div className="label">
                  <span className="label-text off-white-text font-semibold">
                    Email <span className="text-red-500">*</span>
                  </span>
                </div>
                <input
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered w-full bg-[#f1f1f1]"
                  required
                  name="email"
                  value={requestAppoinmentFormDetails?.email}
                  onChange={(e) =>
                    setRequestAppoinmentFormDetails({
                      ...requestAppoinmentFormDetails,
                      email: e.target.value,
                    })
                  }
                />
              </label>
              <label className="form-control w-full h-[140px]">
                <div className="label">
                  <span className="label-text off-white-text font-semibold">
                    What is the 'Appointment For'{" "}
                    <span className="text-red-500">*</span>
                  </span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-full bg-[#f1f1f1]"
                  placeholder="Type here"
                  required
                  name="reason"
                  value={requestAppoinmentFormDetails?.reason}
                  onChange={(e) =>
                    setRequestAppoinmentFormDetails({
                      ...requestAppoinmentFormDetails,
                      reason: e.target.value,
                    })
                  }
                ></textarea>
              </label>
              <div className="form-control mt-2 mb-6">
                <p className="off-white-text font-semibold">
                  <small>GDPR Consent</small>
                </p>
                <label className="cursor-pointer label justify-start gap-3">
                  <input
                    type="checkbox"
                    // checked="checked"
                    className="checkbox checkbox-success "
                    onClick={() => setIsBtnActive(!isBtnActive)}
                  />
                  <span className="label-text off-white-text font-semibold">
                    Agree on our terms and condition for using your submitted
                    data?
                  </span>
                </label>
              </div>
              <div className={isBtnActive ? "" : "bg-[#fff] rounded-lg"}>
                <button
                  className="btn common-btn w-full"
                  disabled={!isBtnActive}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestAnAppoinment;
