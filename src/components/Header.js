import { useContext, useState } from "react";
import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
import Logged from "../utils/Logged";
import { useSelector } from "react-redux";

const Header = () =>{

    const [logBtn, setLogBtn] = useState("Login")
    console.log("Header Rendered");

    const status = useStatus();

    const user = useContext(Logged);

    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems);
    
    return (
        <div className="flex justify-between bg-red-50 shadow-lg m-2">
            <div className="w-36">
                <div className="logo">
                <Link to="/"><img className="logo-img" src={LOGO_IMG}></img></Link>
                </div>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">Online Status : 
                        {status ? "🟢" : "🔴"}
                    </li>
                    <li className="px-4 hover:bg-red-400 hover:shadow-lg hover:rounded-md"><Link to="/" className="link">Home</Link></li>
                    <li className="px-4 hover:bg-red-400 hover:shadow-lg hover:rounded-md"><Link to="/About" className="link">About Us</Link></li>
                    <li className="px-4 hover:bg-red-400 hover:shadow-lg hover:rounded-md"><Link to="/Contact" className="link">Contact Us</Link></li>
                    <li className="px-4 hover:bg-red-400 hover:shadow-lg hover:rounded-md"><Link to="/Grocery" className="link">Grocery</Link></li>
                    <li className="px-4 font-bold"><Link to="/cart" >🛒({cartItems.length})</Link></li>
                    <button className="mx-4 px-1 bg-green-200 rounded-md" onClick={()=>{
                        return logBtn == "Login" ? 
                        (setLogBtn("Logout")) : (setLogBtn("Login"))
                    }}>{logBtn}</button>
                    <li className="px-4 font-bold">{user.loggedUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;