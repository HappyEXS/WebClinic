const Patients = () => {
  let patients = [
    {
      patientId: 101,
      lastName: "Kiler",
      firstName: "Jurek",
      birthDate: "10-01-2024",
      email: "laryngolog",
      active: "true",
    },
    {
      patientId: 102,
      lastName: "Kiler",
      firstName: "Jurek",
      birthDate: "10-01-2024",
      email: "laryngolog",
      active: "true",
    },
    {
      patientId: 103,
      lastName: "Kiler",
      firstName: "Jurek",
      birthDate: "10-01-2024",
      email: "laryngolog",
      active: "false",
    },
  ];

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
                <td className="table-item">{patient.patientId}</td>
                <td className="table-item">{patient.lastName}</td>
                <td className="table-item">{patient.firstName}</td>
                <td className="table-item">{patient.birthDate}</td>
                <td className="table-item">{patient.email}</td>
                <td className="table-item">{patient.active}</td>
                <td className="table-item">
                  <a
                    asp-action="Activate"
                    className="btn btn-outline-primary"
                    asp-route-patientId="@patient.PatientID"
                  >
                    Activate
                  </a>
                  <a
                    asp-action="Disactivate"
                    className="btn btn-outline-secondary"
                    asp-route-patientId="@patient.PatientID"
                  >
                    Disactivate
                  </a>
                </td>
                <td className="table-item">
                  <a
                    asp-action="Delete"
                    className="btn btn-outline-danger"
                    asp-route-patientId="@patient.PatientID"
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

export default Patients;
