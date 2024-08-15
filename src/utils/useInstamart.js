import { useState, useEffect } from "react";

const useInstamart = () =>{
    const [ instamart, setInstamart ] = useState([]);
    useEffect(()=>{
        getInstamart();
    },[]);

    const getInstamart = async() =>{
        const data = await fetch("https://www.swiggy.com/api/instamart/home?clientId=INSTAMART-APP");
        const json = await data.json();
        // console.log(json);
        setInstamart(json?.data?.widgets[1]?.data);
        // console.log(json?.data);
    }
    return instamart;
}

export default useInstamart;