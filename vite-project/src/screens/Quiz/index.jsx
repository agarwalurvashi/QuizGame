import { useState } from "react"
import { Button } from "../../components/button"
import { Label } from "../../components/label"
import { Timer } from "../../components/timer"


const question1 = 
    {
        id:'1',
        value:'First US president?'
    }

const progressLabel = {
    id:'2',
    value:'Question 3 out of 6'
}

const ClickEvent1 =() =>{
    return(
        console.log('Console reached ClickEvent. End Quiz')
    )
}

const ClickEvent2 =() =>{
    return(
        console.log('Console reached ClickEvent. Answers')
    )
}






export const QuizScreen = () => {

    return(
        <div>  
            <Label  id={question1.id} value={question1.value}>{question1.value}</Label><br/>    
            <Label  id={progressLabel.id} value={progressLabel.value}>{progressLabel.value}</Label><br/>        
            <Button onclick={ClickEvent1} text='End Quiz'></Button><br/>
            <Button onclick={ClickEvent2} text='Answers'></Button> <br/>
            <Timer />
        </div>
    )
}
