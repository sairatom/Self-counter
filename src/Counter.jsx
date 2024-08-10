import { useEffect, useState } from 'react';
import './App.css'
import Button from '@mui/material/Button';

function App() { 
  const [count, setCount] = useState(0);
  const [flag,setFlag]=useState(false)
  
  useEffect(() => {
    let interval;
    if(!flag){

      interval=setInterval(() => {
        setCount((e)=>e+1)
      },1000)
    }
    return () => {
      clearInterval(interval)
    }
  },[flag])


  const stopCounter = () => {
    setFlag(!flag)
   

  }
  const reset = () => {
    setCount(0);
    setFlag(false)
  }
  

  return (
    <>
      <div className="counter">
        <div className="container">
          <h1>The Counter is Running!!</h1>
          <h2>{count}</h2>
          <div className="button">
          <Button variant="contained" onClick={stopCounter}>{flag === true ? "countinue" : "stop"}</Button>
          <Button variant="outlined" onClick={reset}>Reset</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App