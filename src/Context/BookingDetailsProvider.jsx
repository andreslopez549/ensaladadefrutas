import React,{ createContext, useContext, useState } from "react";
const DetailsContext = createContext()

export const BookingsProvider = ({children})=>{
    const [details,setDetails] = useState([])
    console.log(details)
    return(
        <DetailsContext.Provider value ={{details,setDetails}}>
            {children}
        </DetailsContext.Provider>
    )
}
export const BookingsState = () => {
    return useContext(DetailsContext);
  };
export default DetailsContext;