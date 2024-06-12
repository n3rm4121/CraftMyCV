import React, {createContext, useState} from "react";


const TitleContext = createContext();

const TitleProvider = ({children}) => {
      const [title, setTitle] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
         phone: '(555) 123-4567',
         linkedinUsername: 'your-username'
  })

  return(
    <TitleContext.Provider value={{title, setTitle}}>
        {children}
    </TitleContext.Provider>
  )
}

export {TitleContext, TitleProvider}