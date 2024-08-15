import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { imgUrl } from '../config';
import useRestaurantDetails from '../utils/useRestruantDetails';
import RestaurantItems from './RestaurantItems';
import { useSelector } from 'react-redux';


const RestrauntDetails = () => {
    const params = useParams();
    const { resId } = params;
    const data = useRestaurantDetails(resId);
    const [showIndex , setShowIndex ] = useState(null);
    //* we are subscribing to store by using useSelector hook provided by react-redux
    const cartItems = useSelector((store)=>store.cart.items);
    // console.log(data);
    
    const categories = data[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((category)=> category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);
    if(data.length === 0) return null;
  return (
    <div className='py-12 bg-pink-200'>
        <div className='flex justify-around items-center flex-row'>
        <div className='flex justify-center items-center flex-col gap-12'>
        <h1 className='font-bold text-4xl'>🍽️ {data[2]?.card?.card?.info.name}</h1>
        <div>
        <h1 className='font-bold text-4xl'>📍{data[2]?.card?.card?.info.city}</h1>
        </div>
        </div>
        <img src={imgUrl+ data[2]?.card?.card?.info?.cloudinaryImageId} className='w-2/12 rounded-lg'/>
        </div>
        {
            categories.map((card,idx)=>(
                <RestaurantItems 
                data={card} key={idx} 
                setShowIndex={()=> showIndex !== idx ? setShowIndex(idx) : setShowIndex(null)}
                isOpen = {(showIndex === idx) ? true : false}
                />
            ))
        }
    </div>
  )
}

export default RestrauntDetails;