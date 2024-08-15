import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js"
import Footer from "./Components/Footer.js";
import About from "./Components/About.js";
import Error from "./Components/Error.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Components/Home.js";
import Contact from "./Components/Contact.js";
import Instagram from "./Components/Instagram.js";
import Profile from "./Components/ProfileClass.js";
import RestrauntDetails from "./Components/RestrauntDetails.js";
import Instamart from "./Components/Instamart.js";
import { lazy, Suspense } from "react";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./Components/Cart.js";
//? It Does a lazy loading , what it means is , it create a separate a bundle for this particular Element which we are mentioning.
const Instamart = lazy(()=> import("./Components/Instamart.js")); 

const FirstComponent = () =>{
    const [name, setName ] = useState();
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{username: name, setName }}>
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
        </UserContext.Provider>
        </Provider>
    )
}

const AppRouter = createBrowserRouter([
    {
        path:"/",
        element:<FirstComponent/>,
        errorElement: <Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>,
                children:[
                    {
                        path:"profile",
                        element:<Profile/>
                    }
                ]
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restraunt/:resId",
                element: <RestrauntDetails />
            },
            {
                path:"/instamart",
                element:(
                    <Suspense>
                        <Instamart />
                    </Suspense> 
                    )
            },
            {
                path:"/cart",
                element:<Cart />
            }
        ]
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);