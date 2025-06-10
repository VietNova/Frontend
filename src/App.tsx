import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './components/pages/Homepage.tsx';
import Login from './components/pages/Login.tsx';
import AdminLogin from './components/pages/AdminLogin.tsx';
import StaffLogin from './components/pages/StaffLogin.tsx';
import ResidentLogin from './components/pages/ResidentLogin.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/resident-login" element={<ResidentLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
