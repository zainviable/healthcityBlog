import React, { useEffect } from "react";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import { Link } from "react-router-dom";

import trustImg from "../../assets/img/Mental-health-support.png";
import webAppImg from "../../assets/img/Mental_health_support_app.png";
import charitiesImg from "../../assets/img/Mental_health_support_app.png";

import agency1Img from "../../assets/img/Mental health support a1.jpg";
import agency2Img from "../../assets/img/Mental health support a2.png";
import agency3Img from "../../assets/img/Mental health support a3.png";
import agency4Img from "../../assets/img/Mental health support a4.jpg";
import agency5Img from "../../assets/img/Mental health support a5.jpg";
import agency6Img from "../../assets/img/Mental health support a6.png";
import agency7Img from "../../assets/img/Mental health support a7.jpg";
import agency8Img from "../../assets/img/Mental health support a8.jpg";
import agency9Img from "../../assets/img/Mental health support.png";
import office1Img from "../../assets/img/mental-health-supportteam.png";
import office2Img from "../../assets/img/Mental health support office_2.png";
import office3Img from "../../assets/img/Mental health support office_3.jpg";
import office4Img from "../../assets/img/Mental health support office_4.jpg";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";

const AboutUs = () => {
  const bannerContentIntro = {
    title:
      "Health City is an Occupational and Family focused counseling, Therapy, Mental Health Support and Holistic Healthcare Provider Globally.",
    description:
      "Our Mission is to contribute to improve your wellbeing now and this may contribute to improve the wellbeing of your family, the people around you, your community and your future generations. Founded in 2007 in London, UK. we assist individuals and families to attain emotional, Physical, Spiritual, Financial, Housing, Legal, and Mental Health Support, etc., to stay happily and safely at home and workplace.",
  };

  const bannerContentTreat = {
    title: "WE TREAT YOUR PERSONAL INFORMATION WITH CARE",
    description:
      "We abide by the UK and international requirements to treat your personal information in confidence. Enaikidigha Trade Ltd, trading as Health City, is registered with the UK Information Commissioner's Office (No. ZA272034).",
  };

  const agencies = [
    { id: 1, imgUrl: agency1Img, url: "https://www.bps.org.uk/" },
    { id: 2, imgUrl: agency2Img, url: "https://www.babcp.com/" },
    {
      id: 3,
      imgUrl: agency3Img,
      url: "https://www.professionalstandards.org.uk/",
    },
    { id: 4, imgUrl: agency4Img, url: "https://www.managers.org.uk/" },
    { id: 5, imgUrl: agency5Img, url: "https://emdrassociation.org.uk/" },
    { id: 6, imgUrl: agency6Img, url: "https://www.psychotherapy.org.uk/" },
    { id: 7, imgUrl: agency7Img, url: "https://www.rsm.ac.uk/" },
    { id: 8, imgUrl: agency8Img, url: "https://www.hcpc-uk.org/" },
    { id: 9, imgUrl: agency9Img, url: "https://acpuk.org.uk/" },
  ];

  const offices = [
    {
      id: 1,
      imgUrl: office1Img,
    },
    {
      id: 2,
      imgUrl: office2Img,
    },
    {
      id: 3,
      imgUrl: office3Img,
    },
    {
      id: 4,
      imgUrl: office4Img,
    },
  ];

  const officeSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div>
      {/* Intro Banner */}
      <CommonBanner bannerContent={bannerContentIntro} />
      {/* Intro Banner */}

      {/* WHY CHOOSE US */}
      <section className="bg-[#F0F0F0]">
        <div className="px-5 lg:px-24 py-[40px]">
          <h2 className="common-title">WHY CHOOSE US</h2>
          <ul className="list-disc ml-6">
            <li>
              Our re-admission/re-referral rate is very low about 1%. This is because we believe people 
              should be assisted in learning a lot of coping techniques to enable them break the forever cycle of 
              returning to treatment unless their condition is yet to have a known human or spiritual solution. 
              Our clients and the general public have free access to a mental health support wellbeing resource app and web app (
              <a
                href="https://twinbrain.org"
                target="_blank"
                className="text-blue-500"
              >
                https://twinbrain.org
              </a>
              ) to prevent, reduce or manage lapse/relapse or setback.
            </li>
            <li>
              Money is only a by-product for us when we strive to do the right and the best thing for our clients 100% each time.
              We ask ourselves if this client or customer is my family member, how far will I go to assist them? We cannot offer 
              to other families what is not good for us.
            </li>
            <li>
              Our professionals have good experience working in the UK National Health Service (NHS) and/or the voluntary healthcare system.
            </li>
            <li>
              If we cancelled one of your appointments, then you are entitled to one free appointment. This is fair because we charge you for unattended appointments.
            </li>
            <li>
              We operate on Social Enterprise Principles. We put some of our profits and resources back to help people and communities.
            </li>
            <li>
              The full fee is paid by those who can afford and people who can't pay full fees we offer complimentary or discounted services.
            </li>
            <li>
              We are not like some private health care providers who are only focused on providing care service and profit making.
              We are the best healthcare provider with mental health support. Read more about our Charities and Community activities  (
              <a
                href="https://gratis-christi-trust.com"
                target="_blank"
                className="text-blue-500"
              >
                https://gratis-christi-trust.com
              </a>
              )
            </li>
          </ul>
        </div>
      </section>
      {/* WHY CHOOSE US */}

      {/* CHARITIES AND COMMUNITY ACTIVITIES */}
      <section>
        <div className="px-5 lg:px-24 my-14">
          <h2 className="common-title text-center">
            CHARITIES AND COMMUNITY ACTIVITIES
          </h2>
          <div
            id="cca-1"
            className="flex flex-col lg:flex-row items-center gap-5 mt-5"
          >
            <div className="w-full lg:w-2/4">
              <img
                src={trustImg}
                alt="image"
                className="rounded-md w-full lg:w-auto"
              />
            </div>
            <div className="w-full lg:w-3/5">
              <h2 className="text-[22px] font-bold">Gratis Christi Trust</h2>
              <p className="my-3">
                This is the UK registered charity that is a partner of Health City and part of the Enaikidigha healthcare group.
              </p>
              <ul>
                <li>
                 It funds complimentary or discounted Counselling and therapy services for people who can't pay full fees. To benefit from this offer,
                  you have to be introduced or recommended to Health City. 
                       (
                  <Link to="/terms-conditions" className="text-blue-500">
                    Terms and Conditions
                  </Link>{" "}
                  apply).
                </li>
                <li>
                  It offers financial and other resource assistance on a need basis to people, especially former mental health support service users of Health City.
                </li>
                <li>
                  People who have completed an episode of care at Health City or are waiting for authorization or are delayed for authorization for
                  extra sessions may also be offered at least one complementary follow-up Counselling or therapy session
                   (
                  <Link to="/terms-conditions" className="text-blue-500">
                    Terms and Conditions
                  </Link>{" "}
                  apply).
                </li>
              </ul>
              <Link to="/contact-us" className="btn common-btn mt-6">
                Contact Us
              </Link>
            </div>
          </div>
          <div
            id="cca-2"
            className="flex flex-col lg:flex-row-reverse items-center gap-5 my-10"
          >
            <div className="w-full lg:w-2/4 flex justify-end">
              <img
                src={webAppImg}
                alt="image"
                className="rounded-md w-full lg:w-auto"
              />
            </div>
            <div className="w-full lg:w-3/5">
              <h2 className="text-[22px] font-bold">
                Twin Brain app and web app
              </h2>
              <p className="my-3">
                These offer free resources that may assist you in acquiring some 
                self-help coping techniques to reduce distress from emotional problems,
                mental health support, and may contribute to improving your health and general well-being. Download at
              </p>
              <a
                href="https://twinbrain.org"
                target="_blank"
                className="btn common-btn mt-3"
              >
                Download App
              </a>
            </div>
          </div>
          <div
            id="cca-3"
            className="flex flex-col lg:flex-row items-center gap-5"
          >
            <div className="w-full lg:w-2/4">
              <img
                src={charitiesImg}
                alt="image"
                className="rounded-md w-full lg:w-auto"
              />
            </div>
            <div className="w-full lg:w-3/5">
              <h2 className="text-[22px] font-bold">
                Other Charities and Community Projects
              </h2>
              <p className="my-3">
                We work closely with and support activities of local and mental health,
                as well as, community professionals and groups by donating resources or
                offering our expertise in specific areas of community needs. We have given
                limited financial and generous professional skills and mental health support 
                to people in Nigeria, Liberia, Ukraine, UK, etc, and are open to supporting
                people in other countries on a need basis and subject to our available resources.
              </p>
              <Link to="/contact-us" className="btn common-btn mt-3">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* CHARITIES AND COMMUNITY ACTIVITIES */}

      {/* WE TREAT */}
      <CommonBanner bannerContent={bannerContentTreat} />
      {/* WE TREAT */}

      {/* PROFESSIONAL REGISTRATION */}
      <section className="bg-[#F0F0F0]">
        <div className="px-5 lg:px-24 py-[40px]">
          <h2 className="common-title">
            PROFESSIONAL REGISTRATION, ACCREDITATION, AND REGULATORY AGENCIES:
          </h2>
          <p>
            Each practitioner in Health City, Twin Brain or in the Enaikidigha
            Ltd healthcare group upholds the ethical standards of quality care,
            clients safety and confidentiality, and client safety, as required
            by the professional agency they belong. These agencies include the
            following that you can click for more details:
          </p>
        </div>
      </section>
      {/* PROFESSIONAL REGISTRATION */}

      {/* Agencies */}
      <section className="my-14">
        <Marquee speed={25} pauseOnHover={true}>
          {agencies?.map((agency) => (
            <div key={agency.id} className="mx-10">
              <a href={agency.url} target="_blank">
                <img
                  src={agency.imgUrl}
                  alt="agency image"
                  className="h-[60px] w-[140px]"
                />
              </a>
            </div>
          ))}
        </Marquee>
      </section>
      {/* Agencies */}

      {/* Our Office */}
      <section className="my-14 px-5 lg:px-24">
        <h2 className="common-title text-center">Our Office</h2>
        <div className="mt-3">
          <Slider {...officeSettings}>
            {offices?.map((office) => (
              <div key={office.id}>
                <img
                  src={office.imgUrl}
                  alt="office image"
                  className="mx-auto px-3"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* Our Office */}
    </div>
  );
};

export default AboutUs;
