// src/app/page.tsx
// This is our Server Component
import ProductListing from "@/components/ProductListing/ProductListing";
import { Product } from "@/types";
import styles from "./page.module.css";

// 1. Data fetching remains on the server
async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch data');
    const products: Product[] = await res.json();
    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// 2. The Page is a simple async server component
export default async function Home() {
  const products = await getProducts();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerTitle}>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus 
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>

      {/* 3. We pass the server data to the client component */}
      <ProductListing products={products} />
    </div>
  );
}