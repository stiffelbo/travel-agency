import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';


const OrderOptionCheckboxes = () => (
  <div className={styles.component}>
    OrderOptionCheckboxes
  </div>
);

OrderOptionCheckboxes.propTypes = {
  name: PropTypes.string,
};

export default OrderOptionCheckboxes;