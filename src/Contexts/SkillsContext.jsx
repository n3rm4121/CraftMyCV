import React, { createContext, useState } from "react";

const SkillsContext = createContext();

const SkillsProvider = ({children}) => {
    const [skill, setSkill] = useState({
        title: "Programming Languages",
        description: "Java, Go, Angular, PHP",
      });
    
      const [savedSkills, setSavedSkills] = useState([]);

      return(
        <SkillsContext.Provider value={{skill, setSkill, savedSkills, setSavedSkills}}>
            {children}
        </SkillsContext.Provider>
      )
}

export {SkillsContext, SkillsProvider}

