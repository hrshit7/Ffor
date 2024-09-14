import RestaurantCarts from "./RestaurantCarts";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () =>{

    let [listOfRestaurants, setlistofRestaurants] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.743214&lng=75.8504904&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setlistofRestaurants(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return listOfRestaurants == 0 ?(
        <Shimmer/>
    ) : (
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