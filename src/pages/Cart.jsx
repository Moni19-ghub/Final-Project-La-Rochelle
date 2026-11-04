import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

function Cart() {
  const { cart, dispatch } = useCart()

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const buttonFocus =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2'

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold text-forest mb-8">
        Your Shopping Cart
      </h1>

      {cart.length === 0 ? (

        <div className="text-center py-16">
          <p className="text-forest text-lg">
            Your cart is looking a little empty!
          </p>

          <Link
            to="/"
            className={`inline-block bg-sage text-white px-6 py-3 rounded-lg mt-6 hover:bg-forest ${buttonFocus}`}
          >
            Continue Shopping
          </Link>
        </div>

      ) : (

        <div>
          {cart.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-soft-green flex flex-col sm:flex-row gap-4"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-full sm:w-32 h-32 object-cover rounded-lg"
                loading="lazy"
              />

              <div className="flex-1">

                <h2 className="font-bold text-forest">
                  {item.name}
                </h2>

                <p className="text-sage mt-2">
                  R{item.price.toFixed(2)}
                </p>

                <div className="flex items-center gap-3 mt-3">

                  <button
                    onClick={() =>
                      dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: {
                          id: item.id,
                          quantity: item.quantity - 1
                        }
                      })
                    }
                    disabled={item.quantity === 1}
                    className={`bg-pale-green text-forest w-8 h-8 rounded-lg disabled:opacity-40 ${buttonFocus}`}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    -
                  </button>

                  <span
                    className="font-medium text-forest"
                    aria-label={`Quantity: ${item.quantity}`}
                  >
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: {
                          id: item.id,
                          quantity: item.quantity + 1
                        }
                      })
                    }
                    className={`bg-pale-green text-forest w-8 h-8 rounded-lg ${buttonFocus}`}
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    +
                  </button>

                </div>

                <button
                  onClick={() =>
                    dispatch({
                      type: 'REMOVE_FROM_CART',
                      payload: item.id
                    })
                  }
                  className={`text-red-700 text-sm font-medium mt-3 hover:underline ${buttonFocus}`}
                >
                  Remove
                </button>

              </div>
            </div>
          ))}

          <div className="bg-pale-green rounded-xl p-6 mt-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-forest">
                Subtotal
              </h2>

              <p className="text-xl font-bold text-sage">
                R{subtotal.toFixed(2)}
              </p>
            </div>
          </div>

        </div>
      )}

    </div>
  )
}

export default Cart