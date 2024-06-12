import React, { useContext, useState } from "react";
import InputField from "./InputField";
import { SkillsContext } from "../Contexts/SkillsContext";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function InputSkills({ skill, onInputChange, onSave, savedSkills, onDelete }) {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  }

  return (

    <div className={`card ${isExpanded ? 'expanded' : ''}`}>
      <div className="card-header">
        <h3>Skills</h3>
        <button  onClick={toggleExpanded} className="toggle-btn">
          <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
        </button>
      </div>

      {isExpanded && (
        <div className="card-content">
          <InputField
            label="Title"
            id="title"
            type="text"
            value={skill.title}
            onChange={onInputChange}
          />



          <InputField
            label="Description"
            id="description"
            type="text"
            value={skill.description}
            onChange={onInputChange}
          />

          <button className="save-button" onClick={onSave}>Save</button>

          <h3>Saved Skills</h3>
          {savedSkills.map((s, index) => (
            <div key={index} className="saved-card">
              <h4>{s.title}</h4>
              <button className='delete-button' onClick={() => onDelete(index)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>

  );
}

function SkillsForm() {

  const { skill, setSkill, savedSkills, setSavedSkills } = useContext(SkillsContext);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setSkill({ ...skill, [name]: value });
  };

  const handleSavedSkills = () => {
    if (skill.title.trim() !== '' && skill.description.trim() !== '') {
      setSavedSkills([...savedSkills, skill]);
      setSkill({
        title: "",
        description: "",
      });
    } else {
      return;
    }

  };

  const handleDeleteSkill = (indexToDelete) => {
    setSavedSkills(savedSkills.filter((_, index) => index !== indexToDelete))
  }
  return (
    <div>
      <InputSkills
        skill={skill}
        onInputChange={handleInputChange}
        onSave={handleSavedSkills}
        savedSkills={savedSkills}
        onDelete={handleDeleteSkill}
      />
    </div>
  );
}

export default SkillsForm;
