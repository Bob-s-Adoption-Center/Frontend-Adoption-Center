import {useEffect, useState} from 'react'

const dogAPI = async () => {
    const [dogState, setDog] = useState([])

    useEffect(async () => {
        const res = await fetch('http://localhost:3001/')
        const data = await res.json()
        console.log(data)
    })
}

export default dogAPI;