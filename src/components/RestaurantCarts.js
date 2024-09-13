import { RES_LOGO } from "../utils/constants";

const RestaurantCarts = (props) =>{
    const {resData} = props; //optimize it
    const {name, cuisines, costForTwo, avgRating} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;
    return (
        <div className="res-cart">
            <img className="res-logo" alt="res-logo" src={RES_LOGO+ resData.info.cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} Star</h4>
            <h4>{deliveryTime+" Minute"}</h4>
        </div>
    )
}

export default RestaurantCarts;