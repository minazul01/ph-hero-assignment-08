import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Error from "../Error/Error";
import Home from '../Header/NavbarPages/Home'
import Statistics from "../Header/NavbarPages/Statistics";
import Dashboard from "../Header/NavbarPages/Dashboard";
import Upcomig from "../Header/NavbarPages/Upcomig";
import AllProduct from "../HomePages/AllProduct";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <Error></Error>,
          children: [
            {
              path: '/',
              element: <Home></Home>,
                 children: [
                  {
                    path: '/allproduct',
                    element: <AllProduct></AllProduct>,
                  }
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