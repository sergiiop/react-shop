import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
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
    <BrowserRouter>
      <PublicLayout>
        <Switch>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route
            exact
            path='/recovery-password'
            element={<RecoveryPassword />}
          />
          <Route exact path='/checkout' element={<Checkout />} />
          <Route exact path='/create-account' element={<CreateAccount />} />
          <Route exact path='/new-password' element={<NewPassword />} />
          <Route exact path='/orders' element={<Orders />} />
          <Route exact path='/send-email' element={<SendEmail />} />
          <Route
            exact
            path='/recovery-password'
            element={<RecoveryPassword />}
          />
          <Route path='*' element={<NotFound />} />
        </Switch>
      </PublicLayout>
    </BrowserRouter>
  )
}

export { Routes }
