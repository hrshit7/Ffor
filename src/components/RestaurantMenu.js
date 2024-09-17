import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import MenuItems from "./MenuItem";

const RestaurantMenu = ()=>{

    const [menu, setMenu] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[])

    const {resid} = useParams();
    
    const fetchMenu = async()=>{
        data = await fetch(MENU_API+resid);
        json = await data.json();
        setMenu(json?.data);
    }
    
    if(menu==null){
        return <Shimmer/>;
    }
    
    const {name, cuisines, costForTwoMessage} = menu?.cards[2]?.card?.card?.info;

    const {itemCards} = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return <div>
        <div className="res-header">
            <h1> {name} </h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
        </div>
        <div className="menu-cart">
            {itemCards.map((item)=> <MenuItems key={item.card.info.id} itemData = {item.card.info}/>)}
        </div>    
    </div>
}

export default RestaurantMenu;