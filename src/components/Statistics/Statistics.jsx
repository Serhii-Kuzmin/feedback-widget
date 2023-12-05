import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  goodCounter,
  neutralCounter,
  badCounter,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul>
        <li className={css.item}>Good: {goodCounter}</li>
        <li className={css.item}>Neutral: {neutralCounter}</li>
        <li className={css.item}>Bed: {badCounter}</li>
      </ul>
      <p className={css.text}>Total feedback: {total}</p>
      <p className={css.text}>Positive feedback: {positivePercentage} %</p>
    </>
  );
};

Statistics.propTypes = {
  goodCounter: PropTypes.number.isRequired,
  neutralCounter: PropTypes.number.isRequired,
  badCounter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
