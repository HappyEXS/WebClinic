import React, { useState, useEffect } from "react";
import { Doctor } from "../shared/types";
import { DoctorService } from "../services/DoctorService";
import { useNavigate } from "react-router-dom";

const Doctors = () => {
  const [doctors, setDoctors] = useState<Array<Doctor>>([]);

  useEffect(() => {
    retriveDoctors();
  }, [doctors]);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/doctors/create`;
    navigate(path);
  };

  const retriveDoctors = () => {
    DoctorService.getAll()
      .then((response: any) => {
        setDoctors(response.data as Doctor[]);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <>
      <table className="table-header">
        <tr>
          <td className="tab-first">
            <h2>Doctors</h2>
          </td>
          <td className="tab-last">
            <button
              type="submit"
              className="btn btn-primary"
              id="button"
              onClick={routeChange}
            >
              Create new doctor account
            </button>
          </td>
        </tr>
      </table>

      <hr />
      <div className="main-body">
        <table className="main-table">
          <thead className="main-head">
            <tr className="table-row">
              <th className="table-item">Doctor ID</th>
              <th className="table-item">Last Name</th>
              <th className="table-item">First Name</th>
              <th className="table-item">Birth Date</th>
              <th className="table-item">Speciality</th>
              <th className="table-item">View Schedule</th>
              <th className="table-item">Edit / Delete Account</th>
            </tr>
          </thead>
          <tbody className="doctor-body">
            {doctors.map((doctor, index) => (
              <tr className="table-row">
                <td className="table-item">{doctor.doctorID}</td>
                <td className="table-item">{doctor.surname}</td>
                <td className="table-item">{doctor.name}</td>
                <td className="table-item">
                  {doctor.dateOfBirth.substring(0, 10)}
                </td>
                <td className="table-item">{doctor.speciality.name}</td>
                <td className="table-item">
                  <a className="btn btn-outline-primary" id="button-table">
                    Schedule
                  </a>
                </td>
                <td className="table-item">
                  <a className="btn btn-outline-secondary" id="button-table">
                    Edit
                  </a>
                  <a
                    className="btn btn-outline-danger"
                    id="button-table"
                    onClick={() => {
                      DoctorService.remove(doctor.doctorID);
                      delete doctors[index];
                    }}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Doctors;
