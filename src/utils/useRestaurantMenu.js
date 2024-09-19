import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu =(resid)=>{

    const [menu, setMenu ] = useState(null);

    useEffect(()=>{
        fetchResMenu();
    },[]);

    const fetchResMenu = async()=>{
        const data = await fetch(MENU_API + resid);
        const json = await data.json();
        setMenu(json?.data);
    }

    return menu;
}

export default useRestaurantMenu;