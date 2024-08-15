import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../utils/cartSlice";

const FoodItemsCards = ({item}) =>{
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleAddItems = (item) =>{
        dispatch(addItems(item));
    }
    return(
        <div className="mt-5 flex justify-between flex-row items-center pl-4 gap-1"> 
        <div className="mt-5 flex justify-start flex-col items-start pl-4 gap-1">
            <h3 className="font-bold font-sans">🍽️ {item?.card?.info?.name} - ₹ {item?.card?.info?.price / 100}</h3>
            <p className="font-sans w-8/12">🔹{item?.card?.info?.description}</p>
        </div>
        <div>
            <button className="px-4 py-2 rounded-lg bg-black text-yellow-200 mr-4"
            onClick={()=>handleAddItems(item)}
            >Add+</button>
        </div>
        </div>
    )
}

export default FoodItemsCards;