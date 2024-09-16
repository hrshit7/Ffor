import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";   
import Contact from "./components/Contant";
import Errorpage from "./components/Errorpage";

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
            path: "/",
            element: <Body/> ,
            key: "1",
        },    
        {
            path: "/about",
            element: <About/>,
            key: "2",
        },
        {
            path: "/contact",
            element: <Contact/>,
            key: "3",
        },
        ],
        errorElement: <Errorpage/>,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={createRoutes} />);