import "../styles/About.css"
import { useEffect } from "react"

function About() {
  useEffect(() => {
    document.title = "About Us | WEBMAN X MADEMEN"
  }, [])

  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <h1 className="hero-title">About WEBMAN X MADEMEN</h1>
        <p className="hero-text">
          We design and build modern, scalable, and high-performance digital
          products that help ambitious businesses grow online.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="section">
        <h2 className="section-title">Who We Are</h2>
        <p className="text">
          WEBMAN X MADEMEN is a digital solutions studio focused on crafting
          exceptional web experiences. We combine strong design principles,
          modern frontend technologies, and reliable backend systems to deliver
          products that are fast, secure, and built to scale.
        </p>
      </section>

      {/* MISSION */}
      <section className="section alt">
        <h2 className="section-title">Our Mission</h2>
        <p className="text">
          Our mission is to empower businesses with technology that works.
          Whether you’re a startup or an established brand, we help you turn
          ideas into powerful digital products that drive growth and results.
        </p>
      </section>

      {/* EXPERTISE */}
      <section className="section">
        <h2 className="section-title">What We Do Best</h2>

        <div className="expertise-grid">
          <div className="expertise-card">
            <h3>Frontend Development</h3>
            <p>
              Modern, responsive, and accessible interfaces built with React and
              cutting-edge web technologies.
            </p>
          </div>

          <div className="expertise-card">
            <h3>Backend & APIs</h3>
            <p>
              Secure, scalable backend systems and APIs designed for performance
              and long-term maintainability.
            </p>
          </div>

          <div className="expertise-card">
            <h3>UI / UX Design</h3>
            <p>
              Clean, intuitive user experiences that keep users engaged and
              convert visitors into customers.
            </p>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="section alt">
        <h2 className="section-title">Trusted by Industry Leaders</h2>
        <p className="text center">
          Our approach and standards are inspired by the world’s leading
          organizations.
        </p>

        <div className="logo-marquee">
          <div className="logo-track">
            <img src="/logos/google.svg" alt="Google" />
            <img src="/logos/microsoft.svg" alt="Microsoft" />
            <img src="/logos/amazon.svg" alt="Amazon" />
            <img src="/logos/apple.svg" alt="Apple" />
            <img src="/logos/meta.svg" alt="Meta" />
            <img src="/logos/ibm.svg" alt="IBM" />
            <img src="/logos/oracle.svg" alt="Oracle" />
            <img src="/logos/netflix.svg" alt="Netflix" />
            <img src="/logos/tesla.svg" alt="Tesla" />
            <img src="/logos/salesforce.svg" alt="Salesforce" />

            {/* duplicate for seamless loop */}
            <img src="/logos/google.svg" alt="Google" />
            <img src="/logos/microsoft.svg" alt="Microsoft" />
            <img src="/logos/amazon.svg" alt="Amazon" />
            <img src="/logos/apple.svg" alt="Apple" />
            <img src="/logos/meta.svg" alt="Meta" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
