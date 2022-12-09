import React, { useState } from 'react'
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button';

import { Button, InputGroup, Form, } from "react-bootstrap"

export default function EightClass() {
    const [text, setText] = useState('')
    const [counter, setCounter] = useState(1)
    const [todo, setTodo] = useState([])

    function add() {
        setCounter(counter + 1)
        var obj = {
            id: counter,
            data: text
        }
        setTodo(todo.concat(obj))
        setText('')
    }


    function edit(v) {
        var a = prompt("UPDATE VALUE : ",v.data)
        var obj = {
            id:v.id,
            data : a
        }
        var b = todo.filter((item)=>{
            return item.id != v.id
        })
        b.push(obj)
        setTodo(b)
    }

    function delet(v) {
        let a = todo.filter((item) => {
            return item.id != v.id
        })
        setTodo(a)
    }



    return (
        <div style={{ margin: '10px auto', width: 500, textAlign: 'center' }}>
            <h1>Eight Class</h1>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Enter TODO"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={text}
                    onChange={(e) => { setText(e.target.value) }}
                />
                <Button variant="btn btn-success" id="button-addon2" onClick={add} >
                    ADD
                </Button>
            </InputGroup>

            <ol>
                {
                    todo.map((item) => {
                        return (
                            <div style={{ display: 'flex', marginTop: 10 }}>
                                <li>{item.data}</li>
                                <Button variant="btn btn-info" id="button-addon2" style={{ marginLeft: 20 }} onClick={() => { edit(item) }}>
                                    edit
                                </Button>
                                <Button variant="btn btn-danger" id="button-addon2" style={{ marginLeft: 20 }} onClick={() => { delet(item) }}>
                                    delete
                                </Button>
                            </div>

                        )
                    })
                }
            </ol>

        </div>
    )
}
