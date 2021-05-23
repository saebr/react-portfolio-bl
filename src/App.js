import React from "react";
import Navbar from "./components/pages/navbar"
import AboutMe from "./components/pages/aboutme"
import Projects from "./components/pages/projects"
function App() {
  return (
      <div>
        <Navbar/>
        <AboutMe/>
        <Projects/>
      </div>
  );
}

export default App;