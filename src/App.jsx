import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Projects from "./components/Projects/Projects.jsx";

function App() {
  // Set basename only in production (GitHub Pages) or if deployed
  const basename = import.meta.env.MODE === 'production' ? '/portfolio-site' : '/';


  return (
    <>
        <BrowserRouter basename={basename}>
        <Routes>
          <Route path="portfolio-site/" element={<HomePage />} />
          <Route path="portfolio-site/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
