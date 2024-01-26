import { Link } from "react-router-dom";

interface Props {
  logged: boolean;
  userType: string;
  setLogged: (boolean: boolean) => void;
  setUserId: (string: number) => void;
  setUserType: (string: string) => void;
}

const Navbar = ({
  logged,
  userType,
  setLogged,
  setUserId,
  setUserType,
}: Props) => {
  const logoutUser = () => {
    setLogged(false);
    setUserId(-1);
    setUserType("");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            WebClinic
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/schedule">
                  Schedule
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/specialities">
                  Specialities
                </Link>
              </li>
              {userType === "director" || userType === "patient" ? (
                <li className="nav-item">
                  <Link className="nav-link active" to="/visits">
                    Visits
                  </Link>
                </li>
              ) : (
                ""
              )}

              {userType === "director" && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/doctors">
                      Doctors
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/patients">
                      Patients
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {logged ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to={
                        userType === "patient"
                          ? "/dashboard/patient"
                          : "/dashboard"
                      }
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to="/"
                      onClick={logoutUser}
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/reg">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
