//import User from "./User"
import UserClass from "./UserClass";
import Logged from "../utils/Logged";

const About = ()=>{
    return <div>
        <h1>
            About
        </h1>
        <Logged.Consumer>
            {({loggedUser})=><h2>Logged User = {loggedUser}</h2>}
        </Logged.Consumer>
        <h3>This is a Food Delivery App 😊</h3>
        <UserClass name={"Hariom Choudhary"}/>
    </div>
}

export default About;