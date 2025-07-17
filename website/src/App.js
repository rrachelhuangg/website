import "./index.css";
import {HashRouter, Route, Routes, Link} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import PublicationsPage from './pages/PublicationsPage';

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
        <Link to = "/about" className = "nav-button">experiences</Link>
      </span>
      <span>
        <Link to = "/publications" className = "nav-button">publications</Link>
      </span>
      <Routes>
        <Route path = "/" element={<HomePage/>}/>
        <Route path = "/projects" element={<ProjectsPage/>}/>
        <Route path = "/about" element={<AboutPage/>}/>
        <Route path = "/publications" element={<PublicationsPage/>}/>
      </Routes>
    </HashRouter>
  );
};

export default App;
