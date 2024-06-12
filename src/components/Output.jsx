import React, { useContext } from "react";
import { EducationContext } from "../Contexts/EducationContext";
import { SkillsContext } from "../Contexts/SkillsContext";
import { TitleContext } from "../Contexts/TitleContext";
import { ExperienceContext } from "../Contexts/ExperienceContext";
import { HonorContext } from "../Contexts/HonorContext";

import { ProjectsContext } from "../Contexts/AcademicProjectsContext";

import { FaLinkedin } from 'react-icons/fa';


import html2pdf from 'html2pdf.js';

export default function Output() {

  const { savedEducations } = useContext(EducationContext)
  const { savedSkills } = useContext(SkillsContext)
  const { title } = useContext(TitleContext)
  const { savedExperience } = useContext(ExperienceContext)

  const { savedHonors } = useContext(HonorContext)

  const { savedProjects } = useContext(ProjectsContext)


  function downloadPdf() {
    const element = document.getElementById('pdf-content'); 
    html2pdf().from(element).save();
  }
  
  return (
   <>
   <button onClick={downloadPdf} className="save-button">Download CV</button>

    <div id="pdf-content" className="resume">
    
      <header>
      
        <h1>{title.name}</h1>
        <p> <span>&#9993;</span>  {title.email} | <span>&#9990;</span> {title.phone} | <FaLinkedin /> <a
          target="blank" href={`https://linkedin.com/in/${title.linkedinUsername}`}>{title.linkedinUsername}</a></p>

      </header>


      <section>
        <h2>EDUCATION</h2>
        <div className="education">

          {savedEducations.map((edu, index) => (
            <ul key={index}>
              <h3>
                {edu.schoolName} • {edu.location} </h3>

              <span>{edu.startDate} - {edu.endDate}</span>

              <p><i>{edu.titleOfStudy}</i></p>
              <p><strong>Relevant Courses: </strong>{edu.relevantCourses}</p>
            </ul>

          ))}

        </div>
      </section>



      <section>
        <h2>SKILLS</h2>
        {savedSkills.map((skill, index) => (
          <li>
            <strong>{skill.title}</strong>
            <span style={{ marginLeft: '50px' }}>{skill.description}</span>
          </li>
        ))}

      </section>


      <section>
        <h2>WORK EXPERIENCE</h2>
        <div className="work-experience">

          {savedExperience.map((exp, index) => (
            <ul key={index}>
              <h3>{exp.companyName}</h3>
              <span>{exp.startDate} - {exp.endDate}</span>
              <p><i>{exp.jobTitle}</i></p>
              <ul>
                {exp.description.map((des, index) => (
                  <li key={index}>{des}</li>
                ))}
              </ul>
            </ul>

          ))}

        </div>
      </section>

      <section>
        <h2>ACADEMIC PROJECTS</h2>
        {savedProjects.map((project, index) => (
          <ul>
            <li key={index}>
              <p><strong>{project.title}: </strong>{project.description}</p>
              <p>Languages and Frameworks: {project.tools}</p>
            </li>
          </ul>
        ))}
      </section>



      <section>
        <h2>HONORS & CERTIFICATIONS</h2>
        {savedHonors.map((honor, index) => (
          <ul>
            <li key={index}>
              {honor}
            </li>
          </ul>
        ))}
      </section>


    </div>
    </>
  )
}