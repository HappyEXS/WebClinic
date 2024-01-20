interface Props {
  userType: string;
  userId: number;
}

const Dashboard = () => {
  let doctor = {
    doctorId: 101,
    lastName: "Kiler",
    firstName: "Jurek",
    birthDate: "10-01-2024",
    email: "asdfas@gmail.com",
    password: "passwd1234",
    speciality: "laryngolog",
  };
  let visits = [
    {
      doctorName: "Jurek Kiler",
      doctorSpeciality: "laryngolog",
      patientName: "qwrqrq",
      date: "10-01-2024",
      dayOfWeek: "Monday",
      startHour: "9:00",
    },
    {
      doctorName: "Jurek Kiler",
      doctorSpeciality: "laryngolog",
      patientName: "qwee",
      date: "10-01-2024",
      dayOfWeek: "Monday",
      startHour: "9:15",
    },
    {
      doctorName: "Jurek Kiler",
      doctorSpeciality: "laryngolog",
      patientName: "qwrr",
      date: "10-01-2024",
      dayOfWeek: "Monday",
      startHour: "9:30",
    },
    {
      doctorName: "Jurek Kiler",
      doctorSpeciality: "laryngolog",
      patientName: "qwrrt",
      date: "12-01-2024",
      dayOfWeek: "Wednesday",
      startHour: "9:00",
    },
    {
      doctorName: "Jurek Kiler",
      doctorSpeciality: "laryngolog",
      patientName: "asdf",
      date: "15-01-2024",
      dayOfWeek: "Saturday",
      startHour: "9:00",
    },
  ];

  return (
    <>
      <h1 className="dashboard-header">Doctor's Dashboard</h1>

      <table className="table-header">
        <tr>
          <td className="tab-first">
            <h3>Your information</h3>
          </td>
          <td className="tab-last">
            <a
              asp-action="Edit"
              className="btn btn-outline-secondary"
              asp-route-doctorId="@Model.DoctorID"
            >
              Edit info
            </a>
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
              <td className="table-item">{doctor.doctorId}</td>
              <td className="table-item">{doctor.lastName}</td>
              <td className="table-item">{doctor.firstName}</td>
              <td className="table-item">{doctor.birthDate}</td>
              <td className="table-item">{doctor.email}</td>
              <td className="table-item">{doctor.password}</td>
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
                <td className="table-item">{visit.patientName}</td>
                <td className="table-item">{visit.date}</td>
                <td className="table-item">{visit.dayOfWeek}</td>
                <td className="table-item">{visit.startHour}</td>
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
