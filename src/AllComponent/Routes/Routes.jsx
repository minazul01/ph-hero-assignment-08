import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../../App";
import Error from "../Error/Error";
import Home from '../Header/NavbarPages/Home'
import Statistics from "../Header/NavbarPages/Statistics";
import Dashboard from "../Header/NavbarPages/Dashboard";
import Upcomig from "../Header/NavbarPages/Upcomig";
import Card from "../HomePages/Card";








const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <Error></Error>,
          children: [
            {
              path: '',
              element: <Navigate to={'/allproduct'}></Navigate>
            },
            {
              path: '/',
              element: <Home></Home>,
                 children: [
                  // {
                  //   path: '/',
                  //   element: <Card></Card>,
                  //   loader: () => fetch('../Alldata.json')
                    
                  // },
                  {
                    path: '/category/:category',
                    element: <Card></Card>,
                    loader: () => fetch('../Alldata.json')
                    
                  },
                  {
                    path: '/allproduct',
                    element: <Card></Card>,
                    loader: () => fetch('../Alldata.json')
                    
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