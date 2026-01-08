import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer style={styles.footer}>
      <h2 style={styles.logo}>WEBMAN X MADEMEN</h2>

      <div style={styles.links}>
        <NavLink to="/" style={styles.link}>Home</NavLink>
        <NavLink to="/about" style={styles.link}>About</NavLink>
        <NavLink to="/careers" style={styles.link}>Careers</NavLink>
      </div>

      <p style={styles.copy}>
        © {new Date().getFullYear()} WEBMAN X MADEMEN. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;


const styles = {
  footer: {
    backgroundColor: "#0f172a",
    color: "#e5e7eb",
    padding: "40px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
  },

  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    letterSpacing: "1px",
  },

  links: {
    display: "flex",
    gap: "24px",
  },

  link: {
    color: "#cbd5f5",
    textDecoration: "none",
    fontSize: "14px",
  },

  copy: {
    fontSize: "12px",
    color: "#94a3b8",
    marginTop: "10px",
  },
};
