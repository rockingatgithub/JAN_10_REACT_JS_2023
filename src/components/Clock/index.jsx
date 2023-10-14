import { useEffect, useState } from "react"

const Clock = props => {

    const [time, setTime] = useState('')
    const [intervalId, setIntervalId] = useState('')

    const timeHandler = () => {

        let intervalId = setInterval( () => {
            const date = new Date()
            const timeString = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
            setTime(timeString)
            console.log("the current time!", time)
        }, 1000)
        setIntervalId(intervalId)

    }

    useEffect( () => {
        console.log("Component is mounted!")
        timeHandler()

        return () => { console.log("run on unmounting!", intervalId); clearInterval(intervalId) }

    }, [] )

    // useEffect( () => {
    //     // console.log("Component did mount and update!", time);
    // }, [time] )



    return <div>
        Time:- <span> {time} </span>
    </div>

}

export default Clock