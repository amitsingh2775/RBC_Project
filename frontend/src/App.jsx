import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil'; // Import RecoilRoot
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import DashboardAdmin from './components/DashboardAdmin';
import DashboardModerator from './components/DashboardModerator';
import DashboardUser from './components/DashboardUser';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard/admin" element={<DashboardAdmin />} />
          <Route path="/dashboard/moderator" element={<DashboardModerator />} />
          <Route path="/dashboard/user" element={<DashboardUser />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
