// src/components/ProductCard/ProductCard.tsx
import React from 'react';
import styles from './ProductCard.module.css';
import { Product } from '@/types';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Let's pretend some items are out of stock (e.g., if their ID is a multiple of 5)
  const isOutOfStock = product.id % 5 === 0;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={product.image} 
          alt={product.title} 
          width={300}
          height={300}
          className={styles.cardImage}
        />
        {/* Show this overlay if the item is out of stock */}
        {isOutOfStock && (
          <div className={styles.outOfStockOverlay}>
            OUT OF STOCK
          </div>
        )}
      </div>
      
      <div className={styles.cardBody}>
        <h2 className={styles.cardTitle}>{product.title}</h2>
        
        <div className={styles.priceRow}>
          <p className={styles.cardPrice}>${product.price}</p>
          
          {/* Heart Icon (as an SVG) */}
          <svg 
            className={styles.heartIcon}
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;