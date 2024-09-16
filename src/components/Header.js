import { useEffect, useState } from "react";
import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () =>{

    const [logBtn, setLogBtn] = useState("Login")
    console.log("Header Rendered");

    return (
        <div className="header">
            <div className="logo-container">
                <div className="logo">
                    <img className="logo-img" src={LOGO_IMG}></img>
                </div>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About Us</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="log-btn" onClick={()=>{
                        return logBtn == "Login" ? 
                        (setLogBtn("Logout")) : (setLogBtn("Login"))
                    }}>{logBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;