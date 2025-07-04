import { Link } from "react-router-dom";

const Header = () => (
  <header
    style={{
      background: "#8B0000",
      color: "#fff",
      padding: "1rem 2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
        alt="Restaurant Logo"
        style={{
          width: "40px",
          height: "40px",
          marginRight: "1rem",
          borderRadius: "50%",
          background: "#fff",
        }}
      />
      <h1 style={{ margin: 0, fontSize: "1.5rem" }}>
        Golu Da Dhaba Manu The Taste
      </h1>
    </div>
    <nav>
      <Link
        to="/"
        style={{ color: "#fff", marginRight: "1.5rem", textDecoration: "none" }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{ color: "#fff", marginRight: "1.5rem", textDecoration: "none" }}
      >
        About
      </Link>
      <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>
        Contact
      </Link>
    </nav>
  </header>
);
export default Header;
