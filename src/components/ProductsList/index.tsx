import { Product } from '../../types/Product';
import { ProductCard } from './ProductCard';
import './styles.css';

type Props = {
    products: Product[];
}

export const ProductsList = ({ products }: Props) => {
    return (
        <div className='card-wrapper' >
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}