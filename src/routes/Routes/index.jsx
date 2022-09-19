import { HashRouter, Route, Routes as Switch } from 'react-router-dom'
import { useViews } from '../../views'

const Routes = () => {
  const { useScreens, useLayouts } = useViews()
  const {
    Login,
    RecoveryPassword,
    NotFound,
    Home,
    Checkout,
    CreateAccount,
    NewPassword,
    Orders,
    SendEmail
  } = useScreens()
  const { PublicLayout } = useLayouts()
  return (
    <HashRouter>
      <PublicLayout>
        <Switch>
          <Route index path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/recovery-password' element={<RecoveryPassword />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/create-account' element={<CreateAccount />} />
          <Route path='/new-password' element={<NewPassword />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/send-email' element={<SendEmail />} />
          <Route path='/recovery-password' element={<RecoveryPassword />} />
          <Route path='*' element={<NotFound />} />
        </Switch>
      </PublicLayout>
    </HashRouter>
  )
}

export { Routes }
