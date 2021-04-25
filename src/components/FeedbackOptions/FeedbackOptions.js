import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  // Сделал так вместо обычной деструктуризации чтобы при перемене мест ентриесов стейта не
  // ломалось приложение
  const values = Object.values(options);
  const keys = Object.keys(options);
  return (
    <div>
      <button
        className={styles.btn}
        type="button"
        onClick={() => onLeaveFeedback(values[0], keys[0])}
      >
        {keys[0]}
      </button>
      <button
        className={styles.btn}
        type="button"
        onClick={() => onLeaveFeedback(values[1], keys[1])}
      >
        {keys[1]}
      </button>
      <button
        className={styles.btn}
        type="button"
        onClick={() => onLeaveFeedback(values[2], keys[2])}
      >
        {keys[2]}
      </button>
    </div>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
