import { useState } from "react"

function App() {
  
  const [counter, setCounter]= useState(15);
  
  const addValue = ()=>{
    if(counter >= 20)  
      return setCounter(15)
    setCounter(prev => prev + 1);
  }

  const removeValue= ()=>{
    if(counter <= 0)
      return setCounter(15)
    setCounter(prev => prev -1)
  }


  return (
    <>
      <div>
        <h1>Chai or React</h1>
        <h2>Counter value : {counter}</h2>

        <div className="mx-auto max-w-7xl px-2 py-10 lg:px-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="w-full md:w-2/3 lg:w-1/2">
              <h2 className="text-3xl font-bold text-black bg-slate-400">
                Total Sign up for our weekly newsletter - {counter} 
              </h2>
            </div>
          </div>
        </div>
  {/*  ------------------------------------------- */}
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={addValue}
          >
            Add Value - {counter}
          </button>

          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={removeValue}
          >
            Remove Value - {counter}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
