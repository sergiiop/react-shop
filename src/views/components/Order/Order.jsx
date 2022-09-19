import { useAssets } from '../../../assets'
import './Order.scss'

const Order = () => {
  const { useIcons } = useAssets()
  const { Flechita } = useIcons()
  return (
    <div className='Order'>
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <img src={Flechita} alt='arrow' />
    </div>
  )
}

export default Order
