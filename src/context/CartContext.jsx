import { createContext, useContext, useReducer } from 'react'

const CartContext = createContext()

const initialCart = []

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingProduct = state.find(
        (item) => item.id === action.payload.id
      )

      if (existingProduct) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [
        ...state,
        { ...action.payload, quantity: 1 }
      ]
    }

    case 'REMOVE_FROM_CART':
      return state.filter(
        (item) => item.id !== action.payload
      )

    case 'UPDATE_QUANTITY': {
  const { id, quantity } = action.payload

  if (quantity < 1) {
    return state
  }

  return state.map((item) =>
    item.id === id
      ? { ...item, quantity }
      : item
  )
}

    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart)

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}