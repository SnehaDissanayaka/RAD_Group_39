import React from 'react';
import Home from './Home';
import Login from './components/Login';
import { BrowserRouter,Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
    
  )
}
export default App