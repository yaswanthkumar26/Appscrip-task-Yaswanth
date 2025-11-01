// src/components/ProductGrid/ProductGrid.tsx
import React from 'react';
import styles from './ProductGrid.module.css';
import { Product } from '@/types';
import ProductCard from '../ProductCard/ProductCard';

// It now accepts 'isFilterVisible'
interface ProductGridProps {
  products: Product[];
  isFilterVisible: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, isFilterVisible }) => {
  return (
    // Conditionally apply the 'gridFullWidth' class
    <section 
      className={`${styles.grid} ${!isFilterVisible ? styles.gridFullWidth : ''}`}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductGrid;