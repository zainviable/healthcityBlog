import React, { useEffect } from "react";
import errorImg from "../../../assets/img/healthcityuk_error_page.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 min-h-screen">
      <img src={errorImg} alt="error page image" className="h-[300px]" />
      <Link to="/" className="btn common-btn">
        Back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
