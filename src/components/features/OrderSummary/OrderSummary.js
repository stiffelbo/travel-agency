import React from 'react';
import PropTypes from 'prop-types';

import formatPrice from '../../../utils/formatPrice';
import calculateTotal from '../../../utils/calculateTotal';

import styles from './OrderSummary.scss';


const OrderSummary = ({cost, options}) => (
  <h2 className={styles.component}>Total: <strong>{formatPrice(calculateTotal(cost, options))}</strong></h2>
);

OrderSummary.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;