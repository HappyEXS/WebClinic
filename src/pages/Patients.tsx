import React, { useState, useEffect } from "react";
import { Patient } from "../shared/types";
import { PatientService } from "../services/PatientService";

function Patients() {
  const [patients, setPatients] = useState<Array<Patient>>([]);

  useEffect(() => {
    retrivePatients();
  }, []);

  const retrivePatients = () => {
    PatientService.getAll()
      .then((response: any) => {
        setPatients(response.data as Patient[]);
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
          <td className="tab-header">
            <h2>Patients</h2>
          </td>
        </tr>
      </table>

      <hr />
      <div className="main-body">
        <table className="main-table">
          <thead className="main-head">
            <tr className="table-row">
              <th className="table-item">Patient ID</th>
              <th className="table-item">Surname</th>
              <th className="table-item">Name</th>
              <th className="table-item">Birth Date</th>
              <th className="table-item">Email</th>
              <th className="table-item">Active</th>
              <th className="table-item">Activate / Disactivate</th>
              <th className="table-item">Delete Account</th>
            </tr>
          </thead>
          <tbody className="doctor-body">
            {patients.map((patient, index) => (
              <tr className="table-row">
                <td className="table-item">{patient.patientID}</td>
                <td className="table-item">{patient.surname}</td>
                <td className="table-item">{patient.name}</td>
                <td className="table-item">
                  {patient.dateOfBirth.substring(0, 10)}
                </td>
                <td className="table-item">{patient.email}</td>
                <td className="table-item">{patient.isActive.toString()}</td>
                <td className="table-item">
                  <a
                    className="btn btn-outline-primary"
                    id="button-table"
                    onClick={() => {
                      PatientService.activate(patient.patientID);
                      retrivePatients();
                    }}
                  >
                    Activate
                  </a>
                  <a
                    className="btn btn-outline-secondary"
                    id="button-table"
                    onClick={() => {
                      PatientService.disactivate(patient.patientID);
                      retrivePatients();
                    }}
                  >
                    Disactivate
                  </a>
                </td>
                <td className="table-item">
                  <a
                    className="btn btn-outline-danger"
                    id="button-table"
                    onClick={() => {
                      PatientService.remove(patient.patientID);
                      retrivePatients();
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
}

export default Patients;
