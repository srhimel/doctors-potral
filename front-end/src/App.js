import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Appointment from './pages/Appointment/Appointment';
import Account from './pages/Account/Account';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/Account/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import Patients from './pages/Dashboard/Patients/Patients';
import DashboardMain from './pages/Dashboard/DashboardMain';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import AdminRoute from './pages/Account/AdminRoute/AdminRoute';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/dashboard" element={<Dashboard />} >
              <Route path="" element={<DashboardMain />} />
              <Route path="patients" element={<Patients />} />
              <Route element={<AdminRoute></AdminRoute>}>
                <Route path="make-admin" element={<MakeAdmin />} />
              </Route>
            </Route>
          </Route>

          <Route path="/account" element={<Account />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
