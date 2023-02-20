import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/Main";
import DashboardLayout from "../layouts/Dashboard";
import DashboardOverview1 from "../views/dashboard-overview-1/Main";
  
import Profile from "../views/profile/Main";
import Welcome from '../views/welcome/Main'
import Pricing from "../views/pricing/Main";
 
import Faq from "../views/faq/Main";
 
import CrudDataList from "../views/crud-data-list/Main";
import CrudForm from "../views/crud-form/Main";


import Login from "../views/login/Main";
import Register from "../views/register/Main";
import ErrorPage from "../views/error-page/Main";

 
import Modal from "../views/modal/Main";
    
function Router() {
  const routes = [
    {
      path: "/",
      element: <MainLayout />,
      children:  [ 
          {
            path:"/",
            element: <Welcome />, 
          }
        ]
      
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "/dashboard",
          element: <DashboardOverview1 />,
        },
      
        
        
        {
          path: "/dashboard/profile",
          element: <Profile />,
        },
         
        {
          path: "/dashboard/modal",
          element: <Modal />,
        },
         
         
       
       
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/error-page",
      element: <ErrorPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
