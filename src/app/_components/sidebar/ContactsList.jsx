"use client";
import React from "react";
import { contacts } from "../contacts";
import CustomImage from "../common/Image";
import Camera from "../../../assets/Camera.svg";
import Tik from "../../../assets/tick.svg";
import Voice from "../../../assets/Microphone.svg";
import { useFiltersContext } from "@/context/FiltersContextProvider";

export default function ContactsList() {
   const { openId, setOpenId,setOpenContact} = useFiltersContext();
   
   return (
      <div className={`mt-2 gap-6 overflow-y-auto`}>
         {
            contacts.map(({ id, name, phone, image, messages }) => {
               return (
                    <div onClick={() => {
                       setOpenId( id )
                       setOpenContact(false)
                    }
                    } key={id} className={`h-20 w-full flex  justify-between gap-4 px-2
                    hover:bg-primaryColor ${openId === id && `brightness-110 bg-primaryColor`} cursor-pointer`}>
                       <div className = { `h-12 my-auto relative w-14 rounded-[55%] overflow-hidden ` } >
                          <CustomImage absolutePath fit={'cover'}
                               src = { image }
                               alt = { name } />
                       </div>
                          <div className={`border-b-[.1px] border-b-primaryColorLight w-full
                           border-opacity-20 justify-center flex flex-col  gap-1 text-white`}>
                             <div className={`flex  justify-between  pr-4`}>
                                <p className = { ` font-iranSans ` } >
                                   {name}
                                </p >
                                <p className= { ` capitalize text-sm  text-primaryColorLight` }>
                                   {typeof  messages[messages.length - 1].date !== 'string' ?
                                      new Date(messages[messages.length - 1].date).toLocaleDateString('en-US')
                                   : messages[messages.length - 1].date
                                   }
                                </p>
                             </div>
                             <div className= { `text-sm capitalize text-primaryColorLight` }>
                                {
                                   messages[messages.length - 1].message.length >= 50 ?
                                        <div className={`flex gap-2`}>
                                           {
                                                messages[messages.length - 1].sender === 'You' &&
                                                   <div className= { `w-5 h-5 ${ messages[messages.length - 1].seen ?`fill-info`
                                                        :`fill-gray200` }` }>
                                                      <Tik />
                                                   </div>
                                           }
                                           <p>
                                              { messages[ messages.length - 1 ].message.slice( 0 , 50 ) + "..." }
                                           </p>
                                        </div>
                                 
                                        :
                                        messages[messages.length - 1].mediaType ==='photo' ?
                                        <div className={`flex gap-2`}>
                                           {
                                                messages[messages.length - 1].sender === 'You' &&
                                                <div className= { `w-5 h-5 ${ messages[messages.length - 1].seen ?`fill-info`
                                                     :`fill-gray200` }` }>
                                                   <Tik />
                                                </div>
                                           }
                                           <div className="w-5 h-5 fill-primaryColorLight">
                                              <Camera />
                                           </div>
                                           <p>photo</p>
                                          
                                        </div>
                                             :
     
                                             messages[messages.length - 1].mediaType ==='voice' ?
                                                  <div className={`flex gap-2`}>
                                                     {
                                                          messages[messages.length - 1].sender === 'You' &&
                                                          <div className= { `w-5 h-5 ${ messages[messages.length - 1].seen ?`fill-info`
                                                               :`fill-gray200` }` }>
                                                             <Tik />
                                                          </div>
                                                     }
                                                     <div className= { `w-5 h-5
                                                     ${ messages[messages.length - 1].seen ?`fill-success`
                                                          :`fill-gray200` }
                                                     ` }>
                                                        <Voice />
                                                     </div>
                                                     <p>{ messages[messages.length - 1].duration}</p>
          
                                                  </div>
                                             
                                     
                                      :      <div className={`flex gap-2`}>
                                                {
                                                     messages[messages.length - 1].sender === 'You' &&
                                                     <div className= { `w-5 h-5 ${ messages[messages.length - 1].seen ?`fill-info`
                                                     :`fill-gray200` }` }>
                                                        <Tik />
                                                     </div>
                                                }
                                                <p>
                                                   { messages[ messages.length - 1 ].message}
                                                </p>
                                             </div>
                                }
                                
                             </div>
                            
                       
                          </div>
                    </div>
               )
            })
         }
      </div>

   );
}




