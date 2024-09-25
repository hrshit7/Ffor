import RestaurantCarts, {FastRestaurantsCarts} from "./RestaurantCarts";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
import Logged from "../utils/Logged";

const Body = () =>{

    const [listOfRestaurants, setlistofRestaurants] = useState([]);
 
    const [searchedList , setSearchedList] = useState([]);

    const [searchText, setSearchText] = useState("");

    const user = useContext(Logged);

    const EnhancedRestaurantCarts = FastRestaurantsCarts(RestaurantCarts);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.743214&lng=75.8504904&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setlistofRestaurants(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
        setSearchedList(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const {setNewUser, loggedUser} = useContext(Logged);

    const status = useStatus();
    if(status==false){
       return ( <h1>Connection Lost!!!!!</h1>)
    }

    return listOfRestaurants == 0 ?(
        <Shimmer/>
    ) : (
        <div className="body">
            <h1 className="m-2 p-2 font-bold text-lg">welcome 🎊, {user.loggedUser}</h1>
            <div className="button flex">
            <div className="search m-4 p-4">
                <input type="text" className="border border-solid border-black italic" value={searchText} onChange={(e)=> {setSearchText(e.target.value);}}/>
                <button className="search-btn px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                    filterRes = listOfRestaurants.filter(
                    (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setSearchedList(filterRes);
                }}>Search</button>
            </div>
            <div className="m-4 p-4 flex items-center">
            <button 
                className="filter-btn px-4 py-2 bg-gray-100 rounded-lg hover:bottom hover:bottom-solid hover:bottom-black" 
                onClick={()=>{
                    filteredList =listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    )
                    setSearchedList(filteredList);
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="m-4 p-4 flex items-center">
                <h1>User: <input className="border border-black" value={loggedUser} onChange={(e)=>setNewUser(e.target.value)}></input></h1>
            </div>
            </div>
            <div className="flex flex-wrap ">
                {
                    searchedList.map( (restaurant) =>(
                        <Link className="link" to={"/restaurantmenu/" + restaurant.info.id} key={restaurant.info.id}>
                            {restaurant?.info?.sla?.deliveryTime <= 40 ?
                            <EnhancedRestaurantCarts resData={restaurant}/> :
                            <RestaurantCarts resData={restaurant}/> }
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;