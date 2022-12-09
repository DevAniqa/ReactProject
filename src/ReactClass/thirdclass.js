import React, { useState } from "react";
export default function ThirdClass() {
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [roll, setRoll] = useState('')

    function submit() {
        var a = Number(first)
        var b = Number(last)
    }







    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Third Class</h1>
            <label>
                First Name :
                <input type="text" onChange={(e) => { setFirst(e.target.value) }} /><br /><br />
                Last Name :
                <input type="text" onChange={(e) => { setLast(e.target.value) }} /><br /><br />
                Email Address :
                <input type="text" onChange={(e) => { setEmail(e.target.value) }} /><br /><br />
                Roll Number :
                <input type="text" onChange={(e) => { setRoll(e.target.value) }} /><br /><br />
            </label>
            <button onClick={submit}>Submit</button>


        </div>
    )

}