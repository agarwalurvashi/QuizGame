//import React from 'react'
import React, { useEffect, useState } from 'react';
import './App.css'
import { WelcomeScreen } from './screens/welcome';
import { QuizScreen } from './screens/Quiz';

export const App = () => {
  return(
    <div>
      {/* <WelcomeScreen></WelcomeScreen> */}
      <QuizScreen></QuizScreen>
    </div>
  )
}