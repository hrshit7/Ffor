import { LOGO_IMG, RES_LOGO } from "../utils/constants";

const ItemList = ({item})=>{
    const {name, price, defaultPrice, description, imageId} = item.card.info 
    return (
        <div className="flex justify-between shadow-lg">
        <div className="text-left p-4 m-2">
            <h2 className="font-bold p-1">{name}</h2>
            <h3 className="font-bold text-sm p-1">{price/100 || defaultPrice/100}💰</h3>
            <h2 className="text-sm p-1 w-[450px]">{description}</h2>
        </div>
        <div  className="w-[100px] m-6 mt-12 "> 
            <img src={RES_LOGO + imageId} className="rounded-full"></img>
        </div>
        </div>
    )
}

export default ItemList;