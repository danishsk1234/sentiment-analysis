import { createContext,useState } from "react";


export const AppContext=createContext();

export default function AppContextProvider({children}){
    // this is for user login
const [isLoggedIn,setIsLoggedIn]=useState(false);


const value={
    isLoggedIn,
    setIsLoggedIn,


};
return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}



