import React, { useState, useMemo } from "react";
import styles from "./BrowseTable.module.css";
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';


const BrowseTable = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortedData = useMemo(() => {
    const sortableItems = [...data];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (typeof a[sortConfig.key] === 'number') {
          // Sorting numbers
          return sortConfig.direction === 'ascending' ? 
            a[sortConfig.key] - b[sortConfig.key] : 
            b[sortConfig.key] - a[sortConfig.key];
        } else {
          // Sorting strings
          const itemA = a[sortConfig.key].toUpperCase(); // ignore upper and lowercase
          const itemB = b[sortConfig.key].toUpperCase(); // ignore upper and lowercase
          if (itemA < itemB) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (itemA > itemB) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
        }
        return 0; // names must be equal
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th onClick={() => requestSort('name')}>Name {sortConfig.key === 'name' && (sortConfig.direction === 'ascending' ? <IoIosArrowDropdown /> : <IoIosArrowDropup />)}</th>
            <th onClick={() => requestSort('topic')}>Topic {sortConfig.key === 'topic' && (sortConfig.direction === 'ascending' ? <IoIosArrowDropdown /> : <IoIosArrowDropup />)}</th>
            <th onClick={() => requestSort('numberOfQuestions')}>No. of questions {sortConfig.key === 'numberOfQuestions' && (sortConfig.direction === 'ascending' ? <IoIosArrowDropdown /> : <IoIosArrowDropup />)}</th>
            <th onClick={() => requestSort('education')}>Education Level {sortConfig.key === 'education' && (sortConfig.direction === 'ascending' ? <IoIosArrowDropdown /> : <IoIosArrowDropup />)}</th>
            <th onClick={() => requestSort('creator')}>Creator/University {sortConfig.key === 'creator' && (sortConfig.direction === 'ascending' ? <IoIosArrowDropdown /> : <IoIosArrowDropup />)}</th>
            <th onClick={() => requestSort('verified')}>Verified {sortConfig.key === 'verified' && (sortConfig.direction === 'ascending' ? <IoIosArrowDropdown /> : <IoIosArrowDropup />)}</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.topic}</td>
              <td>{item.numberOfQuestions}</td>
              <td>{item.education}</td>
              <td>{item.creator}</td>
              <td>{item.verified}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrowseTable;
