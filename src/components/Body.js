import RestaurantCarts from "./RestaurantCarts";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () =>{

    const [listOfRestaurants, setlistofRestaurants] = useState(resList);

    return (
        <div className="body">
            <div className="button">
                <button 
                className="filter-btn" 
                onClick={()=>{
                    filteredList =listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    )
                    setlistofRestaurants(filteredList);
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map( (restaurant) =>(
                        <RestaurantCarts key={restaurant.info.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;