import React, { useState, useMemo } from "react";
import styles from "./BrowseTable.module.css";
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';


const BrowseTable = ({ data, onRowClick, recordTimeStamp, recordTimeStampDeck }) => {
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
            <th className={styles.th}onClick={() => {requestSort('name'); recordTimeStamp('sortname')}}>Name {sortConfig.key === 'name' && (sortConfig.direction === 'ascending' ? <IoIosArrowDropdown /> : <IoIosArrowDropup />)}</th>
            <th className={styles.th} onClick={() => {requestSort('topic'); recordTimeStamp('sorttopic')}}>Topic {sortConfig.key === 'topic' && (sortConfig.direction === 'ascending' ? <IoIosArrowDropdown /> : <IoIosArrowDropup />)}</th>
            <th className={styles.centerTh} onClick={() => {requestSort('numberOfQuestions'); recordTimeStamp('sortnumberofquestions')}}>No. of questions {sortConfig.key === 'numberOfQuestions' && (sortConfig.direction === 'ascending' ? <IoIosArrowDropdown /> : <IoIosArrowDropup />)}</th>
            <th className={styles.centerTh} onClick={() => {requestSort('education'); recordTimeStamp('sorteducation')}}>Education Level {sortConfig.key === 'education' && (sortConfig.direction === 'ascending' ? <IoIosArrowDropdown /> : <IoIosArrowDropup />)}</th>
            <th className={styles.th} onClick={() => {requestSort('creator'); recordTimeStamp('sortcreator')}}>Creator/University {sortConfig.key === 'creator' && (sortConfig.direction === 'ascending' ? <IoIosArrowDropdown /> : <IoIosArrowDropup />)}</th>
            <th className={styles.th} onClick={() => {requestSort('verified'); recordTimeStamp('sortverified')}}>Verified {sortConfig.key === 'verified' && (sortConfig.direction === 'ascending' ? <IoIosArrowDropdown /> : <IoIosArrowDropup />)}</th>
            <th className={styles.centerTh} onClick={() => {requestSort('useCount'); recordTimeStamp('sortusecount')}}>Use Count {sortConfig.key === 'useCount' && (sortConfig.direction === 'ascending' ? <IoIosArrowDropdown /> : <IoIosArrowDropup />)}</th>
            <th className={styles.centerTh} onClick={() => {requestSort('upvotes'); recordTimeStamp('sortupvotes')}}>Upvotes {sortConfig.key === 'upvotes' && (sortConfig.direction === 'ascending' ? <IoIosArrowDropdown /> : <IoIosArrowDropup />)}</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index} onClick={() => {onRowClick(item); recordTimeStampDeck(item.id, 'deckdetails')}}>
              <td>{item.name}</td>
              <td>{item.topic}</td>
              <td className={styles.centerTd}>{item.numberOfQuestions}</td>
              <td className={styles.centerTd}>{item.education}</td>
              <td>{item.creator}</td>
              <td>{item.verified}</td>
              <td className={styles.centerTd}>{item.useCount}</td>
              <td className={styles.centerTd}>{item.upvotes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrowseTable;
