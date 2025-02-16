import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Error from "../Error/Error";
import Home from '../Header/NavbarPages/Home'
import Statistics from "../Header/NavbarPages/Statistics";
import Dashboard from "../Header/NavbarPages/Dashboard";
import Upcomig from "../Header/NavbarPages/Upcomig";




import AllProduct from "../HomePages/AllProduct";
import Laptop from "../HomePages/Laptop";
import Mackbook from '../HomePages/Mackbook';
import Iphone from '../HomePages/Iphone';
import Watch from '../HomePages/Watch';
const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <Error></Error>,
          children: [
            {
              path: '/',
              element: <Home></Home>,
              loader: () => fetch('./public/Alldata.json'),
                 children: [
                  {
                    path: '/allproduct',
                    element: <AllProduct></AllProduct>
                  },
                  {
                    path: '/labtop',
                    element: <Laptop></Laptop>
                  },
                  {
                  
                      path: '/mackbook',
                      element:<Mackbook></Mackbook>
                  },
                  {
                    path: '/iphone',
                    element: <Iphone></Iphone>
                  },
                  {
                    path: '/watch',
                    element: <Watch></Watch>
                  },
                 ]
            },
            {
              path: '/statistics',
              element: <Statistics></Statistics>
            },
            {
              path: '/dashboard',
              element: <Dashboard></Dashboard>
            },
            {
              path: '/upcomig',
              element: <Upcomig></Upcomig>
            }
          ]
    },
  ]);


  export default router;