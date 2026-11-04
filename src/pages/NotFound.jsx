import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-16">

      <h1 className="text-5xl font-bold text-sage">
        404
      </h1>

      <h2 className="text-2xl font-bold text-forest mt-4">
        Oops! Page Not Found
      </h2>

      <p className="text-forest mt-3">
        Sorry, we couldn't find the page you're looking for.
      </p>

      <Link
        to="/"
        className="bg-sage text-white px-6 py-3 rounded-lg mt-6 hover:bg-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2"
      >
        Back to Shop
      </Link>

    </div>
  )
}

export default NotFound