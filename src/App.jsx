import { useContext } from 'react'
import SideBar from './components/Sidebar/SideBar'
import ChatSection from './components/chatbox/ChatSection'
import Separation from './components/separation/Separation'
import {dataContext} from "./context/UserContext"

const App = () => {
  // let data=useContext(dataContext);
  //console.log(data);
  return (
    <>
      <SideBar/>
      <Separation/>
      <ChatSection/>
    </>
  )
}

export default App