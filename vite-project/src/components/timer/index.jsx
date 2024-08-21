import { useEffect, useState } from "react"

export const Timer = () => {
    const [minutes, setSeconds] = useState(0);


    const getTime = () => {
        const date = new Date();
        const addedMinute = date.setMinutes(date.getMinutes() + 1);
        const time = addedMinute - Date.now();
        setSeconds(Math.floor((time/1000)% 60));
    }


useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return (() => clearInterval(interval))
},[])




    return(
        <div>
            <p>seconds: {minutes}</p>
        </div>
    )
}