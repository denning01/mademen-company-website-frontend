import { NavLink } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer style={styles.footer}>
      <h2 style={styles.logo}>WEBMAN X MADEMEN</h2>

      {/* Navigation Links */}
      <div style={styles.links}>
        <NavLink to="/" style={styles.link}>Home</NavLink>
        <NavLink to="/about" style={styles.link}>About</NavLink>
        <NavLink to="/careers" style={styles.link}>Careers</NavLink>
      </div>

      {/* Contact Info */}
      <div style={styles.contact}>
        <span style={styles.contactItem}>
          <FaEnvelope /> gichabadenning254@gmail.com
        </span>
        <span style={styles.contactItem}>
          <FaPhoneAlt /> 0759 316 941
        </span>
        <span style={styles.contactItem}>
          <FaMapMarkerAlt /> Nairobi, Kenya
        </span>
      </div>

      {/* Social Icons */}
      <div style={styles.socials}>
        <a
          href="https://wa.me/254734349503"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://www.linkedin.com/in/denning-gichaba-1804b022b/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/denning01"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
        >
          <FaGithub />
        </a>
      </div>

      <p style={styles.copy}>
        © {new Date().getFullYear()} WEBMAN X MADEMEN. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;



//styles

const styles = {
  footer: {
    backgroundColor: "#0f172a",
    color: "#e5e7eb",
    padding: "50px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    textAlign: "center",
  },

  logo: {
    fontSize: "22px",
    fontWeight: "bold",
    letterSpacing: "1.2px",
    animation: "fadeIn 1s ease-in-out",
  },

  links: {
    display: "flex",
    gap: "24px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  link: {
    color: "#cbd5f5",
    textDecoration: "none",
    fontSize: "14px",
    transition: "color 0.3s ease",
  },

  contact: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    fontSize: "14px",
    color: "#cbd5f5",
  },

  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    justifyContent: "center",
  },

  socials: {
    display: "flex",
    gap: "18px",
    marginTop: "10px",
  },

  icon: {
    fontSize: "22px",
    color: "#cbd5f5",
    transition: "transform 0.3s ease, color 0.3s ease",
  },

  copy: {
    fontSize: "12px",
    color: "#94a3b8",
    marginTop: "12px",
  },
};
