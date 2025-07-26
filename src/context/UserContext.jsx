import run from '../gemini';
import { createContext, useState } from 'react'

export const dataContext=createContext();

const UserContext = ({children}) => {
  const[input,setInput]=useState('');
  const[showResult,setShowResult]=useState(false);
  const[loading,setLoading]=useState(false);
  const[resultData,setResultData]=useState("");
  const[recentPrompt,setRecentPrompt]=useState("");
  const[prevPrompt,setPrevPrompt]=useState([]);
  async function sent(prompt){
    setResultData("");
    setShowResult(true);
    setRecentPrompt(input);
    setLoading(true);
    setPrevPrompt(prev=>[...prev,input])
    let response=await run(prompt)
    setResultData(response.split("**") && response.split("*"))
    setLoading(false)
    setInput("")
  }  

  function newChat(){
    setShowResult(false)
    setLoading(false)
  }
  const data={
   sent,input,setInput,loading,setLoading,showResult,setShowResult,resultData,setResultData,recentPrompt,setRecentPrompt,prevPrompt,newChat
  }
  return (
    <>
     <dataContext.Provider value={data}>
        {children}
     </dataContext.Provider>
     
    </>
  )
}

export default UserContext