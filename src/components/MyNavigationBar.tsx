import { Link } from "react-router-dom";

function MyNavigationBar() {
  return (
    <div className="navBar-Centered">
      <nav className="myNavBar">
        <h1> Zachary Koonce's Portfolio </h1>
        <ul>
          <li>
            {/* Endpoint to route to Home component */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* Endpoint to route to About component */}
            <Link to="/about">About Me</Link>
          </li>
          <li>
            {/* Endpoint to route to Contact component */}
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            {/* Endpoint to route to Contact component */}
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MyNavigationBar;
