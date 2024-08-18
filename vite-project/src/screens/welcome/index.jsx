// const timeInput =['1m','2m','5m']

import { Select } from "../../components/select"

// const timeInputList = timeInput.map(time => <InsertTime id={time}/>);

const optionsCategory = [
    {
        key: 1,
        value: 'Math'
    },
    {
        key: 2,
        value: 'Politics'
    }
]

const optionsDifficulty = [
    {
        key: 1,
        value: 'Beginner'
    },
    {
        key: 2,
        value: 'Intelligent'
    },
    {
        key: 3,
        value: 'Genius'
    }
]

const optionsType = [
    {
        key: 1,
        value: 'Timed'
    },
    {
        key: 2,
        value: 'Untimed'
    }
]

export const WelcomeScreen =() => {

    return (

      <div>
        Welcome <br/>
        Number of question <input required type='number' min='5' max='15'></input><br/>
        Select Category <Select options={optionsCategory}/> <br/>
        Select Difficulty <Select options={optionsDifficulty}/> <br/>
        Select Type <Select options={optionsType}/>
        <InsertTimeSelect/>
        <StartButton/>
      </div> 
    )
  }


  const InsertTimeSelect = () => {
    return(
        <div>
            Insert Time:
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