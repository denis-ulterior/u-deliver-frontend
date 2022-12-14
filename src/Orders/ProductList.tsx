
import ProductCard from './ProductCard'
import './styles.css'
import { Product } from './Types'
type Props = {
    products:Product[]
}
function ProductList({products}:Props) {
    return (
        <div className='orders-list-container'>
            <div className='orders-list-items'>
                {products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
               
            </div>
        </div>
    )
}
export default ProductList