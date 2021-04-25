import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";
export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={styles.container}>
      <div>
        Good <span>{good}</span>
      </div>
      <div>
        Neutral <span>{neutral}</span>
      </div>
      <div>
        Bad <span>{bad}</span>
      </div>
      <div>
        Total <span>{total}</span>
      </div>
      <div>
        Positive <span>{positivePercentage}%</span>
      </div>
    </div>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
