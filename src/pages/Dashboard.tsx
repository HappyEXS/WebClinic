import React, { useState, useEffect } from "react";
import { Doctor, Visit, days } from "../shared/types";
import { DoctorService } from "../services/DoctorService";
import { VisitService } from "../services/VisitService";
import { Link } from "react-router-dom";

interface Props {
  userID: number;
}

const Dashboard = ({ userID }: Props) => {
  const [doctor, setDoctor] = useState<Doctor>();
  const [visits, setVisits] = useState<Array<Visit>>([]);

  useEffect(() => {
    retriveDoctor();
    retriveVisits();
  }, [doctor, visits]);

  const retriveDoctor = () => {
    DoctorService.get(userID)
      .then((response: any) => {
        setDoctor(response.data as Doctor);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const retriveVisits = () => {
    VisitService.getForDoctor(userID)
      .then((response: any) => {
        setVisits(response.data as Visit[]);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <>
      <h1 className="dashboard-header">Doctor's Dashboard</h1>

      <table className="table-header">
        <tr>
          <td className="tab-first">
            <h3>Your information</h3>
          </td>
          <td className="tab-last">
            <Link className="btn btn-outline-secondary" to="/doctors/edit">
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
              <th className="table-item">ID</th>
              <th className="table-item">Last Name</th>
              <th className="table-item">First Name</th>
              <th className="table-item">Birth Date</th>
              <th className="table-item">Email</th>
              <th className="table-item">Password</th>
            </tr>
          </thead>
          <tbody className="doctor-body">
            <tr className="table-row">
              <td className="table-item">{doctor?.doctorID}</td>
              <td className="table-item">{doctor?.name}</td>
              <td className="table-item">{doctor?.surname}</td>
              <td className="table-item">
                {doctor?.dateOfBirth.substring(0, 10)}
              </td>
              <td className="table-item">{doctor?.email}</td>
              <td className="table-item">{doctor?.password}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="go-back-btn">
        <a
          asp-action="Schedule"
          className="btn btn-outline-primary"
          asp-route-doctorId="@Model.DoctorID"
          asp-route-weekStart="@Model.getLastMonday()"
        >
          View Schedule
        </a>
      </div>

      <h3 className="mt-4">Patient visits</h3>
      <hr />

      <div className="main-body">
        <table className="main-table">
          <thead className="main-head">
            <tr className="table-row">
              <th className="table-item">Patient's Name</th>
              <th className="table-item">Date</th>
              <th className="table-item">Day of the Week</th>
              <th className="table-item">Begins at</th>
              <th className="table-item">Edit Description</th>
            </tr>
          </thead>
          <tbody className="visit-body">
            {visits.map((visit) => (
              <tr className="table-row">
                <td className="table-item">
                  {visit.patient.name + " " + visit.patient.surname}
                </td>
                <td className="table-item">
                  {visit.schedule.startTime.substring(0, 10)}
                </td>
                <td className="table-item">
                  {days[new Date(visit.schedule.startTime).getDay()]}
                </td>
                <td className="table-item">
                  {visit.schedule.startTime.substring(11, 16)}
                </td>
                <td className="table-item">
                  <a
                    asp-action="EditDescription"
                    className="btn btn-outline-primary"
                    asp-route-visitID="@visit.VisitID"
                  >
                    Edit
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

export default Dashboard;
