import { useState } from "react";
import { Product } from "../../types/Product";

type Props = {
  product: Product | undefined;
};

export const ProductInfo = ({ product }: Props) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div id="container-product-page">
      <div className="product-image">
        <img src={product?.imgUrl} alt="" />
      </div>
      <div className="product-info">
        <h1>{product?.name}</h1>
        <div className="product-info--desc">Descrição do produto</div>
        <div className="product-info--pricearea">
          <div className="product-info--sector">Preço</div>
          <div className="product-info--price">
            <div className="product-info--actualPrice">
              R${" "}
              {product?.price?.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
            <div className="product-info--qtarea">
              <button className="product-info--qtmenos" onClick={() => setQuantity(quantity - 1)}>-</button>
              <div className="product-info--qt">{quantity}</div>
              <button className="product-info--qtmais" onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>
        </div>
        <div className="product-info--addButton">Adicionar ao carrinho</div>
      </div>
    </div>
  );
};
