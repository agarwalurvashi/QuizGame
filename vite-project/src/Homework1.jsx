import React from 'react'
import ReactDOM from 'react-dom/client';
import './App.css'

const timeInput =['1m','2m','5m']

const timeInputList = timeInput.map(time => <InsertTime id={time}/>);

export const Homework1 =() => {

    return (

      <div>
        Number of question <input required type='number' min='5' max='15'></input><br/>
        <InputTextVals/>
        <InsertTimeSelect/>
        <StartButton/>
      </div>
    )
  }

  //required text fields
  const InputTextVals = () => {
    return(
        <div>
            Category <input required type='text'></input><br/>
            difficulty <input required type='text'></input><br/>
            type <input required type='text'></input>
        </div>
    )
  }

  const InsertTimeSelect = () => {
    return(
        <div>
            Inser Time:
            <select>
                <option value="1m">1m</option>
                <option value="2m">2m</option>
                <option value="5m">5m</option>
            </select>
        </div>
    )
  } 

  const InsertTime = ({id}) => {
    return(
        
            <p>{id}</p>
    ) 
  }

  // Button
  const StartButton = () => {
    return(
        <div>
            <button>Start Quiz</button>
            <button>See My Statistics</button>
        </div>
    )
  }