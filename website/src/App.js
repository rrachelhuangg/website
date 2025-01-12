import "./index.css";
import {HashRouter, Route, Routes, Link} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from './pages/ProjectsPage';

const App = () => {
  return (
    <HashRouter id = "nav-bar">
      <nav>
        <ul>
          <li>
            <Link to = "/">About Me</Link>
          </li>
          <li>
            <Link to = "/projects">Projects</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path = "/" element={<HomePage/>}/>
        <Route path = "/projects" element={<ProjectsPage/>}/>
      </Routes>
    </HashRouter>
  );
};

export default App;
