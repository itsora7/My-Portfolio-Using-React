import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { LayOut } from "./components/LayOut";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { TopNav } from "./components/TopNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import './images'
function App() {
  return (
    <div class="wrapper">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LayOut>
                <Hero />
              </LayOut>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/skills"
            element={
              <LayOut>
                <Skills />
              </LayOut>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/projects"
            element={
              <LayOut>
                <Projects />
              </LayOut>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/aboutme"
            element={
              <LayOut>
                <AboutMe />
              </LayOut>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/contact"
            element={
              <LayOut>
                <Contact />
              </LayOut>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
