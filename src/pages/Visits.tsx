import { Button, Modal, ModalHeader } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useState } from "react";

interface Props {
  userType: string;
  userId: number;
  specialities: { name: string; specialityId: number }[];
}

const Visits = ({ userType, userId, specialities }: Props) => {
  let visits = [
    {
      doctorName: "Jurek Kiler",
      doctorSpeciality: "laryngolog",
      date: "10-01-2024",
      dayOfWeek: "Monday",
      startHour: "9:00",
    },
    {
      doctorName: "Jurek Kiler",
      doctorSpeciality: "laryngolog",
      date: "10-01-2024",
      dayOfWeek: "Monday",
      startHour: "9:15",
    },
    {
      doctorName: "Jurek Kiler",
      doctorSpeciality: "laryngolog",
      date: "10-01-2024",
      dayOfWeek: "Monday",
      startHour: "9:30",
    },
    {
      doctorName: "Jurek Kiler",
      doctorSpeciality: "laryngolog",
      date: "12-01-2024",
      dayOfWeek: "Wednesday",
      startHour: "9:00",
    },
    {
      doctorName: "Jurek Kiler",
      doctorSpeciality: "laryngolog",
      date: "15-01-2024",
      dayOfWeek: "Saturday",
      startHour: "9:00",
    },
  ];

  let timeNow = "10:25";
  let patientActive = true;
  const [openModal, setOpenModal] = useState(false);
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
            <h2>Get an appointment </h2>
          </td>
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
              {userType === "patient" && (
                <th className="table-item">Make appointment</th>
              )}
            </tr>
          </thead>
          <tbody className="visit-body">
            {visits.map((visit, index) => (
              <tr className="table-row">
                <td className="table-item">{visit.doctorName}</td>
                <td className="table-item">{visit.doctorSpeciality}</td>
                <td className="table-item">{visit.date}</td>
                <td className="table-item">{visit.dayOfWeek}</td>
                <td className="table-item">{visit.startHour}</td>
                {userType === "patient" ? (
                  visit.startHour < timeNow || patientActive === false ? (
                    <td className="table-item">
                      <a className="btn btn-outline-dark" onClick={() => null}>
                        Sign up
                      </a>
                    </td>
                  ) : (
                    <td className="table-item">
                      <button
                        className="btn btn-outline-success"
                        onClick={() => setOpenModal(true)}
                      >
                        Sign up
                      </button>
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
      <Modal
        show={openModal}
        size="max-w-sm"
        position="center"
        onClose={() => setOpenModal(false)}
        popup
      >
        <ModalHeader>confirm reservation</ModalHeader>
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Visits;
