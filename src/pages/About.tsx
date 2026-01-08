import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet' // For SEO tags

function About() {
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending your message...')

    try {
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      })

      if (response.ok) {
        setStatus('Message sent successfully!')
        setMessage('')
      } else {
        setStatus('Failed to send message.')
      }
    } catch (error) {
      console.error(error)
      setStatus('An error occurred. Try again.')
    }
  }

  // Optional: structured data for SEO
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "WEBMAN X MADEMEN",
      "url": "https://yourwebsite.com",
      "logo": "https://yourwebsite.com/logo.png",
      "sameAs": [
        "https://www.linkedin.com/company/webmanx-mademen",
        "https://www.facebook.com/webmanx.mademen"
      ],
      "description": "WEBMAN X MADEMEN is a web development and digital solutions company in Nairobi, Kenya, specializing in responsive websites, web apps, and digital marketing services."
    })
    document.head.appendChild(script)
  }, [])

  return (
    <div style={styles.container}>
      {/* SEO Meta tags */}
      <Helmet>
        <title>About WEBMAN X MADEMEN – Web Development & Digital Solutions in Nairobi</title>
        <meta
          name="description"
          content="Learn about WEBMAN X MADEMEN, a web development and digital solutions company in Nairobi. We create responsive websites, web apps, and offer digital marketing services."
        />
      </Helmet>

      <h1>About WEBMAN X MADEMEN</h1>
      <p>
        WEBMAN X MADEMEN is a creative web development and digital solutions company based in Nairobi, Kenya.
        We specialize in building responsive websites, web applications, and digital marketing solutions that help businesses grow online.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to empower businesses with modern web technologies, intuitive design, and scalable digital solutions.
        We focus on delivering fast, mobile-friendly, and user-centric websites that make an impact.
      </p>

      <h2>Connect With Us</h2>
      <p>Have questions or want to reach out? Send us a message below!</p>

      <form style={styles.form} onSubmit={handleSubmit}>
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>Send Message</button>

        {status && <p style={styles.status}>{status}</p>}
      </form>
    </div>
  )
}

export default About

const styles = {
  container: {
    maxWidth: '700px',
    margin: '4rem auto',
    padding: '2rem',
    textAlign: 'center' as const,
    lineHeight: '1.6',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
    marginTop: '2rem',
  },
  textarea: {
    padding: '0.75rem',
    borderRadius: '6px',
    border: '1px solid #d1d5db',
    fontSize: '1rem',
    minHeight: '120px',
  },
  button: {
    padding: '0.75rem',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#2563eb',
    color: '#fff',
    fontWeight: 500,
    cursor: 'pointer',
  },
  status: {
    marginTop: '1rem',
    fontWeight: 500,
  },
}
