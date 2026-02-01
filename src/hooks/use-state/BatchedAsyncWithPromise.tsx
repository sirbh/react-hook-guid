import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [anotherCount, setAnotherCount] = useState(0);
  const [loading, setLoading] = useState(false); 

  return (
    <>
      <h1>Async Batching With Promise</h1>
      <p>{loading?"Loading...":"Not Loading"}</p>
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
      <button onClick={async ()=>{
        setCount(count+1);
        setLoading(true)
        await new Promise(res=>{
            setTimeout(()=>{
                res("resolved")
            },2000)
        });
        setLoading(false)
        setAnotherCount(anotherCount+1);
      }}>
        Increase Count
      </button>
    </>
  )
}

export default App
