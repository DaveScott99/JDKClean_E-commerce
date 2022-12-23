import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { Product } from "../../types/Product";
import { ProductsList } from "../../components/ProductsList";
import { SearchAndOrder } from "../../components/SearchAndOrder";
import { Pagination } from "../../components/Pagination";

export const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const api = useApi();

  useEffect(() => {
    const listProducts = async () => {
      const data = await api.products();
      setProducts(data.content);
    };
    listProducts();
  }, []);

  return (
    <main className="flex-fill">
      <div className="container">
        <SearchAndOrder />
        <ProductsList products={products} />
        <Pagination />
      </div>
    </main>
  );
};
