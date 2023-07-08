import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/about" element={<About />} />{" "}
        <Route path="/skill" element={<Skill />} />{" "}
        <Route path="/contact" element={<Contact />} />{" "}
        <Route path="/project" element={<Project />} />{" "}
      </Routes>{" "}
    </Router>
  );
}

export default App;
