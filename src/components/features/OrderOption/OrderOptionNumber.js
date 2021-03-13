import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';


const OrderOptionNumber = ({currentValue, limits, setOptionValue}) => (
  <div className={styles.number}>
    <input type='number' 
      className={styles.inputSmall} 
      value={currentValue} 
      max={limits.max} 
      min={limits.min} 
      onChange={event => setOptionValue(event.currentTarget.value)} 
    />
  </div>
);

OrderOptionNumber.propTypes = {
  name: PropTypes.string,
  currentValue: PropTypes.number,
  limits: PropTypes.object,
  setOptionValue: PropTypes.func,
};

export default OrderOptionNumber;