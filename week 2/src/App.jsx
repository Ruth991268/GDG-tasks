import GroupName from "./groupname"
import { useState } from "react"
function App() {
  const [count,setCount]=useState(0)
  function handleClick(e){
      setCount(count+1)
      
  }
  return (
    <div className="App">
      <GroupName />

    </div>
  )
}

export default App
