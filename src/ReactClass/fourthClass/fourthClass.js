import React, { useState } from 'react'
import FourthClass2 from './fourthClass2'

export default function FourthClass() {
    const [name, setName] = useState('')
    const [name1, setName1] = useState('')
    const [name2, setName2] = useState('')
    const [name3, setName3] = useState('')
    const [result, setResult] = useState(false)

    var obj = {
        first: name,
        second: name1,
        third: name2,
        fourth: name3
    }

    function submit() {
        setResult(true)
    }

    return (
        <div>
            <input type='text' onChange={(e) => { setName(e.target.value) }} /><br /><br />
            <input type='text' onChange={(e) => { setName1(e.target.value) }} /><br /><br />
            <input type='text' onChange={(e) => { setName2(e.target.value) }} /><br /><br />
            <input type='text' onChange={(e) => { setName3(e.target.value) }} /><br /><br />
            <button onClick={submit}>Submit</button>
            <FourthClass2
                data={obj}
                res={result} />
        </div>
    )
}
