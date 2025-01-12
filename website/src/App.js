import "./index.css";
import {HashRouter, Route, Routes, Link} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from './pages/ProjectsPage';

const App = () => {
  return (
    <HashRouter className = "nav-bar">
      <span>
        <Link to = "/" className = "nav-button">About Me</Link>
      </span>
      <span>
        <Link to = "/projects" className = "nav-button">Projects</Link>
      </span>
      <Routes>
        <Route path = "/" element={<HomePage/>}/>
        <Route path = "/projects" element={<ProjectsPage/>}/>
      </Routes>
    </HashRouter>
  );
};

export default App;
