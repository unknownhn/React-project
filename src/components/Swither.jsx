import { useEffect, useState } from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import useDarkSide from "../hook/useDarkSide";

function Swither(){
   const [colorTheme,setTheme]=useDarkSide()
   const [darkSide,setDarkSide]=useState(
    colorTheme==="light"?true:false
   );
   const toggleDarkMode=(checked)=>{
    setTheme(colorTheme)
    setDarkSide(checked)
   };
   return(
    <>
    <div>
        <DarkModeSwitch
         className="text-[yellow]"
        checked={darkSide}
        onChange={toggleDarkMode}
        size={40}
        />
    </div>
    </>
   )
}
export default Swither