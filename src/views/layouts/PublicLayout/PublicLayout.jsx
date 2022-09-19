import { useComponents } from '../../components'

const PublicLayout = ({ children }) => {
  const { Header } = useComponents()
  return (
    <div className='Layout'>
      <Header />
      {children}
    </div>
  )
}

export default PublicLayout
