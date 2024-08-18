//import React from 'react'
import React, { createContext, useContext, useEffect, useState } from 'react';
import './App.css'

//create context outside of component to stop prop trailing
const CounterContext = createContext();

//create new provider component to not re-render container 1 and 2. Stores the state and passes the state in hierarchy.
// any react component accepts childeren as props
const  CounterProvider = ({children}) => {
    const [counter, setCounter] = useState(0);
    return(
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}

export const Lesson2 =() => {
    
 
    
    return (
        <CounterProvider >
            <div>
                {/* <Container1 counter={counter} setCounter={setCounter} /> */}
                <Container1 />
            </div>
        </CounterProvider>
      )
    }

    const Container1 = () => {
        console.log('container 1');
        return(
            <div>
                <p>container 1</p>
                {/* <Container2 counter={counter} setCounter={setCounter}/> */}
                <Container2 />
            </div>
        )
    }

    const Container2 =() => {
        console.log('container 2');
        return(
            <div>
                <p>container 2</p>
            {/* <Container3 counter={counter} setCounter={setCounter}/> */}
            <Container3 />
            </div>
        )
    }

    const Container3 = () => {
        const {counter,setCounter} = useContext(CounterContext)
        console.log('container 3');
        return(
            <div>
                <p>container 3: {counter}</p>
                <button onClick={() => setCounter(prev => prev + 1)}>Increment</button>
            </div>
        )
    }