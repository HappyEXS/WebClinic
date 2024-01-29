import React, { useState, useEffect } from "react";
import { Patient, Visit, days } from "../shared/types";
import { PatientService } from "../services/PatientService";
import { VisitService } from "../services/VisitService";
import { Link } from "react-router-dom";

interface Props {
  userID: number;
}

const DashboardPatient = ({ userID }: Props) => {
  const [patient, setPatient] = useState<Patient>();
  const [visits, setVisits] = useState<Array<Visit>>([]);

  useEffect(() => {
    retrivePatient();
    retriveVisits();
  }, [patient, visits]);

  const retrivePatient = () => {
    PatientService.get(userID)
      .then((response: any) => {
        setPatient(response.data as Patient);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const retriveVisits = () => {
    VisitService.getForPatient(userID)
      .then((response: any) => {
        setVisits(response.data as Visit[]);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const handelCancelVisit = (visitID: number) => {
    VisitService.deletePatient(visitID).then().catch();
  };
  return (
    <>
      <h1 className="dashboard-header">Patient's Dashboard</h1>

      <table className="table-header">
        <tr>
          <td className="tab-first">
            <h3>Your information</h3>
          </td>
          <td className="tab-last">
            <Link className="btn btn-outline-secondary" to="/patients/edit">
              Edit info
            </Link>
          </td>
        </tr>
      </table>
      <hr />
      <div className="main-body">
        <table className="main-table">
          <thead className="main-head">
            <tr className="table-row">
              <th className="table-item">Last Name</th>
              <th className="table-item">First Name</th>
              <th className="table-item">Birth Date</th>
              <th className="table-item">Email</th>
              <th className="table-item">Password</th>
            </tr>
          </thead>
          <tbody className="doctor-body">
            <tr className="table-row">
              <td className="table-item">{patient?.surname}</td>
              <td className="table-item">{patient?.name}</td>
              <td className="table-item">
                {patient?.dateOfBirth.substring(0, 10)}
              </td>
              <td className="table-item">{patient?.email}</td>
              <td className="table-item">{patient?.password}</td>
            </tr>
          </tbody>
        </table>
        {patient?.isActive === false && (
          <>
            <h5 className="mt-4">This account is inactive. </h5>
            <p>
              You can sign up for visits after account is verified by
              supervisor. If you need any information, please contact
              administrator.
            </p>
          </>
        )}
      </div>

      <h3 className="mt-4">Visits to doctors</h3>
      <hr />

      <div className="main-body">
        <table className="main-table">
          <thead className="main-head">
            <tr className="table-row">
              <th className="table-item">Doctor's Name</th>
              <th className="table-item">Speciality</th>
              <th className="table-item">Date</th>
              <th className="table-item">Day of the Week</th>
              <th className="table-item">Begins at</th>
              <th className="table-item">Details</th>
              <th className="table-item">Cancel</th>
            </tr>
          </thead>
          <tbody className="visit-body">
            {visits.map((visit) => (
              <tr className="table-row">
                <td className="table-item">
                  {visit.schedule.doctor.name +
                    " " +
                    visit.schedule.doctor.surname}
                </td>
                <td className="table-item">
                  {visit.schedule.doctor.speciality.name}
                </td>
                <td className="table-item">
                  {" "}
                  {visit.schedule.startTime.substring(0, 10)}
                </td>
                <td className="table-item">
                  {days[new Date(visit.schedule.startTime).getDay()]}
                </td>
                <td className="table-item">
                  {visit.schedule.startTime.substring(11, 16)}
                </td>
                <td className="table-item">
                  <a className="btn btn-outline-info">Details</a>
                </td>
                <td className="table-item">
                  <a
                    className="btn btn-outline-danger"
                    onClick={() => handelCancelVisit(visit.visitID)}
                  >
                    Cancel
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

export default DashboardPatient;
