"use client";
import React , { useState } from "react";
import { useFiltersContext } from "../../../context/FiltersContextProvider";
import { contacts } from "../contacts";
import Voice from "../../../assets/Microphone.svg";
import Plus from "../../../assets/Plus Math.svg";
import Emoji from "../../../assets/Emoji.svg";
import Send from "../../../assets/Send.svg";
import CustomInput from "../common/form/Input";

export default function ChatType() {
   const {  openId} = useFiltersContext();
   const contact=contacts?.find(contact => contact.id === openId) || [];
   const [ input , setInput ] = useState(null)
   
   return (
        <div className= { `absolute bottom-4  h-16 w-full bg-primaryColor flex items-center px-4 gap-4` }>
           <div className={` w-7 h-7 fill-primaryColorLight cursor-pointer`}>
              <Emoji/>
           </div>
           <div className={` w-7 h-7 fill-primaryColorLight cursor-pointer`}>
              <Plus/>
           </div>
           <div className={`flex gap-4 text-white brightness-125 rounded-lg bg-primaryColor fill-primaryColorLight  w-[100%]`}>
              <CustomInput
                   type="text"
                   placeholder="Type a message"
                   onChange={(e) => setInput(e.target.value)}
                   name=""
                   value={input}
              />

           </div>
           {
              input?.length >= 1 ?
                   <div className={` w-7 h-7 fill-primaryColorLight cursor-pointer`}>
                      <Send/>
                   </div>
               : <div className={` w-7 h-7 fill-primaryColorLight cursor-pointer`}>
                   <Voice/>
                </div>
           }
          
 
        </div>
   
   );
}

