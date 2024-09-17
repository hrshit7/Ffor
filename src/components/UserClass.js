import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log(props);

        this.state = {
            count : 0,
            UserInfo:{
                login: "Dummy",
                location: "Default",
            },
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/hrshit7");
        const json = await data.json();
        this.setState({UserInfo:json});
        console.log(json);
    }

    componentDidUpdate(){
        console.log("Component Did Update");
        
    }

    componentWillUnmount(){
        console.log("Component Will Unmounted");
        
    }

    render(){
        return <div className="user-card">
            <h3>Count by Class = {this.state.count} (state)</h3>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count+1,
                });
            }}>Click To Increment Count</button>
            <h2>Name = {this.state.UserInfo.login}</h2>
            <h3>Location = Indore</h3>
            <h3>Contact = harshitchoudhary000012@gmail.com</h3>
        </div>  
    }
}

export default UserClass;


/**
 * Mounting
 *  - constructor called "Dummy"
 *  - render "Dummy"
 *  - <HTML Dummy>
 *  ComponentDidMount()
 *  - <API call>
 *  -this.setstate()
 * 
 * Updating
 *  -reder "Updated API date"
 *  - <HTML - New api data>
 *  ComponentDidUpdate()
 * 
 * Unmounting
 *  ComponentWillUnmounted() - means when will the data remove from the page ,by when we go to another page
 * 
 */