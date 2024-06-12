import React, { useContext, useState } from "react";
import InputField from "./InputField";
import { ProjectsContext } from "../Contexts/AcademicProjectsContext";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InputProject = ({ project, onInputChange, onSave, savedProjects, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  }
  return (
    <div className={`card ${isExpanded ? 'expanded' : ''}`}>
      <div className="card-header">
        <h3>Projects</h3>
        <button  onClick={toggleExpanded}  className="toggle-btn">
          <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
        </button>
      </div>

      {isExpanded && (
        <div className="card-content">
          <InputField label="Title" id="title" type="text" value={project.title} onChange={onInputChange} />
          <InputField label="Description" id="description" type="text" value={project.description} onChange={onInputChange} />
          <InputField label="Languages & Frameworks" id="tools" type="text" value={project.tools} onChange={onInputChange} />
          <button className="save-button" onClick={onSave}>Save</button>
          <div>
            <h3>Saved Projects</h3>
            {savedProjects.map((pro, index) => (
              <div key={index} className="saved-card">
                <h4>{pro.title}</h4>

                <button className='delete-button' onClick={() => onDelete(index)}>Delete</button>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
};

function ProjectForm() {
  const { project, setProject, savedProjects, setSavedProjects } = useContext(ProjectsContext);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProject(prevState => ({ ...prevState, [id]: value }));
  };

  const handleSaveProject = () => {
    if (project.title.trim() !== '' && project.description.trim() !== '' && project.tools.trim() !== '') {
      setSavedProjects([...savedProjects, project]);
      setProject({
        title: '',
        description: '',
        tools: '',
      });
    } else {
      alert("Please fill in all fields before saving.");
    }
  };

  const handleDeleteProject = (indexToDelete) => {
    setSavedProjects(savedProjects.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <InputProject
        project={project}
        onInputChange={handleInputChange}
        onSave={handleSaveProject}
        savedProjects={savedProjects}
        onDelete={handleDeleteProject}
      />
    </div>
  );
}

export default ProjectForm;