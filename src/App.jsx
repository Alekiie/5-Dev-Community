import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Team, Contact } from "./pages";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="w-full h-full bg-gradient-bg max-w-[100vw] max-h-[100%] overflow-hidden  min-h-screen ">

    <Router> {/* Wrap the Routes component with the Router component */}
        <NavBar/>
        
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
