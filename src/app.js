import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";   
import Contact from "./components/Contant";
import Errorpage from "./components/Errorpage";
import RestaurantMenu from "./components/RestaurantMenu";
import Logged from "./utils/Logged";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(()=>import("./components/Grocery"))



const AppLayout = () =>{

    const [newUser, setNewUser] = useState();

useEffect(()=>{
    // dummy authentication
    data = {
        name: "Harshit",
    }
    setNewUser(data.name)
}, []);

    return (
    <Provider store={appStore}>
    <Logged.Provider value={{loggedUser: newUser, setNewUser}}>
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
    </Logged.Provider>
    </Provider>
    )
}

const createRoutes = createBrowserRouter([
    {
        path : "/",
        element: <AppLayout/>,
        children: [
        {
            path: "/cart",
            element: <Cart/> ,
        },    
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