import useGetProducts from '../../../hooks/useGetProducts'
import ProductItem from './../ProductItem'
import './ProductList.scss'

const API = 'https://api.escuelajs.co/api/v1/products'

const ProductList = () => {
  const products = useGetProducts(API)
  return (
    <section className='main-container'>
      <div className='ProductList'>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductList
