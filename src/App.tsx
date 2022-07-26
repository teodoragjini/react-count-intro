import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <h1 className='count'>Count is:{count}</h1>
     <button  onClick={()=> {setCount(count + 1)}}>+</button>
     <button  onClick={()=> setCount(count - 1)}>-</button>
     <button  onClick={()=> setCount(count + 10)}>+10</button>
     <button  onClick={()=> setCount(0)}>Reset</button>

    </div>
  )
}

export default App


