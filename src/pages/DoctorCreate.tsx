import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { DoctorService } from "../services/DoctorService";
import { Speciality } from "../shared/types";

interface Props {
  specialities: Speciality[];
}

const DoctorCreate = ({ specialities }: Props) => {
  const [post, setPost] = useState({
    name: "",
    surname: "",
    dateOfBirth: "",
    email: "",
    password: "",
    specialityID: -1,
  });

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/doctors`;
    navigate(path);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    post.specialityID = selectedID;
    console.log(post);
    DoctorService.create(post)
      .then((response: any) => {
        routeChange();
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const [selectedID, setSelectedID] = useState(-1);

  return (
    <>
      <h1>Create new doctor account</h1>

      <hr />
      <h5>Submit your information to create an account</h5>

      <div className="form-body">
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-control"
            id="name"
            required
            value={post.name}
            onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            className="form-control"
            required
            value={post.surname}
            onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date of birth</label>
          <input
            type="date"
            name="dateOfBirth"
            min="1900-01-01"
            max="2025-01-01"
            className="form-control"
            required
            onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            name="email"
            placeholder="email@example.com"
            className="form-control"
            required
            value={post.email}
            onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="form-control"
            required
            value={post.password}
            onChange={handleInput}
          />
        </div>
        <table className="mb-3">
          <tr className="tab-row">
            <td className="table-item">
              <label className="form-label">Speciality</label>
            </td>
            <td className="table-item">
              <select
                className="form-control"
                onChange={(event) =>
                  setSelectedID(event.target.options.selectedIndex)
                }
              >
                <option value={-1}>----</option>
                {specialities.map((speciality, index) =>
                  speciality.specialityID === post.specialityID ? (
                    <option value={speciality.specialityID} selected>
                      {speciality.name}
                    </option>
                  ) : (
                    <option value={speciality.specialityID}>
                      {speciality.name}
                    </option>
                  )
                )}
              </select>
            </td>
          </tr>
        </table>

        <div className="mb-2">
          <button
            id="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Create
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

export default DoctorCreate;
