import './styles/appStyle.scss';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import JobExperience from './components/JobExperience';
import Skills from './components/Skills';



import React from 'react'
const App = () => {
  return (
    <div className="app">
      <h1>EDITABLE CURRICULUM</h1>
      <GeneralInfo />
      <Education />
      <JobExperience />
      <Skills />
    </div>
  )
}

export default App


