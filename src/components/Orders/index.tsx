import { useEffect, useState } from "react";
import { fetchProducts } from "../../hooks/useApi";
import { Product } from "../../types/Product";
import { ProductsList } from "../ProductsList";
import { StepsHeader } from "./StepsHeader"
import './styles.css';

export const Orders = () => {

  const [products, setProducts] = useState<Product[]>([]);

  console.log(products)

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data.content))
      .catch(error => console.log(error))
  }, []);

    return (
      <div className="orders-container">
        <StepsHeader />
        <ProductsList products={products} />
      </div>
    ) 
}