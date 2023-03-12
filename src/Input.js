import React, { useState } from "react";


export default function InputButton(){
  const[inputNum, setInputNum] = useState("")


    return(
        <div>
            <ul>
                <li>
            <button className="btn-0">0</button>
            <button className="btn-0">1</button>
            <button className="btn-0">2</button>
            <button className="btn-0">3</button>
            <button className="btn-0">4</button>
            <button className="btn-0">5</button>
            <button className="btn-0">6</button>
            <button className="btn-0">7</button>
            <button className="btn-0">8</button>
            <button className="btn-0">9</button>
            </li>
            <li>
            <button className="btn-plus">+</button>
            <button className="btn-minus">-</button>
            <button className="btn-multi">*</button>
            <button className="btn-div">/</button>
            </li>
            </ul>
        </div>
    )
}