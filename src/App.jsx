import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


import './App.scss'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
