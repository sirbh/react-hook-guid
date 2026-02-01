import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>
        <span>
          Count:
        </span>
        {
          count
        }
      </p>
      <button onClick={()=>{
        setCount(count+1);
      }}>
        Increase Count
      </button>
    </>
  )
}

export default App
