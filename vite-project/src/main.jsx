import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import {App} from './App'
//import {Lesson1} from './Lesson1'
import {Lesson2} from './Lesson2'
//import {Lesson3} from './Lesson3'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Lesson2 />
  </StrictMode>,
)
