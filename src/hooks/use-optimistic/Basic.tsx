import { useEffect, useOptimistic, useState, useTransition } from 'react'


const state = {
   "isLiked":true
}

const getIsLiked = ()=>{
    return new Promise<boolean>(res=>{
        setTimeout(()=>{
            res(state.isLiked)
        },3000)
    })
}

const setLiked = (likedVal:boolean)=> {
    return new Promise<boolean>(res=>(
         setTimeout(()=>{
            state.isLiked=likedVal;
            res(state.isLiked)
        },3000)
    ))
}

const setLikedRej = (likedVal:boolean)=> {
    return new Promise<boolean>((res,rej)=>(
         setTimeout(()=>{
            state.isLiked=likedVal;
            rej("erro")
        },3000)
    ))
}
function App() {
  const [like, setLike] = useState(false)
  const [optimisticLike, setOptimisticLike] = useOptimistic(like)
  const [isPending, startTransition] = useTransition()
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
     async function getLikedValue() {
        
         try {
           setLoading(true)
           const isLiked:boolean = await getIsLiked();
           setLike(isLiked);
           setLoading(false)
        }
        catch(e){
            setLoading(false)
            console.log(e)
        }
     }

     getLikedValue()
  },[])



  return (
    <>
      <p>
        {
            loading?"Loading...":"Loaded"
        }
      </p>
      <button onClick={async ()=>{
          setLoading(true)
         

        
           startTransition(async ()=>{
               try {
                  setOptimisticLike(!like)
                   const isLiked:boolean = await setLikedRej(!like);
                   setLike(isLiked);
                   setLoading(false)
               }
               catch(e){
                console.log(e)
                setLoading(false)
               }


           })
        }
       
      }>
        {optimisticLike?"Liked":"Unliked"}
      </button>
    </>
  )
}

export default App
