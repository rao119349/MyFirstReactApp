import { Link } from "react-router-dom";
import Header from "./Header";

function Navigation() {
  return (
    <>
    <div className="d-flex justify-content-between align-items-center">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/team">Our Team</Link>
        <Link to="/carrer">Carrers</Link>
      </nav>
      <Header />
      </div>
    </>
  );
}

export default Navigation;
