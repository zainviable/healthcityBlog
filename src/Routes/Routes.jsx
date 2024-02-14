import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Reviews from "../Pages/Reviews/Reviews";
import Team from "../Pages/Team/Team";
import TermsAndConditions from "../Pages/TermsAndConditions/TermsAndConditions";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AboutUs from "../Pages/AboutUs/AboutUs";
import QuizLayout from "../Layouts/QuizLayout";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import TeamMemberDetail from "../Pages/TeamMemberDetail/TeamMemberDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/team/non-clinical",
        element: <Team />,
      },
      {
        path: "/team/clinical",
        element: <Team />,
      },
      {
        path: "/:teamId/details/:memberId",
        element: <TeamMemberDetail />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/terms-conditions",
        element: <TermsAndConditions />,
      },
      // Wildcard route for error handling
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/quiz",
    element: <QuizLayout />,
  },
  {
    path: "/quiz/result",
    element: <QuizLayout />,
  },
]);
