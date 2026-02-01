import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [anotherCount, setAnotherCount] = useState(0);

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
      <p>
        <span>
          Another Count:
        </span>
        {
          anotherCount
        }
      </p>
      <button onClick={()=>{
        setCount(count+1);
        setAnotherCount(anotherCount+1);
      }}>
        Increase Count
      </button>
    </>
  )
}

export default App
