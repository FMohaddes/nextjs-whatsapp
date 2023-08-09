import { useState } from "react"

export default function CustomInput( { white , name = "" , type , placeholder , asterisk = false , Icon , label = ""
                                        , labelSpace , onChange,value , disabled,errors='' } ) {
   const [inputType, setInputType] = useState(type);
   
   const toggleInputType = () => {
      setInputType(prevType => prevType === 'password' ? 'text' : 'password');
   };
   
   return (
        <div className = { "w-full h-full font-iranSans" } >
           {
              label ? <label className = { `mb-2 block text-sm  text-gray400 ` } >
                      { asterisk && <abbr className = { ` ml-2 text-primaryColor` } >*</abbr > }
                      { label.length >= 1 ? label : labelSpace && "\xa0" }
                   </label >
                   : labelSpace &&
                   <label className = { `mb-2 block text-sm  text-gray400 ` } >
                      { asterisk && <abbr className = { ` ml-2 text-primaryColor` } >*</abbr > }
                      { label.length >= 1 ? label : labelSpace && "\xa0" }
                   </label >
           }
           
           <div className = { `relative rounded-lg` } >
       
                        <>
                           <input  type = { inputType } id = "" onChange={onChange} value={value}
                             className = { `relative block ${ white ? `white border-[1px] border-gray150` : `bg-primaryColor` }
                    ${ Icon && "pl-14" } w-full p-3  text-sm text-white rounded-lg focus:ring-grey-500 focus:border-grey-500 caret-primaryColor ${ disabled && `bg-gray100 pointer-events-none opacity-60` }` }
                             placeholder = { placeholder }  />
                           {errors[name] && (
                                <span className= { ` absolute text-sm text-danger` }
                                     style={{ marginTop: "0.5rem" ,marginRight:".2rem"}}
                                
                                >{errors[name].message}</span>
                           )}
                        </>
              {
                   Icon && <div className = { ` w-10 absolute z-50 inset-y-0 left-0
                    flex items-center pl-5 pointer-events-none" ` } >
                      { Icon }
                   </div >
              }
   
              {type === "password" && (
                   <div className= { `absolute  h-full cursor-pointer inset-y-0 left-4 flex items-center pr-5` }>
                      <div onClick={toggleInputType} >
                         {inputType === "password" ? <Hide /> : <Show />}
                      </div>
                   </div>
              )}
             
           </div >

        </div >
   
   );
}



const Hide = () => {
   return (
        <svg
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 48 48"
             width="14"
             height="14"
        >
           <path
                d="M42.470703 3.9863281 A 1.50015 1.50015 0 0 0 41.439453 4.4394531L28.025391 17.853516C28.02058 17.85139 28.016533 17.847821 28.011719 17.845703L25.652344 20.205078C25.657802 20.206406 25.662515 20.209597 25.667969 20.210938L17.210938 28.667969C17.209447 28.661908 17.206553 28.656457 17.205078 28.650391L14.845703 31.009766C14.848052 31.015107 14.851157 31.020054 14.853516 31.025391L4.4394531 41.439453 A 1.50015 1.50015 0 1 0 6.5605469 43.560547L16.513672 33.607422C18.345732 35.683816 21.01901 37 24 37C29.514 37 34 32.514 34 27C34 24.019566 32.683637 21.345974 30.607422 19.513672L35.052734 15.068359C39.90447 17.90912 43.668811 22.496845 45.050781 27.869141C45.220781 28.549141 45.83 29 46.5 29C46.62 29 46.749141 28.989219 46.869141 28.949219C47.679141 28.749219 48.159219 27.930859 47.949219 27.130859C46.409379 21.128251 42.461227 16.073087 37.277344 12.84375L43.560547 6.5605469 A 1.50015 1.50015 0 0 0 42.470703 3.9863281 z M 23.990234 9C12.820234 9 2.7507813 16.620859 0.05078125 27.130859C-0.15921875 27.930859 0.32085937 28.749219 1.1308594 28.949219C1.9308594 29.159219 2.7492187 28.679141 2.9492188 27.869141C5.2792187 18.819141 14.330234 12 23.990234 12C25.700234 12 27.389531 12.209141 29.019531 12.619141L31.480469 10.160156C29.090469 9.4001562 26.570234 9 23.990234 9 z M 24 17C18.486 17 14 21.486 14 27C14 27.197 14.017297 27.390938 14.029297 27.585938L17.751953 23.863281C18.428953 22.521281 19.521281 21.428953 20.863281 20.751953L24.583984 17.029297C24.389984 17.017297 24.197 17 24 17 z M 28.472656 21.648438C30.00901 22.931321 31 24.845705 31 27C31 30.859 27.86 34 24 34C21.845705 34 19.931321 33.009291 18.648438 31.472656L21.488281 28.632812 A 3 3 0 0 0 24 30 A 3 3 0 0 0 25.632812 24.488281L28.472656 21.648438 z"
           />
        </svg>
   );
};


const Show = () => {
   return (
   
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="14" height="14">
        <path d="M23.986328 9C12.666705 9 2.6928719 16.845918 0.046875 27.126953 A 1.5002454 1.5002454 0 0 0 2.953125 27.873047C5.2331281 19.014082 14.065951 12 23.986328 12C33.906705 12 42.767507 19.01655 45.046875 27.873047 A 1.5002454 1.5002454 0 0 0 47.953125 27.126953C45.306493 16.84345 35.305951 9 23.986328 9 z M 24.001953 17C18.681885 17 14.337891 21.343999 14.337891 26.664062C14.337891 31.984127 18.681885 36.330078 24.001953 36.330078C29.322021 36.330078 33.667969 31.984126 33.667969 26.664062C33.667969 21.343999 29.322021 17 24.001953 17 z M 24.001953 20C27.700702 20 30.667969 22.965317 30.667969 26.664062C30.667969 30.36281 27.700702 33.330078 24.001953 33.330078C20.303205 33.330078 17.337891 30.362809 17.337891 26.664062C17.337891 22.965317 20.303205 20 24.001953 20 z"
            />
        </svg>
   );
};



