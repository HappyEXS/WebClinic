import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h1>Log in to the employee account</h1>

      <p>Provide the login data given by the director of the WebClinic</p>
      <div className="form-body">
        <form method="post">
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </form>
      </div>

      <div className="login-footer">
        <p>
          Log in as an patient <a href="/Patient/Login">here</a>
        </p>
      </div>
    </>
  );
};

export default Login;
