"use client";
import React , { useEffect , useState } from "react";
import VerticalMenu from "../../../assets/menu_vertical.svg"
import Chat from "../../../assets/Chat Bubble.svg"
import Group from "../../../assets/Group Task.svg"
import CustomImage from "../common/Image";
import Tooltip from "../common/Tooltip";
import Search from "../../../assets/Search.svg";
import { useFiltersContext } from "../../../context/FiltersContextProvider";
import { contacts } from "../contacts";

export default function ChatRoom() {
   const {  openId} = useFiltersContext();
   const [ contact , setContact ] = useState(null)
   
   useEffect(() => {
      const newContact = contacts.find(c => c.id === openId)
      setContact(newContact);
   }, [openId]);
   return (
        <div className={`relative z-50 gap-2 flex flex-col mx-4`}>
          
              {
                   contact?.messages.map(message =>
                        {
                           return <>
                              {
                                   message.message.length > 0 &&
                                   <>
                                      {
                                         message.sender === 'You' ?
                                              <div className={` self-end p-4 `}>
                                                 <p className={`relative rounded text-lg p-4 bg-secondaryColor inline-block font-iranSans text-white
                                                 before:absolute before:top-0 before:right-[-2%] before:border-l-[10px] before:border-l-transparent
                                                before:border-t-[15px] before:border-t-secondaryColor
                                                  before:border-r-[10px]  before:border-r-transparent
                                                  before:w-0 before:h-0
                                                 `}>
                                                    {message.message}
                                                 </p>
     
                                              </div>
                                              
                                              :
                                              <div className={` p-4 `}>
                                                 <p className={`relative rounded text-lg p-4 bg-primaryColor inline-block font-iranSans text-white
                                                 before:absolute before:top-0 before:left-[-2%] before:border-r-[10px] before:border-r-transparent
                                                before:border-t-[15px] before:border-t-primaryColor
                                                  before:border-l-[10px]  before:border-l-transparent
                                                  before:w-0 before:h-0
                                                 `}>
                                                    {message.message}
                                                 </p>
     
                                              </div>
                                      }
                                   
                                   </>
                              
                              }
                           </>
                        }
                   )
              }
       
        
        </div>
   
   );
}

