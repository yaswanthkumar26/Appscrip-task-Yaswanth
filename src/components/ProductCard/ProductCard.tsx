// src/components/ProductCard/ProductCard.tsx
import React from 'react';
import styles from './ProductCard.module.css';
import { Product } from '@/types'; // Import our Product type
import Image from 'next/image'; // Use Next.js Image for optimization

// 1. Define the props
interface ProductCardProps {
  product: Product;
}

// 2. Use the props in the component
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.card}>
      {/* Requirement #6e, 6f: SEO-friendly images and alt text.
        We use Next/Image for optimization. 
        'alt' text is dynamically set from the product title.
      */}
      <Image 
        src={product.image} 
        alt={product.title} 
        width={200} 
        height={200}
        className={styles.cardImage}
      />

      {/* Requirement #6c: H2 Tag (or H3, H2 is better for PLPs) */}
      <h2 className={styles.cardTitle}>{product.title}</h2>

      <p className={styles.cardPrice}>${product.price}</p>
    </div>
  );
};

export default ProductCard;