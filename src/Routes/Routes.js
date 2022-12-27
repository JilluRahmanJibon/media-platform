import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Layout/Root";
import Faq from "../Pages/FAQ/FAQ";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "../Pages/Terms&Conditions/Terms&Conditions";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        errorElement:<ErrorPage/>,
        path: '/', element: <Root />, children: [
        
            { path: '/', element: '' },
            { path: '/', element: '' },
            { path: '/', element: '' },
            { path: '/Faq', element: <Faq/>},
            { path: '/PrivacyPolicy', element: <PrivacyPolicy/> },
            { path: '/TermsConditions', element: <TermsConditions/> },
    ] },
     
])

export default router