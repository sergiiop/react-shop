import { useContext } from 'react'
import { useAssets } from '../../../assets'
import AppContext from '../../../context/AppContext'
import './ProductItem.scss'

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext)
  const { useIcons } = useAssets()
  const { AddToCartImg } = useIcons()

  const handleClick = (item) => {
    addToCart(item)
  }
  return (
    <div className='ProductItem'>
      <img src={product.images[0]} alt={product.title} />
      <div className='product-info'>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={AddToCartImg} alt='' />
        </figure>
      </div>
    </div>
  )
}

export default ProductItem
