import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes.js"
import Navigation from "./Navigation";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;