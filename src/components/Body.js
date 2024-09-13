import RestaurantCarts from "./RestaurantCarts";
import resList from "../utils/mockData";

const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map( (restaurant) =>(
                        <RestaurantCarts key={restaurant.info.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;