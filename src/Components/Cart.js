import { useSelector } from "react-redux";
import FoodItemsCards from "./FoodItemsCard";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{
    const items = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();
    const handleClear = () =>{
        dispatch(clearCart());
    }
    return(
        <div className="">
            <div className="flex justify-center items-center gap-5">
            <h1 className="text-center font-bold py-4">Cart - Item's that you've choose to order</h1>
            <button className="bg-red-600 hover:bg-red-400 text-yellow-200 h-fit px-3 py-1 rounded-lg"
            onClick={()=>handleClear()}
            >Clear Cart</button>
            </div>
            <div className="flex justify-center flex-wrap items-center pt-[10%]">
            {items.length === 0 && <h1
            className="font-bold text-3xl"
            > No Items is available in cart</h1>}
                {
                    items.map((item,idx)=>(
                        <FoodItemsCards item = {item} key={idx}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Cart;