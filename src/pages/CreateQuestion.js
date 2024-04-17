import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import MenuCard from "../components/ui/MenuCard";
import Loading from "../components/ui/Loading";
import styles from "./CreateQuestion.module.css";
import useBodyClass from "./useBodyClass";
import MainSidebarLayout from "../components/layout/MainSidebarLayout";

function CreateQuestion() {
  const navigate = useNavigate();
  // Dummy data structure
  const dummyTopics = [
    "Biochemistry ",
    "Anatomy",
    "Physiology",
    "A-Level",
    "GCSE",
  ];
  const dummyQuestionNumbers = ["10", "20", "30"];
  const dummyQuestionTypes = ["Factual", "Differential diagnosis"];

  useBodyClass(styles.createQuestionBody);

  const [file, setFile] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fileError, setFileError] = useState(""); // State to store file upload error
  const [isLoading, setIsLoading] = useState(false);

  // const LoadingOverlay = () => (
  //   <div style={{
  //     position: 'fixed',
  //     top: 0,
  //     left: 0,
  //     right: 0,
  //     bottom: 0,
  //     display: 'flex',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
  //     zIndex: 1000, // Ensure it covers everything
  //   }}>
  //     <div>Loading...</div> {/* Customize with your loading animation */}
  //   </div>
  // );  

  useEffect(() => {
    fetch("YOUR_API_ENDPOINT")
      .then((response) => response.json())
      .then((data) => {
        // Set state with fetched data
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const onDrop = (acceptedFiles, fileRejections) => {
    setFileError(""); // Reset file error state

    // Manual check for the file type
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      if (file.type !== "application/pdf") {
        setFileError(
          "Only PDF files are accepted. Please try again with a PDF."
        );
        return;
      }

      if (!submitted) {
        setFile(file);
        setShowMenu(false);
      }
    } else if (fileRejections.length > 0) {
      // Handle file rejection (e.g., not a PDF)
      setFileError("Only PDF files are accepted. Please try again with a PDF.");
    }
  };

  const handleSubmit = () => {
    if (!file) {
      alert("No file selected");
      return;
    }
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file); // Append the file to form data

    // Modify this URL to your API endpoint
    const uploadURL = "http://3.217.124.119/upload";
    const token = localStorage.getItem('token');
    fetch(uploadURL, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData,
      // You may need to set additional headers depending on your API requirements
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Handle successful response
        //Temp
        navigate("/question", { state: { questionStack: data.questionStack } });
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors here
      });

    setSubmitted(true); // Set submitted state to true
    setShowMenu(true);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "application/pdf", // Accept only PDF files
    noClick: submitted,
    noDrag: submitted,
  });
  return (
    <MainSidebarLayout>
      {isLoading && <Loading />}
      <div>
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            <div className={styles.uploadArea} {...getRootProps()}>
              <input {...getInputProps()} />
              {fileError && <div className={styles.error}>{fileError}</div>}
              {file ? (
                <h2 className={styles.instruction}>{`File: ${file.name}`}</h2>
              ) : (
                <h2 className={styles.instruction}>
                  Drag & drop a PDF here, or click to select files
                </h2>
              )}
            </div>
            {file && !submitted && (
              <button onClick={handleSubmit} className={styles.submitButton}>
                Submit
              </button>
            )}
          </div>
          {/* {showMenu && (
            <MenuCard
              topics={dummyTopics}
              questionNumbers={dummyQuestionNumbers}
              questionTypes={dummyQuestionTypes}
            />
          )} */}
        </div>
      </div>
    </MainSidebarLayout>
  );
}

export default CreateQuestion;
