import React from "react";
import styles from "./ReferenceTable.module.css";

function ReferenceTable() {
  return (
    <div className={styles.scrollableTableContainer}>
      <table className={styles.dataframe}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Parameter</th>
            <th>Reference Range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Full Blood Count</td>
            <td>Haemoglobin</td>
            <td>Men: 135-180 g/L Women: 115-160 g/L</td>
          </tr>
          <tr>
            <td></td>
            <td>Mean Cell Volume</td>
            <td>82-100 fl</td>
          </tr>
          <tr>
            <td></td>
            <td>Platelets</td>
            <td>150-400 * 10^9/L</td>
          </tr>
          <tr>
            <td></td>
            <td>White Blood Cells</td>
            <td>4.0-11.0 * 10^9/L</td>
          </tr>
          <tr>
            <td></td>
            <td>Neutrophils</td>
            <td>2.0-7.0 * 10^9/L</td>
          </tr>
          <tr>
            <td></td>
            <td>Lymphocytes</td>
            <td>1.0-3.5 * 10^9/L</td>
          </tr>
          <tr>
            <td></td>
            <td>Eosinophils</td>
            <td>0.1-0.4 * 10^9/L</td>
          </tr>
          <tr>
            <td>Urea and Electrolytes</td>
            <td>Sodium</td>
            <td>135-145 mmol/L</td>
          </tr>
          <tr>
            <td></td>
            <td>Potassium</td>
            <td>3.5 - 5.0 mmol/L</td>
          </tr>
          <tr>
            <td></td>
            <td>Urea</td>
            <td>2.0-7 mmol/L</td>
          </tr>
          <tr>
            <td></td>
            <td>Creatinine</td>
            <td>55-120 umol/L</td>
          </tr>
          <tr>
            <td></td>
            <td>Bicarbonate</td>
            <td>22-28 mmol/L</td>
          </tr>
          <tr>
            <td></td>
            <td>Chloride</td>
            <td>95-105 mmol/L</td>
          </tr>
          <tr>
            <td>Liver Function Tests</td>
            <td>Bilirubin</td>
            <td>3-17 umol/L</td>
          </tr>
          <tr>
            <td></td>
            <td>Alanine Transferase (ALT)</td>
            <td>3-40 iu/L</td>
          </tr>
          <tr>
            <td></td>
            <td>Aspartate Transaminase (AST)</td>
            <td>3-30 iu/L</td>
          </tr>
          <tr>
            <td></td>
            <td>Alkaline Phosphatase (ALP)</td>
            <td>30-100 umol/L</td>
          </tr>
          <tr>
            <td></td>
            <td>Gamma Glutamyl Transferase (γGT)</td>
            <td>8-60 u/L</td>
          </tr>
          <tr>
            <td></td>
            <td>Total Protein</td>
            <td>60-80 g/L</td>
          </tr>
          <tr>
            <td>Other Haematology</td>
            <td>Erythrocyte Sedimentation Rate (ESR)</td>
            <td>
              Men: &lt; (age / 2) mm/hr, Women: &lt; ((age + 10) / 2) mm/hr
            </td>
          </tr>
          <tr>
            <td></td>
            <td>Prothrombin Time (PT)</td>
            <td>10-14 secs</td>
          </tr>
          <tr>
            <td></td>
            <td>Activated Partial Thromboplastin Time (APTT)</td>
            <td>24-35 secs</td>
          </tr>
          <tr>
            <td>Other Biochemistry</td>
            <td>Calcium</td>
            <td>2.1-2.6 mmol/L</td>
          </tr>
          <tr>
            <td></td>
            <td>Phosphate</td>
            <td>0.8-1.4 mmol/L</td>
          </tr>
          <tr>
            <td></td>
            <td>CRP (C-Reactive Protein)</td>
            <td>&lt; 10 mg/L</td>
          </tr>
          <tr>
            <td></td>
            <td>Thyroid Stimulating Hormone (TSH)</td>
            <td>0.5-5.5 mu/L</td>
          </tr>
          <tr>
            <td></td>
            <td>Free Thyroxine (T4)</td>
            <td>9-18 pmol/L</td>
          </tr>
          <tr>
            <td></td>
            <td>Total Thyroxine (T4)</td>
            <td>70-140 nmol/L</td>
          </tr>
          <tr>
            <td></td>
            <td>Amylase</td>
            <td>70-300 u/L</td>
          </tr>
          <tr>
            <td></td>
            <td>Uric Acid</td>
            <td>0.18-0.48 mmol/L</td>
          </tr>
          <tr>
            <td></td>
            <td>Creatine Kinase</td>
            <td>35-250 u/L</td>
          </tr>
          <tr>
            <td>Arterial Blood Gases</td>
            <td>pH</td>
            <td>7.35 - 7.45</td>
          </tr>
          <tr>
            <td></td>
            <td>pCO2</td>
            <td>4.5 - 6.0 kPa</td>
          </tr>
          <tr>
            <td></td>
            <td>pO2</td>
            <td>10 - 14 kPa</td>
          </tr>
          <tr>
            <td></td>
            <td>Bicarbonate</td>
            <td>22-28 mmol/L</td>
          </tr>
          <tr>
            <td></td>
            <td>Base Excess</td>
            <td>-2 to +2 mmol/L</td>
          </tr>
          <tr>
            <td>Lipids</td>
            <td>Total Cholesterol</td>
            <td>&lt; 5 mmol/L</td>
          </tr>
          <tr>
            <td></td>
            <td>Triglycerides</td>
            <td>&lt; 2 mmol/L</td>
          </tr>
          <tr>
            <td></td>
            <td>HDL Cholesterol</td>
            <td>&gt; 1 mmol/L</td>
          </tr>
          <tr>
            <td></td>
            <td>LDL Cholesterol</td>
            <td>&lt; 3 mmol/L</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ReferenceTable;
