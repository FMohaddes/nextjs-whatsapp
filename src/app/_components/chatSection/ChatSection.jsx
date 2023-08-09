"use client";
import React from "react";
import ChatMenu from "./ChatMenu";
import ChatType from "./ChatType";
import { useFiltersContext } from "../../../context/FiltersContextProvider";
import ChatRoom from "./ChatRoom";
import UseWidth from "../../../hooks/UseWidth";

export default function ChatSection() {
   const {openContact} = useFiltersContext();
   const { windowWidth } = UseWidth();
   
   return (
        <div className= { `${  windowWidth <= 800 && openContact && 'hidden'} md:py-5 md:pr-5 fixed top-0 right-0
        h-screen w-full md:w-[70%] bg-primaryColorDark overflow-hidden  transition-opacity duration-300 ease-in-out
        border-l-[.1px] border-l-primaryColorLight flex flex-col shadow-lg` }
        >
           <ChatMenu />
           <div className={`relative bg-primaryColorDarker h-full w-full`}>
              <div className={`absolute z-10 top-0 left-0 p-5  bg-red-100 w-full h-full opacity-10`}
                   style={{ background:` url(/bg.png)`,backgroundSize:`40%`,}}
              />
              <ChatRoom/>
              
           </div>
        
           <div className={`relative z-50 relative h-16`}>
              <ChatType/>
              
           </div>
        </div>

   );
}

