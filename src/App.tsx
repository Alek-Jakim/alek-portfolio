import React from "react";
import "./index.css"

//Components
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <Intro />

      <About />

      <Projects />

    </div>
  );
}

export default App;
