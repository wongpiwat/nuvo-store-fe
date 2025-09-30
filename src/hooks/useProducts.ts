import { useEffect, useState } from 'react';
import { PRODUCTS_API } from '../constants/apis';
import type { Product } from '../types/product';

export function useProducts(limit: number = 5) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`${PRODUCTS_API}?limit=${limit}`);
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [limit]);

  return { products, loading };
}
