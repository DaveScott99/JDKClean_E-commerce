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

export const ProductCard = () => {

  return (
    <Link to="#">
      <div className="card-item">
        <div className="card-image">
          <img src="https://www.mmcleandetaill.com.br/wp-content/uploads/2021/06/LAVANDA-NOVO-5.png" alt="product" className="img-thumbnail" />
        </div>
        <div className="card-content">
          <p className="fs-6 fw-light">Desinfetante</p>
          <p className="fs-5 fw-bold">{formatPrice(4.50)}</p>
        </div>
      </div>
    </Link>
  );
};
