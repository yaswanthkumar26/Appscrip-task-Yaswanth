// src/components/ProductListing/ProductListing.tsx
'use client'; // This is the main client component
import React, { useState } from 'react';
import { Product } from '@/types';
import Sidebar from '../Sidebar/Sidebar';
import ProductGrid from '../ProductGrid/ProductGrid';
import SubHeader from '../SubHeader/SubHeader';
import styles from './ProductListing.module.css';

// This component receives the products from the server
interface ProductListingProps {
  products: Product[];
}

const ProductListing: React.FC<ProductListingProps> = ({ products }) => {
  // This is the state that controls the layout
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  return (
    <div className={styles.container}>
      <SubHeader 
        isFilterVisible={isFilterVisible} 
        setIsFilterVisible={setIsFilterVisible} 
      />

      <div className={styles.mainContent}>
        {/* Conditionally render the Sidebar */}
        {isFilterVisible && <Sidebar />}

        <ProductGrid 
          products={products} 
          isFilterVisible={isFilterVisible} 
        />
      </div>
    </div>
  );
};

export default ProductListing;