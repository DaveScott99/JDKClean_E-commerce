import { Link, useParams } from "react-router-dom";
import { Product } from "../../types/Product";

type Props = {
  product: Product;
};

function formatPrice(price: number) {
  const formater = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  return formater.format(price);
}

export const ProductCard = ({ product }: Props) => {

  const handleClickProduct = () => {
    console.log(product);
  }

  return (
    <>
    <Link to={`/productpage/${product.id}`} onClick={() => handleClickProduct()}>
      <div className="card-item">
        <div className="card-image">
          <img src={product.imgUrl} alt="product" className="img-thumbnail" />
        </div>
        <div className="card-content">
          <p className="fs-6 fw-light">{product.name}</p>
          <p className="fs-5 fw-bold">{formatPrice(product.price)}</p>
        </div>
      </div>
    </Link>
    </>
  );
};
