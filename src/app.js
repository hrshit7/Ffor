import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";   
import Contact from "./components/Contant";
import Errorpage from "./components/Errorpage";
import RestaurantMenu from "./components/RestaurantMenu";

const Grocery = lazy(()=>import("./components/Grocery"))

const AppLayout = () =>{
    return (
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
    )
}

const createRoutes = createBrowserRouter([
    {
        path : "/",
        element: <AppLayout/>,
        children: [
        {
            path: "/restaurantmenu/:resid",
            element: <RestaurantMenu/> ,
        },
        {
            path: "/",
            element: <Body/> ,
        },    
        {
            path: "/about",
            element: <About/>,
        },
        {
            path: "/contact",
            element: <Contact/>,
        },
        {
            path: "/grocery",
            element: <Suspense fallback={<h1>LOADING.........</h1>}><Grocery/></Suspense>,
        },
        ],
        errorElement: <Errorpage/>,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={createRoutes} />);