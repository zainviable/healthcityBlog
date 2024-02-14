import React from "react";

const Footer = () => {
  return (
    <footer className="blue-bg off-white-text py-10">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-0 px-5 lg:px-24">
        <div>
          <p>
            <small>
              Davenport House, 16 Pepper St, London E14 9RP, United Kingdom
            </small>
          </p>
          <p>
            <small>{`Copyright © 2024 - Enaikidigha Ltd (T/A Health City. All Rights
          Reserved.)`}</small>
          </p>
        </div>
        <p>
          <small>Made with ❤ by Nexalinx</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
