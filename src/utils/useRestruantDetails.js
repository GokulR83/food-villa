import { useState,useEffect } from "react";

const useRestaurantDetails = (resId) =>{
    const [ data, setData ] = useState([]);
    useEffect(()=>{
        fetchRestaruant();
    },[]);
    const fetchRestaruant = async() =>{
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        setData(json?.data?.cards);
    }
    return data;
}

export default useRestaurantDetails;