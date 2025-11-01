// src/components/SubHeader/SubHeader.tsx
'use client'; // This is a client component
import React from 'react';
import styles from './SubHeader.module.css';

// Define the props it will receive from its parent
interface SubHeaderProps {
  isFilterVisible: boolean;
  setIsFilterVisible: (isVisible: boolean) => void;
}

const SubHeader: React.FC<SubHeaderProps> = ({ isFilterVisible, setIsFilterVisible }) => {

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className={styles.subHeader}>
      <button onClick={toggleFilter} className={styles.filterToggle}>
        {isFilterVisible ? 'HIDE FILTERS' : 'SHOW FILTERS'}
      </button>

      <div className={styles.sortDropdown}>
        <span>RECOMMENDED</span>
        {/* Simple SVG for the dropdown arrow */}
        <svg width="12" height="12" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L9 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default SubHeader;