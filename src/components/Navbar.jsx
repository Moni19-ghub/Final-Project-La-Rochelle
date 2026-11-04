import { useCart } from '../context/CartContext'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const { cart } = useCart()

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const linkStyle = ({ isActive }) =>
    `rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 ${
      isActive
        ? 'text-sage font-bold'
        : 'text-forest hover:text-sage'
    }`

  return (
    <nav
      aria-label="Main navigation"
      className="bg-white px-6 py-4 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
<NavLink
  to="/"
  className="text-3xl font-bold italic text-sage font-display focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 rounded"
>
  La-Rochelle
</NavLink>

        <div className="flex items-center gap-8">
          <NavLink to="/" end className={linkStyle}>
            Shop
          </NavLink>

          <NavLink
            to="/cart"
            className={linkStyle}
            aria-label={`Shopping cart, ${cartCount} items`}
          >
            Cart (
            <span aria-live="polite">{cartCount}</span>
            )
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar