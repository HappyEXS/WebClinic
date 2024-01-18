import Alert from "./components/Alert";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";
import { CurrentPage } from "./shared/types";
import { useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Specialities from "./pages/Specialities";
import Schedule from "./pages/Schedule";
import Visits from "./pages/Visits";
import Doctors from "./pages/Doctors";
import Patients from "./pages/Patients";

function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>(CurrentPage.Home);

  const [showAlert, setShowAlert] = useState(false);
  const [logged, setLogged] = useState(false);
  const [userId, setUserId] = useState(-1);
  const [userType, setUserType] = useState("director");

  return (
    <div>
      <Navbar logged={logged} userType={userType}></Navbar>
      {showAlert && (
        <Alert color="primary" onClose={() => setShowAlert(false)}>
          This alert
        </Alert>
      )}
      <Routes>
        <Route path="/" element={<Home logged={logged} />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="specialities" element={<Specialities />} />
        <Route path="visits" element={<Visits />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="patients" element={<Patients />} />
      </Routes>
    </div>
  );
}

export default App;
