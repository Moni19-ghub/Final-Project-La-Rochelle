import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const { dispatch } = useCart()

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-soft-green">

      <div className="bg-pale-green h-48">
        <img
          src={product.image}
          alt={product.name}
          width="300"
          height="192"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <p className="text-sm text-sage font-medium">
          {product.category}
        </p>

        <h2 className="text-lg font-bold text-forest mt-1">
          {product.name}
        </h2>

        <p className="text-forest font-semibold mt-2">
          R{product.price.toFixed(2)}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="block text-center bg-sage text-white rounded-lg py-2 mt-4 hover:bg-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2"
        >
          View Product
        </Link>

        <button
          onClick={() =>
            dispatch({
              type: 'ADD_TO_CART',
              payload: product
            })
          }
          className="w-full bg-peach text-forest font-semibold rounded-lg py-2 mt-2 hover:bg-soft-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2"
        >
          Add to Cart
        </button>
      </div>

    </div>
  )
}

export default ProductCard