import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import LandingPage from "../Pages/LandingPage";
import Forum from "../Pages/Forum";
import BrowseVenue from "../Pages/BrowseVenue";
import PostingForm from "../Pages/PostingForm";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {path:"/", element:<LandingPage/>},
        {path:"/SearchStudyMate", element:<Home/>},
        {path:"/forum", element: <Forum/> },,
        {path:"/venue", element: <BrowseVenue/>},
        {path:"/post-listing", element: <PostingForm/>},
        // {path:"/chat", element:<Chatroo/>},
        {path:"/about", element:<About/>}
    ]
  },
]);

export default router;
