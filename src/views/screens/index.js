import Login from './Login'
import RecoveryPassword from './RecoveryPassword'
import NotFound from './NotFound'
import Checkout from './Checkout'
import CreateAccount from './CreateAccount'
import Home from './Home'
import NewPassword from './NewPassword'
import Orders from './Orders'
import SendEmail from './SendEmail'

export const useScreens = () => {
  return {
    Login,
    RecoveryPassword,
    NotFound,
    Checkout,
    CreateAccount,
    Home,
    NewPassword,
    Orders,
    SendEmail
  }
}
