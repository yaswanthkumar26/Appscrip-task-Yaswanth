import Sidebar from "@/components/Sidebar/Sidebar";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Requirement #6c: H1 Tag */}
      <h1>Products</h1> 
      
      <div className={styles.mainContent}>
        <Sidebar />
        <ProductGrid />
      </div>
    </div>
  );
}