import React from "react";
import ReactDOM from "react-dom/client";

/**
 * AppLayout
 * 1. Header
 * -logo
 * -Nav items
 * 2. Body 
 * -search
 * -RestaurantContainers
 *   -- restra carts
 *     -img
 *     -name
 *     -cusine
 *     -rating
 *     -timing
 * 3. footer 
 * -copyright 
 * -links
 */

const RestaurantCarts = (props) =>{
    return (
        <div className="res-cart">
            <img className="res-logo" alt="res-logo" src="https://b.zmtcdn.com/data/pictures/3/21102413/aacb05f093fd1002da72056caf87b919_featured_v2.jpg?output-format=webp"></img>
            <h3>{props.resName}</h3>
            <h4>{props.resCusines}</h4>
            <h4>{props.resDel}</h4>
            <h4>{props.resRate}</h4>
        </div>
    )
}

const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCarts
                resName="Madhuram foods"
                resCusines="North India, Western, Italian"
                resDel="30 Minutes"
                resRate="4.4"
                />
                <RestaurantCarts
                resName="KFC"
                resCusines="Burgers, Coldrinks, Fries"
                resDel="10 Minutes"
                resRate="4.8"
                /> 
            </div>
        </div>
    )
}

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <div className="logo">
                    <img className="logo-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnqv3WhcmAkrbmhlr3ARNwybuGX0SLI9thuQ&s"></img>
                </div>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return (
    <div className="app">
        <Header/>
        <Body/>
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);