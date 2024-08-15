import { useState } from 'react';
import { data, imgUrl } from "../config";
import RestaurantCard, { OpenCard } from "./RestaurantCard";
import Loading from './Loading';
import { Link } from 'react-router-dom';
import { filterRestaurant } from '../utils/helper';
import useRestaurant from '../utils/useRestaurant';
import UserContext from '../utils/UserContext';
import { useContext } from 'react';

const Body = () =>{  
    const [searchInput, setSearchInput] = useState("");
    const [ food, restaurantData, setFood ] = useRestaurant();
    const RestaurantOpenCard = OpenCard(RestaurantCard);
    const {username, setName } = useContext(UserContext);
    return(
        <>
        <div className="py-8 flex justify-center align-center bg-pink-200 gap-6">
            <input 
            type="text" 
            name="search" 
            placeholder="search" 
            className="w-[300px] px-3 rounded-lg" 
            value={searchInput} 
            onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className='mr-9  bg-purple-800 p-2 px-4 rounded-md text-white'
            onClick = {()=>{
                const filterData = filterRestaurant(restaurantData, searchInput);
                setFood(filterData);
            }}
            >search</button>
            {/* <input 
            className="w-[300px] px-3 rounded-lg" 
            value ={username}
            onChange={(e)=> setName(e.target.value)}
            /> */}
        </div>
        <div className="flex flex-wrap gap-12 justify-center align-center py-8 bg-pink-200">
            {  food?.length === 0 ? (
                 <Loading /> 
                ) :(
                food.map((data)=>{
                    return (
                        
                        data?.info?.isOpen ? (
                        <Link to={`/restraunt/${data?.info?.id}`} key = {data?.info?.id}> 
                                <RestaurantOpenCard data={data}/>
                        </Link>) :(
                            <Link to={`/restraunt/${data?.info?.id}`} key = {data?.info?.id}> 
                                <RestaurantCard data = {data}/> 
                        </Link>
                        )
                    );
                }))
            }
        </div>
        </>
    );
}

export default Body; 