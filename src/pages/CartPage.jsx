import { useDispatch, useSelector } from "react-redux"
import { getCartThunk } from "../store/slices/cart.slice"
import { useEffect } from "react"
import ProductInCart from "../components/CartPage/ProductInCart"
import usePurchases from "../hooks/usePurchases"

const CartPage = () => {

  const cart = useSelector(reducer => reducer.cart)

const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartThunk())
  },[])

  const totalAmount = cart.reduce((acc, cv) => {
    const subtotal = cv.quantity * cv.product.price
    return acc + subtotal
  }, 0)

  const {makeAPurchase} = usePurchases()

  const handlePurchase = () => {
    makeAPurchase()
  }

  return (
    <section>
      <h2>Cart</h2>
        <div>
        {
          cart.map(prod => (
            <ProductInCart 
              key={prod.id}
              prodCart={prod}
            />
          ))
        }
        </div>
        <footer>
          <span>Total</span>
          <h3>{totalAmount}</h3>
          <button onClick={handlePurchase}>BUY</button>
        </footer>
    </section>
  )
}

export default CartPage