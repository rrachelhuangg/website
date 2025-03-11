import "./index.css";
import {HashRouter, Route, Routes, Link} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from './pages/ProjectsPage';
import ThoughtsPage from './pages/ThoughtsPage';
import LinksPage from './pages/LinksPage';
import Entry1 from "./pages/thoughts/Entry1";

const App = () => {
  return (
    <HashRouter className = "nav-bar">
      <span>
        <Link to = "/" className = "nav-button">home</Link>
      </span>
      <span>
        <Link to = "/projects" className = "nav-button">projects</Link>
      </span>
      <span>
        <Link to = "/thoughts" className = "nav-button">thoughts</Link>
      </span>
      <span>
        <Link to = "/links" className = "nav-button">links</Link>
      </span>
      <Routes>
        <Route path = "/" element={<HomePage/>}/>
        <Route path = "/projects" element={<ProjectsPage/>}/>
        <Route path = "/thoughts" element = {<ThoughtsPage/>}/>
        <Route path = "/links" element = {<LinksPage/>}/>
        <Route path = "/thoughts/entry1" element = {<Entry1/>}/>
      </Routes>
    </HashRouter>
  );
};

export default App;
