import GroupName from "./groupname"
import Usercard from "./UserCard"
import { useState } from "react"
function App() {
  const [count,setCount]=useState(0)
  return (
    <div className="App">
      <Usercard  name="abebe bikila" email='abebe bikila@gmail.com' />
      <GroupName />
    <div>
      <p>{count}</p>
      <button onClick={
        e=>setCount(r=>r+1)
      }>
        Incrememt
      </button>
    </div>
    </div>
  )
}

export default App
