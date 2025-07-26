import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import "./sidebar.css";
import { useContext, useState } from "react";
import { dataContext } from "../../context/UserContext";

const SideBar = () => {

  const[extend,setExtend]=useState(false);
  const {sent,prevPrompt,newChat}=useContext(dataContext);

async function loadPrompt(prompt){
     sent(prompt)
  }
  return (
    <div className='sidebar'>
        <GiHamburgerMenu id="hamb" onClick={()=>{
          setExtend(prev=>!prev);
        }}/>
        <div className="newchat" onClick={()=>{
          newChat()
        }}>
            <FaPlus />
            {extend?<p>New Chat</p>:null}
        </div>
        {prevPrompt.map((item, index) => {
          return (
            
            <div className="recent" key={index} onClick={()=>{
              loadPrompt(item)
            }}>
              <FaMessage />
              {extend ? <p>{item.slice(0,10)+" ..."}</p> : null}
            </div>
          );
        })}
                

    </div>
  )
}

export default SideBar