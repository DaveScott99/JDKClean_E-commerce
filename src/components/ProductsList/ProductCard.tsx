import { Product } from '../../types/Product'

type Props = {
    product: Product;
}

function formatPrice(price: number) {
    const formater = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: "BRL",
        minimumFractionDigits:2
    });

    return formater.format(price);
}

export const ProductCard = ({ product }: Props) => {
    return (
        <div className="order-card-container">
            <h3 className="order-card-title">
                { product.name }
            </h3>
            <img src={ product.imgUrl } alt={ product.name } className='order-card-image' />
            <h3 className='order-card-price'>
                 {formatPrice(product.price) }
            </h3>
            <div className='order-card-description'>
                <h3>Descrição</h3>
                <p>{ product.description }</p>
            </div>
        </div>
    )
}