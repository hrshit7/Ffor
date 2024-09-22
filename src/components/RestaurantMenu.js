import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import MenuItems , {VegMenuItems} from "./MenuItem";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import NewItems from "./NewItems";
import { useState } from "react";

const RestaurantMenu = ()=>{

    const {resid} = useParams();

    const menu = useRestaurantMenu(resid);
    
    const EnhancedMenuItems = VegMenuItems(MenuItems);

    const [showIndex, setShowIndex] = useState(null)

    if(menu==null){
        return <Shimmer/>;
    }
    
    const {name, cuisines, costForTwoMessage} = menu?.cards[2]?.card?.card?.info;

    const {itemCards} = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const newItems = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((res)=>res?.card?.["card"]?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return <div className="ml-8">
        <div className="text-center mx-auto p-4 border border-black w-[500px] bg-red-50 my-4">
            <h1 className="font-bold text-2xl text-red-500 p-2"> {name} </h1>
            <p className="text-red-500 text-lg ">{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2 className="text-red-500 ">Menu</h2>
        </div>
        <div className="w-8/12 mx-auto shadow-lg">
        <label className="bg-yellow-600 text-slate-100 p-2 rounded-md text-lg">Special</label>
        <div className="menu-cart flex  flex-wrap ">
            {itemCards?.map((item)=> item?.card?.info?.isVeg ==1 ? 
            (<EnhancedMenuItems key={item?.card?.info?.id} itemData = {item?.card?.info}/>) :
            (<MenuItems key={item?.card?.info?.id} itemData = {item?.card?.info}/>))}
        </div>
        </div>
        <div className="text-center">
            {newItems?.map((item, index)=> <NewItems 
            key={item?.card?.card.title} 
            data = {item?.card?.card}
            accordian = {index == showIndex ? true : false}
            setShowIndex = {()=> {setShowIndex(index)}}
            />
            )}
        </div>

    </div>
}

export default RestaurantMenu;