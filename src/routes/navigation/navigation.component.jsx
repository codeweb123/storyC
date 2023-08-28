import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import myLogo from "../../assets/cat.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={myLogo} alt="svg" className="logo" />
        </Link>
        <div className="links-container">
          <Link className="nav-link" to="/you">
            You
          </Link>
          <Link className="nav-link" to="/write">
            Write
          </Link>
          <Link className="nav-link" to="/read">
            Read
          </Link>
          <Link className="nav-link" to="/activities">
            Activities
          </Link>
          <Link className="nav-link" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
