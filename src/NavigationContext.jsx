import { createContext, useContext, useState } from "react";

export const NavigationContext = createContext();

const NavigationContextProvider = ({ children }) => {
    const [currentRoute,setCurrentRoute] = useState("chats")
    return (
        <NavigationContext.Provider value={{currentRoute,setCurrentRoute}}>
            {children}
        </NavigationContext.Provider>
    )
}

export default NavigationContextProvider;