import { motion } from 'framer-motion'

/* =======================
   SERVICES DATA
======================= */
const services = [
  {
    title: 'Website Design',
    description:
      'Clean, modern, and user-friendly designs tailored to your brand.',
  },
  {
    title: 'Web Development',
    description:
      'Fast, secure, and scalable websites built with modern technologies.',
  },
  {
    title: 'E-Commerce',
    description:
      'Powerful online stores that convert visitors into customers.',
  },
]

/* =======================
   ANIMATION VARIANTS
======================= */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
}

/* =======================
   COMPONENT
======================= */
function Home() {
  return (
    <div style={styles.page}>
      {/* HERO */}
      <motion.section
        style={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          style={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          We Design Beautiful & High-Performing Websites
        </motion.h1>

        <motion.p
          style={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Helping businesses grow online with modern, responsive, and scalable
          web solutions.
        </motion.p>

        <div style={styles.buttons}>
          <motion.button
            style={styles.primaryBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>

          <motion.button
            style={styles.secondaryBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Our Work
          </motion.button>
        </div>
      </motion.section>

      {/* SERVICES */}
      <section style={styles.section}>
        <motion.h2
          style={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What We Do
        </motion.h2>

        <motion.div
          style={styles.services}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              style={styles.card}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardText}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <motion.section
        style={styles.cta}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={styles.ctaTitle}>Let’s Build Your Next Website</h2>
        <p style={styles.ctaText}>
          Ready to take your business online or improve your current website?
        </p>

        <motion.button
          style={styles.primaryBtn}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </motion.section>
    </div>
  )
}

export default Home

/* =======================
   STYLES
======================= */
const styles = {
  page: {
    fontFamily:
      "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    color: '#0f172a',
    lineHeight: 1.6,
  },

  hero: {
    padding: '6rem 2rem',
    textAlign: 'center' as const,
    background:
      'linear-gradient(135deg, #0f172a 0%, #020617 100%)',
    color: '#ffffff',
  },

  title: {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 800,
    marginBottom: '1rem',
    letterSpacing: '-0.02em',
  },

  subtitle: {
    fontSize: '1.125rem',
    maxWidth: '650px',
    margin: '0 auto 2.5rem',
    color: '#cbd5f5',
  },

  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap' as const,
  },

  primaryBtn: {
    padding: '0.8rem 1.75rem',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '0.95rem',
    fontWeight: 600,
    cursor: 'pointer',
  },

  secondaryBtn: {
    padding: '0.8rem 1.75rem',
    backgroundColor: 'transparent',
    color: '#ffffff',
    border: '1px solid rgba(255,255,255,0.3)',
    borderRadius: '10px',
    fontSize: '0.95rem',
    fontWeight: 600,
    cursor: 'pointer',
  },

  section: {
    padding: '5rem 2rem',
    textAlign: 'center' as const,
    backgroundColor: '#ffffff',
  },

  sectionTitle: {
    fontSize: '2.25rem',
    fontWeight: 700,
    marginBottom: '2.5rem',
    letterSpacing: '-0.02em',
  },

  services: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '2rem',
    maxWidth: '1100px',
    margin: '0 auto',
  },

  card: {
    padding: '2.5rem 2rem',
    borderRadius: '16px',
    backgroundColor: '#ffffff',
    boxShadow: '0 10px 30px rgba(2, 6, 23, 0.08)',
    textAlign: 'left' as const,
  },

  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 700,
    marginBottom: '0.75rem',
  },

  cardText: {
    color: '#475569',
    fontSize: '0.95rem',
  },

  cta: {
    padding: '5rem 2rem',
    textAlign: 'center' as const,
    background:
      'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
    color: '#ffffff',
  },

  ctaTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    marginBottom: '0.75rem',
  },

  ctaText: {
    marginBottom: '1.5rem',
    opacity: 0.95,
  },
}
