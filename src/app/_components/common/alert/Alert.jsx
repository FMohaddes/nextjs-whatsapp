"use client"
import React , { useEffect , useState } from "react";

export default function Alert({show :showAlert,setShowAlert, color = 'red', message = '' }) {
   
   useEffect(() => {
      const timer = setTimeout(() => {
         setShowAlert(false);
      }, 3000);
      
      return () => {
         console.log('');
         clearTimeout(timer);
      };
   }, [setShowAlert]);

   
   let textColor = '';
   let borderColor = '';
   let bgColor = '';
   let ringColor = '';
   
   if (color === 'red') {
      textColor = 'text-danger';
      borderColor = 'border-danger';
      ringColor = 'focus:ring-danger';
   } else if (color === 'green') {
      textColor = 'text-success';
      borderColor = 'border-success';
      ringColor = 'focus:ring-success';
   } else if (color === 'blue') {
      textColor = 'text-info';
      borderColor = 'border-info';
      ringColor = 'focus:ring-info';
   }
   
   return (
        <>
           {
                showAlert &&
                <>
                   <div
                        className={`fixed top-4 right-4 z-50 flex items-center min-w-[17vw] shadow-lg bg-white p-2  mb-4 ${textColor}
                         border-t-4 justify-between ${borderColor} ${bgColor}`}
                        role="alert"
                   >
                      <div className={`flex gap-4`}>
                         <svg
                              className="flex-shrink-0 w-6 h-6"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                         >
                            <path
                                 d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
                            />
                         </svg>
                         <div className="ml-3 text-sm font-medium">{message}</div>
                      </div>
              
                      <button
                           type="button"
                           className={`self-end  ${bgColor} ${textColor} rounded-lg ${ringColor} hover:bg-${color}-200
                h-10 w-4`}
                           data-dismiss-target="#alert-border"
                           aria-label="Close"
                           onClick={() => {setShowAlert( false )}}
                      >
                         <span className="sr-only">بستن</span>
                         <svg
                              className="w-3 h-3 "
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 14"
                         >
                            <path
                                 stroke="currentColor"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                         </svg>
                      </button>
                   </div>
        
                </>
           }

        </>
   );
}
