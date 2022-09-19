import { useState, useContext } from 'react'
import './Header.scss'
import { useAssets } from './../../../assets'
import Menu from './../Menu'
import AppContext from '../../../context/AppContext'
import MyOrder from '../MyOrder'

const Header = () => {
  const { useIcons, useLogos } = useAssets()
  const { IconMenu, IconCart } = useIcons()
  const { LogoYardSale } = useLogos()

  const [toggle, setToggle] = useState(false)
  const [toggleOrders, setToggleOrders] = useState([])

  const { state } = useContext(AppContext)

  const handleToggle = () => {
    setToggle((prev) => !prev)
  }

  return (
    <nav>
      <img src={IconMenu} alt='menu' className='menu' />
      <div className='navbar-left'>
        <img src={LogoYardSale} alt='logo' className='nav-logo' />
        <ul>
          <li>
            <a href='/'>All</a>
          </li>
          <li>
            <a href='/'>Clothes</a>
          </li>
          <li>
            <a href='/'>Electronics</a>
          </li>
          <li>
            <a href='/'>Furnitures</a>
          </li>
          <li>
            <a href='/'>Toys</a>
          </li>
          <li>
            <a href='/'>Others</a>
          </li>
        </ul>
      </div>
      <div className='navbar-right'>
        <ul>
          <li className='navbar-email' onClick={handleToggle}>
            platzi@example.com
          </li>
          <li
            className='navbar-shopping-cart'
            onClick={() => setToggleOrders((prev) => !prev)}
          >
            <img src={IconCart} alt='shopping cart' />
            {state.cart.length > 0 && <div>{state.cart.length}</div>}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  )
}

export default Header
