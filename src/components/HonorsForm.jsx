import React, { useContext, useState } from "react";
import InputField from "./InputField";
import { HonorContext } from "../Contexts/HonorContext";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InputHonor = ({ honor, savedHonors, onInputChange, onDelete, onSave }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`card ${isExpanded ? 'expanded' : ''}`}>
            <div className="card-header">
                <h3>Honors/Certifications</h3>
                <button className="toggle-btn"  onClick={toggleExpanded}>
                
                    <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
                </button>
            </div>

            {isExpanded && (
                <div className="card-content">
                   
                    <InputField
                        label="Honors/Certifications"
                        id="honor"
                        type="text"
                        value={honor}
                        onChange={onInputChange}
                    />
                    <button className="save-button" onClick={onSave}>Save</button>

                    <h3>Saved Honors/Certifications</h3>
                    {savedHonors.map((h, index) => (
                        <div key={index} className="saved-card">
                            <h4>{h}</h4>
                            <button className='delete-button' onClick={() => onDelete(index)}>Delete</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

function HonorForm() {
    const { honor, setHonor, savedHonors, setSavedHonors } = useContext(HonorContext)

    const handleDeleteHonors = (indexToDelete) => {
        setSavedHonors(savedHonors.filter((_, index) => index !== indexToDelete))
    }

    const handleInputChange = (e) => {
        setHonor(e.target.value)
    }

    const handleSavedHonors = () => {
        if (honor.trim() !== '') {
            setSavedHonors([...savedHonors, honor]);
            setHonor("");
        } else {
            alert("Enter all fields")
        }
    }

    return (
        <InputHonor
            honor={honor}
            savedHonors={savedHonors}
            onInputChange={handleInputChange}
            onDelete={handleDeleteHonors}
            onSave={handleSavedHonors}
        />
    )
}

export default HonorForm;
