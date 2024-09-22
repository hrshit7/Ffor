import { useState } from "react";
import ItemList from "./ItemList";

const NewItems = ({data, accordian, setShowIndex})=>{

    const handleClick = ()=>{
        setShowIndex();
    }
    
    return (
        <div className=" w-6/12 mx-auto my-4 bg-slate-100 p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{data?.title } ({data?.itemCards?.length})</span>
            <span>⏬</span>
        </div>
        { accordian && data?.itemCards?.map(items => <ItemList key={items?.card?.info?.id} item={items}/> )}
        </div>
    )
}
export default NewItems;