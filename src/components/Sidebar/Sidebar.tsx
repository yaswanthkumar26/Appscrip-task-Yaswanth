// src/components/Sidebar/Sidebar.tsx
'use client'; // This component now needs state, so it's a client component
import React, { useState } from 'react';
import styles from './Sidebar.module.css';

// Internal component for each filter group
const FilterGroup: React.FC<{ title: string; options: string[] }> = ({ title, options }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.filterSection}>
      <button 
        className={styles.sectionTitleButton} 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className={styles.sectionTitle}>{title}</span>
        {/* Toggle between + and - icons */}
        <span className={styles.icon}>{isExpanded ? '−' : '+'}</span>
      </button>

      {/* Conditionally render the options */}
      {isExpanded && (
        <div className={styles.optionsContainer}>
          {options.map((option) => (
            <div key={option} className={styles.option}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Main Sidebar Component
const Sidebar = () => {
  const filterGroups = [
    { title: 'CUSTOMIZABLE', options: ['Customizable'] },
    { title: 'IDEAL FOR', options: ['Men', 'Women', 'Baby & Kids', 'All'] },
    { title: 'OCCASION', options: ['Work', 'Casual', 'Party'] },
    { title: 'FABRIC', options: ['Cotton', 'Polyester', 'Wool'] },
    { title: 'SEGMENT', options: ['Segment 1', 'Segment 2'] },
    { title: 'SUITABLE FOR', options: ['Formal', 'Informal'] },
    { title: 'RAW MATERIALS', options: ['Material 1', 'Material 2'] },
    { title: 'PATTERN', options: ['Solid', 'Striped', 'Checked'] },
  ];

  return (
    <aside className={styles.sidebar}>
      {filterGroups.map((group) => (
        <FilterGroup 
          key={group.title} 
          title={group.title} 
          options={group.options} 
        />
      ))}
    </aside>
  );
};

export default Sidebar;