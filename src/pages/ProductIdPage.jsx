import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import ProductInfo from "../components/ProductIdPage/Productinfo"
import SimilarProducts from "../components/ProductIdPage/SimilarProducts"


const ProductIdPage = () => {

  const {id} = useParams()

  const [product, getSingleProduct] = useFetch()
  
  useEffect(() => {
    getSingleProduct('/products/${id}')
  }, [id])

  
  return (
    <div>
      <ProductInfo 
        product={product}
      />
      <SimilarProducts 
        product={product}
      />
    </div>
  )
}

export default ProductIdPage