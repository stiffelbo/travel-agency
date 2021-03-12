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
      let active = 'styles.icon';
      if(currentValue == value.id){
        active = 'styles.iconActive';
      }
      if(value.required){
        return (
          <div className={active}  onClick={() => (setOptionValue(''))} >
            <Icon name={'times-circle'}>none</Icon> 
          </div>
        );
      }
      return(
        <div key={value.id} className={active}  onClick={() => (setOptionValue(value.id))} >
          <Icon name={value.icon}></Icon>
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