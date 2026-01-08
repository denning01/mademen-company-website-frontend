import { useState } from 'react'

function Contact() {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, subject, message }),
      })

      if (response.ok) {
        setStatus('Message sent successfully!')
        setEmail('')
        setSubject('')
        setMessage('')
      } else {
        setStatus('Failed to send message.')
      }
    } catch (error) {
      console.error(error)
      setStatus('An error occurred. Try again.')
    }
  }

  return (
    <div style={styles.container}>
      <h1>Contact Us</h1>
      <p>Have questions or want to start a project? Send us a message!</p>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          style={styles.input}
        />

        <textarea
          placeholder="Compose your message"
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

export default Contact

const styles = {
  container: {
    maxWidth: '600px',
    margin: '4rem auto',
    padding: '2rem',
    textAlign: 'center' as const,
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
    marginTop: '1.5rem',
  },
  input: {
    padding: '0.75rem',
    borderRadius: '6px',
    border: '1px solid #d1d5db',
    fontSize: '1rem',
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
