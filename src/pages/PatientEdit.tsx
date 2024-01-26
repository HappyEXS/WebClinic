import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Patient } from "../shared/types";
import { PatientService } from "../services/PatientService";
import { Link } from "react-router-dom";

interface Props {
  userID: number;
}

const PatientEdit = ({ userID }: Props) => {
  const [patient, setPatient] = useState<Patient>();
  const [post, setPost] = useState<any>();

  useEffect(() => {
    retrivePatient();
  }, []);

  const retrivePatient = () => {
    PatientService.get(userID)
      .then((response: any) => {
        setPatient(response.data as Patient);
        setPost({
          name: patient?.name,
          surname: patient?.surname,
          dateOfBirth: patient?.dateOfBirth,
          email: patient?.email,
          password: patient?.password,
        });

        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/dashboard/patient`;
    navigate(path);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPost({ ...patient, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    PatientService.update(userID, post)
      .then((response: any) => {
        routeChange();
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <>
      <h1>Edit patient account</h1>

      <hr />
      <h5>Submit updated information</h5>

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
            value={post?.name}
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
            value={post?.surname}
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
            value={post?.email}
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
            value={post?.password}
            onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Save
          </button>

          <Link
            id="button"
            className="btn btn-secondary"
            to="/dashboard/patient"
          >
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default PatientEdit;
