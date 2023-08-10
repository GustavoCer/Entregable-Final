import { useDispatch, useSelector } from "react-redux"
import { getCartThunk } from "../store/slices/cart.slice"
import { useEffect } from "react"

const CartPage = () => {

  const cart = useSelector(reducer => reducer.cart)

const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartThunk())
  },[])

  console.log(cart)

  return (
    <div>CartPage</div>
  )
}

export default CartPage