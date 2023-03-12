import React, { useState } from "react";


export default function Calculator(){

  const [display,setDisplay] = useState(onDisplay);
  const [numInput, setNumInput]= useState("")

  function inputOperation(event){
  const values = event.target.value;
    setNumInput(values);
   }

  

  return(
    <>
    <div>
      {numInput}
    </div>
    <div>
            <div>
            <button onClick={inputOperation} value={"0"} className="btn-0">0</button>
            <button onClick={inputOperation} value={"1"} className="btn-0">1</button>
            <button onClick={inputOperation} value={"2"} className="btn-0">2</button>
            <button onClick={inputOperation} value={"3"} className="btn-0">3</button>
            <button onClick={inputOperation} value={"4"} className="btn-0">4</button>
            <button onClick={inputOperation} value={"5"} className="btn-0">5</button>
            <button onClick={inputOperation} value={"6"} className="btn-0">6</button>
            <button onClick={inputOperation} value={"7"} className="btn-0">7</button>
            <button onClick={inputOperation} value={"8"} className="btn-0">8</button>
            <button onClick={inputOperation} value={"9"} className="btn-0">9</button>
            </div> 
            <div>
            <button onClick={inputOperation} value={"+"} className="btn-plus">+</button>
            <button onClick={inputOperation} value={"-"} className="btn-minus">-</button>
            <button onClick={inputOperation} value={"*"} className="btn-multi">*</button>
            <button onClick={inputOperation} value={"/"} className="btn-div">/</button>
            </div> 
            <div>
            <button value={"="} className="btn-eql">=</button>
            </div> 
        </div>
    
    </>
  )

}

let onDisplay = "0";