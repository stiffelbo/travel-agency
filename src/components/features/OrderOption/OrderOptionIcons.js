import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';

import {formatPrice} from '../../../utils/formatPrice'; 

/*className={styles.iconActive} jesli jest aktywny*/
const OrderOptionIcons = ({values, currentValue, setOptionValue}) => (
  <div className={styles.component}>
    
    {values.map(value => {
      //setting active to icon
      
      if(value.required){
        return (
          <div className={styles.icon}  onClick={() => (setOptionValue(''))} >
            <Icon name={'times-circle'}></Icon>
            <strong >{'none'}</strong> 
          </div>
        );
      }
      return(
        <div 
          key={value.id} 
          className={currentValue == value.id ? styles.iconActive : styles.icon} 
          onClick={() => (setOptionValue(value.id))} 
        >
          <Icon name={value.icon} ></Icon>
          {value.name}({formatPrice(value.price)}) 
        </div>
      );
    })
    }
  </div>
);

OrderOptionIcons.propTypes = {
  name: PropTypes.string,
  values: PropTypes.array,  
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;