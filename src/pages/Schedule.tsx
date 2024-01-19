import { useState } from "react";

interface Props {
  // schedules: {
  //   doctorName: string;
  //   doctorSpeciality: string;
  //   date: string;
  //   dayOfWeek: string;
  //   startHour: string;
  //   endHour: string;
  // }[];
  userType: string;
  specialities: { name: string; specialityId: number }[];
}

function Schedule({ specialities, userType }: Props) {
  let schedules = [
    {
      doctorName: "Jurek Kiler",
      doctorSpeciality: "laryngolog",
      date: "10-01-2024",
      dayOfWeek: "Monday",
      startHour: "9:00",
      endHour: "12:30",
    },
    {
      doctorName: "Jurek Kiler",
      doctorSpeciality: "laryngolog",
      date: "12-01-2024",
      dayOfWeek: "Wednesday",
      startHour: "9:00",
      endHour: "12:30",
    },
    {
      doctorName: "Jurek Kiler",
      doctorSpeciality: "laryngolog",
      date: "15-01-2024",
      dayOfWeek: "Saturday",
      startHour: "9:00",
      endHour: "12:30",
    },
  ];

  const [selectedSpeciality, setSelectedSpeciality] = useState(-1);
  const [startDate, setStartDate] = useState(new Date("2024-01-01"));
  const [endDate, setEndDate] = useState(new Date("2024-02-01"));

  function handleSubmit(e) {
    e.preventDefault();
  }
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
      <table>
        <tr>
          <div>
            <form method="post" onSubmit={handleSubmit}>
              <td className="table-item">
                <label>
                  Speciality
                  <select className="form-control">
                    <option value={-1}>--all--</option>
                    {specialities.map((speciality, index) =>
                      speciality.specialityId === selectedSpeciality ? (
                        <option value={speciality.specialityId} selected>
                          {speciality.name}
                        </option>
                      ) : (
                        <option
                          value={speciality.specialityId}
                          onClick={() =>
                            setSelectedSpeciality(speciality.specialityId)
                          }
                        >
                          {speciality.name}
                        </option>
                      )
                    )}
                  </select>
                </label>
              </td>
              <td className="table-item">
                <label>
                  Start Date
                  <input
                    type="date"
                    value={startDate.toDateString()}
                    className="form-control"
                    onChange={(e) => setStartDate(new Date(e.target.value))}
                  />
                </label>
              </td>
              <td className="table-item">
                <label>
                  End Date
                  <input
                    type="date"
                    value={endDate.toDateString()}
                    className="form-control"
                    onChange={(e) => setEndDate(new Date(e.target.value))}
                  />
                </label>
              </td>
              <td className="table-item">
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </td>
            </form>
          </div>
        </tr>
      </table>
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
            {schedules.length === 0 && <p>No items found</p>}
            {schedules.map((schedule, index) => (
              <tr className="table-row">
                <td className="table-item">{schedule.doctorName}</td>
                <td className="table-item">{schedule.doctorSpeciality}</td>
                <td className="table-item">{schedule.date}</td>
                <td className="table-item">{schedule.dayOfWeek}</td>
                <td className="table-item">{schedule.startHour}</td>
                <td className="table-item">{schedule.endHour}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Schedule;
