import { imgUrl } from "../config";

const  RestaurantCard = ({data}) =>{
    return(
        <div className="w-60">
            <img src={ imgUrl + data.info.cloudinaryImageId } alt=""/>
        <h2 className="font-bold">🍽️ {data.info.name}</h2>
        <h3>🔹{data.info.cuisines.slice(0,2).join("🔹")}</h3>
        <h4>⭐ {data.info.avgRating} stars</h4>
        <h4 className="text-red-500">💸 {data.info.costForTwo}</h4>
        <h4>📍{data.info.locality} , {data.info.areaName}stars</h4>
        </div>
    );
}

//? Higher Order Component is takes Another Component as Input and enhance the Component and return the enhanced Component
export const OpenCard = (RestaurantCard) =>{
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-green-500 text-white px-3 py-1 m-2 rounded-lg">Open</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;