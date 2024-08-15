import { useState } from "react";
import FoodItemsCards from "./FoodItemsCard";

const RestaurantItems = ({ data, isOpen, setShowIndex }) =>{
    const handleClick = () =>{
        setShowIndex();
    }
    return(
        <div className=" text-center mx-auto mt-12 bg-red-100 w-8/12 rounded-b-lg pb-5 shadow-lg cursor-pointer"
        onClick={()=>handleClick()}
        >
            <div className="flex justify-between px-5 pt-2">
            <h3 className="font-bold ">{data?.card?.card?.title + `(${data?.card?.card?.itemCards.length})`}</h3>
            <h3 className="flex-end">⬇️</h3>
            </div>
            {
                isOpen && (
                    <div className="">
                {
                    data?.card?.card?.itemCards.map((item)=>(
                        <FoodItemsCards item = {item} key={item.card.info.id} />
                    ))
                }
            </div>
            )
            }
        </div>
    )
}

export default RestaurantItems;