import React, { useState, useEffect } from 'react'

export default function Fifthclass() {
    const [counter, setCounter] = useState(0)


    // var car = {
    //     model: 'VXR',
    //     price: '13672',
    //     color: 'black',
    //     name: 'corolla',
    // }
    var car = ["VXR" , "3487384738" , "Black" , "Corolla"]
    return (
        <div>
            <h1>HEllo Fifth Class</h1>
            <h1>{counter}</h1>
            <button onClick={() => { setCounter(counter + 1) }}>Increment</button>
            <button onClick={() => { setCounter(counter - 1) }}>Decrement</button>
        </div>
    )
}

