import React, { createContext, useState } from "react";

const ExperienceContext = createContext();

const defaultExp = 
  {
    companyName: 'Salesforce.com, LLC',
    jobTitle: 'Senior Software Engineer',
    startDate: 'November 2019',
    endDate: 'Present',
    description: [],
  }

const ExperienceProvider = ({children}) => {
    const [experience, setExperience] = useState(defaultExp)
    
      const [savedExperience, setSavedExperience] = useState([]);

      return(
        <ExperienceContext.Provider value={{experience, setExperience, savedExperience, setSavedExperience}}>
            {children}
        </ExperienceContext.Provider>
      )
}

export {ExperienceContext, ExperienceProvider}
