import { useComponents } from '../../components'
import './Orders.scss'

const Orders = () => {
  const { OrderItem } = useComponents()
  return (
    <div className='Orders'>
      <div className='Orders-container'>
        <h1 className='title'>My orders</h1>
        <div className='Orders-content'>
          <OrderItem />
        </div>
      </div>
    </div>
  )
}

export default Orders
