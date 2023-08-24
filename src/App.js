import React from 'react';
// components and pages
//
import Home from "./pages/Home.js";
// styles and animations

import GlobalStyles from "./components/GlobalStyles.js";



function App() {

    return (
    <div className="App">
        <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
