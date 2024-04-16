import React, { useState, useMemo } from "react";
import styles from "./SavedDeckTable.module.css";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import binLogo from "../../static/logos/bin.png"

const SavedDeckTable = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [visibleData, setVisibleData] = useState(data);
  const [isModalVisible, setModalVisible] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  const sortedData = useMemo(() => {
    const sortableItems = [...visibleData];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (typeof a[sortConfig.key] === "number") {
          // Sorting numbers
          return sortConfig.direction === "ascending"
            ? a[sortConfig.key] - b[sortConfig.key]
            : b[sortConfig.key] - a[sortConfig.key];
        } else {
          // Sorting strings
          const itemA = a[sortConfig.key].toUpperCase(); // ignore upper and lowercase
          const itemB = b[sortConfig.key].toUpperCase(); // ignore upper and lowercase
          if (itemA < itemB) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (itemA > itemB) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
        }
        return 0; // names must be equal
      });
    }
    return sortableItems;
  }, [visibleData, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const requestRemoveItem = (itemName) => {
    setItemToRemove(itemName);
    setModalVisible(true);
  };

  const confirmRemoveItem = () => {
    setVisibleData((prev) => prev.filter((item) => item.name !== itemToRemove));
    setModalVisible(false);
    setItemToRemove(null);
  };

  const cancelRemoveItem = () => {
    setModalVisible(false);
    setItemToRemove(null);
  };

  const Modal = ({ isVisible, onConfirm, onCancel }) => {
    if (!isVisible) return null;
  
    // This function is called when the overlay is clicked
    const handleOverlayClick = (e) => {
      // If the clicked element is the overlay itself, call onCancel
      if (e.target === e.currentTarget) {
        onCancel();
      }
    };
  
    // This function prevents click events from propagating to the overlay
    const handleModalClick = (e) => {
      e.stopPropagation();
    };
  
    return (
      <div className={styles.modalOverlay} onClick={handleOverlayClick}>
        {/* Stop propagation to prevent clicks inside the modal from closing it */}
        <div className={styles.modal} onClick={handleModalClick}>
          <p>Are you sure you want to remove this question deck?</p>
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.tableContainer}>
      <Modal
        isVisible={isModalVisible}
        onConfirm={confirmRemoveItem}
        onCancel={cancelRemoveItem}
      />
      <table className={styles.table}>
        <thead>
          <tr>
            <th onClick={() => requestSort("name")}>
              Name{" "}
              {sortConfig.key === "name" &&
                (sortConfig.direction === "ascending" ? (
                  <IoIosArrowDropdown />
                ) : (
                  <IoIosArrowDropup />
                ))}
            </th>
            <th onClick={() => requestSort("topic")}>
              Topic{" "}
              {sortConfig.key === "topic" &&
                (sortConfig.direction === "ascending" ? (
                  <IoIosArrowDropdown />
                ) : (
                  <IoIosArrowDropup />
                ))}
            </th>
            <th onClick={() => requestSort("numberOfQuestions")}>
              No. of questions{" "}
              {sortConfig.key === "numberOfQuestions" &&
                (sortConfig.direction === "ascending" ? (
                  <IoIosArrowDropdown />
                ) : (
                  <IoIosArrowDropup />
                ))}
            </th>
            <th onClick={() => requestSort("education")}>
              Education Level{" "}
              {sortConfig.key === "education" &&
                (sortConfig.direction === "ascending" ? (
                  <IoIosArrowDropdown />
                ) : (
                  <IoIosArrowDropup />
                ))}
            </th>
            <th onClick={() => requestSort("creator")}>
              Creator/University{" "}
              {sortConfig.key === "creator" &&
                (sortConfig.direction === "ascending" ? (
                  <IoIosArrowDropdown />
                ) : (
                  <IoIosArrowDropup />
                ))}
            </th>
            <th onClick={() => requestSort("verified")}>
              Verified{" "}
              {sortConfig.key === "verified" &&
                (sortConfig.direction === "ascending" ? (
                  <IoIosArrowDropdown />
                ) : (
                  <IoIosArrowDropup />
                ))}
            </th>
            <th> </th>
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
              <td onClick={() => requestRemoveItem(item.name)}><img className={styles.bin} src={binLogo} alt="Remove" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedDeckTable;
