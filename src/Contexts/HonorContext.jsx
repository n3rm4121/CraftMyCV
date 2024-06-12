import React, { createContext, useState } from "react";

const HonorContext = createContext();

const HonorProvider = ({children}) => {
    const [honor, setHonor] = useState(`Dean's List, University of California, Los Angeles`);
    const [savedHonors, setSavedHonors] = useState([]);

    return(
        <HonorContext.Provider value={{honor, setHonor, savedHonors,setSavedHonors}}>
            {children}
        </HonorContext.Provider>
    )

}

export {HonorContext, HonorProvider}