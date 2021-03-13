import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';


const OrderOptionDate = ({name, setOptionValue, currentValue}) => (
  <div className={styles.component}>
    <label>
      {name}
      <DatePicker selected={currentValue} onChange={date => setOptionValue(date)} />
    </label>    
  </div>
);

OrderOptionDate.propTypes = {
  name: PropTypes.string,
  currentValue: PropTypes.string,  
  setOptionValue: PropTypes.func,  
};

export default OrderOptionDate;