import React, { useEffect, useState } from 'react'
//import { MdDarkMode } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import "./darkmode.css" 
const DarkMode = () => {
    const[mode,setMode]=useState('darkmode');
    function toggle(){
        if(mode==="darkmode"){
            setMode("lightmode")
        }else{
             setMode("darkmode")
        }
    } 
    useEffect(()=>{
    document.body.className=mode;
    },[mode])
  return (
        <button className='darkmodebtn' onClick={()=>{
            toggle();
        }}>{mode==='darkmode'?<MdOutlineLightMode />:<IoMoonSharp />}
</button>    
  )
}

export default DarkMode