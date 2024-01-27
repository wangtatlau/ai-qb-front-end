import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import MenuCard from "../components/ui/MenuCard";
import styles from "./CreateQuestion.module.css";
import useBodyClass from './useBodyClass';

function CreateQuestion() {
  useBodyClass(styles.createQuestionBody);

  const [file, setFile] = useState(null);
  const [showMenu, setShowMenu] = useState(false); // This is where we define showMenu and setShowMenu
  const [submitted, setSubmitted] = useState(false); // State to track if the file has been submitted

  const onDrop = (acceptedFiles) => {
    if (!submitted) {
      setFile(acceptedFiles[0]);
      setShowMenu(false); // Allow showing the menu again if a new file is dropped
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    noClick: submitted, // Disable click if a file is already dropped
    noDrag: submitted, // Disable drag if the file has been submitted
  });

  const handleShowMenu = () => {
    setShowMenu(true);
    setSubmitted(true); // Set submitted to true when the user clicks submit
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.uploadArea} {...getRootProps()}>
          <input {...getInputProps()} />
          {file ? (
            <h2 className={styles.instruction}>{`File: ${file.name}`}</h2>
          ) : (
            <h2 className={styles.instruction}>Drag 'n' drop a PDF here, or click to select files</h2>
          )}
        </div>
        {file && !submitted && (
          <button onClick={handleShowMenu} className={styles.submitButton}>
            Submit
          </button>
        )}
      </div>
      {showMenu && <MenuCard />}
    </div>
  );
}

export default CreateQuestion;
