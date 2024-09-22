const MenuItems =(props)=>{
    const {itemData} = props;
    const {name, price, ratings, imageId, defaultPrice} = itemData;
    const {rating} = ratings?.aggregatedRating;

    return <div className="items w-[210px] m-4 p-2 bg-red-100 rounded-lg hover:bg-red-500 ">
        <img className="rounded-md h-[175px] w-[200px]" alt="item-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + imageId}></img>
        <h3 className="font-bold p-3">{name}</h3>
        <div className="flex justify-between p-2  font-semibold" >
            <h4>{(price/100 || defaultPrice/100) +".00" }</h4>
            <h4>{rating}</h4>
        </div>
    </div>
}

export const VegMenuItems = (MenuItems)=>{
    return (props)=>{
        return <div>
            <label className="absolute bg-black text-slate-100 p-2 m-2 rounded-md">Veg</label>
            <MenuItems {...props}/>
        </div>
        
    }
}

export default MenuItems;