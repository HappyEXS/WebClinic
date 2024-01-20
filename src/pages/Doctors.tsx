const Doctors = () => {
  let doctors = [
    {
      doctorId: 101,
      lastName: "Kiler",
      firstName: "Jurek",
      birthDate: "10-01-2024",
      speciality: "laryngolog",
    },
    {
      doctorId: 102,
      lastName: "Kiler",
      firstName: "Jurek",
      birthDate: "10-01-2024",
      speciality: "laryngolog",
    },
    {
      doctorId: 103,
      lastName: "Kiler",
      firstName: "Jurek",
      birthDate: "10-01-2024",
      speciality: "laryngolog",
    },
  ];

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
              onClick={() => null}
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
                <td className="table-item">{doctor.doctorId}</td>
                <td className="table-item">{doctor.lastName}</td>
                <td className="table-item">{doctor.firstName}</td>
                <td className="table-item">{doctor.birthDate}</td>
                <td className="table-item">{doctor.speciality}</td>
                <td className="table-item">
                  <a
                    asp-action="Schedule"
                    className="btn btn-outline-primary"
                    id="button-table"
                    asp-route-doctorId="@doctor.DoctorID"
                    asp-route-weekStart="@doctor.getLastMonday()"
                  >
                    Schedule
                  </a>
                </td>
                <td className="table-item">
                  <a
                    asp-action="Edit"
                    className="btn btn-outline-secondary"
                    id="button-table"
                    asp-route-doctorId="@doctor.DoctorID"
                  >
                    Edit
                  </a>
                  <a
                    asp-action="Delete"
                    className="btn btn-outline-danger"
                    id="button-table"
                    asp-route-doctorId="@doctor.DoctorID"
                    onClick={() => null}
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
