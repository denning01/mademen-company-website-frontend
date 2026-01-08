function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.title}>
          We Design Beautiful & High-Performing Websites
        </h1>
        <p style={styles.subtitle}>
          Helping businesses grow online with modern, responsive, and scalable
          web solutions.
        </p>

        <div style={styles.buttons}>
          <button style={styles.primaryBtn}>Get Started</button>
          <button style={styles.secondaryBtn}>View Our Work</button>
        </div>
      </section>

      {/* Services Section */}
<section id="services" style={styles.section}>
  <h2 style={styles.sectionTitle}>What We Do</h2>

  <div style={styles.services}>
    <div style={styles.card}>
      <h3>Website Design</h3>
      <p>
        Clean, modern, and user-friendly designs tailored to your brand.
      </p>
    </div>

    <div style={styles.card}>
      <h3>Web Development</h3>
      <p>
        Fast, secure, and scalable websites built with modern
        technologies.
      </p>
    </div>

    <div style={styles.card}>
      <h3>E-Commerce</h3>
      <p>
        Powerful online stores that convert visitors into customers.
      </p>
    </div>
  </div>
</section>


      {/* Call To Action */}
      <section style={styles.cta}>
        <h2>Let’s Build Your Next Website</h2>
        <p>
          Ready to take your business online or improve your current website?
        </p>
        <button style={styles.primaryBtn}>Contact Us</button>
      </section>
    </div>
  )
}

export default Home

const styles = {
  hero: {
    padding: '5rem 2rem',
    textAlign: 'center' as const,
    backgroundColor: '#111827',
    color: '#ffffff',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.1rem',
    maxWidth: '600px',
    margin: '0 auto 2rem',
    color: '#d1d5db',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  primaryBtn: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 500,
  },
  secondaryBtn: {
    padding: '0.75rem 1.5rem',
    backgroundColor: 'transparent',
    color: '#fff',
    border: '1px solid #fff',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 500,
  },
  section: {
    padding: '4rem 2rem',
    textAlign: 'center' as const,
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  services: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  card: {
    padding: '2rem',
    borderRadius: '8px',
    backgroundColor: '#f9fafb',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  },
  cta: {
    padding: '4rem 2rem',
    textAlign: 'center' as const,
    backgroundColor: '#f3f4f6',
  },
}

