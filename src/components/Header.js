import { useState } from "react";
import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";

const Header = () =>{

    const [logBtn, setLogBtn] = useState("Login")
    console.log("Header Rendered");

    const status = useStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <div className="logo">
                <Link to="/" className="link"><img className="logo-img" src={LOGO_IMG}></img></Link>
                </div>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status : 
                        {status ? "🟢" : "🔴"}
                    </li>
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/About" className="link">About Us</Link></li>
                    <li><Link to="/Contact" className="link">Contact Us</Link></li>
                    <li><Link to="/Grocery" className="link">Grocery</Link></li>
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