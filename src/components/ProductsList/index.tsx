import { Product } from '../../types/Product';
import { ProductCard } from './ProductCard';
import './styles.css';

type Props = {
    products: Product[];
}

export const ProductsList = ({ products }: Props) => {
    return (
        <div className="orders-list-container">
            <div className='orders-list-items'>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}