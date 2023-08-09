import React , { useState } from "react";

const useTooltip = ( initialPosition = "top" ) => {
   const [ position , setPosition ] = useState( initialPosition );
   const setTooltipPosition = ( newPosition ) => {
      setPosition( newPosition );
   };
   
   return { position , setTooltipPosition };
};

export default function Tooltip( { text , defaultPosition , children } ) {
   const { position , setTooltipPosition } = useTooltip( null );
   const isHovered = position !== null;
   
   const tooltipStyles = {
      position        : "absolute" ,
      top             : "calc(100% + 0.5rem)" ,
      left            : "50%" ,
      transform       : "translateX(-50%)" ,
      zIndex          : 1000 ,
      fontSize        : ".9rem" ,
      border          : "1px solid var(--tw-color-primary)" ,
      opacity         : isHovered ? 1 : 0 ,
      pointerEvents   : isHovered ? "auto" : "none" ,
      backgroundColor : "rgba(0, 0, 0, 0.8)" ,
      color           : "white" ,
      padding         : "0.5rem" ,
      width           : "max-content" ,
      backdropFilter  : "blur(8px)" ,
      whiteSpace      : "nowrap" ,
   };
   
   return (
        <div
             style = { { position : "relative" , display : "inline-block" } }
             onMouseEnter = { () => setTooltipPosition( defaultPosition ) }
             onMouseLeave = { () => setTooltipPosition( null ) }
        >
           { children }
           <div
                className = "tooltip"
                style = { { ...tooltipStyles , visibility : isHovered ? "visible" : "hidden" } }
           >
              <span className = "tooltip-text" >{ text }</span >
           </div >
        </div >
   );
};
