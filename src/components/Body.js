import RestaurantCarts from "./RestaurantCarts";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () =>{

    const [listOfRestaurants, setlistofRestaurants] = useState([]);
 
    const [searchedList , setSearchedList] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.743214&lng=75.8504904&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setlistofRestaurants(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
        setSearchedList(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return listOfRestaurants == 0 ?(
        <Shimmer/>
    ) : (
        <div className="body">
            <div className="button">
            <div className="search">
                <input type="text" className="search-text" value={searchText} onChange={(e)=> {setSearchText(e.target.value);}}/>
                <button className="search-btn" onClick={()=>{
                    filterRes = listOfRestaurants.filter(
                    (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setSearchedList(filterRes);
                }}>Search</button>
            </div>
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
                    searchedList.map( (restaurant) =>(
                        <Link className="link" to={"/restaurantmenu/" + restaurant.info.id} key={restaurant.info.id}>
                            <RestaurantCarts resData={restaurant}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;