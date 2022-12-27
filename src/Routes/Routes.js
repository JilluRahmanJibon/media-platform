import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Layout/Root";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        errorElement:<ErrorPage/>,
        path: '/', element: <Root />, children: [
        
            { path: '/', element: '' },
            { path: '/', element: '' },
            { path: '/', element: '' },
            { path: '/', element: '' },
    ] },
     
])

export default router