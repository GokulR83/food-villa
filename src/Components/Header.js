import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import food_villa from "../assets/food_villa.png";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Header = () =>{
    const[ loginStatus, setLoginStatus ] = useState(false);
    const isOnline = useOnline();
    const dummy = useContext(UserContext);
    return(
        <div className="flex justify-between bg-pink-300 items-center shadow-md h-16 px-5">
            <img className="w-12 h-12" src={food_villa} alt="logo"/>
            <ul className="flex justify-between items-center gap-11 text-black hover:text-gray-700 ">
                <li>
                    <Link to={"/"}>
                    Home</Link>
                </li>
                <li>
                    <Link to={"/about"}>
                    About Us</Link>
                </li>
                <li>
                    <Link to={"/contact"}>
                    Contact
                    </Link>
                </li>
                <li>
                    <Link to={"/instamart"}>
                    Instamart
                    </Link>
                </li>
                <li><Link to={"/cart"}>
                    Cart
                    </Link>
                </li>
            </ul>
            <div className="text-center">{ isOnline ? "🟢" : "🔴"}</div>
            {/* <li>{dummy.username}</li> */}
            {
             loginStatus ? <button className="mr-9  bg-purple-800 p-2 px-4 rounded-md text-white"
            onClick={()=>setLoginStatus(false)}
            > logout</button> :
            <button className="mr-9  bg-purple-800 p-2 px-4 rounded-md text-white"
            onClick={()=>setLoginStatus(true)}
            > login</button>
            }
        </div>
    );
};

export default Header;