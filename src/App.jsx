import React from 'react';
import { LanguageProvider } from './provider/Language';
import Search from "./component/Search"
import Job from "./component/Job"
import Nav from "./component/Nav"

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

