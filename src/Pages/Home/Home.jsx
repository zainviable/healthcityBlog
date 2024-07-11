import React, { useEffect, useState } from "react";
import "./Home.css";
import bannerImg from "../../assets/img/banner.png";
import selemoImg from "../../assets/img/selemo.png";

import book1Img from "../../assets/img/book_1.png";
import book2Img from "../../assets/img/book_2.png";
import book3Img from "../../assets/img/book_3.png";
import book4Img from "../../assets/img/book_4.png";

import bigSaleGif from "../../assets/img/big_sale.gif";
import advertiseGif from "../../assets/img/advertise.gif";

import webinar from "../../assets/img/webinar/baner.png";

import {
  MdArrowRightAlt,
  FaHeadSideVirus,
  FaDiagnoses,
  FaClinicMedical,
  FaUserTie,
  FaUsers,
  FaUserClock,
  FaUserFriends,
  FaHandHoldingHeart,
  FaUserMd,
  FaConnectdevelop,
  FaFolderPlus,
  FaHandHoldingUsd,
  FaCompass,
  FaShoppingBasket,
  FaBrain,
  FaBriefcaseMedical,
  FaHeadset,
  FaQuoteRight,
} from "../../utils/Icons";
import { Link, useLocation } from "react-router-dom";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import RequestAnAppoinment from "../../components/ModalComponent/RequestAnAppoinment";
import Slider from "react-slick";

const Home = () => {
  const location = useLocation();
  const hashValue = location.hash.substring(1);
  // console.log("hv==", hashValue);

  const [isCounterTrigger, setIsCounterTrigger] = useState(false);
  const [isRequestAnAppoinmentOpen, setIsRequestAnAppoinmentOpen] =
    useState(false);
  const [activeDot, setActiveDot] = useState(0);

  const closeRequestAnAppoinmentModal = () =>
    setIsRequestAnAppoinmentOpen(false);

  const bookList = [
    {
      id: 1,
      imgUrl: book1Img,
    },
    {
      id: 2,
      imgUrl: book2Img,
    },
    {
      id: 3,
      imgUrl: book3Img,
    },
    {
      id: 4,
      imgUrl: book4Img,
    },
  ];

  const serviceList = [
    {
      id: 1,
      title: "Free Psychological Assessments",
      icon: FaHeadSideVirus,
      url: "https://psychassessment.twinbrain.org/",
    },
    {
      id: 2,
      title: "Cognitive Behavioural Therapy",
      icon: FaDiagnoses,
      url: "https://cbt.healthbj-uk.org/",
    },
    {
      id: 3,
      title: "Family Financial Welbeing",
      icon: FaClinicMedical,
      url: "https://discountshop.healthcity.org.uk/product/family-financial-wellbeing/",
    },
    {
      id: 4,
      title: "Employees Assistance Programme (EAP)",
      icon: FaUserTie,
      url: "https://eap.healthbj-uk.org/",
    },
    {
      id: 5,
      title: "Group Programme",
      icon: FaUsers,
      url: "https://healthcity.org.uk/group-therapy-or-therapeutic-group/",
    },
    {
      id: 6,
      title: "Counselling Services",
      icon: FaUserClock,
      url: "https://counselling.healthbj-uk.org/",
    },
    {
      id: 7,
      title: "Couples Therapy",
      icon: FaUserFriends,
      url: "https://coupletherapy.healthbj-uk.org/",
    },
    {
      id: 8,
      title: "Mentoring for 18 Years+",
      icon: FaHandHoldingHeart,
      url: "https://discountshop.healthcity.org.uk/product/mentoring-for-18-years-plus-people/",
    },
    {
      id: 9,
      title: "Clinical or Health Psychology",
      icon: FaUserMd,
      url: "https://clinicalpsychology.healthbj-uk.org/",
    },
    {
      id: 10,
      title: "Free Psychological Qusetionnaires",
      icon: FaConnectdevelop,
      url: "https://psychassessment.twinbrain.org/services/free-self-assessment",
    },
    {
      id: 11,
      title: "Mentoring for Children and Young People",
      icon: FaFolderPlus,
      url: "https://discountshop.healthcity.org.uk/product/mentoring-for-children/",
    },
    {
      id: 12,
      title: "Free or Low-Cost Couselling and Therapy",
      icon: FaHandHoldingUsd,
      url: "https://gratis-christi-trust.com/free-or-low-cost-couselling-therapy/",
    },
    {
      id: 13,
      title: "Psychology Assessment",
      icon: FaCompass,
      url: "https://psychassessment.twinbrain.org/",
    },
    {
      id: 14,
      title: "Discount Shop",
      icon: FaShoppingBasket,
      url: "https://discountshop.healthcity.org.uk/shop-2/",
    },
    {
      id: 15,
      title: "Charitable and Community Project",
      icon: FaHandHoldingUsd,
      url: "https://gratis-christi-trust.com/",
    },
    {
      id: 16,
      title: "Free Holistic Health Resource",
      icon: FaBrain,
      url: "https://twinbrain.org/",
    },
    {
      id: 17,
      title: "Emotional Health Screening or Initial Psychology Assessment Tool",
      icon: FaBriefcaseMedical,
      url: "https://psychassessment.twinbrain.org/services/emotional-health-screening",
    },
    {
      id: 18,
      title: "Clinical Supervision and Support Services",
      icon: FaHeadset,
      url: "https://discountshop.healthcity.org.uk/product/clinical-supervision-and-support-services/",
    },
  ];

  const reviewList = [
    {
      id: 1,
      comment:
        "In order to provide the best service possible to our patients/clients, CBT Services completes regular reviews of the work conducted by our employed and associate therapists. Having completed our most recent review, I just wanted to say thank you for your continued hard work and professionalism. Your outcomes demonstrate an excellent level of clinical effectiveness consistent with the requirements of CBT Services. Thank you again for your continued dedication",
      reviewer: "Clinical Director at CBT Services, UK",
    },
    {
      id: 2,
      comment:
        "I was looking for a therapist I could connect with. A therapist who understands my needs  and is interested in helping me. I feel I can connect with you and you are the therapist for me.",
      reviewer: "Alex, London, UK",
    },
    {
      id: 3,
      comment:
        "My therapy sessions were really effective and focused. I found his approach interesting and the objectives of the sessions were met as it made me rediscover myself and provided me with tools to help me in the future. I will recommend him",
      reviewer: "Rauf, London",
    },
  ];

  const bookSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
    beforeChange: (current, next) => setActiveDot(next),
    appendDots: (dots) => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`mx-3 w-[24px] h-[4px] ${i === activeDot ? "deep-green-bg" : "bg-[#ddd]"
          } mt-3`}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const reviewSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
    adaptiveHeight: true,
  };

  useEffect(() => {
    // Function to scroll to the target section
    const scrollToSection = () => {
      if (hashValue) {
        const targetElement = document.getElementById(hashValue);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", offset: -200 });
        }
      } else {
        // Scroll to the top if there's no hash value
        document.documentElement.scrollTop = 0;
      }
    };

    // Scroll to the section when the component mounts or hash value changes
    scrollToSection();
  }, [location, hashValue]);

  return (
    <div>
      {/* Banner */}
      <section className="blue-bg off-white-text">
        <div className="flex flex-col lg:flex-row items-center gap-10 px-5 lg:px-24 py-8">
          <div className="w-full lg:w-1/2">
            <div className="w-full lg:w-[95%]">
              <h2 className="text-[22px] md:text-[30px] font-bold">
                Health City is an Occupational and Family focused Counselling, Therapy, and Best Holistic Healthcare provider globally.
              </h2>
              <p className="text-[15px] lg:text-[17px]  my-3">
                Our Mission is to contribute to improve your wellbeing now and this may contribute to improve the wellbeing of your family, 
                the people around you, your community and your future generations. We assist individuals and Families to attain Emotional, 
                Physical, Spiritual, Financial, Housing, Legal, Family Counseling, etc. We are the best holistic healthcare provider 
                around the world to help people stay happy and safe at home and workplace.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src={bannerImg}
              alt="banner image"
              className="rounded-md w-full"
            />
          </div>
        </div>
      </section>
      {/* Banner */}

      {/* e-Books */}
      <section>
        <div className="my-14 px-5 lg:px-24">
          <h2 className="common-title text-center">Free e-Books</h2>
          <div className="mt-3">
            <Slider {...bookSettings}>
              {bookList?.map((book) => (
                <div key={book.id}>
                  <img src={book.imgUrl} alt="e-books" className="" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="mt-20 text-center">
            <a
              href="https://discountshop.healthcity.org.uk/"
              target="_blank"
              className="btn common-btn"
            >
              Get Yourself a Free e-Book Now
            </a>
          </div>
        </div>
      </section>
      {/* e-Books */}

      {/* Training section start */}
      <section style={{
        backgroundImage: `url(${webinar})`,
        backgroundSize: "content",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }} className="w-full h-[347px] ">
        <div className="px-5 lg:px-24 py-8 w-full h-full bg-[#5c9516be] flex items-center">
          <div className="text-[#fff] flex flex-col gap-5 ">
            <h1 className="text-[50px] leading-tight font-bold">Transform Your Career with Expert-Led <br /> Training Programs</h1>
            <p className="text-[20px]">Discover our range of live webinars, self-taught online courses, and in-person training designed to elevate your skills.</p>
            <Link to="/health-city/webinar">
              <button className="bg-[#01143A] py-[10px] px-[15px] w-[200px] rounded-3xl">Explore Our Training</button>
            </Link>
          </div>
        </div>
      </section>
      {/* Training section end */}

      {/* About Us */}
      <section>
        <div className="my-14 px-5 lg:px-24">
          <h2 className="common-title text-center">About Us</h2>
          <div className="mt-3 w-full lg:w-3/4 mx-auto">
            <iframe
              width="918"
              height="518"
              src="https://www.youtube.com/embed/HRM862LUcrA"
              title="How We May Assist You Video V 27 12 2023"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-[240px] md:h-[500px]"
            ></iframe>
          </div>
        </div>
      </section>
      {/* About Us */}

      {/* Recovery Records */}
      <section>
        <div className="my-14 px-5 lg:px-24">
          <h2 className="common-title">Our Recovery Records</h2>
          <div className="mt-3">
            <h4 className="text-[18px] md:text-[20px] text-[#9b9b9b] font-bold">
              90-98% of our clients report satisfaction and good recovery in feedback or self-report questionnaires about us because we are the best healthcare provider.
            </h4>
            <p className="text-[16px] lg:text-[18px]">
              If you have medical insurance, contact us directly for fast-track appointment. Don't wait to come to us through and being delayed by third-party middlemen.
              We will support you in dealing with your Insurer.
            </p>
          </div>
        </div>
      </section>
      {/* Recovery Records */}

      {/* Our Services */}
      <section id="service-section">
        <div className="my-16 px-5 lg:px-24">
          <div className="deep-green-bg off-white-text p-3">
            <h3 className="text-[32px] md:text-[40px] text-center">
              WHAT ARE YOU LOOKING FOR ?
            </h3>
            <h2 className="common-title text-center">Our Services</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {serviceList?.map((service) => (
                <li
                  className="px-2 py-5 border-t-2 border-[#f1f1f1]"
                  key={service.id}
                >
                  <a
                    href={service.url}
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    <service.icon className="text-[28px] md:text-[36px]" />
                    <span className="text-[16px] md:text-[18px] font-semibold">
                      {service.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* Our Services */}

      {/* Help You */}
      <section>
        <div className="my-14 px-5 lg:px-24">
          <h2 className="common-title text-center">How Can We Help You</h2>
          <div className="mt-3 flex flex-col md:flex-row gap-3 md:gap-8">
            <div className="w-full md:w-2/5 lg:w-1/4">
              <div className="flex justify-center md:justify-start">
                <img
                  src={selemoImg}
                  alt="DR. FRANCIS SELEMO"
                  className=" h-[250px] rounded-md"
                />
              </div>
              <p className="block md:hidden mt-1">
                <small className="font-bold text-[#84c440]">
                  DR. FRANCIS SELEMO
                </small>
              </p>
            </div>
            <div className="w-full md:w-3/5 lg:w-3/4">
              <div>
                <p className="text-[16px] lg:text-[18px]">
                  {`We can help you select the appropriate expert and the best holistic healthcare provider specialist for your treatment
                  or service regarding specialized consultants (including nationality and religion if it is important for you), 
                  level of intensity of treatment or services, number, and type of sessions (face-to-face, Skype, live chat, telephone,
                  or Online). We guarantee the safety of personal information. Earn new colors of life.`}
                </p>
                <p className="hidden md:block">
                  <small className="font-bold text-[#84c440]">
                    DR. FRANCIS SELEMO
                  </small>
                </p>
              </div>
              <div className="mt-3">
                <button
                  className="btn common-btn"
                  onClick={() => setIsRequestAnAppoinmentOpen(true)}
                >
                  <span>Request An Appointment</span>
                  <MdArrowRightAlt className="text-[22px] mt-[3px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Help You */}

      {/* Customers Say */}
      <section>
        <div className="my-14 px-5 lg:px-24">
          <h2 className="common-title text-center">What Our Customers Say</h2>
          <div className="w-full md:w-4/5 lg:w-3/5 mx-auto mt-3">
            <Slider {...reviewSettings}>
              {reviewList?.map((review) => (
                <div key={review.id} className="px-5">
                  <div className="card deep-green-bg off-white-text shadow-md text-[14px] md:text-[16px] h-[400px] md:h-[300px] lg:h-[240px]">
                    <div className="card-body">
                      <p className="font-medium italic">{`"${review.comment}"`}</p>
                      <div className="flex justify-between">
                        <p className="font-bold">{review.reviewer}</p>
                        <FaQuoteRight className="text-[32px]" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      {/* Customers Say */}

      {/* Big Sale */}
      <section>
        <div className="my-14 px-5 lg:px-24">
          <a
            href="https://discountshop.healthcity.org.uk/shop-2/"
            target="_blank"
          >
            <img src={bigSaleGif} alt="Big Sale gif" className="w-full" />
          </a>
        </div>
      </section>
      {/* Big Sale */}

      {/* Advertise */}
      <section>
        <div className="my-14 px-5 lg:px-24">
          <img src={advertiseGif} alt="Advertise gif" className="w-full" />
        </div>
      </section>
      {/* Advertise */}

      {/* Counter */}
      <section>
        <div className="counter-overlay py-20 flex items-center justify-center bg-[#84c440d7]">
          <ScrollTrigger
            onEnter={() => setIsCounterTrigger(true)}
            onExit={() => setIsCounterTrigger(false)}
          >
            <div className="px-5 lg:px-24 text-center off-white-text grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="counter-heading">
                  {isCounterTrigger && (
                    <CountUp start={0} end={90} duration={2} delay={0} />
                  )}{" "}
                  yrs+
                </p>
                <p className="font-medium">
                  Core Therapy Team Combined Experience
                </p>
              </div>
              <div>
                <p className="counter-heading">
                  {isCounterTrigger && (
                    <CountUp start={0} end={25} duration={2} delay={0} />
                  )}
                  +
                </p>
                <p className="font-medium">Professionals</p>
              </div>
              <div>
                <p className="counter-heading">
                  {isCounterTrigger && (
                    <CountUp start={0} end={450} duration={2} delay={0} />
                  )}
                  +
                </p>
                <p className="font-medium">Happy Patients</p>
              </div>
              <div>
                <p className="counter-heading">
                  {isCounterTrigger && (
                    <CountUp start={0} end={500} duration={2} delay={0} />
                  )}
                  +
                </p>
                <p className="font-medium">Completed Treatments</p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
      {/* Counter */}

      {isRequestAnAppoinmentOpen && (
        <RequestAnAppoinment
          closeRequestAnAppoinmentModal={closeRequestAnAppoinmentModal}
        />
      )}
    </div>
  );
};

export default Home;
