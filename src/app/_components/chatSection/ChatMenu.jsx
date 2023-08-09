"use client";
import React , { useEffect , useState } from "react";
import VerticalMenu from "../../../assets/menu_vertical.svg"
import CustomImage from "../common/Image";
import Tooltip from "../common/Tooltip";
import Search from "../../../assets/Search.svg";
import Back from "../../../assets/Back.svg";
import { useFiltersContext } from "../../../context/FiltersContextProvider";
import { contacts } from "../contacts";
import UseWidth from "../../../hooks/UseWidth";

export default function ChatMenu() {
   const {setOpenContact,  openId} = useFiltersContext();
   const [ contact , setContact ] = useState(null)
   const { windowWidth } = UseWidth();
   
   useEffect(() => {
      const newContact = contacts.find(c => c.id === openId)
      setContact(newContact);
   }, [openId]);
   return (
        <div className= { ` h-16 w-full bg-primaryColor  flex items-center px-4 justify-between` }>
           <div className={`flex items-center gap-4 text-white`}>
              {
                 windowWidth <= 800 &&
                   <div onClick={() => setOpenContact(true)} className={` w-7 h-7 fill-primaryColorLight cursor-pointer`}>
               <Back/>
                   </div>
              }
              {
                 contact && <>
                      <div key={contact.id} className = { `h-10 relative w-10 rounded-full overflow-hidden  rounded` } >
                         <CustomImage absolutePath fit={'cover'}
                              src = { contact?.image }
                              
                              alt = { "profile" }/>
                      </div>
                   </>
              }
         
              <div className={`flex flex-col  justify-between  pr-4`}>
                 <p className = { ` font-iranSans ` } >
                    {contact?.name}
                 </p >
                 <p className= { ` capitalize text-[.8rem]  text-primaryColorLight` }>
                    {contact?.lastOnline }
                 </p>
              </div>

           </div>
        
           <div className= { `flex items-center px-1 gap-4` }>
                 <Tooltip text={"New Chat"}>
                    <div className={` w-7 h-7 fill-primaryColorLight`}>
                    
                 <Search/>
                    </div>
                 </Tooltip>
              <div className={` w-7 h-7 fill-primaryColorLight cursor-pointer`}>
                 <VerticalMenu/>
              </div>
           </div>
 
        </div>
   
   );
}

