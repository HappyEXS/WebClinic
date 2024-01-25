import React, { useState, useEffect } from "react";
import { Schedule, Speciality, SchVisQuery } from "../shared/types";
import { ScheduleService } from "../services/ScheduleService";

import SearchBox from "../components/SearchBox";
import { ListGroup } from "flowbite-react";

interface Props {
  userType: string;
  specialities: Speciality[];
}

function Schedules({ specialities, userType }: Props) {
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

  const [schedules, setSchedules] = useState<Array<Schedule>>([]);

  useEffect(() => {
    retriveSchedules();
  }, []);

  const retriveSchedules = () => {
    ScheduleService.getAll()
      .then((response: any) => {
        setSchedules(response.data as Schedule[]);
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
            <h2>Doctors schedule</h2>
          </td>
          {userType === "director" && (
            <td className="tab-last">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => null}
              >
                Add new schedule
              </button>
            </td>
          )}
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
              <th className="table-item">Ends at</th>
            </tr>
          </thead>
          <tbody className="schedule-body">
            {schedules.length === 0 && <p>No schedules found</p>}
            {schedules.map((schedule, index) => (
              <tr className="table-row">
                <td className="table-item">
                  {schedule.doctor.name + " " + schedule.doctor.surname}
                </td>
                <td className="table-item">
                  {schedule.doctor.speciality.name}
                </td>
                <td className="table-item">
                  {schedule.startTime.substring(0, 10)}
                </td>
                <td className="table-item">{schedule.startTime}</td>
                <td className="table-item">
                  {schedule.startTime.substring(11, 16)}
                </td>
                <td className="table-item">
                  {schedule.endTime.substring(11, 16)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Schedules;
