import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList"
import { clearItems } from "../utils/cartSlice";

const Cart = ()=>{

    const cartItems = useSelector((store)=>store.cart.items)

    const dispatch = useDispatch();

    const handleDispatch = ()=>{
        dispatch(clearItems());
    }

    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl py-4">Cart</h1>
            <button className="text-xl bg-black m-2 p-2 rounded-md text-stone-50" onClick={handleDispatch}> Clear Cart</button>
            <div className="w-6/12 m-auto">
            {cartItems.length == 0 && (<h1 className="text-stone-400">The Cart is empty, please add items...</h1>) }
                {cartItems.map((item)=> <ItemList key={item?.cart?.info?.id} item={item}/>)}
            </div>
        </div>
    )
}

export default Cart;