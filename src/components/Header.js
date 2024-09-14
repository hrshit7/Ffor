import { useState } from "react";
import { LOGO_IMG } from "../utils/constants";

const Header = () =>{

    const [logBtn, setLogBtn] = useState("Login")

    return (
        <div className="header">
            <div className="logo-container">
                <div className="logo">
                    <img className="logo-img" src={LOGO_IMG}></img>
                </div>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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