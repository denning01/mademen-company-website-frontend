import { useState } from 'react'

function Careers() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [position, setPosition] = useState('')
  const [resume, setResume] = useState<File | null>(null)
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending application...')

    try {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('email', email)
      formData.append('position', position)
      if (resume) formData.append('resume', resume)

      const response = await fetch('/api/apply', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setStatus('Application submitted successfully!')
        setName('')
        setEmail('')
        setPosition('')
        setResume(null)
      } else {
        setStatus('Failed to submit application.')
      }
    } catch (error) {
      console.error(error)
      setStatus('An error occurred. Try again.')
    }
  }

  return (
    <div style={styles.container}>
      <h1>Join Our Team</h1>
      <p>We’re always looking for talented people! Apply for a position below.</p>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Position you’re applying for"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setResume(e.target.files ? e.target.files[0] : null)}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>Submit Application</button>

        {status && <p style={styles.status}>{status}</p>}
      </form>
    </div>
  )
}

export default Careers

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
