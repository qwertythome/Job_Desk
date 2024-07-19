import React from 'react';
import { LanguageProvider } from './provider/Language';
import Search from "./components/Search"
import Job from "./components/Job"
import Nav from "./components/Nav"

const App = () => {
  return (
    <LanguageProvider>
        <Nav/>
        <Search/>
        <Job/>
    </LanguageProvider>
  );
};

export default App;

