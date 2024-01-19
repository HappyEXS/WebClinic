import Alert from "./components/Alert";
import Navbar from "./components/Navbar";

import { Routes, Route, Link } from "react-router-dom";
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
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>(CurrentPage.Home);

  const [showAlert, setShowAlert] = useState(false);
  const [logged, setLogged] = useState(false);
  const [userId, setUserId] = useState(-1);
  const [userType, setUserType] = useState("director");

  const specialities = [
    {
      specialityId: 1,
      name: "domowy",
    },
    {
      specialityId: 2,
      name: "laryngolog",
    },
    {
      specialityId: 3,
      name: "dermatolog",
    },
    {
      specialityId: 4,
      name: "okulista",
    },
    {
      specialityId: 5,
      name: "neurolog",
    },
    {
      specialityId: 6,
      name: "ortopeda",
    },
    {
      specialityId: 7,
      name: "pediatra",
    },
  ];
  //<meta charset="utf-8" />
  return (
    <html lang="en">
      <head>
        {" "}
        <title>WebClinic</title>
      </head>
      <body>
        <header>
          <Navbar logged={logged} userType={userType}></Navbar>
        </header>

        <div className="container">
          <main role="main" className="pb-3">
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
              <Route
                path="schedule"
                element={
                  <Schedule userType={userType} specialities={specialities} />
                }
              />
              <Route path="specialities" element={<Specialities />} />
              <Route
                path="visits"
                element={
                  <Visits
                    userType={userType}
                    userId={userId}
                    specialities={specialities}
                  />
                }
              />
              <Route path="doctors" element={<Doctors />} />
              <Route path="patients" element={<Patients />} />
            </Routes>
          </main>
        </div>
        <footer className="border-top footer text-muted">
          <div className="container">
            &copy; 2023 - WebClinic -{" "}
            <Link className="navbar-brand" to="/">
              Home
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}

export default App;
