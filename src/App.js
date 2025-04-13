
import "./App.css";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Recommendation from "./components/Recommendation";
import Skills from "./components/Skills";
import ContactUs from './components/ContactUs';
import ContactUsForm from "./components/ContactUsForm";
import Footer from "./components/Footer";


function App() {
  return (
    <main>
      <Navbar />
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Recommendation/>
    
      <ContactUsForm/>
      <Footer/>
    </main>
  );
}

export default App;
