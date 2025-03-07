import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <>
      <BrowserRouter basename="/portfolio-site">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
