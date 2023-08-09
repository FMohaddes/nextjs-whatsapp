"use client";
import React from "react";
import VerticalMenu from "../../../assets/menu_vertical.svg"
import Chat from "../../../assets/Chat Bubble.svg"
import Group from "../../../assets/Group Task.svg"
import CustomImage from "../common/Image";
import Tooltip from "../common/Tooltip";

export default function SidebarMenu() {
   
   
   return (
        <div className= { ` h-16 w-full bg-primaryColor flex items-center px-4 justify-between` }>
           <div className = { `h-10 relative w-10 rounded-full overflow-hidden  rounded` } >
           
           <CustomImage absolutePath fit={'cover'}
                src = { "/images/profile.jpg" }
                alt = { "profile" }/>
           </div>
           <div className= { `flex items-center px-1 gap-4` }>
                 <Tooltip text={"Communities"}>
                    <div className={` w-7 h-7 fill-primaryColorLight`}>
                 
                 <Group/>
                    </div>
                    
                 </Tooltip>
                 <Tooltip text={"New Chat"}>
                    <div className={` w-7 h-7 fill-primaryColorLight`}>
                    
                 <Chat/>
                    </div>
                    
                 </Tooltip>
              <div className={` w-7 h-7 fill-primaryColorLight cursor-pointer`}>
                 <VerticalMenu/>
              </div>
           </div>
 
        </div>
   
   );
}

