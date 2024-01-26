import React, { useState, useEffect } from "react";
import { Visit, Speciality, SchVisQuery } from "../shared/types";
import { VisitService } from "../services/VisitService";
import SearchBox from "../components/SearchBox";

interface Props {
  userType: string;
  userID: number;
  specialities: Speciality[];
}

const Visits = ({ userType, userID, specialities }: Props) => {
  let timeNow = Date.now.toString();
  let patientActive = true;
  const [openModal, setOpenModal] = useState(false);
  const [selectedSpeciality, setSelectedSpeciality] = useState(-1);
  const [startDate, setStartDate] = useState(new Date("2024-01-01"));
  const [endDate, setEndDate] = useState(new Date("2024-02-01"));

  let q: SchVisQuery = {
    startDate: "",
    endDate: "",
    specID: -1,
    searched: false,
  };
  const [query, setQuery] = useState<SchVisQuery>(q);
  const [visits, setVisits] = useState<Array<Visit>>([]);

  useEffect(() => {
    retriveVisits();
  }, []);

  const retriveVisits = () => {
    VisitService.getAll()
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
      <table className="table-header">
        <tr>
          <td className="tab-first">
            <h2>Get an appointment </h2>
          </td>
        </tr>
      </table>
      <SearchBox
        specialities={specialities}
        query={query}
        setQuery={setQuery}
      ></SearchBox>

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
              {userType === "patient" && (
                <th className="table-item">Make appointment</th>
              )}
            </tr>
          </thead>
          <tbody className="visit-body">
            {visits.length === 0 && <p>No visits found</p>}
            {visits.map((visit, index) => (
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
                  {visit.startTime.substring(0, 10)}
                </td>
                <td className="table-item">{visit.startTime}</td>
                <td className="table-item">
                  {visit.startTime.substring(11, 16)}
                </td>
                {userType === "patient" ? (
                  //visit.startTime < timeNow ||
                  patientActive === false ? (
                    <td className="table-item">
                      <a className="btn btn-outline-dark" onClick={() => null}>
                        Sign up
                      </a>
                    </td>
                  ) : (
                    <td className="table-item">
                      <a
                        className="btn btn-outline-success"
                        onClick={() => {
                          VisitService.addPatient(visit.visitID, userID);
                          retriveVisits();
                        }}
                      >
                        Sign up
                      </a>
                    </td>
                  )
                ) : (
                  ""
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Visits;
