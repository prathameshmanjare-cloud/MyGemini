import DarkMode from "../darkmode/DarkMode";
import { LuSendHorizontal } from "react-icons/lu";
import "./chatsection.css";
import { dataContext } from "../../context/UserContext";
import { useContext } from "react";
import user from "../../assets/user.png"
import ai from "../../assets/ai.png"


 const ChatSection = () => {
  let {sent,input,setInput,showResult,resultData,recentPrompt,loading}=useContext(dataContext);
   return (
     <div className="chatsection">
      <div className="topsection">
        {!showResult?<div className="headings">
          <span>Hello Prathamesh</span><span>I'm your own assistant</span><span>How can I help you?</span>
        </div> :<div className="resultbox">
            <div className="userbox">
              <img src={user} alt="" width={"60px"}/>
              <p>{recentPrompt}</p>
            </div>
            <div className="aibox">
              <img src={ai} alt="" width={"60px"}/>
              {loading?<div className="loader">
                <hr></hr> <hr></hr> <hr></hr>
              </div>:<p>{resultData}</p>}
             
            </div>
          </div>}
        
      </div>
      <div className="bottomsection">
        <input type="text" onChange={(e)=>setInput(e.target.value)} placeholder="Enter a prompt" value={input}/>
        <button id="sentbtn" onClick={()=>{
          sent(input)
        }}><LuSendHorizontal /></button>  
        <DarkMode/>
      </div>
     </div>
   )
 }
 
 export default ChatSection