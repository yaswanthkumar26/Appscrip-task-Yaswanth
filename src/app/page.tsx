// src/app/page.tsx
import Sidebar from "@/components/Sidebar/Sidebar";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import styles from "./page.module.css";
import { Product } from "@/types"; // Import the type we just made

// This function fetches the data.
// In Next.js App Router, this will run on the server.
async function getProducts() {
  try {
    // We add { cache: 'no-store' } to ensure this is always
    // re-fetched on the server, fulfilling the SSR requirement.
    const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const products: Product[] = await res.json();
    return products;

  } catch (error) {
    console.error(error);
    return []; // Return an empty array on error
  }
}


// The 'Home' component is now 'async'
export default async function Home() {
  // We call our function and wait for the products
  const products = await getProducts();

  return (
    <div className={styles.container}>
      {/* Requirement #6c: H1 Tag */}
      <h1>Products</h1> 

      <div className={styles.mainContent}>
        <Sidebar />
        {/* We now pass the 'products' array as a prop */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
}