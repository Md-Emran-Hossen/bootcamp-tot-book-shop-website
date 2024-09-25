
import CommonLayout from '../layout/CommonLayout'
import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage";
import { ROUTES } from "../routes";
import FaqPage from '../faq/FaqPage';
import BookDetails from '../book/BookDetails';
import BookList from '../book/BookList';
import About from '../about/About';
import Blog from '../blog/Blog';
import ErrorPage from '../errorPage/ErrorPage';

const router = createBrowserRouter([
    {
      /* path: "/", */
       path: `${ROUTES.HOME}`,
      
      element: <CommonLayout />, 
      errorElement: <ErrorPage></ErrorPage>,
  
      children: [
       
        {
          path: `${ROUTES.HOME}`,
          element: <Homepage></Homepage>,
        },
        {
          path: `${ROUTES.FAQ}`,
          
          element: <FaqPage></FaqPage>,
        },
        {
          path: `${ROUTES.ABOUT}`,
          
          element: <About></About>,
        },
        {
          path: `${ROUTES.BLOG}`,
          
          element: <Blog></Blog>,
        },
        {
          path: `${ROUTES.BOOKS}`,
          
          element: <BookList></BookList>,
        },

  
        {
          path: `${ROUTES.SINGLE_BOOKS.STATIC}`,
          element: <BookDetails></BookDetails>,
        },
      ],
      
    },
  ]);
  export default router;
