import React, { useState } from "react";
import { useContext } from "react";
import { TitleContext } from "../Contexts/TitleContext";
import InputField from "./InputField";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function InputTitle({ title, onInputChange }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    }
    return (
        <div className={`card ${isExpanded ? 'expanded' : ''}`}>
            <div className="card-header">
                <h3>Title</h3>
                <button  onClick={toggleExpanded}className="toggle-btn">
                    <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
                </button>
            </div>
            {isExpanded &&(
                <div className="card-content">
                    <InputField
                        label="Name: "
                        id="name"
                        type="text"
                        value={title.name}
                        onChange={onInputChange}
                    />
                    <InputField
                        label="Email"
                        id="email"
                        type="email"
                        value={title.email}
                        onChange={onInputChange}
                    />
                    <InputField
                        label="Phone"
                        id="phone"
                        type="phone"
                        value={title.phone}
                        onChange={onInputChange}
                    />

                    <InputField
                        label="Linkedin Username"
                        id="linkedinUsername"
                        type="text"
                        value={title.linkedinUsername}
                        onChange={onInputChange}
                    />
                </div>
            )}
        </div>
    );
}
function TitleForm() {

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTitle({ ...title, [name]: value })
    }
    const { title, setTitle } = useContext(TitleContext)
    return (
        <div>
            <InputTitle
                title={title}
                onInputChange={handleInputChange}
            />
        </div>

    )
}
export default TitleForm;