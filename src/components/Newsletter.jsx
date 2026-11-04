import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const emailInput = e.target.elements.email

    if (!emailInput.validity.valid || email.trim() === '') {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('submitting')
    setMessage('')

    setTimeout(() => {
      setStatus('success')
      setMessage('Thank you for subscribing to La-Rochelle!')
      setEmail('')
    }, 1000)
  }

  return (
    <section className="bg-pale-green rounded-2xl p-8 md:p-12 mt-16 text-center">

      <h2 className="text-2xl md:text-3xl font-bold text-forest">
        A little stationery inspiration?
      </h2>

      <p className="text-forest mt-3 mb-6">
        Subscribe to our newsletter for stationery inspiration and updates!
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
      >
        <div className="flex-1 text-left">
          <label
            htmlFor="newsletter-email"
            className="block text-forest font-medium mb-2"
          >
            Email address
          </label>

          <input
            id="newsletter-email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setStatus('idle')
              setMessage('')
            }}
            placeholder="Enter your email address"
            required
            disabled={status === 'submitting'}
            aria-invalid={status === 'error'}
            aria-describedby="newsletter-message"
            className="w-full px-4 py-3 rounded-lg border border-soft-green bg-white text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="bg-sage text-white font-semibold px-6 py-3 rounded-lg hover:bg-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 disabled:opacity-50 self-end"
        >
          {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>

      <p
        id="newsletter-message"
        role="status"
        aria-live="polite"
        className={`mt-4 font-medium ${
          status === 'error'
            ? 'text-red-700'
            : 'text-forest'
        }`}
      >
        {message}
      </p>

    </section>
  )
}

export default Newsletter