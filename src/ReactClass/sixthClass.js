import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import axios from "axios"

export default function SixthClass() {
    const [data, setData] = useState([]);
    const url = 'https://fakestoreapi.com/products'

    useEffect(() => {
        getData()
    }, [])


    const getData = () => {
        axios.get(url).then((res) => {
            setData(res.data)
            // console.log("GET DATA",res.data);
        }).catch((err) => {
            console.log(err);
        })
        
    }

    return (    
        <div>
            {
                data.map((item) => {console.log(item)
                    return (
                         <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.category}</Card.Title>
                                <Card.Text>
                                    {item.description.slice(0, 100)}
                                </Card.Text>
                                <Button variant="primary">{item.price}</Button>
                            </Card.Body>
                        </Card>

                    )
                })
            }

        </div>
    )
}
