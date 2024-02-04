import { useState } from 'react';
import './App.css'
import Countdown from 'react-countdown';
import { useEffect } from 'react';


export default function App() {
  const [count, setCount] = useState("0");
  const [countdownDate, setCountdownDate] = useState(Date.now() + 100000);

  const [number, setNumber] = useState(1);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  useEffect(()=>{
    setCountdownDate(Date.now() + 100000)
  },[])

  return (
    <main>
      <div>React Pankaj ⚛️ + Vite ⚡ + Replit 🌀</div>
      <input type="text" value={count}  onMouseEnter={()=>{setCount("")}} onChange={handleChange}/>
      <Countdown date={countdownDate} />

      <input type='checkbox'></input>
      <button onClick={()=>{
        setNumber((prev)=>prev+1);
      }} >Send Me</button>
      <h1>{number}</h1>
    </main>
  )
}