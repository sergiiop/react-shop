import { useComponents } from './../../components'

const Home = () => {
  const { ProductList } = useComponents()
  return (
    <>
      <ProductList />
    </>
  )
}

export default Home
