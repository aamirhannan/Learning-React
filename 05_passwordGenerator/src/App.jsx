import { useCallback, useEffect, useRef, useState } from "react"

function App() {

  //useState Hook
  const [length, setLength] = useState(8)  
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("Aaye!")

  //useRef Hook
  const passwordRef = useRef(null)


// Password Generator ---------------->
  const passwordGenerator = useCallback(()=>{

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "~`!@#$%^&*()_+{}[]<>,.?/':;"

    for(let i = 1; i <= length; i++){
      let char =  Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char);
    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

// Copy Passsword

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])


  //useEffect Hook
  useEffect(()=>{
    passwordGenerator();
  },[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
    {/* Input and Copy Button Start */}
        <div className=" flex flex-col items-center justify-center  w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-black bg-slate-500">
          <h1 className="text-white text-center my-3 py-3"> Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4 gap-4">
            <input 
              type="text"
              value={password}
              className="outlint-none w-full py-1 px-3 rounded-xl"
              placeholder="password"
              readOnly
              ref={passwordRef}
            />

            <button
            onClick={copyPassword}
              className="outline-none bg-black text-white px-3 py-0.5 shrink-0 rounded-xl btnbtn btnbtn-primary"
            >
            Copy</button>
          </div>
{/* -------------Length Number Character Start----------------- */}
          <div className="flex text-sm gap-x-2 p-6">
              <div className="flex items-center gap-x-1">
                  <input
                    type="range"
                    min={6}
                    max={16}
                    value={length}
                    className="cursor-pointer" 
                    onChange={(e)=>{setLength(e.target.value)}}
                  />

                  <label>Length: {length}</label>
              </div>
              <div className="flex items-center gap-x-1">
                  <input
                    type="checkbox"
                    defaultChecked={numberAllowed}
                    id="numberInput"
                    onChange={()=>{
                      setnumberAllowed((prev)=> !prev)
                      }}
                  />
                  <label htmlFor="numberInput">Numbers</label>
              </div>

               <div className="flex items-center gap-x-1">
                  <input
                    type="checkbox"
                    defaultChecked={charAllowed}
                    id="numberInput"
                    onChange={()=>{
                      setCharAllowed((prev)=> !prev)
                      }}
                  />
                  <label htmlFor="numberInput">Character</label>
              </div>
          </div>
        </div>
    </>
  )
}

export default App
