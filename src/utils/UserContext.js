import { createContext } from "react";

const UserContext = createContext({
    username:"Default UserName",
    name:"Default name",
});

export default UserContext;