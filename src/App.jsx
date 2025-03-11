import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Projects from "./components/Projects/Projects.jsx";

function App() {
  return (
    <>
        <BrowserRouter basename="/portfolio-site">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
