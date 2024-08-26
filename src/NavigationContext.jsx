import { createContext, useContext, useState } from "react";

export const NavigationContext = createContext();

const NavigationContextProvider = ({ children }) => {
    const [modalshown,setModalShown] = useState(false)
    const [stackScreensShown,setStackScreensShown] = useState(false)
    return (
        <NavigationContext.Provider value={{modalshown,setModalShown,stackScreensShown,setStackScreensShown}}>
            {children}
        </NavigationContext.Provider>
    )
}

export default NavigationContextProvider;