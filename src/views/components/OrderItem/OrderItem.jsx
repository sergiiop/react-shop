import { useAssets } from '../../../assets'
import './OrderItem.scss'
import { useContext } from 'react'
import AppContext from './../../../context/AppContext'

const OrderItem = ({ product }) => {
  const { useIcons } = useAssets()
  const { IconClose } = useIcons()
  const { removeFromCart } = useContext(AppContext)

  const handleRemove = (product) => {
    removeFromCart(product)
  }
  return (
    <div className='OrderItem'>
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <img src={IconClose} alt='close' onClick={() => handleRemove(product)} />
    </div>
  )
}

export default OrderItem
