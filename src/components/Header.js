import { LOGO_IMG } from "../utils/constants";

const Header = () =>{
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
                </ul>
            </div>
        </div>
    )
}

export default Header;