import { useState } from 'react'
import './App.css'
import Output from './components/Output'
import EducationForm from './components/EducationForm'
import { EducationProvider } from './Contexts/EducationContext'
import SkillsForm from './components/SkillsForm'
import { SkillsProvider } from './Contexts/SkillsContext'
import { TitleProvider } from './Contexts/TitleContext'
import TitleForm from './components/TitleForm'
import ExperienceForm from './components/ExperienceForm'
import { ExperienceProvider } from './Contexts/ExperienceContext'
import HonorForm from './components/HonorsForm'
import { HonorProvider } from './Contexts/HonorContext'
import ProjectForm from './components/AcademicProjectsForm'
import { ProjectProvider } from './Contexts/AcademicProjectsContext'
import Footer from './components/Footer'


function App() {
  return (
    
    <ExperienceProvider>
    <EducationProvider>
    <SkillsProvider>
    <TitleProvider>
    <HonorProvider>
    <ProjectProvider>
      <div className='container'>

        <div className='inputContainer'>
        
          <TitleForm />
          <EducationForm />
          <SkillsForm />
          <ExperienceForm/>
          
          <ProjectForm/>
          <HonorForm />
        </div>
        

        <div className='outputContainer'>
        
        <Output />
        </div>

      </div>
        <Footer />

      </ProjectProvider>
      </HonorProvider>
      </TitleProvider>
      </SkillsProvider>
      </EducationProvider>
      </ExperienceProvider>



  )


}

export default App
