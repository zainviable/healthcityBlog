import React, { useEffect, useState } from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import BackToTopBtn from "../components/BackToTopBtn/BackToTopBtn";

import BookAppoinmentModal from "../components/ModalComponent/BookAppoinmentModal";

const Main = () => {
  const location = useLocation();
  // console.log(location);
  const hashValue = location.hash.substring(1);
  // console.log("hv==", hashValue);

  const [isBookAppoinmentModalOpen, setIsBookAppoinmentModalOpen] =
    useState(false);
  const [isTeamMenuOpen, setIsTeamMenuOpen] = useState(false);

  const closeBookAppoinmentModal = () => setIsBookAppoinmentModalOpen(false);

  useEffect(() => {
    if (hashValue) {
      setIsBookAppoinmentModalOpen(false);
    }
    setIsTeamMenuOpen(false);
  }, [location, hashValue]);

  return (
    <div>
      <>
        <Navbar
          setIsBookAppoinmentModalOpen={setIsBookAppoinmentModalOpen}
          isTeamMenuOpen={isTeamMenuOpen}
          setIsTeamMenuOpen={setIsTeamMenuOpen}
        />
        <div onClick={() => setIsTeamMenuOpen(false)} className="min-h-screen">
          <Outlet setIsBookAppoinmentModalOpen={setIsBookAppoinmentModalOpen} />
        </div>
        <Footer />
      </>
      {/* <ScrollToTop /> */}
      <BackToTopBtn />

      {isBookAppoinmentModalOpen && (
        <BookAppoinmentModal
          closeBookAppoinmentModal={closeBookAppoinmentModal}
        />
      )}
    </div>
  );
};

export default Main;
