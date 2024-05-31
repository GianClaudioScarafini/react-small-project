import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Intro from './components/Intro.jsx'
import Skills from './components/Skills.jsx'
import Expreriences from './components/Experiences.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Intro />
  </React.StrictMode>,
)
