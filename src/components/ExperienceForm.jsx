import React, { useContext, useState } from "react";
import InputField from "./InputField";
import { ExperienceContext } from "../Contexts/ExperienceContext";

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import { AiOutlineClose } from 'react-icons/ai';

const InputExperience = ({ experience, onInputChange, onSave, savedExperience, onDelete }) => {
  const [description, setDescription] = useState("");

  const [isExpanded, setIsExpanded] = useState(false);

  const handleDescriptionAdd = () => {
    if (description.trim()) {
      const newDescription = [...experience.description, description];
      onInputChange({ target: { name: "description", value: newDescription } });
      setDescription("");
    }
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  }

  const handleDescriptionDelete = (indexToDelete) => {
    const updatedDescription = experience.description.filter((_, index) => index !== indexToDelete)
    // console.log("todelete", indexToDelete)
    // console.log("description: ", experience.description);
    // console.log('index', index)
    onInputChange({target: {name: "description", value: updatedDescription}})
  }


  const truncateDescription = (desc) => {
    const maxLength = 50;
    if (desc.length > maxLength) {
      return desc.substring(0, maxLength) + '...';
    }
    return desc;
  };
  
  

  return (
    <div className={`card ${isExpanded ? "expanded" : ''}`}>
      <div className="card-header">
        <h3>Experience</h3>
        <button onClick={toggleExpanded} className="toggle-btn">
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {isExpanded && (
        <div className="card-content">
          <InputField label="Company Name" id="companyName" type="text" value={experience.companyName} onChange={onInputChange} />
          <InputField label="Job Title" id="jobTitle" type="text" value={experience.jobTitle} onChange={onInputChange} />

          <div>
            <InputField label="Job Description" id="jobDescription" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button type="button"className="save-button" onClick={handleDescriptionAdd}>Add Description</button>
          </div>
          <div>
            {experience.description.map((desc, index) => (
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap:'2px'}} key={index}>
              <p>{truncateDescription(desc)}</p>
                <button
                    
                    onClick={() => handleDescriptionDelete(index)}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                    aria-label="Delete"
                  >
                    <AiOutlineClose size={24} color="red"/>
                  </button>
              </div>
            ))}
          </div>

          <InputField label="Start Date" id="startDate" type="text" value={experience.startDate} onChange={onInputChange} />
          <InputField label="End Date" id="endDate" type="text" value={experience.endDate} onChange={onInputChange} />
          <button className="save-button" onClick={onSave}>Save</button>

          <div>
            <h3>Saved Experience</h3>
            {savedExperience.map((exp, index) => (
              <div key={index} className="saved-card">
                <h4>{exp.companyName}</h4>
                <button className='delete-button' onClick={() => onDelete(index)}>Delete</button>
              </div>
            ))}
          </div>
        </div>

      )}
    </div>
  );
};

function ExperienceForm() {
  const { experience, setExperience, savedExperience, setSavedExperience } = useContext(ExperienceContext);

  const handleInputChange = (e) => {
    //console.log(e.target);
    const { name, value } = e.target;
    //console.log("name:", name, "value: ", value)
    setExperience({ ...experience, [name]: value });
  };

  const handleSaveExperience = () => {
    if (experience.companyName.trim() !== '' && experience.jobTitle.trim() !== '' && experience.startDate.trim() !== '' && experience.endDate.trim() !== '') {
      setSavedExperience([...savedExperience, experience]);
      setExperience({
        companyName: '',
        jobTitle: '',
        startDate: '',
        endDate: '',
        description: [],
      });
    } else {
      alert("Enter all the fields of Experience");
    }
  };

  const handleDeleteExperience = (indexToDelete) => {
    setSavedExperience(savedExperience.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <InputExperience
        experience={experience}
        onInputChange={handleInputChange}
        onSave={handleSaveExperience}
        savedExperience={savedExperience}
        onDelete={handleDeleteExperience}
      />
    </div>
  );
}

export default ExperienceForm;
