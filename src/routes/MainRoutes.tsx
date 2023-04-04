import {Routes, Route, useRoutes} from "react-router-dom";
import {Home} from '../pages/home';
import { NotFound } from "../pages/notFound";
// import { Contos } from "../pages/conto";
import { Contos } from "../pages/Contos";
import { User } from "../pages/Users";
import { UpdateUser } from "../pages/Users/update";
export const MainRoutes=()=>{

     return useRoutes([  
          {path: "/", element: <Home/>},
          {path: "/contos", element: <Contos/>},
          {path: "/users", element: <User/>},
          {path: "/users/update", element: <UpdateUser/>},
          {path: "/*", element: <NotFound/>},
         
     ])
   
}