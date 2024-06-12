import React, {createContext, useState} from "react";

const EducationContext = createContext();
// returns two object provider and consumer
// provider is used to wrap the part of your component tree where you want the context to be available
// it accepts a compulsory 'value' prop that hold the data you want to share across the components.
// when value prop of the provider changes, all descendans that consume the context will re-render
//the consumer allows any descendant component to use the context.
// it takes a function as a child where the function argument is the current context value. 

//modern react uses useContext hook instead of Consumer
// we want the states to be accessible among output, educatoin and skills for now
// so since app.js is the parent component of all that so we are gonna import there and wrapping it in app.js

// now we write all our sharable states in parent component i.e app.jsx

const EducationProvider = ({children}) => {
  
   const defaultEducation = {
    schoolName: 'Riverdale High School',
    titleOfStudy: 'Bachelor of Science in Computer Science',
    startDate: 'August 2022',
    endDate: 'september 2027',
    location: "USA"
   }
    const [education, setEducation] = useState({
        schoolName: 'Stony Brook University',
        location: 'New York, USA',
        titleOfStudy: 'Bachelor of Science in Computer Science',
        relevantCourses: 'Object Oriented Programming(Java); Data Structures and Algorithms; Data Warehousing, Computer Networks, Artificial Intelligence, Linux, Database Management Systems',
        startDate: 'August 2022',
        endDate: 'August 2025',
        
      });

      const [savedEducations, setSavedEducations] = useState([]);

      return(
        <EducationContext.Provider value={{education, setEducation, savedEducations, setSavedEducations}}>
            {children}
        </EducationContext.Provider>
      )
}

export {EducationContext, EducationProvider}

