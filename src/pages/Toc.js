import React from "react";
import logo from "../static/logos/qVault_var1.png";
import { useNavigate } from "react-router-dom";
import styles from "./Toc.module.css";

const Toc = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.pageContainer}>
      <div className={styles.logoContainer}>
        <img
          src={logo}
          alt="Logo"
          className={styles.logo}
          onClick={() => navigate("/")}
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Terms and Conditions</h2>
        <p className={styles.tocText}>
          1. I confirm that I have read and understood the information sheet
          dated 10/04/2024 for the above project. I have had the opportunity to
          consider the information and ask questions, which have been answered
          to my satisfaction.
        </p>
        <p className={styles.tocText}>
          2. I consent voluntarily to participate in this project and understand
          that I can refuse to take part and withdraw from the project at any
          time without giving a reason up until 31/12/2024.
        </p>
        <p className={styles.tocText}>
          3. I understand my personal information will be processed for the
          purposes explained in the Information Sheet and that it will be
          handled under the terms of UK data protection law, including the UK
          General Data Protection Regulation (UK GDPR) and the Data Protection
          Act 2018.
        </p>
        <p className={styles.tocText}>
          4. I understand that my information may be subject to review by
          responsible individuals from the College for monitoring and audit
          purposes.
        </p>
        <p className={styles.tocText}>
          5. I agree that my non-identifiable data collected may be used in
          analysis and/ or published in any research outputs, as explained in
          the Information Sheet.
        </p>
        <p className={styles.tocText}>
          6. I agree that the research team may use my data for future research
          and understand that any such use of identifiable data would be
          reviewed and approved by a research ethics committee. &#40;In such
          cases, as with this project, data would not be identifiable in any
          report, and pseudonyms will be used if needed&#41;.
        </p>
        <p className={styles.tocText}>
          7. &#40;KCL students only&#41;, I agree that the research team may
          access my KCL Student Profile &#40;including full name, KCL ID and KCL
          email address&#41; for this research project.
        </p>
        <p className={styles.tocText}>
          8. I understand that my contact details &#40;including name, KCL email
          address&#41; will be stored until the end of the study
          &#40;31/12/2028&#41; for continuous analysis throughout the
          implementation of the web application.
        </p>
        <p className={styles.tocText}>
          9. I understand that the information I have submitted will be
          published as a report.
        </p>
        <p className={styles.tocText}>
          10. I wish to receive a copy of the final report.
        </p>
        <p className={styles.tocText}>
          11. I agree to be re-contacted in the future by King’s College London
          researchers regarding this project.
        </p>
        <p className={styles.tocText}>
          12. I agree that the researcher may retain my contact details so that
          I may be contacted in the future by King’s College London researchers
          who would like to invite me to participate in future studies of a
          similar nature.
        </p>
        <p className={styles.tocText}>
          13. I consent to my identifiable data being stored at Google Cloud
          Services, a third-party data storage provider, as described in the
          information sheet.
        </p>
      </div>
    </div>
  );
};

export default Toc;
