import React, { useContext, useState } from "react";
import InputField from "./InputField";
import { EducationContext } from "../Contexts/EducationContext";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InputEducation = ({ education, onInputChange, onSave, savedEducations, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
  };

  return (
      <div className={`card ${isExpanded ? 'expanded' : ''}`}>
          <div className="card-header">
              <h3>Education</h3>
              <button  onClick={toggleExpanded}className="toggle-btn">
                  <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
              </button>
          </div>

          {isExpanded && (
              <div className="card-content">
                  <InputField
                      label="School Name"
                      id="schoolName"
                      type="text"
                      value={education.schoolName}
                      onChange={onInputChange}
                  />

                  <InputField
                      label="Location"
                      id="location"
                      type="text"
                      value={education.location}
                      onChange={onInputChange}
                  />

                  <InputField
                      label="Title Of Study"
                      id="titleOfStudy"
                      type="text"
                      value={education.titleOfStudy}
                      onChange={onInputChange}
                  />

                  <InputField
                      label="Relevant Courses"
                      id="relevantCourses"
                      type="text"
                      value={education.relevantCourses}
                      onChange={onInputChange}
                  />

                  <InputField
                      label="Start Date"
                      id="startDate"
                      type="text"
                      value={education.startDate}
                      onChange={onInputChange}
                  />

                  <InputField
                      label="End Date"
                      id="endDate"
                      type="text"
                      value={education.endDate}
                      onChange={onInputChange}
                  />

                  <button className="save-button" onClick={onSave}>Save</button>

                  <div>
                      <h3>Saved Educations</h3>
                      {savedEducations.map((edu, index) => (
                          <div key={index} className="saved-card">
                              <h4>{edu.titleOfStudy}</h4>
                              <button className='delete-button' onClick={() => onDelete(index)}>Delete</button>
                          </div>
                      ))}
                  </div>
              </div>
          )}
      </div>
  );
}


function EducationForm(){
  const {education, setEducation, savedEducations, setSavedEducations} = useContext(EducationContext);

      const handleInputChange = (e) =>{
        const {name, value} = e.target;
      setEducation({...education, [name]: value})
      }

      const handleSaveEducation = () => {
        if(education.schoolName.trim() !== '' && education.titleOfStudy.trim() !== '' && education.startDate.trim() !== '' && education.endDate.trim() !== '' && education.location.trim() !== '' &&education.relevantCourses.trim() !== ''){
        setSavedEducations([...savedEducations, education]);

      setEducation({
        schoolName: '',
      location: '',
      titleOfStudy: '',
      relevantCourses: '',
      startDate: '',
      endDate: '',
            })
        }else{
        alert("Enter all values")
      }
       
      };

      const handleDeleteEducation = (indexToDelete) => {
        setSavedEducations(savedEducations.filter((_, index) => index !== indexToDelete))
      }
      return (

      <div>
        <InputEducation
          education={education}
          onInputChange={handleInputChange}
          onSave={handleSaveEducation}
          savedEducations={savedEducations}
          onDelete={handleDeleteEducation}
        />
      </div>

      )
}

      export default EducationForm;