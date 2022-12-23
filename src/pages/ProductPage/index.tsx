import { useParams } from "react-router-dom";
import { ProductInfo } from "./ProductInfo";
import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { Product } from "../../types/Product";

import "./styles.css";

export const ProductPage = () => {
  const { id } = useParams();
  const productId = id ? Number.parseInt(id, 10) : null;

  const [product, setProduct] = useState<Product>();

  const api = useApi();
  useEffect(() => {
    const productById = async () => {
      const data = await api.productById(productId);
      setProduct(data);
    };
    productById();
  }, []);

  return <ProductInfo product={product} />;
};
