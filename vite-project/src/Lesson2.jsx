//import React from 'react'
import React, { createContext, useContext, useEffect, useState } from 'react';
import './App.css'

//create context outside of component to stop prop trailing - outside so that its not tied to component Lifecycle
const CounterContext = createContext(
    {
        counter:0,
        setCounter:() => {}
    }
); //returns a component to remove props and read the value directly from Context. 


//create new provider component to not re-render container 1 and 2. Stores the state and passes the state in hierarchy.
// any react component by default accepts childeren as props
// we extract <CounterContext.Provider value={{counter, setCounter}}> inside the export functioncomponent and put it here.

const CounterProvider = ({childern}) => {
    const [counter, setCounter] = useState(0);
    //we moved the state here so that wit every state change the the whole component doesnt get rendered.

    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {childern}
        </CounterContext.Provider>
    )
}


export const Lesson2 =() => {  

    return (
        // is used so we dont have to pass values throug Props.
            <CounterProvider> 
                <div>
                    
                    <Container1 /> 
                    {/* <Container1 counter={counter} setCounter={setCounter} /> */}
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
        //useContext returns an object value which is passed when context.Provider is added
        const {counter, setCounter} = useContext(CounterContext);//we pass the context that we created
        console.log('container 3');
        return(

            <div>
                <p>container 3: {counter}</p>
                <button onClick={() => setCounter(prev => prev + 1)}>Increment</button>
            </div>
        )
    }