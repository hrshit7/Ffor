import { useDispatch } from "react-redux";
import {addItems} from "../utils/cartSlice";
import {RES_LOGO } from "../utils/constants";

const ItemList = ({item})=>{
    const {name, price, defaultPrice, description, imageId} = item?.card?.info;

    const dispatch = useDispatch();

    const handleAddItem = ()=>{
        dispatch(addItems(item));
    }

    return (
        <div className="flex justify-between shadow-lg">
        <div className="text-left p-4 m-2">
            <h2 className="font-bold p-1">{name}</h2>
            <h3 className="font-bold text-sm p-1">{price/100 || defaultPrice/100}💰</h3>
            <h2 className="text-sm p-1 w-[450px]">{description}</h2>
        </div>
        <div>
            <label className="bg-black text-white absolute ml-4 my-8 px-2 rounded-md cursor-pointer" onClick={handleAddItem}>Add+</label>
        <div  className="w-[100px] m-6 mt-12 "> 
            <img src={RES_LOGO + imageId} className="rounded-full"></img>
        </div>
        </div>
        </div>
    )
}

export default ItemList;