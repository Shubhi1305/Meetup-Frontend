import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-warning p-2">
      <div className="container d-flex justify-content-between">
        <Link to="/" className="navbar-brand text-light fw-bold fs-1">
          MeetUP
        </Link>
      </div>
    </nav>
  );
};

export default Header;
