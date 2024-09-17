import { useState } from "react";

const User =({name})=>{

    const [count ] = useState(0);
    const [count2 ] = useState(2);

    return <div className="user-card">
        <h3>Count by function= {count} (Hooks)</h3>
        <h3>Count by function= {count2} (Hooks)</h3>
        <h2>Name = {name}</h2>
        <h3>City = Indore</h3>
        <h3>Contact = harshitchoudhary000012@gmail.com</h3>
    </div>
}

export default User;