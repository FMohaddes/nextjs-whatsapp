'use client';
import { createContext, useContext, useState } from "react";

const FiltersContext = createContext({})


export const FiltersContextProvider = ({ children }) => {
   const [ openId , setOpenId ] = useState(1)
   const [ openContact , setOpenContact ] = useState(null)
   
   return (
        <FiltersContext.Provider value={{openId,setOpenId,openContact , setOpenContact }}>
           {children}
        </FiltersContext.Provider>
   )
};

export const useFiltersContext = () => useContext(FiltersContext);