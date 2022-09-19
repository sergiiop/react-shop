import AppContext from './context/AppContext'
import useInitialState from './hooks/useInitialState'
import { useRoutes } from './routes'

const App = () => {
  const { Routes } = useRoutes()
  const initialState = useInitialState()

  return (
    <AppContext.Provider value={initialState}>
      <Routes />
    </AppContext.Provider>
  )
}

export default App
