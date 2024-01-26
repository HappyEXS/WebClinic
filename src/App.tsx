import Alert from "./components/Alert";
import Navbar from "./components/Navbar";

import { Routes, Route, Link } from "react-router-dom";
import { CurrentPage } from "./shared/types";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Specialities from "./pages/Specialities";
import Schedules from "./pages/Schedules";
import Visits from "./pages/Visits";
import Doctors from "./pages/Doctors";
import Patients from "./pages/Patients";

import React, { useState, useEffect } from "react";
import { SpecialityService } from "./services/SpecialityService";
import { Speciality } from "./shared/types";
import "./App.css";
import DoctorCreate from "./pages/DoctorCreate";
import ScheduleCreate from "./pages/ScheduleCreate";

function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>(CurrentPage.Home);

  const [showAlert, setShowAlert] = useState(false);
  const [logged, setLogged] = useState(false);
  const [userId, setUserId] = useState(-1);
  const [userType, setUserType] = useState("director");

  const [specialities, setSpecialities] = useState<Array<Speciality>>([]);

  useEffect(() => {
    retriveSpecialities();
  }, []);

  const retriveSpecialities = () => {
    SpecialityService.getAll()
      .then((response: any) => {
        setSpecialities(response.data as Speciality[]);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  //<meta charset="utf-8" />
  return (
    <html lang="en" id="html">
      <head>
        {" "}
        <title>WebClinic</title>
      </head>
      <body id="body">
        <header>
          <Navbar
            logged={logged}
            userType={userType}
            setLogged={setLogged}
            setUserId={setUserId}
            setUserType={setUserType}
          ></Navbar>
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
              <Route
                path="login"
                element={
                  <Login
                    setLogged={setLogged}
                    setUserId={setUserId}
                    setUserType={setUserType}
                  />
                }
              />
              <Route path="reg" element={<Register />} />
              <Route
                path="dashboard"
                element={<Dashboard userID={userId} userType={userType} />}
              />
              <Route
                path="schedule"
                element={
                  <Schedules userType={userType} specialities={specialities} />
                }
              />
              <Route path="schedule/create" element={<ScheduleCreate />} />
              <Route
                path="specialities"
                element={<Specialities specialities={specialities} />}
              />
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
              <Route
                path="doctors/create"
                element={<DoctorCreate specialities={specialities} />}
              />
              <Route path="patients" element={<Patients />} />
            </Routes>
          </main>
        </div>
        <footer id="footer" className="border-top footer text-muted">
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
