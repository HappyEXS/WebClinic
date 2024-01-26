import React, { useState, ChangeEvent } from "react";
import { LoginService } from "../services/LoginService";
import { useNavigate } from "react-router-dom";

interface Props {
  setLogged: (boolean: boolean) => void;
  setUserId: (string: number) => void;
  setUserType: (string: string) => void;
}

const Login = ({ setLogged, setUserId, setUserType }: Props) => {
  const [message, setMessage] = useState("");
  const [post, setPost] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/dashboard`;
    navigate(path);
  };
  const routeChangePatient = () => {
    let path = `/dashboard/patient`;
    navigate(path);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  function handleSubmit() {
    console.log(post);
    LoginService.login(post)
      .then((response: any) => {
        setLogged(true);
        setUserId(response.data.userID);
        setUserType(response.data.userType);
        if (response.data.userType === "patient") {
          routeChangePatient();
        } else {
          routeChange();
        }

        console.log(response);
      })
      .catch((e: Error) => {
        console.log(e);
        setMessage("Incorrect email or password");
      });
  }

  return (
    <>
      <h1>Log in to the account</h1>

      <p>Provide a valid login data for the WebClinic</p>
      <div className="form-body">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleInput}
          />
        </div>

        <button className="btn btn-primary" onClick={handleSubmit}>
          Log in
        </button>
      </div>

      <div className="login-footer">
        <p>{message}</p>
      </div>
    </>
  );
};

export default Login;
