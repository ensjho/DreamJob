import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes.js"
import Navigation from "./routes/Navigation";


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