import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import MenuCard from "../components/ui/MenuCard";
import styles from './CreateQuestion.module.css';

function CreateQuestion() {
  const [file, setFile] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const {getRootProps, getInputProps} = useDropzone({onDrop, noClick: file !== null});

  const handleShowMenu = () => {
    setShowMenu(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.uploadArea} {...getRootProps()}>
        <input {...getInputProps()} />
        {file ? (
          <>
            <p>{`File: ${file.name}`}</p>
            <button onClick={handleShowMenu}>Submit</button>
          </>
        ) : (
          <p>Drag 'n' drop a PDF here, or click to select files</p>
        )}
      </div>
      {showMenu && <MenuCard />}
    </div>
  );
}

export default CreateQuestion;
