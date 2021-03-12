import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';


const OrderOptionNumber = () => (
  <div className={styles.component}>
    OrderOptionNumber
  </div>
);

OrderOptionNumber.propTypes = {
  name: PropTypes.string,
};

export default OrderOptionNumber;