import React, { useEffect, useState } from 'react';
import './App.css'

export const Lesson3 = () => {
    const[counter, setCounter] = useState(0)

    useEffect(() => { 
        const id = setInterval();

        return () => {
            clearInterval(id);
        }
    }, [])

    useEffect(() => { // this only runs on mounting and not with every change in the state.
        console.log('Mounted');
    }, [])

    useEffect(() => { // this will run on every state change and will get unmounted
        console.log('Counter', counter);
    }, [counter])

        return(
        <div>
            <p>App, {counter}</p>
            <button onClick={() => setCounter(prev => prev + 1)}>Increment</button>
        </div>
        )
}