import React from 'react'

export default function FourthClass2({ data, res }) {
    return (
        <div>
            <h1>Hello Fourth Class 2</h1>
            {
                res == true ?
                    <>
                        <h1>{data.first}</h1>
                        <h1>{data.second}</h1>
                        <h1>{data.third}</h1>
                        <h1>{data.fourth}</h1>
                    </>
                    :
                    <></>
            }

        </div>
    )
}
