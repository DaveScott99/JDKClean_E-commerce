import { Product } from '../../types/Product';
import { ProductCard } from './ProductCard';
import './styles.css';

type Props = {
    products: Product[];
}

export const ProductsList = () => {
    return (
        <div className='card-wrapper' >
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}