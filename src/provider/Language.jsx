
import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguageContext = () => useContext(LanguageContext);
export const LanguageProvider = ({ children }) => {
  
  const [language, setLanguage] = useState([]);
  const [jobitem, setJobitem] =useState()

  return (
    <LanguageContext.Provider value={{ language, setLanguage, jobitem, setJobitem}}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
