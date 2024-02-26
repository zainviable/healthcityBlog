import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import {
  MdOutlineQueryBuilder,
  MdLocationOn,
  MdLocalPhone,
  MdKeyboardArrowDown,
} from "../../../utils/Icons";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../../../assets/img/logo.jpg";

const Navbar = ({
  setIsBookAppoinmentModalOpen,
  isTeamMenuOpen,
  setIsTeamMenuOpen,
}) => {
  const [isSticky, setSticky] = useState(false);
  const noticeSectionRef = useRef(null);

  const noticeList = [
    {
      id: 1,
      title: "WORKING HOURS",
      description: "7 Days a Week from 6am - 9pm",
      icon: MdOutlineQueryBuilder,
    },
    {
      id: 2,
      title: "LOCATION AND ADDRESS",
      description: "16 Pepper St, London E14 9RP, UK",
      icon: MdLocationOn,
    },
    {
      id: 3,
      title: "HOTLINE & GENERAL INFORMATION",
      description: "0333 800 3006 // 0333 789 0012",
      icon: MdLocalPhone,
    },
  ];

  const navList = (
    <>
      <li className="nav-item">
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      <li
        className="nav-item relative"
        onClick={() => setIsTeamMenuOpen(!isTeamMenuOpen)}
      >
        <p className="flex justify-between items-center">
          <span>Team</span>{" "}
          <MdKeyboardArrowDown
            className={`text-[24px]  ${
              isTeamMenuOpen
                ? "transform rotate-180 transition-transform duration-300 ease-in-out"
                : "transition-transform duration-300 ease-in-out"
            }`}
          />
        </p>

        {isTeamMenuOpen && (
          <ul className="p-2 w-48 absolute top-[50px] -left-[18px] white-bg border-0 shadow-md rounded-lg hidden lg:block">
            <li className="nav-item">
              <NavLink to="/team/non-clinical">Non-Clinical Team</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/team/clinical">Clinical Team</NavLink>
            </li>
          </ul>
        )}
        {isTeamMenuOpen && (
          <ul className="p-2 w-48 white-bg  lg:hidden">
            <li className="nav-item">
              <NavLink to="/team/non-clinical">Non-Clinical Team</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/team/clinical">Clinical Team</NavLink>
            </li>
          </ul>
        )}
      </li>
      <li className="nav-item">
        <NavLink to="/reviews">Reviews</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="contact-us">Contact Us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/terms-conditions">Terms and Conditions</NavLink>
      </li>
    </>
  );

  const handleScroll = () => {
    if (
      window.scrollY >
      noticeSectionRef.current.offsetTop + noticeSectionRef.current.offsetHeight
    ) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      {/* notice */}
      <div className="bg-[#F0F0F0]" ref={noticeSectionRef}>
        <div className="grid grid-flow-col-1 md:grid-cols-3 justify-center md:justify-start gap-2 lg:gap-0 md:px-5 lg:px-24 py-5">
          {noticeList?.map((notice, index) => (
            <div
              className={`flex items-center ${
                notice.id === 1
                  ? "md:justify-start"
                  : notice.id === 2
                  ? "md:justify-center"
                  : notice.id === 3
                  ? "md:justify-end"
                  : ""
              }  gap-2 ${
                noticeList.length - 1 === index
                  ? ""
                  : "md:border-r-2 border-white"
              }`}
              key={notice.id}
            >
              <notice.icon className="notice-icon" />
              <div>
                <h2 className="notice-title text-[16px]">{notice.title}</h2>
                <p className="text-[14px] md:text-[12px] lg:text-[14px]">
                  {notice.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* notice */}

      {/* navbar */}

      <div
        className={`navbar white-bg justify-center md:px-5 lg:px-24 py-2 ${
          isSticky ? "fixed top-0 z-[101] shadow-xl" : ""
        }`}
      >
        <div className="navbar-start gap-1 w-3/5 lg:w-auto">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={1}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow white-bg rounded-box w-56 font-medium"
            >
              {navList}
            </ul>
          </div>
          <Link to="/" className="w-[260px] md:w-[300px] h-[55px] md:h-[100px]">
            <img
              src={logoImg}
              alt="website logo"
              className="w-full h-full rounded-md"
            />
          </Link>
        </div>

        <div className="navbar-center justify-center w-[57%] hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-1 font-medium">
            {navList}
          </ul>
        </div>

        <div className="navbar-end">
          <button
            className="btn common-btn  text-[12px] md:text-[17px] w-[120px] md:w-[200px]"
            onClick={() => {
              setIsBookAppoinmentModalOpen(true);
            }}
          >
            Book Appointment
          </button>
        </div>
      </div>

      {/* navbar */}
    </nav>
  );
};

export default Navbar;
