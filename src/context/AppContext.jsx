import { createContext } from "react";

export const AppContext = createContext();//creating the context

const ContextProvider = (props) => {

    const phone = "+1 123456789"
    const name="maheshwari"
    return (
        <AppContext.Provider value={{phone,name}}>
            {props.children}
        </AppContext.Provider>
    )
}
export default ContextProvider