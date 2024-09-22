import { RES_LOGO } from "../utils/constants";

const RestaurantCarts = (props) =>{
    const {resData} = props; //optimize it
    const {name, cuisines, costForTwo, avgRating} = resData?.info;
    return (
        <div className="m-4 p-2 w-[220px] bg-red-100 rounded-lg hover:bg-red-400">
            <img className="res-logo h-[175px] w-[200px]" alt="res-logo" src={RES_LOGO+ resData.info.cloudinaryImageId}></img>
            <h3 className="font-bold py-4 text-lg"> {name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} Star</h4>
        </div>
    )
}

export const FastRestaurantsCarts = (RestaurantCarts) =>{
    return (props)=>{
        return <div>
            <label className="absolute bg-black text-white m-2 rounded-sm ">Fast Delivery </label>
            <RestaurantCarts {...props}/>
            
        </div>
    }
}

export default RestaurantCarts;