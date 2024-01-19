import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  return (
    <>
      <h1>Create new patient account</h1>

      <hr />
      <h5>Submit your information to create an account</h5>

      <div className="form-body">
        <form method="post">
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span asp-validation-for="Name" className="text-danger"></span>
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              placeholder="Surname"
              className="form-control"
              required
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <span asp-validation-for="Surname" className="text-danger"></span>
          </div>

          <div className="mb-3">
            <label className="form-label">Date of birth</label>
            <input
              type="date"
              min="1900-01-01"
              max="2025-01-01"
              className="form-control"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              placeholder="email@example.com"
              className="form-control"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span asp-validation-for="Email" className="text-danger"></span>
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="password"
              className="form-control"
              required
              value={password}
              onChange={(e) => setPasword(e.target.value)}
            />
            <span asp-validation-for="Password" className="text-danger"></span>
          </div>

          <div className="mb-3">
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
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Create
            </button>
            <button type="button" className="btn btn-secondary">
              Home
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
