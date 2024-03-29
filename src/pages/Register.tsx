import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { PatientService } from "../services/PatientService";
import { Link } from "react-router-dom";

const Register = () => {
  const [message, setMessage] = useState("");

  const [post, setPost] = useState({
    name: "",
    surname: "",
    dateOfBirth: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/login`;
    navigate(path);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    PatientService.create(post)
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
      <h1>Create new patient account</h1>

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

        {/* <div className="mb-3">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
                required
              >
                {" "}
                I agree on terms of use.
              </input>
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">
                Check this checkbox to continue.
              </div>
            </label>
          </div> */}

        <div className="mb-3">
          <button
            id="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Register
          </button>
          <Link id="button" className="btn btn-secondary" to="/">
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
