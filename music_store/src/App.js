import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Home_Page/HomePage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path='/about' element={<About/>}/> */}
        </Routes>
      </Router>
  );
}

export default App;
