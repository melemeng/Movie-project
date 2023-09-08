import React from 'react';
// components and pages
//
import Home from "./pages/Home.js";
// styles and animations

import GlobalStyles from "./components/GlobalStyles.js";
//import { Route } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';  // <-- make sure to import these




function App() {

    return (
    <div className="App">
      <GlobalStyles />
         <Routes>
           <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Home />} />
          </Routes>
        
    
    </div>
  );
}

export default App;
