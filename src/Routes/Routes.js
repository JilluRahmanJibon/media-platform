import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Layout/Root";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Faq from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home/Home";
import Media from "../Pages/Media/Media";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import TermsConditions from "../Pages/Terms&Conditions/Terms&Conditions";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        errorElement: <ErrorPage />,
        path: '/', element: <Root />, children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/media', element: <Media /> },
            { path: '/about', element: <About /> },
            { path: '/contact', element: <Contact/> },

            { path: '/SignIn', element: <SignIn /> },
            { path: '/SignUp', element: <SignUp /> },

            { path: '/', element: '' },
            { path: '/', element: '' },

            { path: '/Faq', element: <Faq /> },
            { path: '/PrivacyPolicy', element: <PrivacyPolicy /> },
            { path: '/TermsConditions', element: <TermsConditions /> },
        ]
    },

])

export default router