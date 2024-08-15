import { useState, useEffect } from "react";
import { intialData_URL } from "../config";
const useRestaurant = () =>{
    const [food, setFood] = useState([]);
    const [restaurantData, setRestaurantData] = useState([]);
    useEffect(()=>{
        swiggyData();
    },[]);
    const swiggyData = async() =>{
        const answer = await fetch(intialData_URL);
        const json = await answer.json();
        setRestaurantData(json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFood(json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return [food, restaurantData, setFood];
}

export default useRestaurant;