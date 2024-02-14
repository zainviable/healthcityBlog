import React, { useEffect, useRef, useState } from "react";
import "./ContactUs.css";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import { RiAttachment2, RxCrossCircled } from "../../utils/Icons";
import toast from "react-hot-toast";
import { contactRequest } from "../../utils/apiRequest";

const ContactUs = () => {
  const form = useRef();

  const [formDetails, setFormDetails] = useState({
    fullname: "",
    email: "",
    phone: "",
    area: "",
    hear_from: "",
    subject: "",
    message: "",
    website: "",
    file: null,
  });

  const bannerContent = {
    title: "Get in Touch",
    description:
      "Feel free to get in touch with us. Your message is important to us, and we'll get back to you as soon as possible.",
  };

  const undergroundTubeStations = [
    {
      id: 1,
      location: "Crossharbour & London Arena (0.1 miles)",
    },
    {
      id: 2,
      location: "Mudchute (0.3 miles)",
    },
    {
      id: 3,
      location: "South Quay (0.4 miles)",
    },
    {
      id: 4,
      location: "Heron Quays (0.5 miles)",
    },
    {
      id: 5,
      location: "Island Gardens (0.6 miles)",
    },
  ];

  const trainStations = [
    {
      id: 1,
      location: "Canada Water (0.9 miles)",
    },
    {
      id: 2,
      location: "Deptford (1.2 miles)",
    },
    {
      id: 3,
      location: "Maze Hill (1.3 miles)",
    },
    {
      id: 4,
      location: "Surrey Quays (1.3 miles)",
    },
    {
      id: 5,
      location: "Greenwich (1.5 miles)",
    },
    {
      id: 6,
      location: "New Cross (1.5 miles)",
    },
    {
      id: 7,
      location: "Limehouse (1.5 miles)",
    },
    {
      id: 8,
      location: "Rotherhithe (1.5 miles)",
    },
    {
      id: 9,
      location: "New Cross Gate (1.6 miles)",
    },
    {
      id: 10,
      location: "South Bermondsey (1.7 miles)",
    },
  ];

  // console.log("formDetails===", formDetails);

  const handleContactUsForm = async (e) => {
    e.preventDefault();
    const contactRes = await contactRequest(formDetails);
    // console.log("contactRes===", contactRes);
    if (contactRes?.status === 200) {
      // toast.success(contactRes?.data?.message);
      toast.success("Your message has been sent.");
      setFormDetails({
        fullname: "",
        email: "",
        phone: "",
        area: "",
        hear_from: "",
        subject: "",
        message: "",
        website: "",
        file: null,
      });
    } else {
      toast.error("Your message failed to send. Please try again.");
    }
  };

  const handleFileRemove = () => {
    setFormDetails({
      ...formDetails,
      file: null,
    });
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div>
      {/* Get in Touch */}
      <CommonBanner bannerContent={bannerContent} />
      {/* Get in Touch */}

      <div className="px-5 lg:px-24 my-14">
        {/* form  */}
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-[10px]"
          onSubmit={handleContactUsForm}
          ref={form}
        >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text label-style">
                Full name <span className="text-red-500">*</span>
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full bg-[#f1f1f1]"
              required
              name="fullname"
              value={formDetails?.fullname}
              onChange={(e) =>
                setFormDetails({
                  ...formDetails,
                  fullname: e.target.value,
                })
              }
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text label-style">
                Email Address <span className="text-red-500">*</span>
              </span>
            </div>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full bg-[#f1f1f1]"
              required
              name="email"
              value={formDetails?.email}
              onChange={(e) =>
                setFormDetails({
                  ...formDetails,
                  email: e.target.value,
                })
              }
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text label-style">
                Telephone <span className="text-red-500">*</span>
              </span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full bg-[#f1f1f1] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              required
              name="phone"
              value={formDetails?.phone}
              onChange={(e) =>
                setFormDetails({
                  ...formDetails,
                  phone: e.target.value,
                })
              }
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text label-style">
                Area you live in <span className="text-red-500">*</span>
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full bg-[#f1f1f1]"
              required
              name="area"
              value={formDetails?.area}
              onChange={(e) =>
                setFormDetails({
                  ...formDetails,
                  area: e.target.value,
                })
              }
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text label-style">
                How did you hear about Health City{" "}
                <span className="text-red-500">*</span>
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full bg-[#f1f1f1]"
              required
              name="hear_from"
              value={formDetails?.hear_from}
              onChange={(e) =>
                setFormDetails({
                  ...formDetails,
                  hear_from: e.target.value,
                })
              }
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text label-style">
                Subject <span className="text-red-500">*</span>
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full bg-[#f1f1f1]"
              required
              name="subject"
              value={formDetails?.subject}
              onChange={(e) =>
                setFormDetails({
                  ...formDetails,
                  subject: e.target.value,
                })
              }
            />
          </label>

          <label className="form-control w-full h-[160px]">
            <div className="label">
              <span className="label-text label-style">
                Your Message <span className="text-red-500">*</span>
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered h-full bg-[#f1f1f1]"
              placeholder="Type here"
              required
              name="message"
              value={formDetails?.message}
              onChange={(e) =>
                setFormDetails({
                  ...formDetails,
                  message: e.target.value,
                })
              }
            ></textarea>
          </label>

          <div className="h-[160px] flex flex-col justify-between">
            <div>
              <div className="label">
                <span className="label-text label-style">Attach file</span>
              </div>
              <label className="form-control items-center w-full md:w-[180px] p-[10px] rounded-md border border-[#ddd] hover:cursor-pointer">
                <div className="flex items-center gap-1 font-semibold">
                  <RiAttachment2 className="text-[20px]" />
                  <span>Choose file</span>
                </div>

                <input
                  type="file"
                  className="file-input file-input-bordered w-full bg-[#f1f1f1]"
                  hidden
                  name="file"
                  accept=".pdf, .png, .jpeg, .jpg"
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      file: e.target.files[0],
                    })
                  }
                />
              </label>
              {formDetails?.file && (
                <div className="mt-1 flex items-center gap-3">
                  <p className="font-semibold">{formDetails?.file?.name}</p>

                  <RxCrossCircled
                    className="text-[24px] text-red-500 hover:cursor-pointer"
                    onClick={handleFileRemove}
                  />
                </div>
              )}
            </div>
            <button className="btn common-btn w-full mt-5">Submit</button>
          </div>
        </form>
        {/* form  */}

        {/* map */}
        <div className="my-14">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.91479184959!2d-0.020682123836626164!3d51.496431111505146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602be7c55d20f%3A0xa55ee4c80d7ac6!2sHealth%20City!5e0!3m2!1sen!2sbd!4v1705249517651!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
        {/* map */}

        {/* location */}
        <div className=" flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-[26px] font-bold">
              Nearest London Underground Tube Stations
            </h2>
            <ul className="mt-2 mb-3">
              {undergroundTubeStations?.map((station) => (
                <li className="font-medium" key={station.id}>
                  {station.location}
                </li>
              ))}
            </ul>
            <p className="text-[22px] font-bold">
              Wheelchair access: <span className="text-[#84C440]">Yes</span>
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-[26px] font-bold">Nearest Train Stations</h2>
            <ul className="mt-2">
              {trainStations?.map((station) => (
                <li className="font-medium" key={station.id}>
                  {station.location}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* location */}
      </div>
    </div>
  );
};

export default ContactUs;
