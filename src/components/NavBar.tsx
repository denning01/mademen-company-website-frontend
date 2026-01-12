import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>WEBMAN X MADEMEN</h2>

      <div style={styles.links}>
        <NavLink to="/" style={styles.link}>Home</NavLink>
        <NavLink to="/about" style={styles.link}>About</NavLink>
        <NavLink to="/contact" style={styles.link}>Contact</NavLink>
      </div>
    </nav>
  )
}

export default Navbar


const styles: {
  nav: React.CSSProperties;
  logo: React.CSSProperties;
  links: React.CSSProperties;
  link: React.CSSProperties;
} = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#111827",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    flexWrap: "wrap", // responsive
  },

  logo: {
    color: "#8f1e1eff",
    fontWeight: "bold",
    fontSize: "1.25rem",
    letterSpacing: "1px",
    cursor: "pointer",
  },

  links: {
    display: "flex",
    gap: "1.5rem",
    alignItems: "center",
    flexWrap: "wrap", // mobile friendly
  },

  link: {
    color: "#e5e7eb",
    textDecoration: "none",
    fontWeight: 500,
    cursor: "pointer",
    transition: "color 0.3s ease, transform 0.2s ease",
  },
};
