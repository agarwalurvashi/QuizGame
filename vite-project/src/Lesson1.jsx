//import React from 'react'
import React, { useEffect, useState } from 'react';
import './App.css'

export const App =() => {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);

  const OnIncrement = () => {
    setCounter((prev) => prev + 1 );
  }

  const OnIncrement1 = (event) => {
    setCounter1(counter1 + 1);
  }

  return (
    <div>

      {/* <Text text={"Hello"} text2={"hello2"} /> 
      <Text text={"Bye"} text2={"bye2"}/> */}
      {/* <Wrapper values={[1,2,3]}/> */}
      <p>
        counter - {counter}, counter1 = {counter1}
      </p>
      <button onClick={OnIncrement}>
        Increment
      </button>
      <button onClick={OnIncrement1}>
        Increment
      </button>
    </div>
  )
}

//Wrapper children
const Wrapper = ({values}) => {
  return(
    values.map(value => <p>{value}</p>)
  )
}

// Create own custom functional Component with parameters
// reusable components {Props}
//Parent
const Text = (props) => {
  //const {text} = props;
  return (
  // <p style={{color: isRed ? 'red' : 'green'}}>
  //   {text}
  // </p>
  <div >
    <InnerText { ...props}/>
  </div>
  )
}



//Child
const InnerText = (props) => {
  return(
  <div>
    {props.text2}
  </div>
    )
}




