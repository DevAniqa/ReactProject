import React,{useState} from "react";
export default function SecondClass(){
    const [counter,setCounter] = useState(0);
    function increment(){
        setCounter(counter+1)
        
    }
    function decrement(){
        setCounter(counter-1)

    }
    function reset(){
        setCounter(0)

    }

    return(
        <div style={{textAlign:'center'}}>
        <h1>Second Class</h1>
        <h1>{counter}</h1>
        <button onClick={increment}>Increment +</button>
        <button onClick={decrement}>Decrement -</button>
        <button onClick={reset}>Reset</button>
        </div>
    )
}



// export default SecondClass;