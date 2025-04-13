
import "./App.css";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <main>
      <Navbar />
      <AboutMe/>
      <Skills/>
      <Projects/>
    </main>
  );
}

export default App;
