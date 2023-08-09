"use client"
import React from "react";
import SidebarMenu from "./SidebarMenu";
import CustomInput from "../common/form/Input";
import Search from "../../../assets/Search.svg";
import Filter from "../../../assets/filter.svg";
import ContactsList from "./ContactsList";
import Tooltip from "../common/Tooltip";
import { useFiltersContext } from "../../../context/FiltersContextProvider";
import UseWidth from "../../../hooks/UseWidth";

export default function Sidebar() {
   const {openContact} = useFiltersContext();
   const { windowWidth } = UseWidth();
   
   return (
        <div className= { `${  windowWidth <= 800 && !openContact && 'hidden'} fixed top-0 md:mb-5 md:py-5 md:pl-5
         left-0 h-screen w-full md:w-[30%] bg-primaryColorDark overflow-hidden  transition-opacity duration-300 ease-in-out` }>
   
              <SidebarMenu />
              <div className="flex items-center my-2 pl-2 fill-primaryColorLight shadow-base">
                 <CustomInput
                      type="text"
                      placeholder="Search or start a new chat"
                      Icon={<Search />}
                      name="Search"
                 />
                 <Tooltip text={"Unread Chat Filter"}>
         
                    <div className="w-7 h-7 fill-primaryColorLight mx-4 ">
                       <Filter />
                    </div>
                 </Tooltip>
              </div>
              <div className="h-full overflow-y-auto shadow-lg">
                 <ContactsList />
              </div>
       
        </div>
   );
}