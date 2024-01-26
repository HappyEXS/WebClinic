import React, { useState, useEffect, ChangeEvent } from "react";
import { Doctor } from "../shared/types";
import { DoctorService } from "../services/DoctorService";
import { useNavigate } from "react-router-dom";
import { ScheduleService } from "../services/ScheduleService";

const ScheduleCreate = () => {
  const [message, setMessage] = useState("");

  const [post, setPost] = useState({
    doctorID: -1,
    startTime: "",
    endTime: "",
  });

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    post.doctorID = doctors[selectedID].doctorID;
    console.log(post);
    ScheduleService.create(post)
      .then((response: any) => {
        routeChange();
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const [doctors, setDoctors] = useState<Array<Doctor>>([]);
  useEffect(() => {
    retriveDoctors();
  }, []);
  const retriveDoctors = () => {
    DoctorService.getAll()
      .then((response: any) => {
        setDoctors(response.data as Doctor[]);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/schedule`;
    navigate(path);
  };

  const [selectedID, setSelectedID] = useState(-1);
  return (
    <>
      <h1>Add new schedule</h1>

      <hr />
      <h5>Provide information about new schedule</h5>

      <div className="form-body">
        <div className="mb-3">
          <table>
            <tr className="tab-row">
              <td className="table-item">
                <label className="form-label">Doctor</label>
              </td>
              <td className="table-item">
                <select
                  className="form-control"
                  onChange={(event) =>
                    setSelectedID(event.target.options.selectedIndex)
                  }
                >
                  <option value={-1}>----</option>
                  {doctors.map((doctor, index) =>
                    doctor.doctorID === post.doctorID ? (
                      <option value={doctor.doctorID} selected>
                        {doctor.name + " " + doctor.surname}
                      </option>
                    ) : (
                      <option value={doctor.doctorID}>
                        {doctor.name + " " + doctor.surname}
                      </option>
                    )
                  )}
                </select>
              </td>
            </tr>
          </table>
        </div>

        <div className="mb-3">
          <label className="form-label">StartTime</label>
          <input
            type="datetime-local"
            name="startTime"
            step="900"
            //value={}
            className="form-control"
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">EndTime</label>
          <input
            type="datetime-local"
            name="endTime"
            step="900"
            //value={}
            className="form-control"
            onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <button
            id="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Save
          </button>
          <button
            id="button"
            className="btn btn-secondary"
            onClick={routeChange}
          >
            Go back
          </button>
        </div>
      </div>
    </>
  );
};

export default ScheduleCreate;
