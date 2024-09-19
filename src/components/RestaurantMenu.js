import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import MenuItems from "./MenuItem";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = ()=>{

    const {resid} = useParams();

    const menu = useRestaurantMenu(resid);
    
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
            {itemCards?.map((item)=> <MenuItems key={item?.card?.info?.id} itemData = {item?.card?.info}/>)}
        </div>    
    </div>
}

export default RestaurantMenu;