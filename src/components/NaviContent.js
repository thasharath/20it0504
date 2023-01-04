import { Outlet, Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
function NaviContent() {
  const ax = {
    width: "100px",
    marginLeft: "6px",
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-sm  navbar-dark"
        style={{
          backgroundImage: "linear-gradient(135deg, #536976 10%, #292E49 100%)",
        }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  id="bttn"
                  to="/home"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    width: "60px",
                    marginLeft: "6px",
                  }}
                  className="nav-link btn btn-secondary text-light"
                >
                  <AiOutlineHome size={30} />
                </Link>
              </li>
            </ul>
            <span className="navbar-text flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    id="bttn"
                    to="/signup"
                    style={{
                      textDecoration: "none",
                      width: "100px",
                      marginLeft: "6px",
                    }}
                    className="nav-link btn btn-secondary text-light"
                  >
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    id="bttn"
                    to="/login"
                    style={{
                      textDecoration: "none",
                      width: "100px",
                      marginLeft: "6px",
                    }}
                    className="nav-link btn btn-secondary text-light"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
export default NaviContent;
