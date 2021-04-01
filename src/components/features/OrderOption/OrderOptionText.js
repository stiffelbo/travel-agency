import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';


const OrderOptionText = ({currentValue, setOptionValue, name, required}) => (
  <div className={styles.component}>
    <label>
      {name}
      <input type='text'
        className={styles.text}      
        value={currentValue}       
        onChange={event => setOptionValue(event.currentTarget.value)} 
        required={required} 
      />
    </label>    
  </div>
);

OrderOptionText.propTypes = {
  name: PropTypes.string,
  currentValue: PropTypes.string, 
  setOptionValue: PropTypes.func,
  required: PropTypes.bool,
};

export default OrderOptionText;