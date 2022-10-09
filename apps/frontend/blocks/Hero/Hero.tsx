import { useEffect } from "react"

export default function Hero({data}){

    useEffect(() => {
        console.log(data)
    })
    return (
        <div>
            <h1>Hero</h1>
        </div>
    )
}