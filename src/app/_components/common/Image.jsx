"use client";
import Image from "next/image";
import { myLoader } from "../../../utils/config";
import React , { useEffect , useState } from "react";
import Tooltip from "./Tooltip";

export default function CustomImage( {
                                        src : srcImage = "" ,
                                        alt = "User" ,
                                        priority = false ,
                                        fit = "contain" ,
                                        absolutePath = false ,
                                        quality = 100 ,
                                        userDefaultImage = false
                                     } ) {
   const [error, setError] = useState(false);
   const [src, setSrc] = useState(srcImage);
   const [loaded, setLoaded] = useState(false);
   
   const handleImageError = () => {
      if (!error) {
         setError(true);
      }
   };
   
   useEffect(() => {
      setError(false);
      setLoaded(false);
   }, [src]);
   
   const handleImageLoaded = () => {
      setLoaded(true);
   };

   
   return (
        <>        {
           priority && absolutePath ?
                <Image
                     src = { src }
                     alt = { alt }
                     fill
                     priority
                     sizes = "(max-width: 768px) 100vw, 50vw"
                     style = { { objectFit : fit } }
                     quality = { quality }
                />
                
                : absolutePath ?
                     <Image
                          src = { src }
                          alt = { alt }
                          fill
                          sizes = "(max-width: 768px) 100vw, 50vw"
                          style = { { objectFit : fit } }
                          quality = { quality }
                     />
                     
                     :
                     <>
                        {!error ? (
                             <div >
                                {src ? (
                                     <Image
                                          src={src}
                                          alt={alt}
                                          fill
                                          sizes="(max-width: 768px) 100vw, 50vw"
                                          style={{ objectFit: fit }}
                                          quality={quality}
                                          loader={myLoader}
                                          onError={handleImageError}
                                          onLoad={handleImageLoaded}
                                          placeholder="blur"
                                          blurDataURL={
                                             userDefaultImage
                                                  ? "/User.svg"
                                                  : "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f5f5f5'/%3E%3C/svg%3E"
                                          }
                                     />
                                ) : (
                                     <Tooltip text={"عکسی در درسترس نمیباشد"}>
                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                     <img
                                          src={userDefaultImage ? "/User.svg" : "/User.svg"}
                                          alt={alt}
                                          style={{ objectFit: "contain",
                                             width:typeof window !== 'undefined' && window.innerWidth <= 1050 ? "90%" : "100%"
                                             , height: "100%" }}

                                     />
                                        </div>
                                     </Tooltip>
                                )}
                                {!loaded && (
                                     <div
                          
                                     >
                            
                                     </div>
                                )}
                             </div>
                        ) : (
                             <Tooltip text={"عکسی در درسترس نمیباشد"}>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                   <img
                                        src={userDefaultImage ? "/User.svg" : "/User.svg"}
                                        alt={alt}
                                        style={{ objectFit: "contain",
                                           width: typeof window !== 'undefined' && window.innerWidth <= 1050 ? "90%" : "100%"
                                           , height: "100%" }}
           
                                   />
                                </div>
                             </Tooltip>
                        )}
                        <style jsx>{`
        img[aria-hidden="true"] {
          display: none;
        }
      `}</style>
                     </>
        }
        
        </>
   
   );
}
