// src/components/ProductGrid/ProductGrid.tsx
import React from 'react';
import styles from './ProductGrid.module.css';
import { Product } from '@/types'; // Import our Product type
import ProductCard from '../ProductCard/ProductCard'; // Import the card

// 1. Define the props we expect
interface ProductGridProps {
  products: Product[];
}

// 2. Use the props in the component
const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <section className={styles.grid}>
      {/* 3. Map over the products array */}
      {products.map((product) => (
        // 4. Render a ProductCard for each one
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductGrid;