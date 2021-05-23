import React from "react";
import Navbar from "./components/pages/navbar/index"
import AboutMe from "./components/pages/aboutme"
import Projects from "./components/pages/projects"
import Contact from "./components/pages/contact"
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </div>
      </Router>
  );
}

export default App;