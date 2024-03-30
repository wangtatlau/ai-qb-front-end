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
          dated 13/01/2023 for the above project. I have had the opportunity to
          consider the information and asked questions which have been answered
          to my satisfaction.
        </p>
        <p className={styles.tocText}>
          2. I consent voluntarily to be a participant in this project and
          understand that I can refuse to take part and can withdraw from the
          project at any time, without having to give a reason, up until
          31/12/2024.
        </p>
        <p className={styles.tocText}>
          3. I understand my personal information will be processed for the
          purposes explained to me in the Information Sheet. I understand that
          such information will be handled under the terms of UK data protection
          law, including the UK General Data Protection Regulation (UK GDPR) and
          the Data Protection Act 2018.
        </p>
        <p className={styles.tocText}>
          4. I understand that my information may be subject to review by
          responsible individuals from the College for monitoring and audit
          purposes.
        </p>
        <p className={styles.tocText}>
          5. I agree to be identified in any research outputs, as explained in
          the Information Sheet.
        </p>
        <p className={styles.tocText}>
          6. I agree to my data being shared with a third-party transcriber who
          will have signed a confidentiality agreement.
        </p>
        <p className={styles.tocText}>
          7. I agree that the research team may use my data for future research
          and understand that any such use of identifiable data would be
          reviewed and approved by a research ethics committee. (In such cases,
          as with this project, data would not be identifiable in any report and
          pseudonyms will be used if needed).
        </p>
        <p className={styles.tocText}>
          8. If you are a KCL student, I agree that the research team may access
          my KCL Student Profile (including full name, KCL ID and KCL email
          address) for the purposes of this research project.
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
          13. I consent to my identifiable data being stored at a third party
          data storage provider, Google Cloud Services, as described in the
          information sheet.
        </p>
      </div>
    </div>
  );
};

export default Toc;
