import { useAssets } from '../../../assets'
import ProductInfo from './../ProductInfo'
import './ProductDetail.scss'

const ProductDetail = () => {
  const { useIcons } = useAssets()
  const { IconClose } = useIcons()
  return (
    <aside className='ProductDetail'>
      <div className='ProductDetail-close'>
        <img src={IconClose} alt='close' />
      </div>
      <ProductInfo />
    </aside>
  )
}

export default ProductDetail
