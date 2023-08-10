import { useNavigate } from "react-router-dom"
import './styles/CardProduct.css'
import useCartApi from "../../hooks/useCartApi"

const CardProduct = ({product}) => {

  const navigate = useNavigate()

  const {addProductInCart}= useCartApi()

  const handleNavigate = () => {
    navigate(`/product/${product.id}`)
  }

  const handleAddCart = e => {
    e.stopPropagation()
    const data ={
      quantity: 1,
      productId: product.id
    }
    addProductInCart(data)
  }

  return (
    <article className="card" onClick={handleNavigate}>
      <header className="card_header">
        <img className="card_img card_img1" src={product.images[0].url} alt="" />
        <img className="card_img card_img2" src={product.images[1].url} alt="" />
      </header>
      <section className="card_body">
        <header className="card_body_header">
        <h4 className="card_brand">{product.brand}</h4>
        <h3 className="card_name">{product.title}</h3>
        </header>
        <article className="card_price">
          <h3 className="card_price_label">Price</h3>
          <span className="card_price_value">{product.price}</span>
        </article>
        <button className="card_btn" onClick={handleAddCart}>
        <i className='bx bxs-cart-download card_icon'></i>
        </button>
      </section>
    </article>
  )
}

export default CardProduct