import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Appointment from './pages/Appointment/Appointment';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>

        </Route>
        <Route path="/appointment" element={<Appointment />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
