import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;