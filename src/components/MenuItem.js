const MenuItems =(props)=>{
    const {itemData} = props;
    const {name, price, ratings, imageId} = itemData;
    const {rating} = ratings?.aggregatedRating;

    return <div className="items">
        <img className="item-logo" alt="item-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + imageId}></img>
        <h3>{name}</h3>
        <div className="prra">
            <h4>{price/100+".00"}</h4>
            <h4>{rating}</h4>
        </div>
    </div>
}

export default MenuItems;