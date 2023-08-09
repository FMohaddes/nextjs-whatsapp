"use client";

import { FiltersContextProvider } from "./FiltersContextProvider";

export const AppContextProvider = ( { children } ) => {
   return (
        <>
        
                 <FiltersContextProvider >
                       { children }
                 </FiltersContextProvider >
        
        </>
   )
};