import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import './index.css';
import HomePage from "./Home_Page/HomePage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
  );
}

export default App;
