import React, { createContext, useState } from "react";

const ProjectsContext = createContext();

const defaultExp = 
  {
        title: 'Autonomous Robot Navigation System',
        description: 'Designed and implemented an autonomous robot navigation system using ROS and computer vision techniques',
        tools: 'ROS, OpenCV, Python',
  }

const ProjectProvider = ({children}) => {
    const [project, setProject] = useState(defaultExp)
    
      const [savedProjects, setSavedProjects] = useState([]);

      return(
        <ProjectsContext.Provider value={{project, setProject, savedProjects, setSavedProjects}}>
            {children}
        </ProjectsContext.Provider>
      )
}

export {ProjectsContext, ProjectProvider}
