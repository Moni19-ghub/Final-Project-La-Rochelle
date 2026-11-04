import { useParams, Link } from 'react-router-dom'
import products from '../data/products'
import { useCart } from '../context/CartContext'

function ProductDetails() {
  const { productId } = useParams()
  const { dispatch } = useCart()

  const product = products.find(
    (item) => item.id === Number(productId)
  )

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-forest">
          Product Not Found
        </h1>

        <Link
          to="/"
          className="text-sage hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      <Link
        to="/"
        className="text-sage hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
      >
        ← Back to Shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">

        <div className="bg-pale-green rounded-2xl h-96 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            width="600"
            height="384"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <p className="text-sage font-medium">
            {product.category}
          </p>

          <h1 className="text-4xl font-bold text-forest mt-2">
            {product.name}
          </h1>

          <p className="text-2xl font-bold text-sage mt-4">
            R{product.price.toFixed(2)}
          </p>

          <p className="text-forest mt-6">
            {product.description}
          </p>

          <button
            onClick={() =>
              dispatch({
                type: 'ADD_TO_CART',
                payload: product
              })
            }
            className="bg-sage text-white px-8 py-3 rounded-lg mt-8 hover:bg-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2"
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  )
}

export default ProductDetails