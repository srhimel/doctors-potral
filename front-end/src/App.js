import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Appointment from './pages/Appointment/Appointment';
import Account from './pages/Account/Account';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/Account/PrivateRoute/PrivateRoute';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path="/appointment" element={<Appointment />} />
          </Route>

          <Route path="/account" element={<Account />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
