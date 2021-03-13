import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';


const OrderOptionText = ({currentValue, setOptionValue, name}) => (
  <div className={styles.component}>
    <label>
      {name}
      <input type='text'
        className={styles.text}      
        value={currentValue}       
        onChange={event => setOptionValue(event.currentTarget.value)} 
      />
    </label>    
  </div>
);

OrderOptionText.propTypes = {
  name: PropTypes.string,
  currentValue: PropTypes.text, 
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;